import express from "express";
import axios from "axios";
import dotenv from "dotenv";
dotenv.config();

const user = process.env.GITHUB_USERNAME;
const token = process.env.GITHUB_TOKEN;

const app = express();
const PORT = 4000;

// console.log("Loaded username:", user);

// Example endpoint to pull GitHub activity

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

app.get("/swapi", async (req, res) => {
  try {
    const response = await axios.get("https://swapi.dev/api/people/1/");
    console.log("SWAPI status:", response.status); // Should be 200
    res.json(response.data);
  } catch (err: any) {
    console.error("SWAPI error:", err.message);
    res.status(500).json({ error: "Failed to fetch from SWAPI" });
  }
});

app.listen(PORT, () => {
  console.log(`Backend running at http://localhost:${PORT}`);
});
