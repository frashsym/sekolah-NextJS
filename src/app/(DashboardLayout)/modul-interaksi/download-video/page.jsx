"use client";
import React, { useState } from "react";

const Dashboard = () => {
  const [data, setData] = useState([
    {
      id: 1,
      judul: "Relaas Perkara No.0081/Pdt.G/2013/PA.Stg",
      link: "Download",
      hits: "6 Kali",
      tanggal: "23 Sep 2014",
    },
    {
      id: 2,
      judul: "Instruksi Ketua Umum IPASPI Pusat (new)",
      link: "Download",
      hits: "24 Kali",
      tanggal: "23 Sep 2014",
    },
    {
      id: 3,
      judul: "Verifikasi Kewajaran Nilai Tanah SIMAK-BMN",
      link: "Download",
      hits: "3 Kali",
      tanggal: "23 Sep 2014",
    },
    {
      id: 4,
      judul: "Tindaklanjut Temuan Pemeriksaan BPK RI",
      link: "Download",
      hits: "12 Kali",
      tanggal: "23 Sep 2014",
    },
    {
      id: 5,
      judul: "Penyusunan RKAKL Alokasi Anggaran DIPA (04)",
      link: "Download",
      hits: "24 Kali",
      tanggal: "23 Sep 2014",
    },
    {
      id: 6,
      judul: "Revisi Tata Cara Restore Backup SAKPA13 Audited",
      link: "Download",
      hits: "44 Kali",
      tanggal: "23 Sep 2014",
    },
    {
      id: 7,
      judul: "Penyusunan PAGU Indikatif Tahun Anggaran 2015",
      link: "Download",
      hits: "57 Kali",
      tanggal: "23 Sep 2014",
    },
    {
      id: 8,
      judul: "Pemanggilan Peserta Bimtek Hakim Tahun 2014",
      link: "Download",
      hits: "33 Kali",
      tanggal: "23 Sep 2014",
    },
    {
      id: 9,
      judul: "Lomba dan Penilaian SIMPEG dan E-DOCu",
      link: "Download",
      hits: "90 Kali",
      tanggal: "23 Sep 2014",
    },
    {
      id: 10,
      judul: "Rapat Koordinasi dan Konsultasi",
      link: "Download",
      hits: "5 Kali",
      tanggal: "23 Sep 2014",
    },
  ]);

  const handleEdit = (id) => {
    console.log(`Edit item with id: ${id}`);
  };

  const handleDelete = (id) => {
    console.log(`Delete item with id: ${id}`);
    setData(data.filter((item) => item.id !== id));
  };

  return (
    <div className="dashboard px-4">
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
      <h2 className="text-xl mb-4">Download File</h2>
      <button className="bg-primary text-white py-2 px-4 rounded mb-4">
        Tambahkan Data
      </button>
      <table className="w-full border border-gray-300 border-collapse">
        <thead>
          <tr>
            <th className="border border-gray-300 px-4 py-2">No</th>
            <th className="border border-gray-300 px-4 py-2">Judul</th>
            <th className="border border-gray-300 px-4 py-2">Link</th>
            <th className="border border-gray-300 px-4 py-2">Hits</th>
            <th className="border border-gray-300 px-4 py-2">Tanggal</th>
            <th className="border border-gray-300 px-4 py-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={item.id}>
              <td className="border border-gray-300 px-4 py-2 text-center">
                {index + 1}
              </td>
              <td className="border border-gray-300 px-4 py-2">{item.judul}</td>
              <td className="border border-gray-300 px-4 py-2">
                <a href="#" className="text-blue-600 underline">
                  {item.link}
                </a>
              </td>
              <td className="border border-gray-300 px-4 py-2 text-center">
                {item.hits}
              </td>
              <td className="border border-gray-300 px-4 py-2 text-center">
                {item.tanggal}
              </td>
              <td className="border border-gray-300 px-4 py-2 text-center">
                <button
                  className="bg-success text-white py-1 px-3 rounded mr-2"
                  onClick={() => handleEdit(item.id)}
                >
                  Edit
                </button>
                <button
                  className="bg-danger text-white py-1 px-3 rounded"
                  onClick={() => handleDelete(item.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Dashboard;
