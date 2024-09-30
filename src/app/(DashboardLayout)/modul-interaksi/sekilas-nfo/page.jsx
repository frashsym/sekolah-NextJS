'use client';
import { useState } from 'react';

const SekilasInfoPage = () => {
  const [infoData, setInfoData] = useState([
    { id: 1, foto: 'img1.jpg', info: 'WHO merilis, 30 persen anak-anak di dunia kecanduan menonton televisi dan bermain komputer.', aktif: 'Y', tanggal: '26 Okt 2017' },
    { id: 2, foto: 'img2.jpg', info: 'Menurut United Stated Trade Representatives, 25% obat yang beredar di adalah palsu.', aktif: 'Y', tanggal: '17 Apr 2015' },
    { id: 3, foto: 'img3.jpg', info: 'Menurut peneliti di Detroit, orang yang selalu tersenyum lebar cenderung hidup lama.', aktif: 'Y', tanggal: '17 Apr 2015' },
    { id: 4, foto: 'img4.jpg', info: 'WHO merilis, 30 persen anak di dunia kecanduan komputer dan menonton televisi.', aktif: 'Y', tanggal: '16 Mar 2015' },
    { id: 5, foto: 'img5.jpg', info: 'Anak yang mengalami gangguan tidur, cenderung memakai obat2an dan alkohol berlebih saat dewasa.', aktif: 'Y', tanggal: '11 Apr 2015' }
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

        {/* Sekilas Info Table */}
        <section className="mt-8 bg-white shadow rounded-lg p-6">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-semibold">Sekilas Info</h2>
            <button className="bg-green-500 text-white px-4 py-2 rounded">Tambahkan Data</button>
          </div>
          <table className="w-full mt-4 border-collapse">
            <thead>
              <tr className="bg-gray-200">
                <th className="border py-2 px-4">No</th>
                <th className="border py-2 px-4">Foto</th>
                <th className="border py-2 px-4">Info</th>
                <th className="border py-2 px-4">Aktif</th>
                <th className="border py-2 px-4">Tanggal Posting</th>
                <th className="border py-2 px-4">Action</th>
              </tr>
            </thead>
            <tbody>
              {infoData.map((item, index) => (
                <tr key={item.id}>
                  <td className="border py-2 px-4 text-center">{index + 1}</td>
                  <td className="border py-2 px-4 text-center">
                    <img src={`/path/to/${item.foto}`} alt="Info Foto" className="w-16 h-16 object-cover" />
                  </td>
                  <td className="border py-2 px-4">{item.info}</td>
                  <td className="border py-2 px-4 text-center">{item.aktif}</td>
                  <td className="border py-2 px-4 text-center">{item.tanggal}</td>
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

export default SekilasInfoPage;
