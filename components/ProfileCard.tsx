"use client";

import { Mail, Linkedin, Github } from "lucide-react";
import { FaDiscord } from "react-icons/fa";
import { SpinningText } from "@/components/ui/spinning-text";

const ProfileCard: React.FC = () => {
  return (
    <div className="bg-card rounded-2xl p-12">
      <div className="relative w-48 h-48 mx-auto mb-9">
        <SpinningText
          radius={17}
          fontSize={0.8}
          className="absolute inset-0 translate-y-2 font-medium leading-none text-peach-500"
        >
          UTKARSH SINGH • UTKARSH SINGH • UTKARSH SINGH • UTKARSH SINGH •
        </SpinningText>
        <div className="absolute inset-6 bg-card rounded-full" />
        <img
          src="/api/placeholder/192/192"
          alt="Profile"
          className="absolute inset-10 rounded-full object-cover"
        />
      </div>
      <h2 className="text-2xl font-bold text-center mb-2">Utkarsh Singh</h2>
      <p className="text-muted-foreground text-center mb-6">
        Developer and Researcher
      </p>
      <div className="flex justify-center gap-4">
        <a
          href="https://www.discord.com/discord"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Discord Profile"
          className="p-2 hover:text-orange-500"
        >
          <FaDiscord size={20} />
        </a>
        <a
          href="mailto:example@domain.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Email"
          className="p-2 hover:text-orange-500"
        >
          <Mail size={20} />
        </a>
        <a
          href="https://www.linkedin.com/in/utkarshsinghrajput23/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn Profile"
          className="p-2 hover:text-orange-500"
        >
          <Linkedin size={20} />
        </a>
        <a
          href="https://github.com/Utu-A"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub Profile"
          className="p-2 hover:text-orange-500"
        >
          <Github size={20} />
        </a>
      </div>
    </div>
  );
};

export default ProfileCard;