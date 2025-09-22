import express from "express";
import axios from "axios";
import dotenv from "dotenv";
import { activityRouter } from "../routes/activity";
import { testRouter } from "../routes/test";
dotenv.config();

const user = process.env.GITHUB_USERNAME;
const token = process.env.GITHUB_TOKEN;

const app = express();
const PORT = 4000;

app.use("/activity", activityRouter);
app.use("/swapi", testRouter);

app.listen(PORT, () => {
  console.log(`Backend running at http://localhost:${PORT}`);
});
