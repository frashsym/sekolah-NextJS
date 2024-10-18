"use client";
import { API_Backend } from "../../../api/api.js";
import React, { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter(); // Inisialisasi router

  const handleSubmit = async (e) => {
    e.preventDefault(); // Mencegah reload halaman

    try {
      await axios.post(`${API_Backend}/login`, { username, password });

      // Jika login berhasil, arahkan ke halaman dashboard
      if (response.status === 200) {
        // Simpan token atau data pengguna jika diperlukan
        localStorage.setItem("token", response.data.token);
        router.push("/dashboard"); // Arahkan ke halaman dashboard
      }
    } catch (err) {
      setError("Login failed. Please check your credentials."); // Tampilkan pesan error
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-bold text-center mb-6">ADMIN Login</h2>
        <p className="text-center mb-4">Silahkan Login Pada Form Dibawah Ini</p>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700">Username</label>
            <div className="relative">
              <input
                type="text"
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Masukan username..."
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
                placeholder="Masukan password..."
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <span className="absolute inset-y-0 right-3 flex items-center">
                <i className="fas fa-lock text-gray-400"></i>
              </span>
            </div>
          </div>
          {/* Redirect to dashboard page after login */}
            <button
              type="submit"
              className="w-full bg-blue-500 text-black py-2 rounded-md hover:bg-blue-600"
            >
              Sign In
            </button>
        </form>
        <div className="mt-4 text-center">
          <a href="#" className="text-blue-500 hover:underline">Anda Lupa Password?</a>
        </div>
      </div>
    </div>
  );
}
