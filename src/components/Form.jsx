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

// import React, { useState } from "react";

// export default function Form() {
//   // 1. Ek hi object mein saara form data rakhte hain
//   const [formData, setFormData] = useState({
//     from: "LHR", // Default London rakh rahe hain testing ke liye
//     to: "JFK",   // Default New York
//     date: "2026-05-30",
//     cabin: "economy",
//     adults: 1
//   });

//   // 2. Input change handle karne ke liye function
//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Searching for:", formData);
//     // Yahan hum API call karenge
//   };

//   return (
//     <div className="py-10 px-4">
//       <form onSubmit={handleSubmit} className="bg-white/50 rounded-3xl shadow-2xl p-6 md:p-10 max-w-4xl mx-auto">
//         <div className="space-y-6">
//           <div className="grid md:grid-cols-2 gap-4">
//             {/* FROM */}
//             <select
//               name="from"
//               value={formData.from}
//               onChange={handleChange}
//               className="p-3 border rounded-xl w-full focus:ring-2 focus:ring-blue-600 outline-none"
//             >
//               <option value="LHR">London (LHR)</option>
//               <option value="DEL">Delhi (DEL)</option>
//               <option value="DXB">Dubai (DXB)</option>
//             </select>

//             {/* TO */}
//             <select
//               name="to"
//               value={formData.to}
//               onChange={handleChange}
//               className="p-3 border rounded-xl w-full focus:ring-2 focus:ring-blue-600 outline-none"
//             >
//               <option value="JFK">New York (JFK)</option>
//               <option value="BOM">Mumbai (BOM)</option>
//             </select>
//           </div>

//           <div className="grid md:grid-cols-2 gap-4">
//             <input
//               type="date"
//               name="date"
//               value={formData.date}
//               onChange={handleChange}
//               className="p-3 border rounded-xl focus:ring-2 focus:ring-blue-600 outline-none"
//             />
//             <select   
//               name="cabin"
//               value={formData.cabin}
//               onChange={handleChange}
//               className="p-3 border rounded-xl focus:ring-2 focus:ring-blue-600 outline-none"
//             >
//               <option value="economy">Economy</option>
//               <option value="business">Business</option>
//             </select>
//           </div>

//           <div className="grid md:grid-cols-3 gap-4">
//             <input
//               type="number"
//               name="adults"
//               value={formData.adults}
//               onChange={handleChange}
//               min="1"
//               className="p-3 border rounded-xl focus:ring-2 focus:ring-blue-600 outline-none"
//             />
//           </div>

//           <button
//             type="submit"
//             className="w-full bg-[#1A2E48] hover:bg-[#16263b] text-white py-4 rounded-xl flex justify-center items-center gap-2 transition-all"
//           >
//             SEARCH FLIGHTS
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// }

import React, { useState } from 'react';
import axios from "axios";
import { useNavigate } from 'react-router-dom'

