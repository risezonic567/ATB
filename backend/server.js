import express from "express"
import dotenv from "dotenv"
dotenv.config();
import cors from "cors"
import flights from "./routes/flightRoutes.js"
import { loadAirports } from "./controllers/flightController.js";
await loadAirports();

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/flights",flights)

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`server running fine on port ${PORT}`);
})