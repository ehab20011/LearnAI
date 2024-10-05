// src/app/login/page.js
import Link from 'next/link';

export default function LoginPage() {
  return (
    <div>
      <h2>Login or Sign Up</h2>
      <form>
        {/* Your form elements here */}
      </form>
      <Link href="/dashboard">
        <button>Go to Dashboard</button>
      </Link>
    </div>
  );
}
