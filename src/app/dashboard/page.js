// src/app/dashboard/page.js
import Link from 'next/link';

export default function DashboardPage() {
  return (
    <div>
      <h2>Choose an Option</h2>
      <Link href="/prompt-analyzer">
        <button>PROMPT ANALYZER</button>
      </Link>
      <Link href="/howtoai">
        <button>HOWTOAI</button>
      </Link>
    </div>
  );
}
