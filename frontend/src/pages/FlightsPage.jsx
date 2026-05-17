import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar';

function FlightsPage() {
    const location = useLocation();
    const navigate = useNavigate();

    // 1. Data extract karein jo Form.jsx se bheja gaya hai
    const flights = location.state?.flightData || [];
    const criteria = location.state?.searchCriteria || {};

    // Agar user direct is page par aa jaye bina search kiye
    if (!location.state) {
        return (
            <div className="text-center mt-20">
                <p>Bhai, pehle search toh kar lo!</p>
                <button onClick={() => navigate('/')} className="text-blue-500 underline">Wapas Jao</button>
            </div>
        );
    }

    return (
        <>
            <Navbar />
            <div className="min-h-screen bg-gray-100 p-6">
                
                {/* HEADER */}
                <div className="max-w-4xl mx-auto mb-6">
                    <h1 className="text-3xl font-bold text-gray-800">Available Flights</h1>
                    <p className="text-gray-500">
                        {criteria.from} → {criteria.to} | {criteria.date}
                    </p>
                </div>

                {/* RESULTS */}
                {flights.length === 0 ? (
                    <p className="text-center text-gray-500 mt-10">No flights found for this route.</p>
                ) : (
                    <div className="max-w-4xl mx-auto space-y-5">
                        {flights.map((offer) => (
                            <div key={offer.id} className="bg-white rounded-2xl shadow-md p-5 hover:shadow-xl transition-all">
                                
                                {/* TOP ROW */}
                                <div className="flex justify-between items-center mb-4">
                                    <div className="flex items-center gap-3">
                                        <img src={offer.owner.logo_symbol_url} alt="logo" className="w-10 h-10 object-contain" />
                                        <div>
                                            <h2 className="text-lg font-semibold">{offer.owner.name}</h2>
                                            <p className="text-xs text-gray-400 uppercase">{offer.cabin_class}</p>
                                        </div>
                                    </div>

                                    <div className="text-right">
                                        <p className="text-2xl font-bold text-blue-600">
                                            {offer.total_currency} {offer.total_amount}
                                        </p>
                                    </div>
                                </div>

                                {/* JOURNEY DETAILS (Slices) */}
                                {offer.slices.map((slice, index) => (
                                    <div key={index} className="flex items-center justify-between">
                                        <div className="text-left">
                                            <p className="text-xl font-bold">{slice.origin.iata_code}</p>
                                            <p className="text-sm text-gray-500">{slice.origin.name}</p>
                                        </div>

                                        <div className="flex-1 flex flex-col items-center mx-4">
                                            <div className="w-full border-t-2 border-dashed border-gray-300 relative">
                                                <span className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-white px-2">✈️</span>
                                            </div>
                                            <p className="text-[10px] text-gray-400 mt-1 font-bold">NON-STOP</p>
                                        </div>

                                        <div className="text-right">
                                            <p className="text-xl font-bold">{slice.destination.iata_code}</p>
                                            <p className="text-sm text-gray-500">{slice.destination.name}</p>
                                        </div>
                                    </div>
                                ))}

                                {/* FOOTER */}
                                <div className="mt-6 flex justify-end">
                                    <button className="bg-blue-600 text-white px-6 py-2 rounded-xl font-bold hover:bg-blue-700">
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

export default FlightsPage;