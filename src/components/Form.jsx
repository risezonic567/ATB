// import React, { useState } from "react";
// import { Search, ArrowRight } from "lucide-react";
// import AllFlights from "../data/flights.json";
// import { useNavigate } from "react-router-dom";
// // console.log("allflight", AllFlights);

// export default function Form() {
//   const [source, setSource] = useState("");
//   const [destination, setDestination] = useState("");
//   const [date, setDate] = useState("");
//   const [returnDate, setReturnDate] = useState("");
//   const [duration, setDuration] = useState("");
//   const [adult, setAdult] = useState(1);

//   const navigate = useNavigate();

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (!source || !destination) {
//       alert("Please enter source and destination");
//       return;
//     }
//     if(source === destination) {
//       alert("Source and destination cannot be same")
//       return;
//     }

//     navigate("/flights", {
//       state: {
//         source: source.trim().toUpperCase(),
//         destination: destination.trim().toUpperCase(),
//         date,
//         returnDate,
//         adult,
//         duration,
//       },
//     });

//     console.log({
//       source,
//       destination,
//       date,
//       returnDate,
//       adult,
//     });
//   };

//   const airports = [
//     ...new Set(
//       AllFlights.flatMap(flight => [flight.source, flight.destination])
//     )
//   ]

//   return (
//     <div className="py-10 px-4 ">
//   <form
//     onSubmit={handleSubmit}
//     className="bg-white/50 rounded-3xl shadow-2xl p-6 md:p-10 max-w-4xl mx-auto"
//   >
//     <div className="space-y-6">

//       {/* FROM / TO */}
//       <div className="grid md:grid-cols-2 gap-4">
//         <select
//           value={source}
//           onChange={(e)=> setSource(e.target.value)}
//           className="p-3 border rounded-xl w-full focus:ring-2 focus:ring-blue-600 outline-none"
//         >
//           <option value="">Select Source</option>
//           {airports.map((code) =>(
//             <option key={code} value={code}>
//               {code}
//             </option>
//           ))}
//         </select>

//         <select
//           value={destination}
//           onChange={(e) => setDestination(e.target.value)}
//           className="p-3 border rounded-xl w-full focus:ring-2 focus:ring-blue-600 outline-none"
//         >
//           <option value="">Select Destination</option>
//           {airports.map((code) =>(
//             <option key={code} value={code}>
//               {code}
//             </option>
//           ))}
//         </select>
//       </div>

//       {/* DATES */}
//       <div className="grid md:grid-cols-2 gap-4">
//         <input
//           type="date"
//           name="depart"
//           value={date}
//           onChange={(e) => setDate(e.target.value)}
//           className="p-3 border rounded-xl focus:ring-2 focus:ring-blue-600 outline-none"
//         />
//         <input
//           type="date"
//           name="returnDate"
//           value={returnDate}
//           onChange={(e) => setReturnDate(e.target.value)}
//           className="p-3 border rounded-xl focus:ring-2 focus:ring-blue-600 outline-none"
//         />
//       </div>

//       {/* PASSENGERS */}
//       <div className="grid md:grid-cols-3 gap-4">
//         <input
//           type="number"
//           name="adults"
//           min="1"
//           value={adult}
//           onChange={(e) => setAdult(Number(e.target.value))}
//           className="p-3 border rounded-xl focus:ring-2 focus:ring-blue-600 outline-none"
//           placeholder="Adults"
//         />
//       </div>

//       {/* BUTTON */}
//       <button
//         type="submit"
//         className="w-full bg-[#1A2E48] hover:bg-[#16263b] text-white py-4 rounded-xl flex justify-center items-center gap-2 transition-all"
//       >
//         <Search size={18} />
//         Search Flights
//         <ArrowRight size={18} />
//       </button>
//     </div>
//   </form>
//     </div>
//   );
// }

import React, { useState } from "react";

export default function Form() {
  // 1. Ek hi object mein saara form data rakhte hain
  const [formData, setFormData] = useState({
    from: "LHR", // Default London rakh rahe hain testing ke liye
    to: "JFK",   // Default New York
    date: "2026-05-30",
    cabin: "economy",
    adults: 1
  });

  // 2. Input change handle karne ke liye function
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Searching for:", formData);
    // Yahan hum API call karenge
  };

  return (
    <div className="py-10 px-4">
      <form onSubmit={handleSubmit} className="bg-white/50 rounded-3xl shadow-2xl p-6 md:p-10 max-w-4xl mx-auto">
        <div className="space-y-6">
          <div className="grid md:grid-cols-2 gap-4">
            {/* FROM */}
            <select
              name="from"
              value={formData.from}
              onChange={handleChange}
              className="p-3 border rounded-xl w-full focus:ring-2 focus:ring-blue-600 outline-none"
            >
              <option value="LHR">London (LHR)</option>
              <option value="DEL">Delhi (DEL)</option>
              <option value="DXB">Dubai (DXB)</option>
            </select>

            {/* TO */}
            <select
              name="to"
              value={formData.to}
              onChange={handleChange}
              className="p-3 border rounded-xl w-full focus:ring-2 focus:ring-blue-600 outline-none"
            >
              <option value="JFK">New York (JFK)</option>
              <option value="BOM">Mumbai (BOM)</option>
            </select>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              className="p-3 border rounded-xl focus:ring-2 focus:ring-blue-600 outline-none"
            />
            <select   
              name="cabin"
              value={formData.cabin}
              onChange={handleChange}
              className="p-3 border rounded-xl focus:ring-2 focus:ring-blue-600 outline-none"
            >
              <option value="economy">Economy</option>
              <option value="business">Business</option>
            </select>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            <input
              type="number"
              name="adults"
              value={formData.adults}
              onChange={handleChange}
              min="1"
              className="p-3 border rounded-xl focus:ring-2 focus:ring-blue-600 outline-none"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#1A2E48] hover:bg-[#16263b] text-white py-4 rounded-xl flex justify-center items-center gap-2 transition-all"
          >
            SEARCH FLIGHTS
          </button>
        </div>
      </form>
    </div>
  );
}