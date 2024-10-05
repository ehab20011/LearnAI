"use client";

import { useState } from "react";

export default function PromptAnalyzer() {
  const [prompt, setPrompt] = useState("");
  const [analysis, setAnalysis] = useState(null);

  const handleAnalyzePrompt = async (e) => {
    e.preventDefault();
    const promptAnalysis = analyzePrompt(prompt);
    setAnalysis(promptAnalysis);
  };

  const analyzePrompt = (prompt) => {
    const improvedPrompt = improvePrompt(prompt);

    // Analyze based on some basic heuristics
    const categories = {
      clarity: analyzeClarity(prompt),
      specificity: analyzeSpecificity(prompt),
      context: analyzeContext(prompt),
      length: analyzeLength(prompt),
    };

    return {
      categories,
      originalPrompt: prompt,
      improvedPrompt: improvedPrompt,
    };
  };

  const improvePrompt = (prompt) => {
    // Basic replacements for vague words
    let improvedPrompt = prompt
      .replace(
        /(can you|could you|please help|help me|I need)/gi,
        "Please provide"
      )
      .replace(
        /(what|how|why)/gi,
        (match) => `Could you explain ${match} in detail `
      )
      .replace(/(this|that|it)/gi, "the specific topic or question you have");

    // Enhance context if missing
    if (!improvedPrompt.includes("example") && improvedPrompt.length < 50) {
      improvedPrompt += " Please include specific examples.";
    }

    // Adjust sentence structure for clarity
    if (improvedPrompt.endsWith("?")) {
      improvedPrompt = `Could you elaborate on ${improvedPrompt}`;
    } else {
      improvedPrompt += ". Could you clarify this further?";
    }

    return improvedPrompt;
  };

  // Functions to analyze different categories
  const analyzeClarity = (prompt) => {
    return prompt.length > 50 ? 8 : prompt.length > 20 ? 6 : 4; // More words imply better clarity
  };

  const analyzeSpecificity = (prompt) => {
    const vagueWords = ["help", "thing", "stuff", "vague"];
    const matches = vagueWords.filter((word) =>
      prompt.toLowerCase().includes(word)
    );
    return matches.length === 0 ? 8 : 5 - matches.length; // Fewer vague words mean better specificity
  };

  const analyzeContext = (prompt) => {
    return prompt.includes("example") ? 9 : 5; // Checking for contextual indicators
  };

  const analyzeLength = (prompt) => {
    const length = prompt.length;
    return length < 20 ? 3 : length <= 100 ? 7 : 10; // Adjust scores based on length
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-gradient-to-br from-indigo-400 to-blue-400 rounded-lg shadow-xl">
      <h1 className="text-4xl font-extrabold text-white text-center mb-4">
        Prompt Analyzer
      </h1>
      <p className="text-lg text-white text-center mb-4">
        Type your prompt below, and we'll analyze its quality and suggest
        improvements.
      </p>

      <form onSubmit={handleAnalyzePrompt} className="mb-6">
        <textarea
          className="w-full h-40 p-2 border-2 border-white rounded-md mb-4 text-gray-900"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Type your prompt here..."
        />
        <button
          type="submit"
          className="w-full bg-orange-500 text-white py-2 rounded-md hover:bg-orange-600 transition duration-200"
        >
          Analyze Prompt
        </button>
      </form>

      {analysis && (
        <div className="mt-8">
          <h2 className="text-2xl font-semibold text-white mb-2">
            Prompt Analysis
          </h2>
          <div className="flex justify-around mb-4">
            <div className="text-white">
              Clarity: {renderRating(analysis.categories.clarity)}
            </div>
            <div className="text-white">
              Specificity: {renderRating(analysis.categories.specificity)}
            </div>
            <div className="text-white">
              Context: {renderRating(analysis.categories.context)}
            </div>
            <div className="text-white">
              Length: {renderRating(analysis.categories.length)}
            </div>
          </div>

          <h3 className="font-semibold text-white">Original Prompt</h3>
          <p className="mb-4 text-gray-200">{analysis.originalPrompt}</p>

          <h3 className="font-semibold text-white">Improved Prompt</h3>
          <p className="mb-4 text-gray-200">{analysis.improvedPrompt}</p>

          <h3 className="font-semibold text-white">Changes Highlighted</h3>
          <p
            dangerouslySetInnerHTML={{
              __html: highlightDifferences(
                analysis.originalPrompt,
                analysis.improvedPrompt
              ),
            }}
          />
        </div>
      )}
    </div>
  );
}

// Function to render ratings
const renderRating = (score) => {
  return "⭐️".repeat(score);
};

// Function to highlight differences between original and improved prompt
const highlightDifferences = (original, improved) => {
  // Use diff library to compare strings
  const diff = require("diff");
  const changes = diff.diffWords(original, improved);

  return changes
    .map((part, index) => {
      const color = part.added ? "green" : part.removed ? "red" : "black";
      return `<span key=${index} style="color:${color};">${part.value}</span>`;
    })
    .join(" ");
};
