"use client";

import React, { useRef, ReactNode } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import Introduction from "@/components/Introduction";
import Projects from "@/components/Projects";
import { ResearchTimeline } from "@/components/Research";
import ProfileCard from "@/components/ProfileCard";
import About from "@/components/About";
import { useTheme } from "next-themes";

const scrollbarHiddenStyles = `
  ::-webkit-scrollbar {
    display: none;
  }

  -ms-overflow-style: none;
  scrollbar-width: none;
`;

const FadingText = ({ children }: { children: ReactNode }) => {
  const textRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: textRef,
    offset: ["start start", "end start"],
  });

  return (
    <motion.div
      ref={textRef}
      style={{ opacity: scrollYProgress }}
      className="w-full"
    >
      {children}
    </motion.div>
  );
};

interface SectionProps {
  children: ReactNode;
  className?: string;
}

const Section: React.FC<SectionProps> = ({ children, className = "" }) => (
  <motion.section
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.5 }}
    className={`min-h-screen w-full flex items-center justify-center ${className}`}
  >
    {children}
  </motion.section>
);

const ContactButton = () => {
  return (
    <a
      href="/auth/contact"
      className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
    >
      <div className="absolute inset-0 w-full h-full rounded-full bg-gradient-to-br from-orange-500 via-pink-500 to-purple-500 opacity-70 blur-lg group-hover:opacity-100 transition-opacity" />
      <div className="absolute inset-0 w-full h-full rounded-full bg-gradient-to-br from-orange-500 via-pink-500 to-purple-500 group-hover:scale-105 transition-transform" />
      <span className="relative">Let&apos;s Connect!</span>
      <svg
        className="relative ml-2 h-5 w-5 transition-transform group-hover:translate-x-1"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M13 7l5 5m0 0l-5 5m5-5H6"
        />
      </svg>
    </a>
  );
};

export default function HomePage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const { theme } = useTheme();

  const contactText = 
  theme === "dark"
    ? "Let's build something incredible together in the shadows of creativity!"
    : theme === "light"
      ? "I'm always excited to collaborate on new projects and discuss innovative ideas."
      : "Welcome to the default mode, where innovation meets simplicity!";

  return (
    <>
      <style jsx global>
        {scrollbarHiddenStyles}
      </style>
      <div
        ref={containerRef}
        className="bg-background transition-colors duration-500"
      >
        {/* Gradient Fade Overlay */}
        <div className="pointer-events-none fixed left-0 top-0 h-24 w-full bg-background to-transparent backdrop-blur-sm [-webkit-mask-image:linear-gradient(to_bottom,black,transparent)]" />
      
        {/* Introduction Section */}
        <Section className="bg-background">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6 max-w-7xl mx-auto">
            <ProfileCard />
            <Introduction />
          </div>
        </Section>

        {/* About Section */}
        <Section className="bg-background">
          <div className="w-full max-w-7xl mx-auto px-6">
            <About />
          </div>
        </Section>

        {/* Projects Section */}
        <Section className="bg-background">
          <div className="w-full max-w-7xl mx-auto px-6">
            <Projects />
          </div>
        </Section>

        {/* Research Section */}
        <Section className="bg-background">
          <div className="w-full max-w-7xl mx-auto px-6">
            <ResearchTimeline />
          </div>
        </Section>

        {/* Contact Section */}
        <Section className="bg-background">
          <div className="w-full max-w-7xl mx-auto px-6 flex flex-col items-center justify-center space-y-6">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-orange-400 via-pink-400 to-purple-400 bg-clip-text text-transparent text-center">
              Ready to Start a Conversation?
            </h2>
            <p className="text-lg text-slate-300 dark:text-slate-300 text-center max-w-2xl">
              {contactText}
            </p>
            <ContactButton />
          </div>
        </Section>

        {/* Progress Bar */}
        <motion.div
          className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 origin-left"
          style={{ scaleX: smoothProgress }}
        />
      </div>
    </>
  );
}