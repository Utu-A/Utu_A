"use client"; // This tells Next.js that this file is a client component.

import { useState } from "react";
import { fetchRepoReadme } from "@/lib/github";

interface ProjectCardProps {
  repoName: string; // e.g., "your-username/your-repo-name"
  title: string;
  description: string;
}

const ProjectCard = ({ repoName, title, description }: ProjectCardProps) => {
  const [readme, setReadme] = useState<string | null>(null);

  const handleMouseEnter = async () => {
    if (!readme) {
      const fetchedReadme = await fetchRepoReadme(repoName);
      setReadme(fetchedReadme);
    }
  };

  return (
    <div
      onMouseEnter={handleMouseEnter}
      className="relative w-64 h-40 group"
    >
      {/* Card */}
      <div className="p-4 border rounded-lg bg-white shadow-lg">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-sm text-gray-600">{description}</p>
      </div>

      {/* Hover Overlay */}
      {readme && (
        <div className="absolute inset-0 bg-black bg-opacity-80 text-white p-4 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 overflow-y-auto">
          <pre className="text-sm whitespace-pre-wrap">{readme}</pre>
        </div>
      )}
    </div>
  );
};

export default ProjectCard;
