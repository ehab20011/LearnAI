// src/app/howtoai/page.js

"use client";  // Add this directive at the top

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function HowToAIPage() {
  // State to control dropdown visibility
  const [activeDropdown, setActiveDropdown] = useState(null);

  // Toggle function for dropdowns
  const toggleDropdown = (lesson) => {
    setActiveDropdown(activeDropdown === lesson ? null : lesson);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 text-white flex flex-col items-center py-10">
      <h2 className="text-5xl font-bold tracking-tight mb-12 text-center">
        Choose Your Lesson
      </h2>

      <div className="flex flex-col md:flex-row items-center justify-center space-y-6 md:space-y-0 md:space-x-8">
        
        {/* Lesson 1 - Google NotebookLM */}
        <div className="relative w-64">
          <button
            onClick={() => toggleDropdown('lesson1')}
            className="w-full py-3 px-8 bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-700 hover:to-blue-500 rounded-full text-lg font-semibold shadow-lg transform transition-all duration-500 hover:scale-105 hover:shadow-2xl cursor-pointer"
          >
            Google NotebookLM
          </button>

          <div
            className={`absolute top-20 w-full p-4 bg-white text-gray-800 rounded-lg shadow-lg z-10 transition-all duration-500 ease-in-out transform ${
              activeDropdown === 'lesson1' ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'
            }`}
          >
            <Image
              src="/images/google-notebook.png"
              alt="Google Logo"
              width={500}
              height={40}
              className="mx-auto mb-2"
            />
            <p className="text-sm mb-4">
              Learn how to use Google NotebookLM, an experimental AI tool designed to enhance note-taking with advanced language models.
            </p>
            <Link href="/howtoai/lesson1">
              <button className="w-full py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700">
                Take me to Lesson 1
              </button>
            </Link>
          </div>
        </div>

        {/* Lesson 2 - ChatGPT */}
        <div className="relative w-64">
          <button
            onClick={() => toggleDropdown('lesson2')}
            className="w-full py-3 px-8 bg-gradient-to-r from-green-500 to-green-700 hover:from-green-700 hover:to-green-500 rounded-full text-lg font-semibold shadow-lg transform transition-all duration-500 hover:scale-105 hover:shadow-2xl cursor-pointer"
          >
            ChatGPT
          </button>

          <div
            className={`absolute top-20 w-full p-4 bg-white text-gray-800 rounded-lg shadow-lg z-10 transition-all duration-500 ease-in-out transform ${
              activeDropdown === 'lesson2' ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'
            }`}
          >
            <Image
              src="/images/chatgpt.png"
              alt="ChatGPT Logo"
              width={100}
              height={40}
              className="mx-auto mb-2"
            />
            <p className="text-sm mb-4">
              Dive into ChatGPT, one of the leading language models developed by OpenAI, and learn how it can assist with everyday tasks.
            </p>
            <Link href="/howtoai/lesson2">
              <button className="w-full py-2 px-4 bg-green-600 text-white rounded-md hover:bg-green-700">
                Take me to Lesson 2
              </button>
            </Link>
          </div>
        </div>

        {/* Lesson 3 - Claude */}
        <div className="relative w-64">
          <button
            onClick={() => toggleDropdown('lesson3')}
            className="w-full py-3 px-8 bg-gradient-to-r from-pink-500 to-pink-700 hover:from-pink-700 hover:to-pink-500 rounded-full text-lg font-semibold shadow-lg transform transition-all duration-500 hover:scale-105 hover:shadow-2xl cursor-pointer"
          >
            Claude
          </button>

          <div
            className={`absolute top-20 w-full p-4 bg-white text-gray-800 rounded-lg shadow-lg z-10 transition-all duration-500 ease-in-out transform ${
              activeDropdown === 'lesson3' ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'
            }`}
          >
            <Image
              src="/images/claude.png"
              alt="Claude Logo"
              width={300}
              height={40}
              className="mx-auto mb-2"
            />
            <p className="text-sm mb-4">
              Explore Claude, a state-of-the-art language model by Anthropic, and learn how it can assist with advanced tasks.
            </p>
            <Link href="/howtoai/lesson3">
              <button className="w-full py-2 px-4 bg-pink-600 text-white rounded-md hover:bg-pink-700">
                Take me to Lesson 3
              </button>
            </Link>
          </div>
        </div>

        {/* Lesson 4 - Microsoft CoPilot */}
        <div className="relative w-64">
          <button
            onClick={() => toggleDropdown('lesson4')}
            className="w-full py-3 px-8 bg-gradient-to-r from-purple-500 to-purple-700 hover:from-purple-700 hover:to-purple-500 rounded-full text-lg font-semibold shadow-lg transform transition-all duration-500 hover:scale-105 hover:shadow-2xl cursor-pointer"
          >
            Microsoft CoPilot
          </button>

          <div
            className={`absolute top-20 w-full p-4 bg-white text-gray-800 rounded-lg shadow-lg z-10 transition-all duration-500 ease-in-out transform ${
              activeDropdown === 'lesson4' ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'
            }`}
          >
            <Image
              src="/images/copilot.jpg"
              alt="Microsoft CoPilot Logo"
              width={100}
              height={40}
              className="mx-auto mb-2"
            />
            <p className="text-sm mb-4">
              Learn how Microsoft CoPilot integrates AI with productivity tools to assist you in completing everyday tasks.
            </p>
            <Link href="/howtoai/lesson4">
              <button className="w-full py-2 px-4 bg-purple-600 text-white rounded-md hover:bg-purple-700">
                Take me to Lesson 4
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
