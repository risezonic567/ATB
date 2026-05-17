import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { MapPin, ArrowLeftRight, ChevronLeft, ChevronRight, User } from "lucide-react";

export default function PassengerInfo() {
  const { state } = useLocation();
  const navigate = useNavigate();
  const { searchData } = state || {};

  if (!searchData) return null;

  const formatDate = (dateStr) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString("en-US", {
      weekday: "short",
      month: "short",
      day: "2-digit",
    });
  };

  return (
    <div className="w-full bg-white shadow-sm mt-[70px]">
      <div className="max-w-7xl mx-auto px-3 py-2">

        {/* MOBILE */}
        <div className="sm:hidden flex items-center gap-2 overflow-x-auto no-scrollbar mt-5">

          <Chip>
            <MapPin className="w-4 h-4" />
            <span>{searchData.from}</span>
          </Chip>

          <Chip>
            <ArrowLeftRight className="w-4 h-4" />
          </Chip>

          <Chip>
            <MapPin className="w-4 h-4" />
            <span>{searchData.to}</span>
          </Chip>

          <Chip>
            <span>{formatDate(searchData.departDate)}</span>
          </Chip>

          {searchData.returnDate && (
            <Chip>
              <span>{formatDate(searchData.returnDate)}</span>
            </Chip>
          )}

          <Chip>
            <User className="w-4 h-4" />
            <span>
              {searchData.adults + searchData.children + searchData.infants}
            </span>
          </Chip>

          {/* MOBILE MODIFY */}
          <button
            onClick={() => navigate("/")}
            className="ml-2 shrink-0 border-2 border-blue-600 
                       text-blue-600 px-4 py-2 rounded-lg 
                       text-sm font-semibold bg-white">
            Modify search
          </button>
        </div>

        {/* DESKTOP */}
        <div className="hidden sm:flex items-center gap-3">

          <Box>
            <MapPin className="w-4 h-4 text-gray-500" />
            <b>{searchData.from}</b>
          </Box>

          <div className="border rounded-full p-2">
            <ArrowLeftRight className="w-4 h-4" />
          </div>

          <Box>
            <MapPin className="w-4 h-4 text-gray-500" />
            <b>{searchData.to}</b>
          </Box>

          <Box>
            <ChevronLeft className="w-4 h-4" />
            <b>{formatDate(searchData.departDate)}</b>
            <ChevronRight className="w-4 h-4" />
          </Box>

          {searchData.returnDate && (
            <Box>
              <ChevronLeft className="w-4 h-4" />
              <b>{formatDate(searchData.returnDate)}</b>
              <ChevronRight className="w-4 h-4" />
            </Box>
          )}

          <Box>
            <User className="w-4 h-4" />
            <b>
              {searchData.adults + searchData.children + searchData.infants}{" "}
              Traveler
            </b>
          </Box>

          {/* DESKTOP MODIFY */}
          <button
            onClick={() => navigate("/")}
            className="ml-auto border-2 border-blue-600 
                       text-blue-600 px-5 py-2 rounded-xl 
                       font-semibold hover:bg-blue-600 hover:text-white">
            Modify Search
          </button>
        </div>
      </div>
    </div>
  );
}

/* Reusable components */

const Chip = ({ children }) => (
  <div className="flex items-center gap-2 border px-3 py-2 rounded-lg text-sm whitespace-nowrap">
    {children}
  </div>
);

const Box = ({ children }) => (
  <div className="flex items-center gap-2 border rounded-xl px-4 py-2">
    {children}
  </div>
);
