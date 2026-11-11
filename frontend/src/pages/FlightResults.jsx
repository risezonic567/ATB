import React, { useEffect, useMemo, useState } from "react";
import { Helmet } from "react-helmet";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchFlights } from "../redux/FlightSlice";
import FlightCard from "../components/flights/FlightCard";
import Navbar from "../components/Navbar";

const TIME_SLOTS = [
  { label: "Morning", value: "morning" },
  { label: "Afternoon", value: "afternoon" },
  { label: "Evening", value: "evening" },
  { label: "Night", value: "night" },
];

const STOP_OPTIONS = [
  { label: "Non-stop", value: "non-stop" },
  { label: "1 stop", value: "1" },
  { label: "2+", value: "2+" },
];

const defaultFilters = {
  airlines: [],
  stops: [],
  time: [],
  cabin_class: [],
  layovers: [],
  refundableOnly: false,
  wifiOnly: false,
  sort: "",
  minPrice: 0,
  maxPrice: 100000,
};

function toggleInList(list, value, checked) {
  if (checked) return [...list, value];
  return list.filter((x) => x !== value);
}

export default function FlightResults() {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { offers, loading, error, pagination, lastSearch, filtersData } =
    useSelector((s) => s.flights);

  const [page, setPage] = useState(1);
  const [filters, setFilters] = useState(defaultFilters);
  const [showAllAirlines, setShowAllAirlines] = useState(false);

  const payload = useMemo(
    () =>
      location.state?.payload ||
      lastSearch ||
      (() => {
        try {
          return JSON.parse(localStorage.getItem("lastSearch") || "null");
        } catch {
          return null;
        }
      })(),
    [location.state, lastSearch]
  );

  useEffect(() => {
    if (!payload) return;
    try {
      localStorage.setItem("lastSearch", JSON.stringify(payload));
    } catch {
      /* ignore */
    }
  }, [payload]);

  useEffect(() => {
    if (!payload) return;
    dispatch(fetchFlights({ payload, page, limit: 20, filters }));
  }, [dispatch, payload, page, filters]);

  const airlines = filtersData?.airlines || [];
  const cabinClasses = filtersData?.cabinClasses || [];
  const visibleAirlines = showAllAirlines ? airlines : airlines.slice(0, 10);

  const sortedOffers = useMemo(() => {
    const list = [...(offers || [])];
    if (filters.sort === "cheap") {
      list.sort((a, b) => Number(a.total_amount) - Number(b.total_amount));
    } else if (filters.sort === "expensive") {
      list.sort((a, b) => Number(b.total_amount) - Number(a.total_amount));
    }
    return list;
  }, [offers, filters.sort]);

  if (!payload) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-3">
        <p>No search yet. Start from the home page.</p>
        <button
          onClick={() => navigate("/")}
          className="text-teal-700 underline font-semibold"
        >
          Go home
        </button>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>
          Flight Results {payload.from} → {payload.to} | Airlines Ticket Booking
        </title>
      </Helmet>
      <Navbar />
      <div className="min-h-screen bg-gray-100 pt-24 pb-10 px-4">
        <div className="max-w-6xl mx-auto mb-6">
          <nav className="text-sm text-gray-500 mb-2">
            <Link to="/" className="hover:text-teal-700">
              Home
            </Link>
            <span className="mx-2">/</span>
            <span>Results</span>
          </nav>
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
            {payload.from} → {payload.to}
          </h1>
          <p className="text-gray-500">
            {payload.departDate}
            {payload.returnDate ? ` · return ${payload.returnDate}` : ""} ·{" "}
            {payload.classe} · {payload.adult} adult
            {Number(payload.adult) > 1 ? "s" : ""}
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid lg:grid-cols-12 gap-6">
          <aside className="lg:col-span-3">
            <div className="bg-white rounded-2xl shadow-sm p-4 space-y-4 sticky top-24">
              <div className="flex justify-between items-center">
                <h2 className="font-bold">Filters</h2>
                <button
                  type="button"
                  className="text-sm text-teal-700"
                  onClick={() => {
                    setFilters(defaultFilters);
                    setPage(1);
                  }}
                >
                  Clear
                </button>
              </div>

              <div>
                <p className="text-sm font-semibold mb-2">Sort</p>
                <select
                  className="w-full border rounded-lg p-2 text-sm"
                  value={filters.sort}
                  onChange={(e) => {
                    setFilters((f) => ({ ...f, sort: e.target.value }));
                    setPage(1);
                  }}
                >
                  <option value="">Recommended</option>
                  <option value="cheap">Cheapest</option>
                  <option value="expensive">Most expensive</option>
                </select>
              </div>

              <div>
                <p className="text-sm font-semibold mb-2">Stops</p>
                {STOP_OPTIONS.map((opt) => (
                  <label key={opt.value} className="flex items-center gap-2 text-sm mb-1">
                    <input
                      type="checkbox"
                      checked={filters.stops.includes(opt.value)}
                      onChange={(e) => {
                        setFilters((f) => ({
                          ...f,
                          stops: toggleInList(f.stops, opt.value, e.target.checked),
                        }));
                        setPage(1);
                      }}
                    />
                    {opt.label}
                  </label>
                ))}
              </div>

              <div>
                <p className="text-sm font-semibold mb-2">Departure time</p>
                {TIME_SLOTS.map((opt) => (
                  <label key={opt.value} className="flex items-center gap-2 text-sm mb-1">
                    <input
                      type="checkbox"
                      checked={filters.time.includes(opt.value)}
                      onChange={(e) => {
                        setFilters((f) => ({
                          ...f,
                          time: toggleInList(f.time, opt.value, e.target.checked),
                        }));
                        setPage(1);
                      }}
                    />
                    {opt.label}
                  </label>
                ))}
              </div>

              {cabinClasses.length > 0 && (
                <div>
                  <p className="text-sm font-semibold mb-2">Cabin</p>
                  {cabinClasses.map((c) => (
                    <label key={c} className="flex items-center gap-2 text-sm mb-1">
                      <input
                        type="checkbox"
                        checked={filters.cabin_class.includes(c)}
                        onChange={(e) => {
                          setFilters((f) => ({
                            ...f,
                            cabin_class: toggleInList(
                              f.cabin_class,
                              c,
                              e.target.checked
                            ),
                          }));
                          setPage(1);
                        }}
                      />
                      {c}
                    </label>
                  ))}
                </div>
              )}

              {airlines.length > 0 && (
                <div>
                  <p className="text-sm font-semibold mb-2">Airlines</p>
                  {visibleAirlines.map((a) => (
                    <label key={a} className="flex items-center gap-2 text-sm mb-1">
                      <input
                        type="checkbox"
                        checked={filters.airlines.includes(a)}
                        onChange={(e) => {
                          setFilters((f) => ({
                            ...f,
                            airlines: toggleInList(f.airlines, a, e.target.checked),
                          }));
                          setPage(1);
                        }}
                      />
                      <span className="truncate">{a}</span>
                    </label>
                  ))}
                  {airlines.length > 10 && (
                    <button
                      type="button"
                      className="text-sm text-teal-700 mt-1"
                      onClick={() => setShowAllAirlines((v) => !v)}
                    >
                      {showAllAirlines ? "Show less" : "Show more"}
                    </button>
                  )}
                </div>
              )}

              <label className="flex items-center gap-2 text-sm">
                <input
                  type="checkbox"
                  checked={filters.refundableOnly}
                  onChange={(e) => {
                    setFilters((f) => ({
                      ...f,
                      refundableOnly: e.target.checked,
                    }));
                    setPage(1);
                  }}
                />
                Refundable only
              </label>
            </div>
          </aside>

          <main className="lg:col-span-9">
            {loading && (
              <p className="text-center text-gray-500 py-16">Loading flights…</p>
            )}
            {!loading && error && (
              <p className="text-center text-red-600 py-16">{String(error)}</p>
            )}
            {!loading && !error && sortedOffers.length === 0 && (
              <p className="text-center text-gray-500 py-16">
                No flights found for this search.
              </p>
            )}
            {!loading &&
              sortedOffers.map((offer) => (
                <FlightCard key={offer.id} item={offer} />
              ))}

            {pagination?.totalPages > 1 && (
              <div className="flex justify-center gap-3 mt-6">
                <button
                  type="button"
                  disabled={!pagination.hasPrevPage}
                  onClick={() => setPage((p) => Math.max(1, p - 1))}
                  className="px-4 py-2 rounded-lg border bg-white disabled:opacity-40"
                >
                  Prev
                </button>
                <span className="px-3 py-2 text-sm text-gray-600">
                  Page {pagination.currentPage} / {pagination.totalPages}
                </span>
                <button
                  type="button"
                  disabled={!pagination.hasNextPage}
                  onClick={() => setPage((p) => p + 1)}
                  className="px-4 py-2 rounded-lg border bg-white disabled:opacity-40"
                >
                  Next
                </button>
              </div>
            )}
          </main>
        </div>
      </div>
    </>
  );
}
