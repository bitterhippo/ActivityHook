import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import { activityRouter } from "./routes/activity";

dotenv.config();

const app = express();
const PORT = 4000;

// Connect DB
mongoose
  .connect(process.env.MONGO_URI!)
  .then(() => console.log("✅ Connected to MongoDB with Mongoose"))
  .catch((err) => console.error("❌ Mongoose connection error:", err));

app.use("/activity", activityRouter);

app.listen(PORT, () =>
  console.log(`Backend running on http://localhost:${PORT}`)
);
