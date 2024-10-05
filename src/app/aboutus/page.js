// src/app/about-us/page.js
"use client";  // Required to use Framer Motion in a Next.js Client Component

import { motion } from 'framer-motion';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Image from 'next/image'; // For loading images

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

        {/* Circle images with links to LinkedIn */}
        <div className="flex flex-col md:flex-row items-center justify-center mt-10 space-y-6 md:space-y-0 md:space-x-8">
          <a href="https://www.linkedin.com/in/ehab-abdalla-04ab411b3/" target="_blank" rel="noopener noreferrer">
            <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white hover:scale-105 transition-transform duration-300">
              <Image
                src="/images/ehab.jpg"
                alt="Person 1"
                width={128}
                height={128}
                className="object-cover"
              />
            </div>
          </a>

          <a href="https://www.linkedin.com/in/loyd-flores/" target="_blank" rel="noopener noreferrer">
            <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white hover:scale-105 transition-transform duration-300">
              <Image
                src="/images/loyd.jpg"
                alt="Person 2"
                width={128}
                height={128}
                className="object-cover"
              />
            </div>
          </a>

          <a href="https://www.linkedin.com/in/davidmejia1/" target="_blank" rel="noopener noreferrer">
            <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white hover:scale-105 transition-transform duration-300">
              <Image
                src="/images/david.jpg"
                alt="Person 3"
                width={128}
                height={128}
                className="object-cover"
              />
            </div>
          </a>

          <a href="https://www.linkedin.com/in/mohammed-zian-hassan/" target="_blank" rel="noopener noreferrer">
            <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white hover:scale-105 transition-transform duration-300">
              <Image
                src="/images/zian.jpg"
                alt="Person 4"
                width={128}
                height={128}
                className="object-cover"
              />
            </div>
          </a>
        </div>

        {/* Models Section */}
        <h2 className="text-3xl font-bold mt-12">Models we provide lessons for:</h2>
        <div className="flex flex-col md:flex-row items-center justify-center mt-6 space-y-6 md:space-y-0 md:space-x-8">
          <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white hover:scale-105 transition-transform duration-300">
            <Image
              src="/images/google-notebook.png"
              alt="Google NotebookLM Logo"
              width={128}
              height={128}
              className="object-cover"
            />
          </div>

          <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white hover:scale-105 transition-transform duration-300">
            <Image
              src="/images/chatgpt.png"
              alt="ChatGPT Logo"
              width={128}
              height={128}
              className="object-cover"
            />
          </div>

          <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white hover:scale-105 transition-transform duration-300">
            <Image
              src="/images/copilot.jpg"
              alt="Microsoft CoPilot Logo"
              width={128}
              height={128}
              className="object-cover"
            />
          </div>

          <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white hover:scale-105 transition-transform duration-300">
            <Image
              src="/images/gemini.png"
              alt="gemini Logo"
              width={200}
              height={100}
              className="object-cover"
            />
          </div>

        </div>
      </motion.div>
      <Footer />
    </>
  );
}
