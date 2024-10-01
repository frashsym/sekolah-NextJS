'use client';
import { useState } from 'react';

const Dashboard = () => {
  const [agendas, setAgendas] = useState([
    { id: 1, tema: 'Elton John Greatest Hits Tour', start: '17 Nov 2012', end: '17 Nov 2012', time: '--' },
    { id: 2, tema: 'Festival Musik Bambu Nusantara 2012', start: '01 Sep 2012', end: '02 Sep 2012', time: '09.00 - 21.00 Wib' },
    { id: 3, tema: 'Maroon Live in Jakarta 2012', start: '05 Okt 2012', end: '05 Okt 2012', time: '--' },
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

        {/* Agenda Table */}
        <section className="mt-8 bg-white shadow rounded-lg p-6">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-semibold">Semua Agenda</h2>
            <button className="bg-green-500 text-white px-4 py-2 rounded">Tambahkan Data</button>
          </div>
          <table className="w-full mt-4 border-collapse">
            <thead>
              <tr className="bg-gray-200">
                <th className="border py-2 px-4">No</th>
                <th className="border py-2 px-4">Tema</th>
                <th className="border py-2 px-4">Tgl Mulai</th>
                <th className="border py-2 px-4">Tgl Selesai</th>
                <th className="border py-2 px-4">Jam</th>
                <th className="border py-2 px-4">Action</th>
              </tr>
            </thead>
            <tbody>
              {agendas.map((agenda) => (
                <tr key={agenda.id}>
                  <td className="border py-2 px-4 text-center">{agenda.id}</td>
                  <td className="border py-2 px-4">{agenda.tema}</td>
                  <td className="border py-2 px-4">{agenda.start}</td>
                  <td className="border py-2 px-4">{agenda.end}</td>
                  <td className="border py-2 px-4">{agenda.time}</td>
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

export default Dashboard;
