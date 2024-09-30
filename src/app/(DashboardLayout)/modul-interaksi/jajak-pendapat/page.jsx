'use client';
import { useState } from 'react';

const PollingPage = () => {
  const [pollingData, setPollingData] = useState([
    { id: 1, pilihan: 'Laura Himahi v Nisaa - Safaruddin', status: 'Jawaban', rating: 5, aktif: 'Y' },
    { id: 2, pilihan: 'Willy Fernando - Vicky Armita', status: 'Jawaban', rating: 9, aktif: 'Y' },
    { id: 3, pilihan: 'Tommy Utama - Laura Hikmah', status: 'Jawaban', rating: 3, aktif: 'Y' },
    { id: 4, pilihan: 'Wildan Agissa - Dewi Safitri', status: 'Jawaban', rating: 1, aktif: 'Y' },
    { id: 5, pilihan: 'Mahyeldi Ansyarullah - Emzalmi', status: 'Jawaban', rating: 25, aktif: 'Y' },
    { id: 6, pilihan: 'Siapakah Calon Walikota dan Wakil Walikota Padang Favorit Anda?', status: 'Pertanyaan', rating: 0, aktif: 'Y' }
  ]);

  return (
    <div className="min-h-screen flex">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-800 text-white p-4">
        <h2 className="text-lg font-semibold mb-4">ADMINISTRATOR</h2>
        <ul>
          <li className="mb-2"><a href="#" className="hover:text-gray-300">Dashboard</a></li>
          <li className="mb-2"><a href="#" className="hover:text-gray-300">Menu Utama</a></li>
          <li className="mb-2"><a href="#" className="hover:text-gray-300">Modul Berita</a></li>
          <li className="mb-2"><a href="#" className="hover:text-gray-300">Modul Video</a></li>
          <li className="mb-2"><a href="#" className="hover:text-gray-300">Modul Iklan</a></li>
          <li className="mb-2"><a href="#" className="hover:text-gray-300">Modul Web</a></li>
          <li className="mb-2"><a href="#" className="hover:text-gray-300">Modul Interaksi</a></li>
          <li className="mb-2"><a href="#" className="hover:text-gray-300">Modul Users</a></li>
          <li className="mb-2"><a href="#" className="hover:text-gray-300">Modul Sekolah</a></li>
          <li className="mt-4 text-red-400"><a href="#" className="hover:text-red-600">Logout</a></li>
        </ul>
      </aside>

      {/* Main content */}
      <main className="flex-1 bg-gray-100 p-8">
        {/* Header */}
        <div className="bg-blue-600 p-4 text-white">
          <h1 className="text-2xl">Dashboard</h1>
          <p>Control Panel</p>
        </div>

        {/* Polling Table */}
        <section className="mt-8 bg-white shadow rounded-lg p-6">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-semibold">Polling / Jajak Pendapat</h2>
            <button className="bg-green-500 text-white px-4 py-2 rounded">Tambahkan Data</button>
          </div>
          <table className="w-full mt-4 border-collapse">
            <thead>
              <tr className="bg-gray-200">
                <th className="border py-2 px-4">No</th>
                <th className="border py-2 px-4">Pilihan</th>
                <th className="border py-2 px-4">Status</th>
                <th className="border py-2 px-4">Rating</th>
                <th className="border py-2 px-4">Aktif</th>
                <th className="border py-2 px-4">Action</th>
              </tr>
            </thead>
            <tbody>
              {pollingData.map((item) => (
                <tr key={item.id}>
                  <td className="border py-2 px-4 text-center">{item.id}</td>
                  <td className="border py-2 px-4">{item.pilihan}</td>
                  <td className="border py-2 px-4 text-center">{item.status}</td>
                  <td className="border py-2 px-4 text-center">{item.rating}</td>
                  <td className="border py-2 px-4 text-center">{item.aktif}</td>
                  <td className="border py-2 px-4 text-center">
                    <button className="text-green-500 mx-2">✎</button>
                    <button className="text-red-500 mx-2">✖</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </main>
    </div>
  );
};

export default PollingPage;
