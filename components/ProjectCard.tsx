// components/ProjectCard.tsx
"use client";

import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { motion } from 'framer-motion';
import { Github, Loader2 } from 'lucide-react';
import { fetchRepoReadme } from '@/lib/github';

interface Repo {
  id: number;
  name: string;
  description: string | null;
  stargazers_count: number;
  updated_at: string;
  html_url: string;
}

interface ProjectCardProps {
  repo: Repo;
}

const ProjectCard = ({ repo }: ProjectCardProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [readme, setReadme] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const username = "Utu-A"; // Your actual GitHub username

  const handleClick = async () => {
    setIsOpen(true);
    if (!readme && !error) {
      setIsLoading(true);
      try {
        const fetchedReadme = await fetchRepoReadme(username, repo.name);
        setReadme(fetchedReadme);
        setError(null);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load README');
      } finally {
        setIsLoading(false);
      }
    }
  };

  return (
    <>
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="p-6 bg-card rounded-xl shadow-lg cursor-pointer"
        onClick={handleClick}
      >
        <h3 className="text-xl font-semibold mb-2">{repo.name}</h3>
        <p className="text-muted-foreground mb-4">
          {repo.description || "No description available."}
        </p>
        <div className="flex justify-between items-center">
          <span className="flex items-center gap-1">
            <span>⭐</span>
            {repo.stargazers_count}
          </span>
          <Github className="w-5 h-5" />
        </div>
      </motion.div>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>{repo.name}</DialogTitle>
          </DialogHeader>
          <div className="prose dark:prose-invert">
            {isLoading ? (
              <div className="flex items-center justify-center py-8">
                <Loader2 className="w-8 h-8 animate-spin" />
              </div>
            ) : error ? (
              <div className="text-red-500">
                <p>{error}</p>
                <p className="mt-4">{repo.description}</p>
              </div>
            ) : (
              <div className="whitespace-pre-wrap">
                {readme || repo.description || "No content available."}
              </div>
            )}
          </div>
          <div className="mt-4 flex justify-between items-center">
            <a
              href={repo.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              View on GitHub
            </a>
            <p className="text-sm text-muted-foreground">
              Last updated: {new Date(repo.updated_at).toLocaleDateString()}
            </p>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ProjectCard;