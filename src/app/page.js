// src/app/page.js
import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[var(--background)] text-[var(--foreground)]">
      <h1 className="text-3xl font-bold">Welcome to HowToAI</h1>
      <Link href="/login">
        <button className="mt-4 px-6 py-2 bg-blue-500 hover:bg-blue-700 text-white rounded">Sign Up / Log In</button>
      </Link>
    </div>
  );
}
