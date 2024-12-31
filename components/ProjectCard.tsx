// components/ProjectCard.tsx
"use client";

import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { motion } from 'framer-motion';
import { Github } from 'lucide-react';
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
  const username = "your-github-username"; // Replace with your GitHub username

  const handleClick = async () => {
    if (!readme) {
      const fetchedReadme = await fetchRepoReadme(username, repo.name);
      setReadme(fetchedReadme);
    }
    setIsOpen(true);
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
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>{repo.name}</DialogTitle>
          </DialogHeader>
          <div className="prose dark:prose-invert">
            {readme ? (
              <pre className="whitespace-pre-wrap">{readme}</pre>
            ) : (
              <p>Loading README...</p>
            )}
          </div>
          <div className="mt-4">
            <a
              href={repo.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              View on GitHub
            </a>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ProjectCard;