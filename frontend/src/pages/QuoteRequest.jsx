import React, { useEffect, useMemo, useState } from "react";
import { Helmet } from "react-helmet";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { flightOffer } from "../redux/FlightOffers";
import { apiUrl } from "../config/api";
import Navbar from "../components/Navbar";

export default function QuoteRequest() {
  const { offerId } = useParams();
  const dispatch = useDispatch();
  const { items: offer, loading, error } = useSelector((s) => s.offer);

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (offerId) dispatch(flightOffer(offerId));
  }, [dispatch, offerId]);

  const summary = useMemo(() => {
    const source =
      offer ||
      (() => {
        try {
          return JSON.parse(localStorage.getItem("selectedOffer") || "null");
        } catch {
          return null;
        }
      })();
    if (!source) return null;

    const slice0 = source?.slices?.[0];
    const slice1 = source?.slices?.[1];
    const route = [slice0?.origin?.iata_code, slice0?.destination?.iata_code]
      .filter(Boolean)
      .join(" → ");
    const returnRoute = slice1
      ? [slice1?.origin?.iata_code, slice1?.destination?.iata_code]
          .filter(Boolean)
          .join(" → ")
      : "";

    return {
      source,
      airline: source?.owner?.name || "",
      route: returnRoute ? `${route} / ${returnRoute}` : route,
      departDate: slice0?.segments?.[0]?.departing_at?.slice(0, 10) || "",
      returnDate: slice1?.segments?.[0]?.departing_at?.slice(0, 10) || "",
      cabin:
        slice0?.segments?.[0]?.passengers?.[0]?.cabin_class_marketing_name ||
        slice0?.segments?.[0]?.passengers?.[0]?.cabin_class ||
        "economy",
      price: source?.total_amount || "",
      currency: source?.total_currency || "USD",
    };
  }, [offer]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!summary) return;
    setSubmitting(true);
    setSubmitError("");
    try {
      const resp = await fetch(apiUrl("/enquiry/quote"), {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          offerId,
          airline: summary.airline,
          route: summary.route,
          departDate: summary.departDate,
          returnDate: summary.returnDate,
          cabin: summary.cabin,
          price: String(summary.price),
          currency: summary.currency,
          offerSnapshot: {
            id: summary.source?.id,
            total_amount: summary.source?.total_amount,
            total_currency: summary.source?.total_currency,
            owner: summary.source?.owner,
            slices: summary.source?.slices?.map((s) => ({
              origin: s?.origin?.iata_code,
              destination: s?.destination?.iata_code,
              duration: s?.duration,
            })),
          },
        }),
      });
      const data = await resp.json();
      if (!resp.ok) throw new Error(data?.message || "Quote submit failed");
      setDone(true);
    } catch (err) {
      setSubmitError(err.message || "Failed to submit quote");
    } finally {
      setSubmitting(false);
    }
  };

  const fieldClass =
    "w-full border rounded-xl p-3 text-sm focus:ring-2 focus:ring-teal-600 outline-none";

  return (
    <>
      <Helmet>
        <title>Request a Quote | Airlines Ticket Booking</title>
      </Helmet>
      <Navbar />
      <div className="min-h-screen bg-gray-100 pt-24 pb-12 px-4">
        <div className="max-w-3xl mx-auto">
          <nav className="text-sm text-gray-500 mb-4">
            <Link to="/" className="hover:text-teal-700">
              Home
            </Link>
            <span className="mx-2">/</span>
            <Link to="/flight-results" className="hover:text-teal-700">
              Results
            </Link>
            <span className="mx-2">/</span>
            <span>Quote</span>
          </nav>

          <h1 className="text-2xl font-bold mb-6">Request a quote for this fare</h1>

          {loading && !summary && (
            <p className="text-center text-gray-500 py-16">Loading…</p>
          )}
          {error && !summary && (
            <p className="text-center text-red-600 py-16">{String(error)}</p>
          )}

          {summary && (
            <div className="bg-white rounded-2xl shadow-sm p-6 mb-6">
              <p className="font-semibold">{summary.airline}</p>
              <p className="text-teal-700">{summary.route}</p>
              <p className="text-sm text-gray-500 mt-1">
                {summary.departDate}
                {summary.returnDate ? ` · ${summary.returnDate}` : ""} ·{" "}
                {summary.cabin}
              </p>
              <p className="text-xl font-bold mt-3">
                {summary.currency} {summary.price}
              </p>
            </div>
          )}

          {done ? (
            <div className="bg-white rounded-2xl shadow-sm p-8 text-center">
              <h2 className="text-xl font-bold mb-2">Quote request sent</h2>
              <p className="text-gray-600 mb-4">
                We will get back to you with options shortly.
              </p>
              <Link to="/" className="text-teal-700 font-semibold underline">
                Back to home
              </Link>
            </div>
          ) : (
            summary && (
              <form
                onSubmit={handleSubmit}
                className="bg-white rounded-2xl shadow-sm p-6 space-y-4"
              >
                <input
                  className={fieldClass}
                  name="name"
                  required
                  placeholder="Full name"
                  value={form.name}
                  onChange={handleChange}
                />
                <input
                  className={fieldClass}
                  name="email"
                  type="email"
                  required
                  placeholder="Email"
                  value={form.email}
                  onChange={handleChange}
                />
                <input
                  className={fieldClass}
                  name="phone"
                  required
                  placeholder="Phone"
                  value={form.phone}
                  onChange={handleChange}
                />
                <textarea
                  className={fieldClass}
                  name="message"
                  rows={4}
                  placeholder="Message (optional)"
                  value={form.message}
                  onChange={handleChange}
                />
                {submitError && (
                  <p className="text-red-600 text-sm">{submitError}</p>
                )}
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full bg-teal-700 hover:bg-teal-800 disabled:opacity-60 text-white py-3 rounded-xl font-bold"
                >
                  {submitting ? "Sending..." : "Send quote request"}
                </button>
              </form>
            )
          )}
        </div>
      </div>
    </>
  );
}
