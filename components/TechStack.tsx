"use client"; // Mark as client component to avoid SSR
import React from "react";
import dynamic from "next/dynamic";

// Dynamically import IconCloud with no SSR
const IconCloud = dynamic(() => import("@/components/ui/icon-cloud"), { ssr: false });

// Define the tech stack with corresponding Simple Icons slugs
const techStackSlugs = [
  "qiskit",
  "html5",
  "css3",
  "nextdotjs",
  "c",
  "java",
  "javascript",
  "python",
  "gnubash",
  "flutter",
  "opencv",
  "react",
  "docker",
  "arduino",
  "cirq",
];

export const TechStack = () => {
  const [isMounted, setIsMounted] = React.useState(false);

  // Only render on client side
  React.useEffect(() => {
    setIsMounted(true);
    console.log("Tech Stack Slugs Length:", techStackSlugs.length); // Debugging length
  }, []);

  return (
    <div className="w-full py-12">
      <h3 className="text-2xl font-bold text-center mb-8">Tech Stack</h3>
      <div className="relative flex w-full max-w-4xl mx-auto items-center justify-center overflow-hidden rounded-lg bg-background px-8 pb-20 pt-8">
        {isMounted && <IconCloud iconSlugs={techStackSlugs} />}
      </div>
    </div>
  );
};
