"use client";
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import { API_Backend } from '@/app/api/api';

export default function LogoutPage() {
  const router = useRouter(); // Inisialisasi router

  useEffect(() => {
    // Fungsi untuk melakukan request logout ke backend
    const performLogout = async () => {
      try {
        // Kirim request ke backend untuk logout (hapus cookie token)
        const response = await axios.delete(`${API_Backend}/logout`, { withCredentials: true });

        // Tampilkan status logout di konsol
        console.log('Status :', response.status, ',', response.data.message);

        // Arahkan ke halaman login setelah logout
        router.push("/auth/login");
      } catch (error) {
        console.error('Gagal melakukan logout:', error);
      }
    };

    performLogout(); // Jalankan fungsi logout
  }, [router]); // Tambahkan router sebagai dependensi

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="text-center">
        <h2 className="text-2xl font-bold">You have been logged out</h2>
      </div>
    </div>
  );
}
