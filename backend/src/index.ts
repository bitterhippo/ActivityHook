import express from "express";
import axios from "axios";
import dotenv from "dotenv";
dotenv.config();

const user = process.env.GITHUB_USERNAME;
const token = process.env.GITHUB_TOKEN;

const app = express();
const PORT = 4000;

app.listen(PORT, () => {
  console.log(`Backend running at http://localhost:${PORT}`);
});
