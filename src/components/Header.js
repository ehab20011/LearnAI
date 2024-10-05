// src/components/Header.js
import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-gray-800 text-white py-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo or Site Name */}
        <h1 className="text-2xl font-bold">
          <Link href="/">
            LearnAI
          </Link>
        </h1>

        <nav className="flex space-x-6">
          <Link href="/prompt-analyzer" className="hover:text-blue-400">
            Prompt Analyzer
          </Link>
          <Link href="/howtoai" className="hover:text-green-400">
            LearnAI
          </Link>
          <Link href="/aboutus" className="hover:text-yellow-400">
            About Us
          </Link>
        </nav>
      </div>
    </header>
  );
}
