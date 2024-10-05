// src/app/howtoai/page.js
import Link from 'next/link';

export default function HowToAIPage() {
  return (
    <div>
      <h2>Choose a Lesson</h2>
      <Link href="/howtoai/lesson1">
        <button>Lesson 1</button>
      </Link>
      <Link href="/howtoai/lesson2">
        <button>Lesson 2</button>
      </Link>
      <Link href="/howtoai/lesson3">
        <button>Lesson 3</button>
      </Link>
    </div>
  );
}
