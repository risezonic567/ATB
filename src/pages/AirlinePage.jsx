import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Plane, Hotel, ChevronRight } from 'lucide-react';
import FrontierAirlinesContent from '../components/FrontierAirlines/FrontierAirlinesContent';
import FrontierAirlinesPolicies from '../components/FrontierAirlines/FrontierAirlinesPolicies';
import FrontierComparisonCTA from '../components/FrontierAirlines/FrontierComparisonCTA';
import FrontierAirlinesFaq from '../components/FrontierAirlines/FrontierAirlinesFaq';
import SouthWestContent from '../components/SouthWest/SouthWestContent';
import SouthWestPolicies from '../components/SouthWest/SouthWestPolicies';
import SouthWestComparisonCTA from '../components/SouthWest/SouthWestComparisonCTA';
import SpiritAirlinesContent from '../components/SpiritAirlines/SpiritAirlinesContent';
import SpiritAirlinesPolicies from '../components/SpiritAirlines/SpiritAirlinesPolicies';
import SpiritAirlinesComparisonCTA from '../components/SpiritAirlines/SpiritAirlinesComparisonCTA';
import JetBlueAirlineContent from '../components/JetBlueAirlines/JetBlueAirlineContent';
import JetBlueAirlinePolicies from '../components/JetBlueAirlines/JetBlueAirlinePolicies';
import JetBlueAirlineComparisonCTA from '../components/JetBlueAirlines/JetBlueAirlineComparisonCTA';
import ChopaAirlinesContent from '../components/ChopaAirlines/ChopaAirlinesContent';
import ChopaAirlinesPolicies from '../components/ChopaAirlines/ChopaAirlinesPolicies';
import ChopaAirlinesComparisonCTA from '../components/ChopaAirlines/ChopaAirlinesComparisonCTA';
import AeroMexicoContent from '../components/AeroMexico/AeroMexicoContent';
import AeroMexicoPolicies from '../components/AeroMexico/AeroMexicoPolicies';
import AeroMexicoComparisonCTA from '../components/AeroMexico/AeroMexicoComparisonCTA';
import VolarisAirlineContent from '../components/VolarisAirline/VolarisAirlineContent';
import VolarisAirlinePolicies from '../components/VolarisAirline/VolarisAirlinePolicies';
import VolarisAirlineComparisonCTA from '../components/VolarisAirline/VolarisAirlineComparisonCTA';
import DeltaAirlinesContent from '../components/DeltaAirlines/DeltaAirlinesContent';
import DeltaAirlinesPolicies from '../components/DeltaAirlines/DeltaAirlinesPolicies';
import DeltaAirlinesComparisonCTA from '../components/DeltaAirlines/DeltaAirlinesComparisonCTA';
import UnitedAirlinesContent from '../components/UnitedAirlines/UnitedAirlinesContent';
import UnitedAirlinesPolicies from '../components/UnitedAirlines/UnitedAirlinesPolicies';
import UnitedAirlinesComparisonCTA from '../components/UnitedAirlines/UnitedAirlinesComparisonCTA';
import AlaskaAirlinesContent from '../components/AlaskaAirlines/AlaskaAirlinesContent';
import AlaskaAirlinesPolicies from '../components/AlaskaAirlines/AlaskaAirlinesPolicies';
import AlaskaAirlinesComparisonCTA from '../components/AlaskaAirlines/AlaskaAirlinesComparisonCTA';
import AllegiantAirlinesContent from '../components/AllegiantAirlines/AllegiantAirlinesContent';
import AllegiantAirlinesPolicies from '../components/AllegiantAirlines/AllegiantAirlinesPolicies';
import AllegiantAirlinesComparisonCTA from '../components/AllegiantAirlines/AllegiantAirlinesComparisonCTA';

// Aapke Frontier Components ka Content (Maine inhe functions mein wrap kiya hai)
// import FrontierAirlinesContent from '../components/Frontier/FrontierAirlinesContent';
// import FrontierAirlinesPolicies from '../components/Frontier/FrontierAirlinesPolicies';
// import FrontierComparisonCTA from '../components/Frontier/FrontierComparisonCTA';
// import FrontierAirlinesFaq from '../components/Frontier/FrontierAirlinesFaq';

const airlinesList = [
  { name: "Frontier Airlines", slug: "frontier" },
  { name: "Jet Blue Airlines", slug: "jet-blue" },
  { name: "South West Airline", slug: "south-west" },
  { name: "Spirit Airlines", slug: "spirit" },
  { name: "Copa Airlines", slug: "copa" },
  { name: "Aero Mexico Airlines", slug: "aero-mexico" },
  { name: "Volaris Airlines", slug: "volaris" },
  { name: "Delta Airlines", slug: "delta" },
  { name: "United Airlines", slug: "united" },
  { name: "Alaska Airlines", slug: "alaska" },
  { name: "Allegiant Airlines", slug: "allegiant" },
];

