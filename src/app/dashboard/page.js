// src/app/dashboard/page.js
"use client"; // This makes the component a Client Component
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function DashboardPage() {
  const [activeDropdown, setActiveDropdown] = useState(null);

  // Toggle function to show/hide the dropdown
  const toggleDropdown = (option) => {
    setActiveDropdown(activeDropdown === option ? null : option);
  };

  // Animation variants for the page transition
  const pageVariants = {
    hidden: { opacity: 0, y: 50 },
    enter: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 50 },
  };

  // Animation variants for the dropdowns
  const dropdownVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: { opacity: 1, height: 'auto' },
  };

  return (
    <>
      <Header />
      {/* Page transition animation using motion.div */}
      <motion.div
        initial="hidden"
        animate="enter"
        exit="exit"
        variants={pageVariants}
        transition={{ duration: 0.6, ease: 'easeInOut' }}
        className="min-h-screen bg-gradient-to-br from-gray-800 to-gray-900 flex flex-col items-center justify-center py-10"
      >
        <h2 className="text-5xl font-bold tracking-tight text-white mb-12 text-center">
          Choose an Option
        </h2>

        <div className="flex flex-col md:flex-row items-center justify-center space-y-6 md:space-y-0 md:space-x-8">
          {/* Prompt Analyzer Button with Dropdown */}
          <div className="relative w-80">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <button
                onClick={() => toggleDropdown('prompt-analyzer')}
                className="w-full py-6 px-12 bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-700 hover:to-blue-500 text-white rounded-lg text-2xl font-semibold shadow-lg transform transition-all duration-500 hover:scale-105 hover:shadow-2xl"
              >
                Prompt Analyzer
              </button>
            </motion.div>

            {/* Dropdown Content */}
            <motion.div
              variants={dropdownVariants}
              initial="hidden"
              animate={activeDropdown === 'prompt-analyzer' ? 'visible' : 'hidden'}
              transition={{ duration: 0.4, ease: 'easeInOut' }}
              className="overflow-hidden"
            >
              <div className="bg-gray-700 text-white p-4 rounded-lg mt-4 shadow-md">
                <p className="text-sm mb-4">
                  The Prompt Analyzer helps you analyze and optimize your AI prompts for better results. Get detailed feedback on how to enhance your input.
                </p>
                <Link href="/prompt-analyzer">
                  <button className="w-full py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700">
                    Go to Prompt Analyzer
                  </button>
                </Link>
              </div>
            </motion.div>
          </div>

          {/* LearnAI Button with Dropdown */}
          <div className="relative w-80">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <button
                onClick={() => toggleDropdown('learn-ai')}
                className="w-full py-6 px-12 bg-gradient-to-r from-green-500 to-green-700 hover:from-green-700 hover:to-green-500 text-white rounded-lg text-2xl font-semibold shadow-lg transform transition-all duration-500 hover:scale-105 hover:shadow-2xl"
              >
                LearnAI
              </button>
            </motion.div>

            {/* Dropdown Content */}
            <motion.div
              variants={dropdownVariants}
              initial="hidden"
              animate={activeDropdown === 'learn-ai' ? 'visible' : 'hidden'}
              transition={{ duration: 0.4, ease: 'easeInOut' }}
              className="overflow-hidden"
            >
              <div className="bg-gray-700 text-white p-4 rounded-lg mt-4 shadow-md">
                <p className="text-sm mb-4">
                  LearnAI offers lessons on how to create effective prompts for AI tools, teaching you how to interact with AI models to achieve the best results.
                </p>
                <Link href="/howtoai">
                  <button className="w-full py-2 px-4 bg-green-600 text-white rounded-md hover:bg-green-700">
                    Go to LearnAI
                  </button>
                </Link>
              </div>
            </motion.div>
          </div>

          {/* AI Game Button with Dropdown */}
          <div className="relative w-80">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <button
                onClick={() => toggleDropdown('ai-game')}
                className="w-full py-6 px-12 bg-gradient-to-r from-purple-500 to-purple-700 hover:from-purple-700 hover:to-purple-500 text-white rounded-lg text-2xl font-semibold shadow-lg transform transition-all duration-500 hover:scale-105 hover:shadow-2xl"
              >
                AI Trainer Quiz
              </button>
            </motion.div>

            {/* Dropdown Content */}
            <motion.div
              variants={dropdownVariants}
              initial="hidden"
              animate={activeDropdown === 'ai-game' ? 'visible' : 'hidden'}
              transition={{ duration: 0.4, ease: 'easeInOut' }}
              className="overflow-hidden"
            >
              <div className="bg-gray-700 text-white p-4 rounded-lg mt-4 shadow-md">
                <p className="text-sm mb-4">
                  Test your knowledge of AI models with our AI Trainer Quiz. Challenge yourself and see how well you've mastered the concepts!
                </p>
                <Link href="/ai-game">
                  <button className="w-full py-2 px-4 bg-purple-600 text-white rounded-md hover:bg-purple-700">
                    Play AI Trainer Quiz
                  </button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
      <Footer />
    </>
  );
}
