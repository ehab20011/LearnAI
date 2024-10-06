"use client";  // This makes the component a Client Component

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { getAuth } from 'firebase/auth';  // Import Firebase Auth functions
import { query, where, collection, getDocs } from 'firebase/firestore';  // Import Firestore functions
import { db } from '../api/FirebaseConfig'; // Import Firestore instance from FirebaseConfig.js
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function HowToAIPage() {
  // State to store user progress and data
  const [userProgress, setUserProgress] = useState({
    firstName: "",
    lastName: "",
    lessons: []
  });

  useEffect(() => {
    const fetchUserData = async () => {
      const auth = getAuth();
      const user = auth.currentUser;
  
      if (user) {
        const userUID = user.uid;  // Get the logged-in user's UID
        console.log("Current logged-in user's UID:", userUID);  // Log the current user's UID
  
        // Logging to check the collection being queried
        console.log("Querying 'userInfoDatabase' collection with userUID:", userUID);
  
        // Query Firestore to match the userUID field in the correct userInfoDatabase collection
        const q = query(collection(db, "userInfoDatabase"), where("userUID", "==", userUID)); // Ensure you are querying the correct collection
        const querySnapshot = await getDocs(q);
  
        if (!querySnapshot.empty) {
          querySnapshot.forEach((doc) => {
            const userData = doc.data();
            
            // Debugging: Log the user data to verify the experience fields
            console.log("Retrieved user data:", userData);
            
            // Check the experience values to ensure they are correct
            console.log("gpt_exp:", userData.gpt_exp);
            console.log("gemini_exp:", userData.gemini_exp);
            console.log("notebook_lm_exp:", userData.notebook_lm_exp);
            console.log("copilot_exp:", userData.copilot_exp);
  
            // Define the maximum experience for each lesson (assuming 4 is the max)
            const maxExp = 4;
  
            // Update state with user progress, calculate percentage for each lesson
            setUserProgress({
              firstName: userData.firstName,
              lastName: userData.lastName,
              lessons: [
                { name: "ChatGPT", progress: Math.min((userData.gpt_exp / maxExp) * 100, 100) }, // Ensure correct calculation
                { name: "Gemini", progress: Math.min((userData.gemini_exp / maxExp) * 100, 100) },
                { name: "Google NotebookLM", progress: Math.min((userData.notebook_lm_exp / maxExp) * 100, 100) },
                { name: "Microsoft CoPilot", progress: Math.min((userData.copilot_exp / maxExp) * 100, 100) }
              ]
            });
          });
        } else {
          console.log("No matching document found for userUID:", userUID);
        }
      } else {
        console.log("No user is logged in!");
      }
    };
  
    fetchUserData();
  }, []);

  // State to control dropdown visibility
  const [activeDropdown, setActiveDropdown] = useState(null);

  // Toggle function for dropdowns
  const toggleDropdown = (lesson) => {
    setActiveDropdown(activeDropdown === lesson ? null : lesson);
  };

  // Animation variants for page transition
  const pageVariants = {
    hidden: { opacity: 0, y: 50 },
    enter: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 50 },
  };

  return (
    <>
      <Header />
      <motion.div
        initial="hidden"
        animate="enter"
        exit="exit"
        variants={pageVariants}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        className="min-h-screen bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 text-white flex flex-col items-center py-10"
      >
        <h2 className="text-5xl font-bold tracking-tight mb-12 text-center">
          Choose Your Lesson
        </h2>

        <div className="flex flex-col md:flex-row items-center justify-center space-y-6 md:space-y-0 md:space-x-8">
          
          {/* Lesson 1 - Google NotebookLM */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.95 }}
            className="relative w-64"
          >
            <button
              onClick={() => toggleDropdown('lesson1')}
              className="w-full py-5 px-8 bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-700 hover:to-blue-500 rounded-full text-lg font-semibold shadow-lg transform transition-all duration-500 hover:scale-105 hover:shadow-2xl cursor-pointer"
            >
              Google NotebookLM
            </button>

            <div
              className={`absolute top-20 w-full p-4 bg-white text-gray-800 rounded-lg shadow-lg z-10 transition-all duration-500 ease-in-out transform ${
                activeDropdown === 'lesson1' ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'
              }`}
            >
              <Image
                src="/images/google-notebook-logo.png"
                alt="Google Logo"
                width={500}
                height={40}
                style={{ width: "auto", height: "auto" }}  // Maintain aspect ratio
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
          </motion.div>

          {/* Lesson 2 - ChatGPT */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative w-64"
          >
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
                style={{ width: "auto", height: "auto" }}  // Maintain aspect ratio
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
          </motion.div>

          {/* Lesson 3 - Google Gemini */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative w-64"
          >
            <button
              onClick={() => toggleDropdown('lesson5')}
              className="w-full py-3 px-8 bg-gradient-to-r from-teal-500 to-teal-700 hover:from-teal-700 hover:to-teal-500 rounded-full text-lg font-semibold shadow-lg transform transition-all duration-500 hover:scale-105 hover:shadow-2xl cursor-pointer"
            >
              Google Gemini
            </button>

            <div
              className={`absolute top-20 w-full p-4 bg-white text-gray-800 rounded-lg shadow-lg z-10 transition-all duration-500 ease-in-out transform ${
                activeDropdown === 'lesson5' ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'
              }`}
            >
              <Image
                src="/images/gemini.png"
                alt="Google Gemini Logo"
                width={100}
                height={40}
                style={{ width: "auto", height: "auto" }}  // Maintain aspect ratio
                className="mx-auto mb-2"
              />
              <p className="text-sm mb-4">
                Discover Google Gemini, an advanced AI model for enhancing creative tasks, research, and more with powerful language understanding.
              </p>
              <Link href="/howtoai/lesson3">
                <button className="w-full py-2 px-4 bg-teal-600 text-white rounded-md hover:bg-teal-700">
                  Take me to Lesson 3
                </button>
              </Link>
            </div>
          </motion.div>

          {/* Lesson 4 - Microsoft CoPilot */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative w-64"
          >
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
                style={{ width: "auto", height: "auto" }}  // Maintain aspect ratio
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
          </motion.div>
        </div>
          
        {/* Dashboard Section */}
        <div className="absolute bottom-40 w-full max-w-4xl" style={{ marginTop: '25rem' }} classname="bg-white text-gray-900 rounded-xl p-8 shadow-2xl">
          <h3 className="text-3xl font-bold mb-4">Hello {userProgress.firstName} {userProgress.lastName}!</h3>
          <p className="mb-6">Here is your progress so far:</p>

          {/* Display progress for each lesson */}
          {userProgress.lessons.map((lesson, index) => (
            <div key={index} className="mb-4">
              <div className="flex justify-between items-center mb-1">
                <span className="text-lg font-semibold">{lesson.name}</span>
                <span>{lesson.progress}%</span>
              </div>
              <div className="w-full bg-gray-300 rounded-full h-4">
                <div
                  className="bg-indigo-600 h-4 rounded-full"
                  style={{ width: `${lesson.progress}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
      <Footer />
    </>
  );
}
