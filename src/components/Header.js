// src/components/Header.js
import Link from 'next/link';
import { useRouter } from 'next/navigation'; // Import Next.js navigation

export default function Header() {
  const router = useRouter(); // Initialize router

  const handleSignOut = () => {
    router.push('/');
  };
  return (
    <header className="bg-gray-800 text-white py-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo or Site Name */}
        <h1 className="text-2xl font-bold">
          <Link href="/">
            LearnAI
          </Link>
        </h1>

        <nav className="flex space-x-6 items-center">
          <Link href="/dashboard" className="hover:text-blue-400">
            Dashboard
          </Link>
          
          <Link href="/aboutus" className="hover:text-yellow-400">
            About Us
          </Link>

          <Link href="/language" className="hover:text-yellow-400">
            Language
          </Link>
          
          <button
                onClick={handleSignOut}
                className="ml-4 bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-6 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
                >
            Sign Out
        </button>

        </nav>
      </div>
    </header>
  );
}
