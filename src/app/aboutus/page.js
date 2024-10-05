// src/app/about-us/page.js
"use client";  // Required to use Framer Motion in a Next.js Client Component

import { motion } from 'framer-motion';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function AboutUsPage() {
  // Define animation variants for the transition
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
      transition={{ duration: 0.6, ease: 'easeInOut' }}
      className="min-h-screen bg-gradient-to-br from-gray-800 to-gray-900 text-white flex flex-col items-center py-20"
    >
      <h1 className="text-5xl font-bold mb-10">About Us</h1>
      <p className="text-lg max-w-3xl text-center mb-10">
        At LearnAI, we are passionate about helping people of all ages learn how to effectively use artificial intelligence through hands-on lessons and interactive tools. Whether you’re a beginner or someone looking to deepen your AI knowledge, our platform offers accessible learning experiences tailored to your needs.
      </p>
      <p className="text-lg max-w-3xl text-center mb-10">
        We believe AI education should be available to everyone. Our mission is to empower learners by teaching them how to interact with AI models like Prompt Analyzer and LearnAI. Our goal is to make AI more approachable and easier to understand for everyone, no matter their skill level.
      </p>
      <p className="text-lg max-w-3xl text-center">
        Join us in exploring the power of AI, and let’s learn together how to harness its potential for creating a better future.
      </p>
    </motion.div>
    <Footer />
    </>
  );
}
