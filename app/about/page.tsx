"use client";

import React from "react";
import ProfileCard from "@/components/ProfileCard";
import { LampContainer } from "@/components/ui/lamp";
import { motion } from "framer-motion";

const AboutPage = () => {
  return (
    // The outer container now uses slate-950 as the base background color to match the lamp theme
    <div className="min-h-screen bg-slate-950">
      {/* The Lamp Container remains unchanged to preserve its effects */}
      <LampContainer>
        <motion.h1
          initial={{ opacity: 0.5, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          // Updated gradient colors to match the cyan theme
          className="mt-8 bg-gradient-to-br from-cyan-200 to-cyan-400 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
        >
          About Me
        </motion.h1>
      </LampContainer>

      {/* Main content section with updated colors */}
      <div className="relative z-10 px-6 py-12 bg-slate-950">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 max-w-7xl mx-auto">
          <ProfileCard />
          <div className="space-y-6">
            {/* Adding a subtle heading to match the theme */}
            <h2 className="text-2xl font-semibold bg-gradient-to-r from-cyan-400 to-cyan-200 bg-clip-text text-transparent">
              My Journey
            </h2>
            
            {/* Text content with updated colors and spacing */}
            <div className="space-y-4">
              <p className="text-lg text-slate-300">
                Hello! I'm a final-year Electrical Engineering student passionate about technology and innovation. I serve as the cybersecurity leader at my college, contributing to a safe digital environment and raising awareness about cybersecurity best practices. Additionally, I'm the secretary of the robotics team, where I help drive projects and foster collaboration among team members. As the payload lead of the rocketry team, I ensure the development of payload systems for successful rocket launches.
              </p>
              
              <p className="text-lg text-slate-300">
                I also have research certified by Microsoft and Google in the field of quantum communication, which demonstrates my commitment to exploring cutting-edge technologies. Alongside my academic and extracurricular pursuits, I have a strong interest in software development, with a focus on creating intuitive and impactful projects. My journey is driven by a passion for learning and contributing to meaningful technological advancements.
              </p>
              
              {/* Call to action paragraph with slightly brighter text */}
              <p className="text-lg text-slate-200">
                Feel free to explore my projects and reach out if you'd like to collaborate or discuss ideas. I'm always open to exciting opportunities in the fields of technology, engineering, and research.
              </p>
            </div>

            {/* Optional: Adding an accent border with the theme color */}
            <div className="h-1 w-32 bg-gradient-to-r from-cyan-500 to-transparent rounded-full" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;