function Form() {
  // 1. Initial State ko empty rakhein taaki fixed DEL/JFK na dikhe
  const [formData, setFormData] = useState({
    from: '', 
    to: '',
    date: '',
    cabin: 'economy',
    adults: 1
  });

  const [fromText, setFromText] = useState("");
  const [toText, setToText] = useState("");
  const [fromSuggestions, setFromSuggestions] = useState([]);
  const [toSuggestions, setToSuggestions] = useState([]);
  const navigate = useNavigate();

  // Search Logic for FROM
  const handleFromSearch = async (val) => {
    setFromText(val);
    if (val.length > 2) {
      try {
        const res = await axios.get(`http://localhost:5000/api/flights/airports?query=${val}`);
        setFromSuggestions(res.data);
        console.log("data", res);
        
      } catch (err) { console.error("From Search Error:", err); }
    } else {
      setFromSuggestions([]);
    }
  };

  // Search Logic for TO
  const handleToSearch = async (val) => {
    setToText(val);
    if (val.length > 2) {
      try {
        const res = await axios.get(`http://localhost:5000/api/flights/airports?query=${val}`);
        setToSuggestions(res.data);
      } catch (err) { console.error("To Search Error:", err); }
    } else {
      setToSuggestions([]);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.from || !formData.to || !formData.date) {
    alert("Bhai, please 'From', 'To' aur 'Date' sahi se bhariye!");
    return;
  }
    console.log("Searching with:", formData);
    try {
      const response = await axios.post("http://localhost:5000/api/flights/search", formData);
      console.log("flights found:", response.data);

      // 3. Jab data mil jaye, TAB navigate karein
      if (response.data && response.data.data && response.data.data.offers.length > 0) {
        console.log("Flights found:", response.data.data.offers.length);
        
        navigate('/flights', {
          state: {
            flightData: response.data.data.offers,
            searchCriteria: formData
          }
        });
      } else {
        alert("Afsos! Is route par koi flights nahi mili.");
      }
    } catch (error) {
      console.error("Search Submit Error:", error);
    }
  };

  return (
    <div className="py-10 px-4">
      <form onSubmit={handleSubmit} className="bg-white/50 rounded-3xl shadow-2xl p-6 md:p-10 max-w-4xl mx-auto space-y-6">
        
        <div className="grid md:grid-cols-2 gap-4">
          {/* FROM INPUT */}
          <div className="relative">
            <input
              type='text'
              placeholder='From (e.g. London)'
              value={fromText}
              onChange={(e) => handleFromSearch(e.target.value)}
              className="p-3 border rounded-xl w-full focus:ring-2 focus:ring-blue-600 outline-none"
            />
            {fromSuggestions.length > 0 && (
              <ul className="absolute left-0 right-0 bg-white border border-gray-200 mt-1 rounded-xl shadow-2xl z-[999] max-h-60 overflow-y-auto">
                {fromSuggestions.map((place) => (
                  <li key={place.id} className="p-3 hover:bg-blue-50 cursor-pointer border-b last:border-0"
                    onClick={() => {
                      setFormData(prev => ({ ...prev, from: place.iata_code }));
                      setFromText(`${place.name} (${place.iata_code})`);
                      setFromSuggestions([]);
                    }}>
                    <span className="font-bold">{place.iata_code}</span> - {place.name}
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* TO INPUT */}
          <div className="relative">
            <input
              type='text'
              placeholder='To (e.g. Dubai)'
              value={toText}
              onChange={(e) => handleToSearch(e.target.value)}
              className="p-3 border rounded-xl w-full focus:ring-2 focus:ring-blue-600 outline-none"
            />
            {toSuggestions.length > 0 && (
              <ul className="absolute left-0 right-0 bg-white border border-gray-200 mt-1 rounded-xl shadow-2xl z-[999] max-h-60 overflow-y-auto">
                {toSuggestions.map((place) => (
                  <li key={place.id} className="p-3 hover:bg-blue-50 cursor-pointer border-b last:border-0"
                    onClick={() => {
                      setFormData(prev => ({ ...prev, to: place.iata_code }));
                      setToText(`${place.name} (${place.iata_code})`);
                      setToSuggestions([]);
                    }}>
                    <span className="font-bold">{place.iata_code}</span> - {place.name}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        {/* Baki Fields... (Date, Cabin, Adults) */}
        <div className="grid md:grid-cols-3 gap-4">
           <input type="date" name="date" required value={formData.date} onChange={handleChange} className="p-3 border rounded-xl" />
           <select name="cabin" value={formData.cabin} onChange={handleChange} className="p-3 border rounded-xl">
             <option value="economy">Economy</option>
             <option value="business">Business</option>
           </select>
           <input type="number" name="adults" value={formData.adults} onChange={handleChange} className="p-3 border rounded-xl" min="1" />
        </div>

        <button type="submit" className="w-full bg-[#1A2E48] text-white py-4 rounded-xl font-bold">
          SEARCH FLIGHTS
        </button>
      </form>
    </div>
  );
}

export default Form;