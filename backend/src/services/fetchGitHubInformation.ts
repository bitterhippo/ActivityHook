import axios from "axios";

export async function fetchGitHubActivity(username: string, token: string) {
  const response = await axios.get(
    `https://api.github.com/users/${username}/events/public`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
        "User-Agent": "ActivityHook-App",
        Accept: "application/vnd.github+json",
      },
    }
  );

  return response.data;
}
