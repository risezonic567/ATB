import React, { useState, useEffect } from "react";
import { ArrowRight, Search } from "lucide-react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import airports from "../../data/airports.json";

export default function FlightForm() {
  const navigate = useNavigate();

  const [fromCity, setFromCity] = useState("");
  const [toCity, setToCity] = useState("");
  const [fromResults, setFromResults] = useState([]);
  const [toResults, setToResults] = useState([]);
  const [departDate, setDepartDate] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [infants, setInfants] = useState(0);
  const [loading, setLoading] = useState(false);

  // Disable scroll when loading
  useEffect(() => {
    document.body.style.overflow = loading ? "hidden" : "auto";
  }, [loading]);

  const generateSessionId = () => {
    return Date.now().toString() + Math.random().toString(36).substring(2);
  };

  // Airport search logic
  const searchAirport = (value, type) => {
    if (value.length < 2) {
      type === "from" ? setFromResults([]) : setToResults([]);
      return;
    }

    const filtered = airports.filter(
      (a) =>
        (a.municipality &&
          a.municipality.toLowerCase().includes(value.toLowerCase())) ||
        (a.name && a.name.toLowerCase().includes(value.toLowerCase())) ||
        (a.iata_code &&
          a.iata_code.toLowerCase().includes(value.toLowerCase()))
    );

    type === "from"
      ? setFromResults(filtered.slice(0, 6))
      : setToResults(filtered.slice(0, 6));
  };

  const handleSearch = async (e) => {
    e.preventDefault();

    if (!fromCity || !toCity || !departDate || !returnDate) {
      alert("Please fill all fields");
      return;
    }

    const requestData = {
      SessionID: generateSessionId(),
      from: fromCity,
      to: toCity,
      departDate,
      returnDate,
      adults,
      children,
      infants,
      CabinClass: "Y",
      JourneyType: "R",
      IsFlexible: "false",
      Airlines: "",
      Currency: "USD",
      IsLowest: "false",
      Company: "API200252",
    };

    try {
      setLoading(true);

      const response = await axios.post(
        "http://localhost:3000/api/search-flights",
        requestData
      );
      console.log("totalflights",response.data)
      navigate("/flights", {
        state: {
          searchData: requestData,
          flights: response.data,
        },
      });
    } catch (err) {
      alert("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* FULL SCREEN LOADER */}
      {loading && (
        <div className="fixed inset-0 bg-white/80 backdrop-blur-md z-50 flex flex-col items-center justify-center">
          <div className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
          <p className="mt-6 text-lg font-semibold text-gray-700 animate-pulse">
            Searching best flights for you...
          </p>
          
        </div>
      )}

      <div className="py-10 px-4">
        <form
          onSubmit={handleSearch}
          className="bg-white/50 rounded-3xl shadow-2xl p-6 md:p-10 max-w-5xl mx-auto"
        >
          <div className="space-y-6">

            {/* FROM / TO */}
            <div className="grid md:grid-cols-2 gap-4">
              {/* FROM */}
              <div className="relative">
                <input
                  placeholder="From "
                  value={fromCity}
                  onChange={(e) => {
                    setFromCity(e.target.value);
                    searchAirport(e.target.value, "from");
                  }}
                  className="p-3 border rounded-xl w-full"
                />

                {fromResults.length > 0 && (
                  <div className="absolute bg-white border w-full z-10 rounded-xl max-h-48 overflow-y-auto">
                    {fromResults.map((a, i) => (
                      <div
                        key={i}
                        className="p-2 hover:bg-gray-100 cursor-pointer"
                        onClick={() => {
                          setFromCity(a.iata_code);
                          setFromResults([]);
                        }}
                      >
                        <strong>{a.iata_code}</strong> - {a.name},{" "}
                        {a.municipality}
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* TO */}
              <div className="relative">
                <input
                  placeholder="To"
                  value={toCity}
                  onChange={(e) => {
                    setToCity(e.target.value);
                    searchAirport(e.target.value, "to");
                  }}
                  className="p-3 border rounded-xl w-full"
                />

                {toResults.length > 0 && (
                  <div className="absolute bg-white border w-full z-10 rounded-xl max-h-48 overflow-y-auto">
                    {toResults.map((a, i) => (
                      <div
                        key={i}
                        className="p-2 hover:bg-gray-100 cursor-pointer"
                        onClick={() => {
                          setToCity(a.iata_code);
                          setToResults([]);
                        }}
                      >
                        <strong>{a.iata_code}</strong> - {a.name},{" "}
                        {a.municipality}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* DATES */}
            <div className="grid md:grid-cols-2 gap-4">
              <input
                type="date"
                value={departDate}
                onChange={(e) => setDepartDate(e.target.value)}
                className="p-3 border rounded-xl"
              />
              <input
                type="date"
                value={returnDate}
                onChange={(e) => setReturnDate(e.target.value)}
                className="p-3 border rounded-xl"
              />
            </div>

            {/* PASSENGERS */}
            <div className="grid md:grid-cols-3 gap-4">
              <input
                type="number"
                min="1"
                value={adults}
                onChange={(e) => setAdults(+e.target.value)}
                className="p-3 border rounded-xl"
                placeholder="Adults (12+)"
              />
              <input
                type="number"
                min="0"
                value={children}
                onChange={(e) => setChildren(+e.target.value)}
                className="p-3 border rounded-xl"
                placeholder="Children (2–11)"
              />
              <input
                type="number"
                min="0"
                value={infants}
                onChange={(e) => setInfants(+e.target.value)}
                className="p-3 border rounded-xl"
                placeholder="Infants (0–2)"
              />
            </div>

            {/* BUTTON */}
            <button className="w-full bg-[#1A2E48] text-white py-4 rounded-xl flex justify-center items-center gap-2">
              <Search /> Search Flights <ArrowRight />
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
