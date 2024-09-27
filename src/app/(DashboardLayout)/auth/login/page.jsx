'use client';
import Link from 'next/link';
import { useState } from 'react';

export default function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // Add your login logic here
    // For now, it simply redirects the user to the logout page
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-bold text-center mb-6">ADMIN Login</h2>
        <p className="text-center mb-4">Silahkan Login Pada Form Dibawah Ini</p>
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label className="block text-gray-700">Username</label>
            <div className="relative">
              <input
                type="text"
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
              <span className="absolute inset-y-0 right-3 flex items-center">
                <i className="fas fa-user text-gray-400"></i>
              </span>
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Password</label>
            <div className="relative">
              <input
                type="password"
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <span className="absolute inset-y-0 right-3 flex items-center">
                <i className="fas fa-lock text-gray-400"></i>
              </span>
            </div>
          </div>
          <div className="flex items-center mb-4">
            <input
              type="checkbox"
              className="mr-2"
              id="remember"
            />
            <label htmlFor="remember" className="text-gray-700">Remember Me</label>
          </div>
          {/* Redirect to logout page after login */}
          <Link href="/logout">
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
            >
              Sign In
            </button>
          </Link>
        </form>
        <div className="mt-4 text-center">
          <a href="#" className="text-blue-500 hover:underline">Anda Lupa Password?</a>
        </div>
      </div>
    </div>
  );
}
