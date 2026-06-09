import axios from "axios";
import dotenv from "dotenv";
dotenv.config();

const DUFFEL_TOKEN = DUFFEL_API;

export const searchFlights = async (req, res) => {
  try {
    const { from, to, date } = req.body;
    console.log(`Controller active: Searching ${from} to ${to} on ${date}`);

    const response = await axios.post(
      "https://api.duffel.com/air/offer_requests",
      {
        data: {
          slices: [{ origin: from, destination: to, departure_date: date }],
          passengers: [{ type: "adult" }],
          cabin_class: "economy",
        },
      },
      {
        headers: {
          Authorization: `Bearer ${DUFFEL_TOKEN}`,
          "Duffel-Version": "v2",
          "Content-Type": "application/json",
        },
      },
    );

    const flightsArray = response.data.data.offers;
    res.json({
      success: true,
      total: flightsArray.length,
      flights: flightsArray,
    });
  } catch (error) {
    console.error("Controller Error:", error.response?.data || error.message);
    res.status(500).json({
      success: false,
      message: "Server Error in flight",
      error: error.response?.data || error.message,
    });
  }
};

export const searchAirports = async (req, res) => {
  try {
    const { query } = req.query;
    console.log(`Airport Controller Active: Searching for keyword: ${query}`);

    if (!query) {
      return res.json([]);
    }

    const response = await axios.get(
      `https://api.duffel.com/air/airports?search=${query}`,
      {
        headers: {
          Authorization: `Bearer ${DUFFEL_TOKEN}`,
          "Duffel-Version": "v2",
        },
      },
    );

    const allAirports = response.data.data || [];
    const keyword = query.trim().toLowerCase(); // Extra space saaf karke lowercase kiya

    // Ekdum majboot filtering framework
    const filteredAirports = allAirports.filter((airport) => {
      const nameMatch = airport.name
        ? airport.name.toLowerCase().includes(keyword)
        : false;
      const iataMatch = airport.iata_code
        ? airport.iata_code.toLowerCase().includes(keyword)
        : false;
      const cityMatch = airport.city_name
        ? airport.city_name.toLowerCase().includes(keyword)
        : false;

      return nameMatch || iataMatch || cityMatch;
    });

    // Debugging ke liye console par check karein kitne matches mile
    console.log(`Filtered Matches Found: ${filteredAirports.length}`);

    res.json(filteredAirports.slice(0, 10));
  } catch (error) {
    console.error(
      "Airport Controller Error:",
      error.response?.data || error.message,
    );
    res.status(500).json({
      success: false,
      message: "Server Error while fetching airports",
      error: error.response?.data || error.message,
    });
  }
};
