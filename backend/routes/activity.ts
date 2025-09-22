import express from "express";
import { Router } from "express";
import axios from "axios";
import dotenv from "dotenv";
import { fetchGitHubActivity } from "../services/fetchGitHubInformation";
dotenv.config();

const user = process.env.GITHUB_USERNAME!;
const token = process.env.GITHUB_TOKEN!;

const router = Router();

router.get("/", async (req, res) => {
  try {
    const data = await fetchGitHubActivity(user, token);
    res.json(data);
  } catch (err: any) {
    console.error(
      "GitHub API error:",
      err.response?.status,
      err.response?.data || err.message
    );
    res.status(500).json({ error: "Failed to fetch GitHub activity" });
  }
});

export const activityRouter = router;
