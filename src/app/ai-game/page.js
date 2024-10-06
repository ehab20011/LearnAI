"use client"; // Required for interactive client-side behavior
import { useState } from "react";
import { motion } from "framer-motion";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Image from 'next/image';

// Sample quiz data grouped by models
const quizData = {
    chatgpt: [
        {
          question: "What is ChatGPT primarily used for?",
          options: [
            "Image generation",
            "Natural language processing and conversation",
            "Creating 3D models",
            "Video editing",
          ],
          answer: 1,
        },
        {
          question: "What is a 'prompt' in the context of ChatGPT?",
          options: [
            "A result produced by ChatGPT",
            "A command or question that you input into ChatGPT",
            "A data model used to train ChatGPT",
            "A script for automating responses",
          ],
          answer: 1,
        },
        {
          question: "How can you improve ChatGPT’s responses?",
          options: [
            "Rephrasing the prompt or adding more context",
            "Submitting multiple prompts at once",
            "Using different fonts in the prompt",
            "Shortening the prompt to a single word",
          ],
          answer: 0,
        },
        {
          question: "Which of the following is NOT a capability of ChatGPT?",
          options: [
            "Answering questions",
            "Generating creative content",
            "Predicting future stock prices",
            "Assisting with coding tasks",
          ],
          answer: 2,
        },
        {
          question: "Which of the following is a tip for effective use of ChatGPT?",
          options: [
            "Use vague instructions for broader answers",
            "Provide clear and detailed instructions",
            "Only use one-word prompts for faster responses",
            "Avoid interacting with the results",
          ],
          answer: 1,
        },
      ],
      
      copilotQuiz: [
        {
          question: "What is one of the core capabilities of Google Co-Pilot?",
          options: [
            "Automating tasks",
            "Video editing",
            "Voice transcription",
            "Image creation",
          ],
          answer: 0,
        },
        {
          question: "Which of the following steps is necessary to begin using Google Co-Pilot?",
          options: [
            "Download the desktop app",
            "Sign in with your Google account",
            "Set up a payment plan",
            "Install browser extensions",
          ],
          answer: 1,
        },
        {
          question: "What feature does Google Co-Pilot provide when generating responses to your questions?",
          options: [
            "Only text-based responses",
            "Suggested prompts and images",
            "Video editing capabilities",
            "Data export in PDF format",
          ],
          answer: 1,
        },
        {
          question: "What customization options are available in Google Co-Pilot’s settings?",
          options: [
            "Voice-to-text settings",
            "Theme appearance and privacy settings",
            "Video resolution settings",
            "Chatbot language preferences",
          ],
          answer: 1,
        },
        {
          question: "How can you access Google Co-Pilot on the go?",
          options: [
            "By using a mobile app available in app stores",
            "By downloading an external plugin",
            "By using the desktop version only",
            "Through direct email access",
          ],
          answer: 0,
        },
      ],      
    googleNotebook: [
      {
        question: "What is the primary purpose of Google NotebookLM?",
        options: [
          "To create digital notebooks",
          "To help you study and learn faster based on uploaded material",
          "To generate random text",
          "To edit PDF documents",
        ],
        answer: 1,
      },
      {
        question: "What type of source can you upload to NotebookLM?",
        options: [
          "Only PDF files",
          "Only website links",
          "Various sources including PDFs and website links",
          "Only text documents",
        ],
        answer: 2,
      },
      {
        question: "What does it mean when an AI model is 'trained' on certain data in the context of NotebookLM?",
        options: [
          "The model has memorized the exact text of the data",
          "The model has analyzed and learned patterns from the data",
          "The model can only repeat the data verbatim",
          "The model has general knowledge about all topics",
        ],
        answer: 1,
      },
      {
        question: "How does context work in NotebookLM interactions?",
        options: [
          "The AI forgets all previous interactions immediately",
          "The AI remembers all interactions forever",
          "The AI remembers previous questions and answers in the current session",
          "The AI only remembers the last question asked",
        ],
        answer: 2,
      },
      {
        question: "Which of the following is NOT mentioned as a creative way to use NotebookLM?",
        options: [
          "Summarizing complex concepts",
          "Generating examples",
          "Creating artwork",
          "Creating study questions",
        ],
        answer: 2,
      },
    ],
    googleGemini: [  
        {
          question: "What is Google Gemini primarily designed to handle?",
          options: [
            "Multimodal AI tasks (text, audio, image, and video)",
            "Only text generation",
            "Only video editing",
            "Strictly image processing",
          ],
          answer: 0, // Multimodal AI tasks
        },
        {
          question: "What do you need to do first in order to use Google Gemini?",
          options: [
            "Create an account with Google Cloud and log in",
            "Install a local version of Gemini",
            "Download a third-party API tool",
            "Submit a support ticket to Google",
          ],
          answer: 0, // Create an account with Google Cloud and log in
        },
        {
          question: "Which feature of Google Gemini allows you to adjust the creativity of its responses?",
          options: [
            "Token limit",
            "Grounding",
            "Temperature setting",
            "Region selection",
          ],
          answer: 2, // Temperature setting
        },
        {
          question: "In Step 4 of the lesson, what does Google Gemini provide when asked 'What is Artificial Intelligence?'",
          options: [
            "An in-depth analysis of AI algorithms",
            "A summary of AI, including types and key concepts",
            "A detailed breakdown of AI's legal implications",
            "A list of AI-related APIs",
          ],
          answer: 1, // A summary of AI, including types and key concepts
        },
        {
          question: "Which Google Cloud service can Gemini seamlessly integrate with for large-scale data analysis?",
          options: [
            "Google Drive",
            "BigQuery",
            "Google Photos",
            "Google Maps",
          ],
          answer: 1, // BigQuery
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
  const currentQuestion = modelQuestions.length > 0 ? modelQuestions[currentQuestionIndex] : null;

  // Function to handle the answer submission
  const handleAnswerSubmit = () => {
    if (selectedOption === null) return;

    if (selectedOption === currentQuestion?.answer) {
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
              onClick={() => startQuiz('copilotQuiz')}
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
            {currentQuestion ? (
              <>
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
              </>
            ) : (
              <p>No questions available for this model.</p>
            )}
          </div>
        )}
      </motion.div>
      <Footer />
    </>
  );
}