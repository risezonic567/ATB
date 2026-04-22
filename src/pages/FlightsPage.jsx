import React from 'react'
import { useLocation } from 'react-router-dom'
import AllFlights from '../data/flights.json';
import Navbar from '../components/Navbar';

function FlightsPage() {
    const location = useLocation();
    console.log("location", location.state);

    const { source = "", destination="" } = location.state || {};

    console.log("ALL ROUTES:");
AllFlights.forEach(f => {
  console.log(`${f.source} -> ${f.destination}`);
});

console.log("TOTAL:", AllFlights.length);


    const filteredFlights = AllFlights.filter((flight) => {
  return (
    (flight.source.trim().toUpperCase() === source &&
      flight.destination.trim().toUpperCase() === destination) ||
    (flight.source.trim().toUpperCase() === destination &&
      flight.destination.trim().toUpperCase() === source)
  );
});
console.log("all flights:", filteredFlights);
    
    


  return (
    <>
       <Navbar/>
       <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 p-6">
      
      {/* HEADER */}
      <div className="max-w-4xl mx-auto mb-6">
        <h1 className="text-3xl font-bold text-gray-800">
          Flights
        </h1>
        <p className="text-gray-500 mt-1">
          {source} → {destination}
        </p>
      </div>

      {/* RESULTS */}
      {filteredFlights.length === 0 ? (
        <p className="text-center text-gray-500 mt-10">
          No flights found
        </p>
      ) : (
        <div className="max-w-4xl mx-auto space-y-5">
          {filteredFlights.map((flight) => (
            
            <div
              key={flight.id}
              className="bg-white rounded-2xl shadow-md p-5 hover:shadow-xl transition-all duration-300"
            >

              {/* TOP ROW */}
              <div className="flex justify-between items-center mb-4">
                <div>
                  <h2 className="text-lg font-semibold text-gray-800">
                    {flight.airline}
                  </h2>
                  <p className="text-xs text-gray-400">
                    Flight {flight.flight_no}
                  </p>
                </div>

                <div className="text-right">
                  <p className="text-xl font-bold text-blue-600">
                    ₹{flight.price}
                  </p>
                  <span className="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded-full">
                    Economy
                  </span>
                </div>
              </div>

              {/* TIMELINE STYLE */}
              <div className="flex items-center justify-between">

                {/* DEPARTURE */}
                <div className="text-left">
                  <p className="text-lg font-semibold">
                    {flight.departure_time}
                  </p>
                  <p className="text-sm text-gray-500">
                    {flight.source}
                  </p>
                </div>

                {/* MIDDLE LINE */}
                <div className="flex-1 flex flex-col items-center mx-4">
                  <div className="w-full border-t border-dashed border-gray-400 relative">
                    <span className="absolute -top-2 left-1/2 transform -translate-x-1/2 text-xs bg-white px-2 text-gray-500">
                      {flight.duration}
                    </span>
                  </div>
                </div>

                {/* ARRIVAL */}
                <div className="text-right">
                  <p className="text-lg font-semibold">
                    {flight.arrival_time}
                  </p>
                  <p className="text-sm text-gray-500">
                    {flight.destination}
                  </p>
                </div>
              </div>

              {/* FOOTER */}
              <div className="mt-4 flex justify-between items-center">
                <p className="text-xs text-gray-400">
                  Non-stop flight
                </p>

                <button className="bg-blue-600 text-white text-sm px-4 py-2 rounded-lg hover:bg-blue-700 transition">
                  Book Now
                </button>
              </div>

            </div>

          ))}
        </div>
      )}
    </div>
    </>
  );
}

export default FlightsPage