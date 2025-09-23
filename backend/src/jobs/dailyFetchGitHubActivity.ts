// import cron from "node-cron";
// import { fetchGitHubActivity } from "../services/fetchGitHubActivity";
// import dotenv from "dotenv";
// dotenv.config();

// const user = process.env.GITHUB_USERNAME!;
// const token = process.env.GITHUB_TOKEN!;

// const runJob = async () => {
//   console.log("🔄 Job triggered at", new Date().toISOString());
//   try {
//     const data = await fetchGitHubActivity(user, token);
//     console.log("✅ Fetched activity data:", JSON.stringify(data, null, 2));
//   } catch (err) {
//     console.error("❌ Error fetching activity:", err);
//   }
// };

// // Immediately invoke once
// runJob();

// // Then schedule it every 2 minutes
// cron.schedule("*/2 * * * *", runJob);
