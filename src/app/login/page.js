"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { userDatabase } from "../api/FirebaseConfig";
import {
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
} from "firebase/auth";

export default function LoginPage() {
  const [isSignIn, setIsSignIn] = useState(true); // State to toggle between Sign In and Sign Up
  const [isForgotPassword, setIsForgotPassword] = useState(false); // State to toggle Forgot Password view
  const [errorMessage, setErrorMessage] = useState(""); // State for storing error messages
  const router = useRouter(); // Use useRouter from Next.js to navigate

  const handleForgotPassword = () => {
    setIsForgotPassword(true); // Switch to Forgot Password view
  };

  const handleResetLink = async (e) => {
    e.preventDefault();
    const email = e.target.email.value.trim();

    if (!email) {
      alert("Please enter an email address");
      return;
    }

    try {
      await sendPasswordResetEmail(userDatabase, email);
      alert("Check your email for the reset link.");
    } catch (err) {
      alert(`Error: ${err.code}`);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const email = e.target.email.value.trim();
    const password = e.target.password?.value?.trim();

    if (!email) {
      console.log("Email is missing");
      setErrorMessage("Please enter an email address");
      return;
    }

    if (!password) {
      console.log("Password is missing");
      setErrorMessage("Please enter a password");
      return;
    }

    try {
      if (isSignIn) {
        // Sign In logic
        const authData = await signInWithEmailAndPassword(
          userDatabase,
          email,
          password
        );
        console.log(authData, "User successfully signed in");
        router.push("/dashboard");
      } else {
        // Sign Up logic
        const authData = await createUserWithEmailAndPassword(
          userDatabase,
          email,
          password
        );
        console.log(authData, "User successfully signed up");
        router.push("/dashboard");
      }
    } catch (error) {
      console.error("Error during authentication:", error.message);
      
      // Handle and log specific Firebase errors
      switch (error.code) {
        case "auth/invalid-email":
          setErrorMessage("Invalid email address format.");
          break;
        case "auth/user-disabled":
          setErrorMessage("User account is disabled.");
          break;
        case "auth/user-not-found":
          setErrorMessage("No user found with this email.");
          break;
        case "auth/wrong-password":
          setErrorMessage("Incorrect password.");
          break;
        case "auth/email-already-in-use":
          setErrorMessage("Email is already in use.");
          break;
        case "auth/weak-password":
          setErrorMessage("Password is too weak.");
          break;
        default:
          setErrorMessage("An error occurred. Please try again.");
          break;
      }
    }
  };

  // Function to toggle between Sign In and Sign Up
  const toggleSignInSignUp = () => {
    setIsSignIn(!isSignIn);
    setErrorMessage(""); // Reset error message when toggling between Sign In and Sign Up
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        {!isForgotPassword ? (
          <>
            <h2 className="text-2xl font-bold text-center mb-6">
              {isSignIn ? "Sign In" : "Sign Up"}
            </h2>
            {errorMessage && (
              <div className="text-red-500 text-sm text-center mb-4">
                {errorMessage}
              </div>
            )}
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                name="email"
                placeholder="E-mail"
                type="email"
              />
              <input
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                name="password"
                type="password"
                placeholder="Password"
              />
              {isSignIn && (
                <div className="text-right">
                  <button
                    type="button"
                    onClick={handleForgotPassword}
                    className="text-blue-500 text-sm hover:underline"
                  >
                    Forgot Password?
                  </button>
                </div>
              )}
              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300"
              >
                {isSignIn ? "Sign In" : "Sign Up"}
              </button>
            </form>

            <p className="text-center mt-4">
              {isSignIn ? "Don't have an account?" : "Already have an account?"}
              <button
                type="button"
                onClick={toggleSignInSignUp}
                className="text-blue-500 font-semibold hover:underline ml-1"
              >
                {isSignIn ? "Sign Up" : "Sign In"}
              </button>
            </p>
          </>
        ) : (
          <>
            <h2 className="text-2xl font-bold text-center mb-6">Forgot Password</h2>
            <form onSubmit={handleResetLink} className="space-y-4">
              <input
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                name="email"
                placeholder="Enter your email"
                type="email"
              />
              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300"
              >
                Send Reset Link
              </button>
            </form>
            <p className="text-center mt-4">
              <button
                type="button"
                onClick={() => setIsForgotPassword(false)}
                className="text-blue-500 font-semibold hover:underline"
              >
                Back to {isSignIn ? "Sign In" : "Sign Up"}
              </button>
            </p>
          </>
        )}
      </div>
    </div>
  );
}