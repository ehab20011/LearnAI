"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { userDatabase, userInfoDatabaseRef } from "../api/FirebaseConfig";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { motion } from 'framer-motion';

export default function LoginPage() {
  const [isSignIn, setIsSignIn] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target.email.value.trim();
    const password = e.target.password?.value?.trim();
    const firstName = e.target.firstName?.value?.trim();
    const lastName = e.target.lastName?.value?.trim();

    if (!email || !password) {
      setErrorMessage("Please enter both email and password");
      return;
    }

    try {
      if (!isSignIn) {
        const authData = await createUserWithEmailAndPassword(userDatabase, email, password);
        const userUID = authData.user.uid;
        await setDoc(doc(userInfoDatabaseRef, userUID), {
          firstName,
          lastName,
          email,
          userUID,
          copilot_exp: 0,
          gpt_exp: 0,
          notebook_lm_exp: 0,
          gemini_exp: 0,
        });
        console.log("User successfully signed up and data stored");
        router.push("/dashboard");
      } else {
        const authData = await signInWithEmailAndPassword(userDatabase, email, password);
        console.log("User successfully signed in");
        router.push("/dashboard");
      }
    } catch (error) {
      console.error("Error during authentication:", error.message);
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

  const toggleSignInSignUp = () => {
    setIsSignIn(!isSignIn);
    setErrorMessage("");
  };

  // Animation variants
  const pageVariants = {
    hidden: { opacity: 0, y: 50 },
    enter: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 50 },
  };

  return (
    <motion.div
      initial="hidden"
      animate="enter"
      exit="exit"
      variants={pageVariants}
      transition={{ duration: 0.6, ease: 'easeInOut' }}
      className="h-screen w-screen flex justify-center items-center bg-gradient-to-r from-indigo-500 to-purple-600"
    >
      <div className="sm:shadow-xl px-8 pb-8 pt-12 sm:bg-white bg-opacity-90 rounded-xl space-y-8">
        <h1 className="font-semibold text-3xl text-center text-gray-800">
          {isSignIn ? "Welcome Back!" : "Create Your Account"}
        </h1>
        {errorMessage && (
          <motion.div
            className="text-red-500 text-sm text-center mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {errorMessage}
          </motion.div>
        )}
        <form onSubmit={handleSubmit} className="space-y-4">
          {!isSignIn && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <input
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                name="firstName"
                placeholder="First Name"
                type="text"
              />
              <input
                className="w-full mt-2 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                name="lastName"
                placeholder="Last Name"
                type="text"
              />
            </motion.div>
          )}
          <input
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            name="email"
            placeholder="E-mail"
            type="email"
          />
          <input
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            name="password"
            type="password"
            placeholder="Password"
          />
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="w-full py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300"
          >
            {isSignIn ? "Sign In" : "Sign Up"}
          </motion.button>
        </form>
        <p className="text-center text-gray-700">
          {isSignIn ? "Don't have an account?" : "Already have an account?"}{" "}
          <button
            type="button"
            onClick={toggleSignInSignUp}
            className="text-blue-500 hover:underline"
          >
            {isSignIn ? "Sign Up" : "Sign In"}
          </button>
        </p>
      </div>
    </motion.div>
  );
}
