import express from "express"
import { searchAirports, searchFlights } from "../controllers/flightController.js"

const router = express.Router()
router.post('/search', searchFlights);

router.get('/airports', searchAirports)

export default router;