"use client";

import React from "react";
import { Timeline } from "@/components/ui/timeline";
import { Dialog } from "@/components/ui/dialog";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, X } from "lucide-react";

// ... (previous interfaces and type definitions remain the same)
interface ResearchPaper {
    title: string;
    abstract: string;
    published: string;
    journal: string;
    impact: string;
    pdfLink: string;
  }

export function ResearchTimeline() {
  const [selectedPaper, setSelectedPaper] = React.useState<ResearchPaper | null>(null);
  const dialogRef = React.useRef<HTMLDivElement>(null);

  // Our research papers data remains the same
  const researchPapers: ResearchPaper[] = [
    {
      title: "Advancements in Quantum Computing using BB84 protocol",
      abstract: "This research explores novel implementations of the BB84 quantum key distribution protocol, demonstrating significant improvements in security and efficiency. Our findings show a 40% reduction in quantum bit error rate while maintaining practical implementation feasibility.",
      published: "January 2024",
      journal: "Quantum Information Processing",
      impact: "Cited by 15 research groups worldwide",
      pdfLink: "https://drive.google.com/file/d/your-file-id/view?usp=sharing"
    },
    {
      title: "Solar panel cleaner without use of water",
      abstract: "We present an innovative approach to solar panel cleaning that eliminates water usage through electrostatic dust repulsion combined with mechanical automation. This system achieves 95% cleaning efficiency while reducing maintenance costs by 60%.",
      published: "March 2024",
      journal: "Renewable Energy Technologies",
      impact: "Patent pending, adopted by 3 major solar farms",
      pdfLink: "https://drive.google.com/file/d/your-file-id/view?usp=sharing"
    }
  ];

  // Timeline data structure remains the same
  const timelineData = [
    {
      title: "2024",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Published groundbreaking research in quantum computing and sustainable technology.
          </p>
          <div className="grid grid-cols-2 gap-4">
            {researchPapers.map((paper, index) => (
              <div
                key={index}
                onClick={() => setSelectedPaper(paper)}
                className="relative h-20 md:h-44 lg:h-60 w-full cursor-pointer group overflow-hidden rounded-lg transition-transform duration-300 hover:scale-105 bg-gray-200 dark:bg-gray-800"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent transition-opacity duration-300">
                  <p className="absolute bottom-4 left-4 right-4 text-white text-sm font-medium">
                    {paper.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ),
    },
  ];

  // Handler for PDF link clicks
  const handlePDFClick = (e: React.MouseEvent, pdfLink: string) => {
    e.stopPropagation();
    window.open(pdfLink, '_blank');
  };

  // Handler for closing the dialog
  const handleClose = () => {
    setSelectedPaper(null);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 py-8 relative">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 mt-20 bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500">
            Research Journey
          </h1>
          <p className="text-neutral-600 dark:text-neutral-300 text-lg md:text-xl max-w-3xl mx-auto">
            Exploring the frontiers of quantum computing and sustainable technology
          </p>
        </div>
        <div className="relative bg-white/5 backdrop-blur-sm rounded-xl p-6 md:p-8">
          <Timeline data={timelineData} />
        </div>
      </div>

      <AnimatePresence>
        {selectedPaper && (
          <Dialog>
            <div className="fixed inset-0 bg-black/50 z-40" onClick={handleClose} />
            <motion.div
              ref={dialogRef}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4"
            >
              <div className="bg-white dark:bg-gray-900 rounded-xl p-6 max-w-2xl w-full shadow-xl relative">
                {/* New, more prominent close button */}
                <div className="absolute right-0 top-0 p-4">
                  <button
                    onClick={handleClose}
                    className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 transition-colors duration-200 group"
                    aria-label="Close dialog"
                  >
                    <X 
                      size={20} 
                      className="text-gray-600 dark:text-gray-300 group-hover:text-gray-800 dark:group-hover:text-white transition-colors duration-200"
                    />
                  </button>
                </div>

                <div className="relative w-full h-64 mb-6 bg-gray-200 dark:bg-gray-800 rounded-lg">
                  <div className="absolute inset-0 flex items-center justify-center text-gray-500 dark:text-gray-400">
                    <p className="text-sm">{selectedPaper.title}</p>
                  </div>
                </div>

                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500">
                    {selectedPaper.title}
                  </h2>
                  <button
                    onClick={(e) => handlePDFClick(e, selectedPaper.pdfLink)}
                    className="flex items-center gap-1 px-3 py-1.5 text-sm rounded-lg bg-purple-500 hover:bg-purple-600 text-white transition-colors"
                  >
                    <ExternalLink size={14} />
                    <span>View PDF</span>
                  </button>
                </div>

                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {selectedPaper.abstract}
                </p>

                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="font-semibold">Published</p>
                    <p className="text-gray-600 dark:text-gray-400">{selectedPaper.published}</p>
                  </div>
                  <div>
                    <p className="font-semibold">Journal</p>
                    <p className="text-gray-600 dark:text-gray-400">{selectedPaper.journal}</p>
                  </div>
                  <div className="col-span-2">
                    <p className="font-semibold">Impact</p>
                    <p className="text-gray-600 dark:text-gray-400">{selectedPaper.impact}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </Dialog>
        )}
      </AnimatePresence>
    </div>
  );
}