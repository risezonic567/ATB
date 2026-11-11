import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { fetchFlights, setLastSearch } from "../redux/FlightSlice";
import { apiUrl } from "../config/api";

export default function Form() {
  const [tripType, setTripType] = useState("oneway");
  const [fromQuery, setFromQuery] = useState("");
  const [toQuery, setToQuery] = useState("");
  const [fromCode, setFromCode] = useState("");
  const [toCode, setToCode] = useState("");
  const [fromAirports, setFromAirports] = useState([]);
  const [toAirports, setToAirports] = useState([]);
  const [showFrom, setShowFrom] = useState(false);
  const [showTo, setShowTo] = useState(false);
  const [departDate, setDepartDate] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const [adults, setAdults] = useState(1);
  const [cabin, setCabin] = useState("economy");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const fromRef = useRef(null);
  const toRef = useRef(null);
  const fromDebounce = useRef(null);
  const toDebounce = useRef(null);

  useEffect(() => {
    const onDoc = (e) => {
      if (fromRef.current && !fromRef.current.contains(e.target)) setShowFrom(false);
      if (toRef.current && !toRef.current.contains(e.target)) setShowTo(false);
    };
    document.addEventListener("mousedown", onDoc);
    return () => document.removeEventListener("mousedown", onDoc);
  }, []);

  const fetchAirports = async (value, setter, showSetter) => {
    if (!value || value.trim().length < 2) {
      setter([]);
      showSetter(false);
      return;
    }
    try {
      const resp = await fetch(
        `${apiUrl("/api/flight/location")}?query=${encodeURIComponent(value.trim())}`
      );
      const data = await resp.json();
      const raw = data?.data?.data ?? data?.data?.suggestions ?? [];
      const suggestions = Array.isArray(raw) ? raw : raw?.suggestions || [];
      setter(suggestions);
      showSetter(suggestions.length > 0);
    } catch {
      setter([]);
    }
  };

  const onFromChange = (value) => {
    setFromQuery(value);
    setFromCode("");
    clearTimeout(fromDebounce.current);
    fromDebounce.current = setTimeout(
      () => fetchAirports(value, setFromAirports, setShowFrom),
      300
    );
  };

  const onToChange = (value) => {
    setToQuery(value);
    setToCode("");
    clearTimeout(toDebounce.current);
    toDebounce.current = setTimeout(
      () => fetchAirports(value, setToAirports, setShowTo),
      300
    );
  };

  const pickSuggestion = (item, which) => {
    const code =
      item?.iata_code ||
      item?.airports?.[0]?.iata_code ||
      item?.city?.iata_code ||
      "";
    if (!code) return;
    if (which === "from") {
      setFromQuery(code);
      setFromCode(code);
      setShowFrom(false);
      setFromAirports([]);
    } else {
      setToQuery(code);
      setToCode(code);
      setShowTo(false);
      setToAirports([]);
    }
  };

  const suggestionLabel = (item) => {
    const code =
      item?.iata_code ||
      item?.airports?.[0]?.iata_code ||
      item?.city?.iata_code ||
      "";
    const name = item?.name || item?.city_name || item?.city?.name || "";
    return { code, name };
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    setError("");

    if (!fromCode || !toCode) {
      setError("Please select airports from the suggestions.");
      return;
    }
    if (!departDate) {
      setError("Please choose a departure date.");
      return;
    }
    if (tripType === "round" && !returnDate) {
      setError("Please choose a return date.");
      return;
    }

    const payload = {
      from: fromCode,
      to: toCode,
      departDate,
      returnDate: tripType === "round" ? returnDate : "",
      classe: cabin,
      adult: Number(adults) || 1,
      children: 0,
      infant: 0,
      tripType: tripType === "round" ? "roundtrip" : "oneway",
    };

    setLoading(true);
    dispatch(setLastSearch(payload));
    try {
      localStorage.setItem("lastSearch", JSON.stringify(payload));
      const result = await dispatch(fetchFlights({ payload, page: 1, limit: 20 }));
      if (fetchFlights.rejected.match(result)) {
        setError(result.payload || "Search failed");
        return;
      }
      navigate("/flight-results", { state: { payload } });
    } catch (err) {
      setError(err.message || "Search failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="py-6 px-2 sm:px-4">
      <form
        onSubmit={handleSearch}
        className="bg-white/90 rounded-3xl shadow-2xl p-5 md:p-8 max-w-4xl mx-auto space-y-5"
      >
        <div className="flex gap-2 flex-wrap">
          <button
            type="button"
            onClick={() => setTripType("oneway")}
            className={`px-4 py-2 rounded-full text-sm font-semibold ${
              tripType === "oneway"
                ? "bg-teal-700 text-white"
                : "bg-gray-100 text-gray-700"
            }`}
          >
            One way
          </button>
          <button
            type="button"
            onClick={() => setTripType("round")}
            className={`px-4 py-2 rounded-full text-sm font-semibold ${
              tripType === "round"
                ? "bg-teal-700 text-white"
                : "bg-gray-100 text-gray-700"
            }`}
          >
            Round trip
          </button>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div className="relative" ref={fromRef}>
            <input
              type="text"
              placeholder="From (e.g. DEL)"
              value={fromQuery}
              onChange={(e) => onFromChange(e.target.value)}
              className="p-3 border rounded-xl w-full focus:ring-2 focus:ring-teal-600 outline-none"
              autoComplete="off"
            />
            {showFrom && fromAirports.length > 0 && (
              <ul className="absolute left-0 right-0 bg-white border border-gray-200 mt-1 rounded-xl shadow-2xl z-[999] max-h-60 overflow-y-auto">
                {fromAirports.map((place, idx) => {
                  const { code, name } = suggestionLabel(place);
                  return (
                    <li
                      key={place.id || `${code}-${idx}`}
                      className="p-3 hover:bg-teal-50 cursor-pointer border-b last:border-0"
                      onClick={() => pickSuggestion(place, "from")}
                    >
                      <span className="font-bold text-teal-700 mr-2">{code}</span>
                      <span className="text-gray-800 text-sm">{name}</span>
                    </li>
                  );
                })}
              </ul>
            )}
          </div>

          <div className="relative" ref={toRef}>
            <input
              type="text"
              placeholder="To (e.g. JFK)"
              value={toQuery}
              onChange={(e) => onToChange(e.target.value)}
              className="p-3 border rounded-xl w-full focus:ring-2 focus:ring-teal-600 outline-none"
              autoComplete="off"
            />
            {showTo && toAirports.length > 0 && (
              <ul className="absolute left-0 right-0 bg-white border border-gray-200 mt-1 rounded-xl shadow-2xl z-[999] max-h-60 overflow-y-auto">
                {toAirports.map((place, idx) => {
                  const { code, name } = suggestionLabel(place);
                  return (
                    <li
                      key={place.id || `${code}-${idx}`}
                      className="p-3 hover:bg-teal-50 cursor-pointer border-b last:border-0"
                      onClick={() => pickSuggestion(place, "to")}
                    >
                      <span className="font-bold text-teal-700 mr-2">{code}</span>
                      <span className="text-gray-800 text-sm">{name}</span>
                    </li>
                  );
                })}
              </ul>
            )}
          </div>
        </div>

        <div className="grid md:grid-cols-4 gap-4">
          <input
            type="date"
            required
            value={departDate}
            onChange={(e) => setDepartDate(e.target.value)}
            className="p-3 border rounded-xl"
          />
          <input
            type="date"
            value={returnDate}
            disabled={tripType !== "round"}
            onChange={(e) => setReturnDate(e.target.value)}
            className="p-3 border rounded-xl disabled:bg-gray-100"
          />
          <select
            value={cabin}
            onChange={(e) => setCabin(e.target.value)}
            className="p-3 border rounded-xl"
          >
            <option value="economy">Economy</option>
            <option value="premium_economy">Premium Economy</option>
            <option value="business">Business</option>
            <option value="first">First</option>
          </select>
          <input
            type="number"
            min="1"
            max="9"
            value={adults}
            onChange={(e) => setAdults(e.target.value)}
            className="p-3 border rounded-xl"
            aria-label="Adults"
          />
        </div>

        {error && (
          <p className="text-red-600 text-sm font-medium">{error}</p>
        )}

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-teal-700 hover:bg-teal-800 disabled:opacity-60 text-white py-4 rounded-xl font-bold"
        >
          {loading ? "Searching..." : "SEARCH FLIGHTS"}
        </button>
      </form>
    </div>
  );
}
