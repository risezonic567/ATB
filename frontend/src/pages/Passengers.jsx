import React, { useEffect, useMemo, useState } from "react";
import { Helmet } from "react-helmet";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { flightOffer } from "../redux/FlightOffers";
import { apiUrl } from "../config/api";
import Navbar from "../components/Navbar";

const emptyPassenger = (type = "adult", id = "") => ({
  id,
  type,
  firstName: "",
  middleName: "",
  lastName: "",
  gender: "",
  dob: "",
  phone: "",
  email: "",
  nationality: "US",
  passportNumber: "",
  passportExpiry: "",
  passportCountry: "US",
});

export default function Passengers() {
  const { offerId } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { items: offerFromStore, loading, error } = useSelector((s) => s.offer);
  const lastSearch = useSelector((s) => s.flights.lastSearch);

  const [formData, setFormData] = useState([]);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    if (offerId) dispatch(flightOffer(offerId));
  }, [dispatch, offerId]);

  const offer = useMemo(() => {
    if (offerFromStore) return offerFromStore;
    try {
      return JSON.parse(localStorage.getItem("selectedOffer") || "null");
    } catch {
      return null;
    }
  }, [offerFromStore]);

  const isInternational = useMemo(() => {
    const origin = offer?.slices?.[0]?.origin;
    const destination = offer?.slices?.[0]?.destination;
    const originCountry = origin?.iata_country_code || origin?.country_code;
    const destinationCountry =
      destination?.iata_country_code || destination?.country_code;
    if (!originCountry || !destinationCountry) return true;
    return originCountry !== destinationCountry;
  }, [offer]);

  useEffect(() => {
    if (!offer) return;
    const fromOffer = offer.passengers || [];
    if (fromOffer.length) {
      setFormData(
        fromOffer.map((p) => emptyPassenger(p.type || "adult", p.id || ""))
      );
      return;
    }
    const adults = Number(lastSearch?.adult || 1);
    const children = Number(lastSearch?.children || 0);
    const rows = [];
    for (let i = 0; i < adults; i++) rows.push(emptyPassenger("adult", `adult-${i}`));
    for (let i = 0; i < children; i++) rows.push(emptyPassenger("child", `child-${i}`));
    setFormData(rows.length ? rows : [emptyPassenger("adult", "adult-0")]);
  }, [offer, lastSearch]);

  const summary = useMemo(() => {
    if (!offer) return null;
    const slices = offer.slices || [];
    const slice0 = slices[0];
    const slice1 = slices[1];
    const route = [slice0?.origin?.iata_code, slice0?.destination?.iata_code]
      .filter(Boolean)
      .join(" → ");
    const returnRoute = slice1
      ? [slice1?.origin?.iata_code, slice1?.destination?.iata_code]
          .filter(Boolean)
          .join(" → ")
      : "";
    return {
      airline: offer?.owner?.name || "",
      route: returnRoute ? `${route} / ${returnRoute}` : route,
      departDate: slice0?.segments?.[0]?.departing_at?.slice(0, 10) || "",
      returnDate: slice1?.segments?.[0]?.departing_at?.slice(0, 10) || "",
      cabin:
        slice0?.segments?.[0]?.passengers?.[0]?.cabin_class_marketing_name ||
        slice0?.segments?.[0]?.passengers?.[0]?.cabin_class ||
        "economy",
      price: String(offer?.total_amount || ""),
      currency: offer?.total_currency || "USD",
    };
  }, [offer]);

  const handleChange = (index, field, value) => {
    setFormData((prev) => {
      const next = [...prev];
      next[index] = { ...next[index], [field]: value };
      return next;
    });
  };

  const validate = () => {
    for (const p of formData) {
      if (!p.firstName?.trim() || !p.lastName?.trim()) {
        return "Please enter first and last name for every traveller.";
      }
      if (!p.gender) return "Please select gender for every traveller.";
      if (!p.dob) return "Please enter date of birth for every traveller.";
      if (!p.phone?.trim() || p.phone.trim().length < 7) {
        return "Please enter a valid phone number for every traveller.";
      }
      if (!p.email?.trim() || !p.email.includes("@")) {
        return "Please enter a valid email for every traveller.";
      }
      if (isInternational) {
        if (!p.passportNumber?.trim()) {
          return "Passport number is required for international travel.";
        }
        if (!p.passportExpiry) {
          return "Passport expiry is required for international travel.";
        }
      }
    }
    return "";
  };

  const handleBooking = async (e) => {
    e.preventDefault();
    if (!offer || !summary) return;
    const err = validate();
    if (err) {
      setSubmitError(err);
      return;
    }

    const primary = formData[0];
    setSubmitting(true);
    setSubmitError("");
    try {
      const resp = await fetch(apiUrl("/enquiry/quote"), {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: `${primary.firstName} ${primary.lastName}`.trim(),
          email: primary.email.trim(),
          phone: primary.phone.trim(),
          message: "Booking request from passenger details form",
          offerId: offer.id || offerId,
          airline: summary.airline,
          route: summary.route,
          departDate: summary.departDate,
          returnDate: summary.returnDate,
          cabin: summary.cabin,
          price: summary.price,
          currency: summary.currency,
          passengers: formData.map((p) => ({
            type: p.type,
            firstName: p.firstName,
            middleName: p.middleName,
            lastName: p.lastName,
            gender: p.gender,
            dob: p.dob,
            phone: p.phone,
            email: p.email,
            nationality: p.nationality,
            passportNumber: p.passportNumber,
            passportExpiry: p.passportExpiry,
            passportCountry: p.passportCountry,
          })),
          offerSnapshot: {
            id: offer.id,
            total_amount: offer.total_amount,
            total_currency: offer.total_currency,
            owner: offer.owner,
            slices: offer.slices?.map((s) => ({
              origin: s?.origin?.iata_code,
              destination: s?.destination?.iata_code,
              duration: s?.duration,
            })),
          },
        }),
      });
      const data = await resp.json();
      if (!resp.ok || data.success === false) {
        throw new Error(data.message || "Booking request failed");
      }
      setShowSuccess(true);
    } catch (err2) {
      setSubmitError(err2.message || "Booking request failed");
    } finally {
      setSubmitting(false);
    }
  };

  const fieldClass =
    "w-full border rounded-xl p-3 text-sm focus:ring-2 focus:ring-teal-600 outline-none";

  return (
    <>
      <Helmet>
        <title>Passenger Details | Airlines Ticket Booking</title>
      </Helmet>
      <Navbar />
      <div className="min-h-screen bg-gray-100 pt-24 pb-12 px-4">
        <div className="max-w-5xl mx-auto">
          <nav className="text-sm text-gray-500 mb-4">
            <Link to="/" className="hover:text-teal-700">
              Home
            </Link>
            <span className="mx-2">/</span>
            <Link to="/flight-results" className="hover:text-teal-700">
              Results
            </Link>
            <span className="mx-2">/</span>
            <span>Passengers</span>
          </nav>

          <h1 className="text-2xl font-bold mb-6 text-gray-800">
            Traveller details
          </h1>

          {loading && !offer && (
            <p className="text-center text-gray-500 py-16">Loading offer…</p>
          )}
          {error && !offer && (
            <p className="text-center text-red-600 py-16">{String(error)}</p>
          )}

          {offer && summary && (
            <div className="grid lg:grid-cols-12 gap-6">
              <div className="lg:col-span-4">
                <div className="bg-white rounded-2xl shadow-sm p-5 sticky top-24">
                  <p className="text-sm text-gray-500">Selected fare</p>
                  <p className="font-bold text-lg mt-1">{summary.airline}</p>
                  <p className="text-teal-700 font-semibold mt-2">{summary.route}</p>
                  <p className="text-sm text-gray-500 mt-2">
                    Depart {summary.departDate}
                    {summary.returnDate ? ` · Return ${summary.returnDate}` : ""}
                  </p>
                  <p className="text-sm mt-1">{summary.cabin}</p>
                  <p className="text-2xl font-bold text-teal-700 mt-4">
                    {summary.currency} {summary.price}
                  </p>
                  <button
                    type="button"
                    onClick={() => navigate("/flight-results")}
                    className="mt-4 text-sm text-teal-700 underline"
                  >
                    Change flight
                  </button>
                </div>
              </div>

              <div className="lg:col-span-8">
                {showSuccess ? (
                  <div className="bg-white rounded-2xl shadow-sm p-8 text-center">
                    <h2 className="text-xl font-bold mb-2">Request submitted</h2>
                    <p className="text-gray-600 mb-6">
                      Our team will review this fare and contact you shortly.
                    </p>
                    <Link
                      to="/"
                      className="inline-block bg-teal-700 text-white px-6 py-3 rounded-xl font-semibold"
                    >
                      Back to home
                    </Link>
                  </div>
                ) : (
                  <form
                    onSubmit={handleBooking}
                    className="bg-white rounded-2xl shadow-sm p-5 md:p-8 space-y-8"
                  >
                    {formData.map((p, index) => (
                      <div key={p.id || index} className="space-y-3 border-b last:border-0 pb-6">
                        <h3 className="font-semibold capitalize">
                          Traveller {index + 1} ({p.type})
                        </h3>
                        <div className="grid md:grid-cols-3 gap-3">
                          <input
                            className={fieldClass}
                            placeholder="First name"
                            value={p.firstName}
                            onChange={(e) =>
                              handleChange(index, "firstName", e.target.value)
                            }
                          />
                          <input
                            className={fieldClass}
                            placeholder="Middle name"
                            value={p.middleName}
                            onChange={(e) =>
                              handleChange(index, "middleName", e.target.value)
                            }
                          />
                          <input
                            className={fieldClass}
                            placeholder="Last name"
                            value={p.lastName}
                            onChange={(e) =>
                              handleChange(index, "lastName", e.target.value)
                            }
                          />
                        </div>
                        <div className="grid md:grid-cols-3 gap-3">
                          <select
                            className={fieldClass}
                            value={p.gender}
                            onChange={(e) =>
                              handleChange(index, "gender", e.target.value)
                            }
                          >
                            <option value="">Gender</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                          </select>
                          <input
                            type="date"
                            className={fieldClass}
                            value={p.dob}
                            onChange={(e) =>
                              handleChange(index, "dob", e.target.value)
                            }
                          />
                          <input
                            className={fieldClass}
                            placeholder="Phone"
                            value={p.phone}
                            onChange={(e) =>
                              handleChange(index, "phone", e.target.value)
                            }
                          />
                        </div>
                        <input
                          className={fieldClass}
                          placeholder="Email"
                          value={p.email}
                          onChange={(e) =>
                            handleChange(index, "email", e.target.value)
                          }
                        />
                        {isInternational && (
                          <div className="grid md:grid-cols-3 gap-3">
                            <input
                              className={fieldClass}
                              placeholder="Passport number"
                              value={p.passportNumber}
                              onChange={(e) =>
                                handleChange(
                                  index,
                                  "passportNumber",
                                  e.target.value
                                )
                              }
                            />
                            <input
                              type="date"
                              className={fieldClass}
                              value={p.passportExpiry}
                              onChange={(e) =>
                                handleChange(
                                  index,
                                  "passportExpiry",
                                  e.target.value
                                )
                              }
                            />
                            <input
                              className={fieldClass}
                              placeholder="Passport country"
                              value={p.passportCountry}
                              onChange={(e) =>
                                handleChange(
                                  index,
                                  "passportCountry",
                                  e.target.value
                                )
                              }
                            />
                          </div>
                        )}
                      </div>
                    ))}

                    {submitError && (
                      <p className="text-red-600 text-sm">{submitError}</p>
                    )}

                    <button
                      type="submit"
                      disabled={submitting}
                      className="w-full bg-teal-700 hover:bg-teal-800 disabled:opacity-60 text-white py-3 rounded-xl font-bold"
                    >
                      {submitting ? "Submitting..." : "Continue Booking"}
                    </button>
                  </form>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