export default function AirlinePage() {
  const { slug } = useParams();
  const currentAirline = airlinesList.find(a => a.slug === slug) || { name: "All Airlines" };

  // 🔷 Dynamic Content Selector
  const renderAirlineContent = () => {
    switch (slug) {
      case "frontier":
        return (
          <div className="animate-in fade-in duration-700">
            <FrontierAirlinesContent />
            <FrontierAirlinesPolicies />
            <FrontierComparisonCTA />
            <FrontierAirlinesFaq />
          </div>
        );
        case "south-west":
        return (
          <div className="animate-in fade-in duration-700">
            <SouthWestContent />
            <SouthWestPolicies />
            <SouthWestComparisonCTA />
            {/* SouthWest ka FAQ yahan add kar sakte hain */}
          </div>
        );
        case "spirit":
        return (
          <div className="animate-in fade-in duration-700">
            <SpiritAirlinesContent/>
            <SpiritAirlinesPolicies/>
            <SpiritAirlinesComparisonCTA/>
            {/* SouthWest ka FAQ yahan add kar sakte hain */}
          </div>
        );
        case "jet-blue":
        return (
          <div className="animate-in fade-in duration-700">
            <JetBlueAirlineContent/>
            <JetBlueAirlinePolicies/>
            <JetBlueAirlineComparisonCTA/>
            {/* SouthWest ka FAQ yahan add kar sakte hain */}
          </div>
        );
        case "copa":
        return (
          <div className="animate-in fade-in duration-700">
            <ChopaAirlinesContent/>
            <ChopaAirlinesPolicies/>
            <ChopaAirlinesComparisonCTA/>
            {/* SouthWest ka FAQ yahan add kar sakte hain */}
          </div>
        );
        case "aero-mexico":
        return (
          <div className="animate-in fade-in duration-700">
            <AeroMexicoContent/>
            <AeroMexicoPolicies/>
            <AeroMexicoComparisonCTA/>
            {/* SouthWest ka FAQ yahan add kar sakte hain */}
          </div>
        );
        case "volaris":
        return (
          <div className="animate-in fade-in duration-700">
            <VolarisAirlineContent/>
            <VolarisAirlinePolicies/>
            <VolarisAirlineComparisonCTA/>
            {/* SouthWest ka FAQ yahan add kar sakte hain */}
          </div>
        );
        case "delta":
        return (
          <div className="animate-in fade-in duration-700">
            <DeltaAirlinesContent/>
            <DeltaAirlinesPolicies/>
            <DeltaAirlinesComparisonCTA/>
            {/* SouthWest ka FAQ yahan add kar sakte hain */}
          </div>
        );
        case "united":
        return (
          <div className="animate-in fade-in duration-700">
            <UnitedAirlinesContent/>
            <UnitedAirlinesPolicies/>
            <UnitedAirlinesComparisonCTA/>
            {/* SouthWest ka FAQ yahan add kar sakte hain */}
          </div>
        );
        case "alaska":
        return (
          <div className="animate-in fade-in duration-700">
            <AlaskaAirlinesContent/>
            <AlaskaAirlinesPolicies/>
            <AlaskaAirlinesComparisonCTA/>
            {/* SouthWest ka FAQ yahan add kar sakte hain */}
          </div>
        );
        case "allegiant":
        return (
          <div className="animate-in fade-in duration-700">
            <AllegiantAirlinesContent/>
            <AllegiantAirlinesPolicies/>
            <AllegiantAirlinesComparisonCTA/>
            {/* SouthWest ka FAQ yahan add kar sakte hain */}
          </div>
        );
      
      // Future mein yaha baaki airlines add kar sakte hain
      // case "jet-blue": return <JetBlueContent />;

      default:
        return (
          <div className="pt-10 text-center">
            <h2 className="text-2xl font-bold text-gray-400">Select an airline to view details</h2>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* 1. Header Section */}
      <div className="bg-[#1A2E48] py-12 px-4 text-white text-center">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">{currentAirline.name}</h1>
        <p className="text-lg opacity-80">Bookings, Policies, and Exclusive Travel Deals</p>
      </div>

      {/* 2. Search Section (Always Visible) */}
      <div className="max-w-7xl mx-auto px-4 -mt-10 mb-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Flight Search */}
          <div className="bg-white rounded-2xl shadow-xl p-6 border-t-4 border-teal-500">
            <div className="flex items-center gap-2 mb-4">
              <Plane className="text-teal-600" />
              <h2 className="text-xl font-bold text-gray-800">Flight Search</h2>
            </div>
            <div className="grid grid-cols-2 gap-3 mb-4">
              <input type="text" placeholder="From" className="p-3 border rounded-lg w-full outline-none focus:ring-2 focus:ring-teal-500" />
              <input type="text" placeholder="To" className="p-3 border rounded-lg w-full outline-none focus:ring-2 focus:ring-teal-500" />
            </div>
            <button className="w-full bg-teal-600 text-white py-3 rounded-lg font-bold hover:bg-teal-700 transition">Search Flights</button>
          </div>

          {/* Hotel Search */}
          <div className="bg-white rounded-2xl shadow-xl p-6 border-t-4 border-[#C30000]">
            <div className="flex items-center gap-2 mb-4">
              <Hotel className="text-orange-500" />
              <h2 className="text-xl font-bold text-gray-800">Hotel Search</h2>
            </div>
            <input type="text" placeholder="Enter Destination" className="p-3 border rounded-lg w-full mb-4 outline-none focus:ring-2 focus:ring-orange-400" />
            <button className="w-full bg-[#C30000] text-white py-3 rounded-lg font-bold hover:bg-orange-600 transition">Search Hotels</button>
          </div>
        </div>
      </div>

      {/* 3. DYNAMIC DATA SECTION (Yaha saara content load hoga) */}
      <div className="border-t bg-white">
        {renderAirlineContent()}
      </div>

      {/* 4. Other Airlines Links (As it is) */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <h3 className="text-2xl font-bold text-gray-800 mb-8">Other Airlines</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {airlinesList.filter(a => a.slug !== slug).map((item) => (
            <Link 
              key={item.slug} 
              to={`/airline/${item.slug}`}
              className="flex items-center justify-between p-4 bg-white border rounded-xl hover:shadow-md transition group"
            >
              <span className="font-medium text-gray-600 group-hover:text-teal-600">{item.name}</span>
              <ChevronRight size={16} className="text-gray-400" />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}