"use client";

import { useState } from "react";
import axios from "axios";
import diff from "diff";

export default function PromptAnalyzer() {
  const [prompt, setPrompt] = useState("");
  const [analysis, setAnalysis] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleAnalyzePrompt = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const promptAnalysis = await analyzePromptWithOpenAI(prompt);
      setAnalysis(promptAnalysis);
    } catch (err) {
      setError("Error analyzing prompt. Please try again.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const analyzePromptWithOpenAI = async (prompt) => {
    const apiKey = process.env.NEXT_PUBLIC_OPENAI_API_KEY;

    const response = await axios.post(
      "https://api.openai.com/v1/chat/completions",
      {
        model: "gpt-4",
        messages: [
          {
            role: "user",
            content: `Analyze the following prompt for clarity, specificity, context, and length. Provide numerical ratings from 1 to 10 for each category and suggest a concise improvement:\n\nPrompt: "${prompt}"`,
          },
        ],
        max_tokens: 150,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${apiKey}`,
        },
      }
    );

    const analysisText = response.data.choices[0].message.content;

    // Parse the analysis text for ratings and improvements
    const categories = {};
    const lines = analysisText.split("\n");

    lines.forEach((line) => {
      const match = line.match(/^(.*?):\s*(\d+|.*)/);
      if (match) {
        categories[match[1].toLowerCase()] = parseInt(match[2]) || match[2];
      }
    });

    const improvementMatch = analysisText.match(/Improvement:\s*(.*)/);
    const improvedPrompt = improvementMatch ? improvementMatch[1].trim() : "No improvement suggested.";

    return {
      categories,
      originalPrompt: prompt,
      improvedPrompt: improvedPrompt,
    };
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-gradient-to-br from-indigo-400 to-blue-400 rounded-lg shadow-xl">
      <h1 className="text-4xl font-extrabold text-white text-center mb-4">
        Prompt Analyzer
      </h1>
      <p className="text-lg text-white text-center mb-4">
        Type your prompt below, and we'll analyze its quality and suggest improvements.
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
          className={`w-full bg-orange-500 text-white py-2 rounded-md hover:bg-orange-600 transition duration-200 ${loading ? "opacity-50 cursor-not-allowed" : ""}`}
          disabled={loading}
        >
          {loading ? "Analyzing..." : "Analyze Prompt"}
        </button>
      </form>

      {error && <p className="text-red-500">{error}</p>}

      {analysis && (
        <div className="mt-8">
          <h2 className="text-2xl font-semibold text-white mb-2">
            Prompt Analysis
          </h2>
          <div className="bg-white rounded-lg p-4 shadow-md mb-4">
            <h3 className="font-semibold text-gray-800 mb-2">Analysis Categories</h3>
            <ul className="space-y-2">
              {Object.entries(analysis.categories).map(([category, score]) => (
                <li key={category} className="flex justify-between text-gray-800">
                  <span className="font-medium">{category.charAt(0).toUpperCase() + category.slice(1)}:</span>
                  <span>{score}/10</span>
                  <div className="relative w-1/2 h-4 bg-gray-300 rounded">
                    <div
                      className={`absolute h-full rounded ${score < 5 ? "bg-red-500" : "bg-green-500"}`}
                      style={{ width: `${(score / 10) * 100}%` }}
                    ></div>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <h3 className="font-semibold text-white mt-4">Original Prompt</h3>
          <p className="mb-4 text-gray-200">{analysis.originalPrompt}</p>

          <h3 className="font-semibold text-white">Improved Prompt</h3>
          <div className="p-4 bg-gray-100 border border-gray-300 rounded-md mb-4 text-gray-900">
            {analysis.improvedPrompt}
          </div>

          <h3 className="font-semibold text-white">Changes Made</h3>
          <p
            className="mb-4 text-gray-200"
            dangerouslySetInnerHTML={{
              __html: highlightDifferences(analysis.originalPrompt, analysis.improvedPrompt),
            }}
          />
        </div>
      )}
    </div>
  );
}

// Function to highlight differences between original and improved prompt
const highlightDifferences = (original, improved) => {
    const diff = require("diff")
  const changes = diff.diffWords(original, improved);
  
  return changes
    .map((part) => {
      const color = part.added ? "green" : part.removed ? "red" : "black";
      return `<span style="color:${color};">${part.value}</span>`;
    })
    .join(" ");
};
