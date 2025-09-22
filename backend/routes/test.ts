import express from "express";
import { Router } from "express";
import axios from "axios";
import dotenv from "dotenv";

const app = express();
const PORT = 4000;

const router = Router();

router.get("/", async (req, res) => {
  try {
    const response = await axios.get("https://swapi.dev/api/people/1/");
    console.log("SWAPI status:", response.status); // Should be 200
    res.json(response.data);
  } catch (err: any) {
    console.error("SWAPI error:", err.message);
    res.status(500).json({ error: "Failed to fetch from SWAPI" });
  }
});

export const testRouter = router;
