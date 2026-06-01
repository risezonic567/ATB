import express from "express"
import dotenv from "dotenv"
dotenv.config();
import cors from "cors"

const app = express();

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 2000;

app.listen(PORT, () => {
    console.log(`server running fine on port ${PORT}`);
})