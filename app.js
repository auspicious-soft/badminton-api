import express from "express";
import bodyParser from "body-parser";
import fs from "fs";
import { configDotenv } from "dotenv";
import { getCSV } from "./controllers/getCSV-controller.js";
configDotenv()

const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(express.json())

app.get("/", (req, res) => {
    res.send("Hello World!");
})

// API to fetch results with days parameter
app.get('/api/results', getCSV)

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})
