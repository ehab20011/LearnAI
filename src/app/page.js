"use client"; 
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation"; 
import Globe from '@/components/Globe/Globe'; // Ensure this path is correct

export default function HomePage() {
  const router = useRouter();
  const [isClient, setIsClient] = useState(false); // To track if the client has mounted

  const textList = [
    "Welcome to HowToAI", 
    "How do I properly prompt a Large Language Model?", 
    "How much context does a prompt need?",
    ""
  ]; 

  const typingSpeed = 75;
  const eraseSpeed = 50;
  const pauseDuration = 1500;

  const [currentText, setCurrentText] = useState('');
  const [index, setIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const [cursorVisible, setCursorVisible] = useState(true);

  // Effect to mark component as mounted on the client
  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    let typingInterval;
    let cursorInterval;

    const typeText = (text) => {
      setCurrentText(text.slice(0, currentText.length + 1));
    };

    const eraseText = () => {
      setCurrentText(currentText.slice(0, -1));
    };

    const startTyping = () => {
      if (isTyping && currentText.length < textList[index].length) {
        typingInterval = setTimeout(() => {
          typeText(textList[index]);
        }, typingSpeed);
      } else if (!isTyping && currentText.length > 0) {
        typingInterval = setTimeout(() => {
          eraseText();
        }, eraseSpeed);
      } else if (isTyping && currentText.length === textList[index].length) {
        setTimeout(() => setIsTyping(false), pauseDuration);
      } else if (!isTyping && currentText.length === 0) {
        setIsTyping(true);
        setIndex((prevIndex) => (prevIndex + 1) % textList.length);
      }
    };

    startTyping();

    cursorInterval = setInterval(() => {
      setCursorVisible((prev) => !prev);
    }, 500); 

    return () => {
      clearTimeout(typingInterval);
      clearInterval(cursorInterval);
    };
  }, [currentText, isTyping, index]);

  const handleLoginClick = () => {
    try {
      router.push("/login"); // Navigate to the /login route
    } catch (error) {
      console.error("Error navigating to /login:", error);
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-center bg-transparent text-[var(--foreground)] relative">
      <div className="flex justify-between items-center w-full px-6">
        {/* Typing effect with cursor */}
        <h1 className="text-3xl font-bold">
          {currentText}
          <span className={cursorVisible ? "inline" : "hidden"}>|</span>
        </h1>

        {/* Sign Up / Log In Text with Hover Effect */}
        <span className="text-blue-500 hover:text-blue-700 cursor-pointer" onClick={handleLoginClick}>
          Log In
        </span>
      </div>

      {/* Center the Globe - only render on the client */}
      <div className="flex items-center justify-center min-h-screen">
        {isClient && <Globe />}
      </div>
    </div>
  );
}
