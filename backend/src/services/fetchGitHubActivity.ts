import axios from "axios";

export async function fetchGitHubActivity(username: string, token: string) {
  try {
    const response = await axios.get(
      `https://api.github.com/users/${username}/events/public`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "User-Agent": "ActivityHook-App",
          Accept: "application/vnd.github+json",
          "X-GitHub-Api-Version": "2022-11-28",
        },
      }
    );

    return response.data;
  } catch (err: any) {
    console.error(
      "❌ GitHub API request failed:",
      err.response?.status,
      err.response?.data || err.message
    );
    throw err;
  }
}
