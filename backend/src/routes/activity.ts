import { Router } from "express";
import { GitHubEvent } from "../models/GitHubEvents";
import { fetchGitHubActivity } from "../services/fetchGitHubActivity";
import dotenv from "dotenv";
dotenv.config();

const router = Router();
const user = process.env.GITHUB_USERNAME!;
const token = process.env.GITHUB_TOKEN!;

router.get("/", async (req, res) => {
  try {
    const events = await fetchGitHubActivity(user, token);

    // Save each event, skip duplicates (upsert)
    for (const e of events) {
      await GitHubEvent.updateOne(
        { id: e.id },
        {
          $set: {
            type: e.type,
            repo: e.repo,
            created_at: e.created_at,
            raw: e,
          },
        },
        { upsert: true }
      );
    }

    res.json({ message: "Events stored", count: events.length });
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
