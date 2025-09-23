import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./db";
import { activityRouter } from "./routes/activity";

dotenv.config();

const app = express();
const PORT = 4000;

// Connect DB
connectDB();

app.use("/activity", activityRouter);

app.listen(PORT, () =>
  console.log(`Backend running on http://localhost:${PORT}`)
);
