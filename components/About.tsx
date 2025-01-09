"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { TechStack } from "./TechStack";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const spinningTexts = ["Who am I?", "Your best chance?", "I'm Batman"];

const workExperience = [
  {
    company: "Google",
    role: "SDE3",
    duration: "1994 - 2000",
    logo: "/logos/google.png", // Replace with the correct path
  },
  {
    company: "Microsoft",
    role: "SDE2",
    duration: "1984 - 1994",
    logo: "/logos/microsoft.png", // Replace with the correct path
  },
  {
    company: "Blackrock",
    role: "SDE1",
    duration: "1950 - 1984",
    logo: "/logos/blackrock.png", // Replace with the correct path
  },
];

const education = [
  {
    institution: "Oxford College",
    degree: "Engineering",
    duration: "1990 - 1993",
    logo: "/logos/oxford.png", // Replace with the correct path
  },
  {
    institution: "Harvard College",
    degree: "PG Diploma in MTech",
    duration: "1993 - 1995",
    logo: "/logos/harvard.png", // Replace with the correct path
  },
];

const About = () => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prev) => (prev + 1) % spinningTexts.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="about-section py-10 px-5 bg-background text-foreground">
      <div className="container mx-auto max-w-4xl">
        <motion.h1
          key={currentTextIndex}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="text-4xl font-bold text-center mb-10"
        >
          {spinningTexts[currentTextIndex]}
        </motion.h1>

        <div className="space-y-6">
          <p className="text-lg leading-7">
            Hello! My name is Matt, and I am an Electrical Engineering final-year student with a strong passion for technology and innovation. I am a seasoned software developer with a focus on creating efficient and scalable solutions, and I actively contribute as a cybersecurity leader at my college.
          </p>
          <p className="text-lg leading-7">
            I have the honor of serving as the secretary of the robotics team, where I help spearhead cutting-edge projects, and as the payload lead for the rocketry team, where I guide the design and development of payload systems. My research in quantum communication, certified by Microsoft and Google, is a testament to my dedication to pushing the boundaries of what technology can achieve.
          </p>
          <p className="text-lg leading-7">
            Beyond academics and research, I am deeply committed to fostering teamwork, continuous learning, and innovation. This portfolio showcases my journey, projects, and aspirations. Feel free to explore and connect with me to discuss collaboration opportunities!
          </p>
        </div>

        <TechStack />

        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-6">Work Experience</h2>
          {workExperience.map((job, index) => (
            <Card
              key={index}
              className="flex items-center justify-between p-4 mb-4 bg-card text-card-foreground shadow-sm"
            >
              <div className="flex items-center space-x-4">
                <Avatar>
                  <AvatarImage src={job.logo} alt={`${job.company} logo`} />
                  <AvatarFallback>{job.company[0]}</AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="text-lg font-semibold">{job.company}</h3>
                  <p className="text-sm text-muted-foreground">{job.role}</p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground">{job.duration}</p>
            </Card>
          ))}
        </div>

        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-6">Education</h2>
          {education.map((edu, index) => (
            <Card
              key={index}
              className="flex items-center justify-between p-4 mb-4 bg-card text-card-foreground shadow-sm"
            >
              <div className="flex items-center space-x-4">
                <Avatar>
                  <AvatarImage src={edu.logo} alt={`${edu.institution} logo`} />
                  <AvatarFallback>{edu.institution[0]}</AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="text-lg font-semibold">{edu.institution}</h3>
                  <p className="text-sm text-muted-foreground">{edu.degree}</p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground">{edu.duration}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
