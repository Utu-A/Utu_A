// components/Projects.tsx
"use client";

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';
import { fetchUserRepos } from '@/lib/github';

interface Repo {
  id: number;
  name: string;
  description: string | null;
  stargazers_count: number;
  updated_at: string;
  html_url: string;
}

const Projects = () => {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const username = "Utu-A"; // Replace with your actual username
  const spinningTexts = ["Featured Projects", "Open Source Work", "Latest Builds"];
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  useEffect(() => {
    const getRepos = async () => {
      try {
        setLoading(true);
        setError(null);
        const fetchedRepos = await fetchUserRepos(username);
        
        if (fetchedRepos.length === 0) {
          setError('No repositories found. Please check your GitHub username and token.');
          return;
        }

        const sortedRepos = fetchedRepos.sort((a: Repo, b: Repo) => {
          if (b.stargazers_count !== a.stargazers_count) {
            return b.stargazers_count - a.stargazers_count;
          }
          return new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime();
        });
        setRepos(sortedRepos);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch repositories');
      } finally {
        setLoading(false);
      }
    };

    getRepos();

    const interval = setInterval(() => {
      setCurrentTextIndex((prev) => (prev + 1) % spinningTexts.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <motion.h1 
        key={currentTextIndex}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        className="text-4xl font-bold text-center mb-12"
      >
        {spinningTexts[currentTextIndex]}
      </motion.h1>

      {loading && (
        <div className="text-center py-10">
          <p className="text-lg">Loading repositories...</p>
        </div>
      )}

      {error && (
        <div className="text-center py-10">
          <p className="text-red-500">{error}</p>
          <p className="mt-2">Please check:</p>
          <ul className="list-disc list-inside mt-2">
            <li>Your GitHub username is correct</li>
            <li>Your NEXT_PUBLIC_GITHUB_TOKEN is set in .env.local</li>
            <li>Your GitHub token has the necessary permissions</li>
          </ul>
        </div>
      )}

      {!loading && !error && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {repos.map((repo) => (
            <ProjectCard key={repo.id} repo={repo} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Projects;