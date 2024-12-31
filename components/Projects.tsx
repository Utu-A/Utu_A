"use client";

import { useEffect, useState } from "react";
import { fetchUserRepos } from "@/lib/github";

interface Repo {
  id: number;
  name: string;
  description: string | null;
  stargazers_count: number;
  updated_at: string;
  html_url: string;
}

const Projects = () => {
  const [repos, setRepos] = useState<Repo[]>([]); // State to store repositories
  const username = "your-github-username"; // Replace with your GitHub username

  useEffect(() => {
    const getRepos = async () => {
      const fetchedRepos: Repo[] = await fetchUserRepos(username); // Type the fetched repos

      // Sort repos: first by stars, then by recently updated
      const sortedRepos = fetchedRepos.sort((a: Repo, b: Repo) => {
        if (b.stargazers_count !== a.stargazers_count) {
          return b.stargazers_count - a.stargazers_count; // Most stars first
        }
        return new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime(); // Most recent next
      });

      setRepos(sortedRepos);
    };

    getRepos();
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">My Projects</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {repos.map((repo) => (
          <div
            key={repo.id}
            className="p-4 border rounded-lg bg-white shadow-md hover:shadow-lg transition"
          >
            <h2 className="text-lg font-semibold">{repo.name}</h2>
            <p className="text-sm text-gray-600">{repo.description || "No description available."}</p>
            <div className="mt-2 flex justify-between text-sm">
              <span>⭐ {repo.stargazers_count}</span>
              <a
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                View on GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
