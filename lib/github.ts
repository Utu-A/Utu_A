// src/lib/github.ts
export const fetchUserRepos = async (username: string) => {
  const githubToken = process.env.NEXT_PUBLIC_GITHUB_TOKEN; // Token from environment
  const url = `https://api.github.com/users/${username}/repos?per_page=100`; // Fetch up to 100 repos

  try {
    const response = await fetch(url, {
      headers: {
        Authorization: `Bearer ${githubToken}`,
        Accept: "application/vnd.github.v3+json",
      },
    });

    if (!response.ok) {
      const errorMessage = await response.text();
      throw new Error(`Failed to fetch repos: ${response.status} - ${errorMessage}`);
    }

    const repos = await response.json(); // Parse JSON response
    return repos; // Array of repository objects
  } catch (error) {
    console.error("Error fetching repositories:", error);
    return []; // Return an empty array if something goes wrong
  }
};

// Add this function to fetch the README of a repository
export const fetchRepoReadme = async (username: string, repoName: string): Promise<string> => {
  const githubToken = process.env.NEXT_PUBLIC_GITHUB_TOKEN; // Token from environment
  const url = `https://api.github.com/repos/${username}/${repoName}/readme`; // Fetch the README for a specific repo

  try {
    const response = await fetch(url, {
      headers: {
        Authorization: `Bearer ${githubToken}`,
        Accept: "application/vnd.github.v3.raw", // To get raw content of the README
      },
    });

    if (!response.ok) {
      const errorMessage = await response.text();
      throw new Error(`Failed to fetch README for ${repoName}: ${response.status} - ${errorMessage}`);
    }

    const readme = await response.text(); // Get raw README content
    return readme;
  } catch (error) {
    console.error("Error fetching README:", error);
    return "README not found"; // Return a fallback message if something goes wrong
  }
};
