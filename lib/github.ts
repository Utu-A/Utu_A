// lib/github.ts
export const fetchUserRepos = async (username: string) => {
  const githubToken = process.env.NEXT_PUBLIC_GITHUB_TOKEN;
  const url = `https://api.github.com/users/${username}/repos?per_page=100`;

  // Debug logs
  console.log('Username:', username);
  console.log('Token exists:', !!githubToken);
  console.log('API URL:', url);

  try {
    const response = await fetch(url, {
      headers: {
        Authorization: `Bearer ${githubToken}`,
        Accept: "application/vnd.github.v3+json",
      },
    });

    console.log('Response status:', response.status);

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Error response:', errorText);
      throw new Error(`GitHub API error: ${response.status} ${errorText}`);
    }

    const data = await response.json();
    console.log('Fetched repos count:', data.length);
    return data;
  } catch (error) {
    console.error('Fetch error:', error);
    return [];
  }
};

export const fetchRepoReadme = async (username: string, repoName: string): Promise<string> => {
  const githubToken = process.env.NEXT_PUBLIC_GITHUB_TOKEN;
  const url = `https://api.github.com/repos/${username}/${repoName}/contents/README.md`;

  console.log('Fetching README for:', username, repoName);
  
  try {
    const response = await fetch(url, {
      headers: {
        ...(githubToken ? { Authorization: `Bearer ${githubToken}` } : {}),
        Accept: "application/vnd.github.v3.raw",
      },
    });

    if (!response.ok) {
      // Try lowercase readme filename if uppercase doesn't work
      const lowercaseUrl = `https://api.github.com/repos/${username}/${repoName}/contents/readme.md`;
      const lowercaseResponse = await fetch(lowercaseUrl, {
        headers: {
          ...(githubToken ? { Authorization: `Bearer ${githubToken}` } : {}),
          Accept: "application/vnd.github.v3.raw",
        },
      });

      if (!lowercaseResponse.ok) {
        throw new Error(`README not found for ${repoName}`);
      }

      return await lowercaseResponse.text();
    }

    return await response.text();
  } catch (error) {
    console.error("Error fetching README:", error);
    return "No README found for this repository";
  }
};