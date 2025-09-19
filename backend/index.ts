import express from "express";
import axios from "axios";
import dotenv from "dotenv";
dotenv.config();

const user = process.env.GITHUB_USERNAME;
const token = process.env.GITHUB_TOKEN;

console.log("Loaded username:", user);

const app = express();
const PORT = process.env.PORT || 4000;

// Example endpoint to pull GitHub activity
app.get("/activity", async (req, res) => {
  try {
    const username = user;
    const response = await axios.get(
      `https://api.github.com/users/${username}/events/public`,
      {
        headers: {
          Authorization: `token ${process.env.GITHUB_TOKEN}`,
        },
      }
    );
    res.json(response.data);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch GitHub activity" });
  }
});

app.listen(PORT, () => {
  console.log(`Backend running at http://localhost:${PORT}`);
});
