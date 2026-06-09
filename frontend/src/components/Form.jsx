import React, { useState } from 'react';
import axios from "axios";
import { useNavigate } from 'react-router-dom';

function Form() {
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
    
    // Sirf tabhi API call hoga jab user 2 se zyada akshar likhega
    if (val.trim().length > 2) {
      try {
        const res = await axios.get(`http://localhost:5000/api/flights/airports?query=${encodeURIComponent(val)}`);
        setFromSuggestions(res.data);
        console.log("FROM Data Received:", res.data);
      } catch (err) { 
        console.error("From Search Error:", err); 
      }
    } else {
      setFromSuggestions([]);
    }
  };

  // Search Logic for TO
  const handleToSearch = async (val) => {
    setToText(val);
    
    if (val.trim().length > 2) {
      try {
        const res = await axios.get(`http://localhost:5000/api/flights/airports?query=${val}`);
        setToSuggestions(res.data);
        console.log("TO Data Received:", res.data);
      } catch (err) { 
        console.error("To Search Error:", err); 
      }
    } else {
      setToSuggestions([]);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.from || !formData.to || !formData.date) {
      alert("Please fill From, To, and Date fields!");
      return;
    }
    console.log("Submitting Search Criteria:", formData);
  };

  return (
    <div className="py-10 px-4 ">
      <form onSubmit={handleSubmit} className="bg-white/50 rounded-3xl shadow-2xl p-6 md:p-10 max-w-4xl mx-auto space-y-6">
        
        <div className="grid md:grid-cols-2 gap-4">
          
          {/* FROM INPUT SECTION */}
          <div className="relative">
            <input
              type='text'
              placeholder='From (e.g. Delhi)'
              value={fromText}
              onChange={(e) => handleFromSearch(e.target.value)}
              className="p-3 border rounded-xl w-full focus:ring-2 focus:ring-blue-600 outline-none"
            />
            {fromSuggestions.length > 0 && (
              <ul className="absolute left-0 right-0 bg-white border border-gray-200 mt-1 rounded-xl shadow-2xl z-[999] max-h-60 overflow-y-auto">
                {fromSuggestions.map((place) => {
                  const code = place.iata_code || "N/A";
                  const name = place.name || "Unknown Airport";
                  const cityName = place.city_name || "";

                  return (
                    <li 
                      key={place.id} 
                      className="p-3 hover:bg-blue-50 cursor-pointer border-b last:border-0 flex justify-between items-center"
                      onClick={() => {
                        setFormData(prev => ({ ...prev, from: code }));
                        setFromText(`${cityName || name} (${code})`);
                        setFromSuggestions([]); // List ko clear karke dropdown band karna
                      }}
                    >
                      <div>
                        <span className="font-bold text-blue-600 mr-2">{code}</span>
                        <span className="text-gray-800 text-sm">{name}</span>
                      </div>
                      {cityName && (
                        <span className="text-xs bg-gray-100 text-gray-500 px-2 py-1 rounded">
                          {cityName}
                        </span>
                      )}
                    </li>
                  );
                })}
              </ul>
            )}
          </div>

          {/* TO INPUT SECTION */}
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
                {toSuggestions.map((place) => {
                  const code = place.iata_code || "N/A";
                  const name = place.name || "Unknown Airport";
                  const cityName = place.city_name || "";

                  return (
                    <li 
                      key={place.id} 
                      className="p-3 hover:bg-blue-50 cursor-pointer border-b last:border-0 flex justify-between items-center"
                      onClick={() => {
                        setFormData(prev => ({ ...prev, to: code }));
                        setToText(`${cityName || name} (${code})`);
                        setToSuggestions([]); // List ko clear karke dropdown band karna
                      }}
                    >
                      <div>
                        <span className="font-bold text-blue-600 mr-2">{code}</span>
                        <span className="text-gray-800 text-sm">{name}</span>
                      </div>
                      {cityName && (
                        <span className="text-xs bg-gray-100 text-gray-500 px-2 py-1 rounded">
                          {cityName}
                        </span>
                      )}
                    </li>
                  );
                })}
              </ul>
            )}
          </div>

        </div>

        {/* Date, Cabin, and Adults Fields */}
        <div className="grid md:grid-cols-3 gap-4">
           <input type="date" name="date" required value={formData.date} onChange={handleChange} className="p-3 border rounded-xl" />
           <select name="cabin" value={formData.cabin} onChange={handleChange} className="p-3 border rounded-xl">
             <option value="economy">Economy</option>
             <option value="business">Business</option>
           </select>
           <input type="number" name="adults" value={formData.adults} onChange={handleChange} className="p-3 border rounded-xl" min="1" />
        </div>

        <button type="submit" className="w-full bg-teal-700 text-white py-4 rounded-xl font-bold">
          SEARCH FLIGHTS
        </button>
      </form>
    </div>
  );
}

export default Form;