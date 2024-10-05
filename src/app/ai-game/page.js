"use client"; // Required for interactive client-side behavior
import { useState } from "react";
import { motion } from "framer-motion";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Image from 'next/image';

// Sample quiz data grouped by models
// Sample quiz data grouped by models
const quizData = {
    claude: [
      {
        question: "What is Claude known for?",
        options: [
          "Text-to-speech generation",
          "Creative content generation",
          "AI-powered decision making",
          "Large language model processing",
        ],
        answer: 3,
      },
    ],
    chatgpt: [
      {
        question: "What is the main function of ChatGPT?",
        options: [
          "Image generation",
          "Natural language processing and conversation",
          "Creating 3D models",
          "Editing video content",
        ],
        answer: 1,
      },
    ],
    copilot: [
      {
        question: "What does Microsoft CoPilot help with?",
        options: [
          "Document summarization and task automation",
          "Voice-to-text transcription",
          "Video editing",
          "Data visualization",
        ],
        answer: 0,
      },
    ],
    googleNotebook: [
      {
        question: "What is Google NotebookLM primarily used for?",
        options: [
          "Collaborative document editing",
          "Advanced note-taking with AI integration",
          "Generating music with AI",
          "Image editing",
        ],
        answer: 1,
      },
    ],
    googleGemini: [  // Add this for Google Gemini
      {
        question: "What is Google Gemini designed for?",
        options: [
          "Image processing and enhancement",
          "Advanced large language model (LLM) tasks",
          "Voice synthesis",
          "Video editing",
        ],
        answer: 1,
      },
    ],
  };
  

export default function AiTrainerGamePage() {
  const [selectedModel, setSelectedModel] = useState(null); // Store the selected model
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [hasAnswered, setHasAnswered] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const modelQuestions = selectedModel ? quizData[selectedModel] : [];
  const currentQuestion = modelQuestions[currentQuestionIndex];

  // Function to handle the answer submission
  const handleAnswerSubmit = () => {
    if (selectedOption === null) return;

    if (selectedOption === currentQuestion.answer) {
      setScore(score + 1);
    }
    
    setHasAnswered(true);
  };

  // Function to go to the next question
  const handleNextQuestion = () => {
    setSelectedOption(null);
    setHasAnswered(false);
    if (currentQuestionIndex + 1 < modelQuestions.length) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      alert(`Quiz completed! Your score: ${score}/${modelQuestions.length}`);
      setSelectedModel(null); // Reset the model selection after quiz is completed
      setCurrentQuestionIndex(0); // Reset quiz state
      setScore(0); // Reset score
    }
  };

  // Function to start the quiz for a selected model
  const startQuiz = (model) => {
    setSelectedModel(model);
    setCurrentQuestionIndex(0);
    setScore(0);
    setHasAnswered(false);
  };

  return (
    <>
      <Header />
      {/* Model Selection Logos */}  
<motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  exit={{ opacity: 0 }}
  transition={{ duration: 0.6, ease: "easeInOut" }}
  className="min-h-screen bg-gradient-to-br from-gray-800 to-gray-900 text-white flex flex-col items-center py-20"
>
  <h1 className="text-5xl font-bold mb-10">AI Trainer Quiz</h1>

  {!selectedModel ? (
    // Display model selection if no model is chosen yet
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-12 mt-8">
      {/* Google NotebookLM */}
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="cursor-pointer"
        onClick={() => startQuiz('googleNotebook')}
      >
        <Image
          src="/images/google-notebook.png"
          alt="Google NotebookLM"
          width={150}
          height={150}
          className="rounded-full mx-auto"
        />
        <p className="text-center mt-4 text-lg">Google NotebookLM</p>
      </motion.div>

      {/* ChatGPT */}
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="cursor-pointer"
        onClick={() => startQuiz('chatgpt')}
      >
        <Image
          src="/images/chatgpt.png"
          alt="ChatGPT"
          width={150}
          height={150}
          className="rounded-full mx-auto"
        />
        <p className="text-center mt-4 text-lg">ChatGPT</p>
      </motion.div>

      {/* Claude */}
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="cursor-pointer"
        onClick={() => startQuiz('claude')}
      >
        <Image
          src="/images/claude.png"
          alt="Claude"
          width={150}
          height={150}
          className="rounded-full mx-auto"
        />
        <p className="text-center mt-4 text-lg">Claude</p>
      </motion.div>

      {/* Google Gemini */}
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="cursor-pointer"
        onClick={() => startQuiz('googleGemini')}
      >
        <Image
          src="/images/gemini.png"
          alt="Google Gemini"
          width={150}
          height={150}
          className="rounded-full mx-auto"
        />
        <p className="text-center mt-4 text-lg">Google Gemini</p>
      </motion.div>

      {/* Microsoft CoPilot */}
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="cursor-pointer"
        onClick={() => startQuiz('copilot')}
      >
        <Image
          src="/images/copilot.jpg"
          alt="Microsoft CoPilot"
          width={150}
          height={150}
          className="rounded-full mx-auto"
        />
        <p className="text-center mt-4 text-lg">Microsoft CoPilot</p>
      </motion.div>
    </div>
  ) : (
    // Display quiz questions after a model is selected
    <div className="bg-gray-700 p-8 rounded-lg shadow-lg max-w-xl w-full">
      <h2 className="text-2xl mb-6">{currentQuestion.question}</h2>

      <div className="space-y-4">
        {currentQuestion.options.map((option, index) => (
          <motion.button
            key={index}
            whileHover={{ scale: 1.05 }}
            onClick={() => setSelectedOption(index)}
            className={`block w-full py-3 px-4 rounded-md text-left 
            ${selectedOption === index ? "bg-blue-500" : "bg-gray-600"} 
            hover:bg-blue-700 transition-colors`}
          >
            {option}
          </motion.button>
        ))}
      </div>

      {hasAnswered ? (
        <button
          onClick={handleNextQuestion}
          className="mt-6 w-full py-3 bg-green-500 hover:bg-green-600 text-white rounded-lg"
        >
          Next Question
        </button>
      ) : (
        <button
          onClick={handleAnswerSubmit}
          className="mt-6 w-full py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg"
        >
          Submit Answer
        </button>
      )}

      <div className="mt-4">
        <p className="text-sm">
          Score: {score}/{modelQuestions.length}
        </p>
      </div>
    </div>
  )}
</motion.div>
      <Footer />    
    </>
  );
}
