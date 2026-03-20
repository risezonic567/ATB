import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Header from "../flightsList/Header";
import PassengerInfo from "../flightsList/PassengerInfo";

export default function AllFlights() {
  const { state } = useLocation();
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const flights = state?.flights;
  
  const flightList = flights?.GetItineraries || [];


  const flightsPerPage = 8;
  const totalPages = Math.ceil(flightList.length / flightsPerPage);
  const startIndex = (currentPage - 1) * flightsPerPage;
  const currentFlights = flightList.slice(startIndex, startIndex + flightsPerPage);

  const formatTime = (dateTime) => {
    if (!dateTime) return "--:--";
    const d = new Date(dateTime);
    return d.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", hour12: false });
  };

  const getPaginationGroup = () => {
    let limit = isMobile ? 3 : 10;
    let start = Math.floor((currentPage - 1) / limit) * limit;
    return new Array(Math.min(limit, totalPages - start)).fill().map((_, idx) => start + idx + 1);
  };

  return (
    <div className="bg-gray-100 min-h-screen pb-10">
      <Header />
      <PassengerInfo />

      <div className="max-w-5xl mx-auto mt-6">
        
        
        {(!state || flightList.length === 0) ? (
          <div className="text-center p-16 bg-white rounded-2xl shadow-sm border border-gray-200">
            
            <h2 className="text-xl font-black text-gray-800">No Flights Found</h2>
            <p className="text-gray-500 mt-2">Sorry, we couldn't find any flights for this route or date.</p>
            <button 
              onClick={() => navigate("/")} 
              className="mt-6 px-8 py-3 bg-blue-600 text-white rounded-xl font-bold shadow-lg shadow-blue-100 hover:bg-blue-700 transition"
            >
              Search Again
            </button>
          </div>
        ) : (
          <>
            {currentFlights.map((f, i) => {
              const outSector = f.OutBound?.Sector || [];
              const inSector = f.InBound?.Sector || [];
              
              
              
              const FlightRow = ({ sector, info, label }) => {
                const first = sector[0];
                const last = sector[sector.length - 1];
                return (
                  <div className="flex items-center justify-between gap-2 py-10 border-gray-100 last:border-0">
                    {/* Airline Logo */}
                    <div className="flex items-center gap-3 w-1/4">
                      <img 
                        src={`https://content.airhex.com/content/logos/airlines_${f.Carrier}_200_200_s.png`} 
                        className="h-10 w-10 object-contain" 
                        alt="airline" 
                      />
                      <div className="hidden md:block">
                        <p className="text-xs font-black uppercase text-gray-800 leading-tight">{f.Carrier}</p>
                        <p className="text-[10px] text-blue-500 font-bold tracking-tighter">{label}</p>
                      </div>
                    </div>

                    {/* Departure */}
                    <div className="text-center">
                      <p className="text-lg md:text-xl font-black text-gray-900">{formatTime(first?.DepDateTime)}</p>
                      <p className="text-[10px] md:text-xs font-black text-gray-500 bg-gray-100 px-2 py-0.5 rounded uppercase">{first?.DepAirportCode}</p>
                    </div>

                    {/* Path Line */}
                    <div className="flex-1 flex flex-col items-center px-4">
                      <span className="text-[10px] font-black text-gray-400 mb-1">{info.TotalTime}</span>
                      <div className="w-full h-[2px] bg-gray-200 relative">
                        <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-white border-2 border-blue-600 shadow-sm"></div>
                      </div>
                      <span className={`text-[9px] mt-1 font-black tracking-widest ${info.Stops === 0 ? 'text-green-600' : 'text-orange-600'}`}>
                        {info.Stops === 0 ? "NON-STOP" : `${info.Stops} STOP(S)`}
                      </span>
                    </div>

                    {/* Arrival */}
                    <div className="text-center">
                      <p className="text-lg md:text-xl font-black text-gray-900">{formatTime(last?.ArrDateTime)}</p>
                      <p className="text-[10px] md:text-xs font-black text-gray-500 bg-gray-100 px-2 py-0.5 rounded uppercase">{last?.ArrAirportCode}</p>
                    </div>
                  </div>
                );
              };

              return (
                <div key={i} className="bg-white rounded-2xl mb-5 shadow-sm border border-gray-200 flex flex-col md:flex-row overflow-hidden transition-all hover:shadow-md">
                  <div className="flex-1 px-6 py-2">
                    <FlightRow sector={outSector} info={f.OutBound} label="OUTBOUND" />
                    <FlightRow sector={inSector} info={f.InBound} label="INBOUND" />
                  </div>

                  <div className="bg-blue-50/50 border-t md:border-t-0 md:border-l border-gray-100 p-6 flex md:flex-col justify-between md:justify-center items-center md:w-52">
                    <div className="text-left md:text-center">
                      <p className="text-[10px] text-gray-400 uppercase font-black tracking-widest">Total Fare</p>
                      <p className="text-2xl font-black text-blue-700">
                         <span className="text-sm font-bold mr-1">USD</span>{f.TotalPrice}
                      </p>
                    </div>
                    <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 md:w-full md:mt-4 rounded-xl text-sm font-black shadow-lg shadow-orange-100 active:scale-95 transition-all uppercase">
                      Select
                    </button>
                  </div>
                </div>
              );
            })}

            {/* PAGINATION */}
            {totalPages > 1 && (
              <div className="flex justify-center items-center gap-2 mt-10">
                <button
                  onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                  disabled={currentPage === 1}
                  className="w-10 h-10 bg-white rounded-xl border flex items-center justify-center disabled:opacity-30 font-bold shadow-sm"
                >
                  prev
                </button>

                {getPaginationGroup().map((item) => (
                  <button
                    key={item}
                    onClick={() => setCurrentPage(item)}
                    className={`w-10 h-10 rounded-xl border font-black transition-all ${
                      currentPage === item 
                        ? "bg-blue-600 text-white border-blue-600 shadow-lg shadow-blue-200" 
                        : "bg-white text-gray-500 hover:bg-gray-50 border-gray-200"
                    }`}
                  >
                    {item}
                  </button>
                ))}

                <button
                  onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                  disabled={currentPage === totalPages}
                  className="w-10 h-10 bg-white rounded-xl border flex items-center justify-center disabled:opacity-30 font-bold shadow-sm"
                >
                  next
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}