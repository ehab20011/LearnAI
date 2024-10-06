"use client"; // This makes the component a Client Component
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function LanguagePage() {
  const [isTranslateInitialized, setIsTranslateInitialized] = useState(false);

  // Dynamically load Google Translate script and initialize it with a delay
  useEffect(() => {
    const timer = setTimeout(() => {
      if (!isTranslateInitialized) {
        const addScript = document.createElement("script");
        addScript.setAttribute("src", "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit");
        document.body.appendChild(addScript);

        // Initialize Google Translate with limited languages
        window.googleTranslateElementInit = () => {
          new window.google.translate.TranslateElement({
            pageLanguage: 'en', // Set default language to English
            includedLanguages: 'en,es,fr,de,it,pt,zh-CN,ja,ko,ar,ru', // Limit to specific languages
            layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
          }, 'google_translate_element');
          setIsTranslateInitialized(true); // Set it as initialized to prevent reloading
        };
      }
    }, 5000); // 2 seconds delay (you can adjust this duration)

    // Clean up function to clear the timer if the component unmounts
    return () => clearTimeout(timer);
  }, [isTranslateInitialized]);

  // Page animation variants
  const pageVariants = {
    hidden: { opacity: 0, y: 50 },
    enter: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 50 },
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
        </h2>

        {/* Google Translate Element Button */}
        <div className="relative w-80">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <button
              className="w-full py-6 px-12 bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-700 hover:to-blue-500 text-white rounded-lg text-2xl font-semibold shadow-lg transform transition-all duration-500 hover:scale-105 hover:shadow-2xl"
              onClick={() => {
                const translateContainer = document.getElementById('google_translate_element');
                if (translateContainer) {
                  translateContainer.style.display = 'block'; // Display the Google Translate dropdown
                }
              }}
            >
              Change App Language
            </button>
          </motion.div>

          {/* The Google Translate Element */}
          <div id="google_translate_element" style={{ display: 'none', marginTop: '20px' }}></div>
        </div>
      </motion.div>
      <Footer />
    </>
  );
}
