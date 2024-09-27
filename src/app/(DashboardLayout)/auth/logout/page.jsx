import { useEffect } from 'react';
import Link from 'next/link';

export default function LogoutPage() {
  useEffect(() => {
    // Here you can clear any session data, tokens, etc.
  }, []);

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="text-center">
        <h2 className="text-2xl font-bold">You have been logged out</h2>
        <p className="mt-4">
          <Link href="/login">
            <a className="text-blue-500 hover:underline">Click here to login again</a>
          </Link>
        </p>
      </div>
    </div>
  );
}
