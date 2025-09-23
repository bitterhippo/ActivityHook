import express from "express";
import axios from "axios";
import dotenv from "dotenv";
import { activityRouter } from "../routes/activity";
dotenv.config();

const app = express();
const PORT = 4000;

app.use("/activity", activityRouter);

app.listen(PORT, () => {
  console.log(`Backend running at http://localhost:${PORT}`);
});
