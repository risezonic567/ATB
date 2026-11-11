import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Wifi,
  Briefcase,
  ShieldCheck,
  ArrowRightLeft,
  Luggage,
} from "lucide-react";

export default function FlightCard({ item }) {
  const slices = item?.slices || [];
  if (!slices.length) return null;

  const offerId = item.id;
  const isRoundTrip = slices.length === 2;
  const firstSlice = slices[0];
  const secondSlice = slices[1];
  const firstSegment = firstSlice?.segments?.[0];
  const navigate = useNavigate();

  const airlineName = item?.owner?.name || "Airline";
  const airlineCode = item?.owner?.iata_code || "XX";
  const airlineLogo =
    item?.owner?.logo_symbol_url ||
    `https://images.kiwi.com/airlines/64/${airlineCode}.png`;
  const price = item?.total_amount || item?.intended_total_amount || "0";
  const currency = item?.total_currency || "USD";
  const refundable = item?.conditions?.refund_before_departure?.allowed;
  const changeAllowed = item?.conditions?.change_before_departure?.allowed;
  const emissions = item?.total_emissions_kg || "N/A";
  const wifiAvailable =
    firstSegment?.passengers?.[0]?.cabin?.amenities?.wifi?.available;
  const checkedBag = firstSegment?.passengers?.[0]?.baggages?.find(
    (b) => b.type === "checked"
  );
  const carryOn = firstSegment?.passengers?.[0]?.baggages?.find(
    (b) => b.type === "carry_on"
  );

  const handleSelect = () => {
    localStorage.setItem("selectedOffer", JSON.stringify(item));
    navigate(`/passengers/${offerId}`);
  };

  const renderSlice = (slice, label) => {
    const segment = slice?.segments?.[0];
    if (!slice || !segment) return null;

    const departureTime = new Date(segment?.departing_at);
    const arrivalTime = new Date(segment?.arriving_at);
    const originCode = slice?.origin?.iata_code || "N/A";
    const destinationCode = slice?.destination?.iata_code || "N/A";
    const originCity = slice?.origin?.city_name || "";
    const destinationCity = slice?.destination?.city_name || "";
    const duration = slice?.duration || "N/A";
    const fareBrand = slice?.fare_brand_name || "Basic";
    const cabinClass =
      segment?.passengers?.[0]?.cabin_class_marketing_name || "Economy";
    const segments = slice?.segments || [];
    const layovers =
      segments.length > 1
        ? segments.slice(0, -1).map((seg) => seg?.destination?.iata_code)
        : [];

    return (
      <div className="mb-3">
        {isRoundTrip && (
          <p className="text-sm font-semibold text-teal-700 mb-2">{label}</p>
        )}
        <div className="grid grid-cols-3 items-center text-center gap-2">
          <div>
            <div className="text-xl font-bold">
              {departureTime.toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
              })}
            </div>
            <div className="font-semibold">{originCode}</div>
            <div className="text-xs text-gray-500">{originCity}</div>
          </div>
          <div>
            <div className="text-xs text-gray-500">{duration}</div>
            {layovers.length > 0 && (
              <div className="text-xs text-teal-700">via {layovers.join(", ")}</div>
            )}
            <div className="text-xs text-gray-500">{fareBrand}</div>
          </div>
          <div>
            <div className="text-xl font-bold">
              {arrivalTime.toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
              })}
            </div>
            <div className="font-semibold">{destinationCode}</div>
            <div className="text-xs text-gray-500">{destinationCity}</div>
          </div>
        </div>
        <div className="mt-2">
          <span className="inline-block text-xs px-2 py-1 rounded bg-gray-100 border">
            {cabinClass}
          </span>
        </div>
      </div>
    );
  };

  return (
    <div className="bg-white rounded-2xl shadow-md mb-4 overflow-hidden">
      <div className="p-5">
        <div className="grid lg:grid-cols-12 gap-4">
          <div className="lg:col-span-8">
            <div className="flex items-center gap-3 mb-3 flex-wrap">
              <img
                src={airlineLogo}
                alt={airlineName}
                width={56}
                height={56}
                className="rounded-xl border bg-white p-2 object-contain"
              />
              <div className="me-auto">
                <div className="font-bold text-lg">{airlineName}</div>
                <div className="text-sm text-gray-500">{airlineCode}</div>
              </div>
              <div className="flex gap-2 flex-wrap">
                {isRoundTrip ? (
                  <span className="inline-flex items-center gap-1 text-xs px-2 py-1 rounded border border-teal-200 text-teal-700 bg-teal-50">
                    <ArrowRightLeft size={14} /> Round Trip
                  </span>
                ) : (
                  <span className="text-xs px-2 py-1 rounded border bg-gray-50">
                    One Way
                  </span>
                )}
                {refundable && (
                  <span className="text-xs px-2 py-1 rounded border border-green-200 text-green-700 bg-green-50">
                    Refundable
                  </span>
                )}
              </div>
            </div>

            {renderSlice(firstSlice, "Departure Flight")}
            {isRoundTrip && renderSlice(secondSlice, "Return Flight")}

            <div className="flex flex-wrap gap-2 mt-3">
              {wifiAvailable && (
                <span className="inline-flex items-center gap-1 text-xs px-2 py-1 rounded border bg-gray-50">
                  <Wifi size={14} /> WiFi
                </span>
              )}
              {checkedBag && (
                <span className="inline-flex items-center gap-1 text-xs px-2 py-1 rounded border bg-gray-50">
                  <Briefcase size={14} /> {checkedBag.quantity} Checked Bag
                </span>
              )}
              {carryOn && (
                <span className="inline-flex items-center gap-1 text-xs px-2 py-1 rounded border bg-gray-50">
                  <Luggage size={14} /> {carryOn.quantity} Cabin Bag
                </span>
              )}
              {changeAllowed && (
                <span className="inline-flex items-center gap-1 text-xs px-2 py-1 rounded border bg-gray-50">
                  <ShieldCheck size={14} /> Change Allowed
                </span>
              )}
            </div>
            <p className="text-xs text-gray-500 mt-3 mb-0">
              CO₂ Emission: {emissions} kg
            </p>
          </div>

          <div className="lg:col-span-4">
            <div className="h-full rounded-2xl border p-5 flex flex-col justify-center text-center bg-gradient-to-b from-teal-50 to-slate-50">
              <div className="text-sm text-gray-500">Total Price</div>
              <div className="text-3xl font-bold text-teal-700 my-2">
                {currency} {price}
              </div>
              <div className="text-xs text-gray-500 mb-3">taxes included</div>
              <button
                type="button"
                onClick={handleSelect}
                className="bg-teal-700 hover:bg-teal-800 text-white py-2.5 rounded-xl font-semibold"
              >
                Select Flight
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
