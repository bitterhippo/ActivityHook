import express from "express";
import axios from "axios";
import dotenv from "dotenv";
dotenv.config();

const user = process.env.GITHUB_USERNAME;
const token = process.env.GITHUB_TOKEN;

const app = express();
const PORT = 4000;

app.get("/activity", async (req, res) => {
  try {
    const response = await axios.get(
      `https://api.github.com/users/${user}/events/public`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "User-Agent": "ActivityHook-App",
          Accept: "application/vnd.github+json",
        },
      }
    );

    res.json(response.data);
  } catch (err: any) {
    console.error(
      "GitHub API error:",
      err.response?.status,
      err.response?.data || err.message
    );
    res.status(500).json({ error: "Failed to fetch GitHub activity" });
  }
});
