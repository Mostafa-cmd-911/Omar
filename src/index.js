import express from "express";
import mongoose from "mongoose";
import studentRouet from "./routers/students.js";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();

const PORT = process.env.PORT || 5000;

const allowedOrigins = [
    "http://127.0.0.1:5500",
    "https://unmeasuredly-unplentiful-lynsey.ngrok-free.dev",
];

app.use(express.json());
app.use(
    cors({
        origin: allowedOrigins,
    })
);

mongoose
    .connect("mongodb://127.0.0.1:27017")
    .then(() => console.log("✅ MongoDB Connected"))
    .catch((err) => console.error("❌ Database connection error:", err));

app.use("/", studentRouet);

app.listen(PORT, () =>
    console.log(`🚀 Server running on: http://localhost:${PORT}`)
);
