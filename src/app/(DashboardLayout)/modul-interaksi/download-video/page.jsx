'use client';
import React, { useState } from 'react';

const Dashboard = () => {
  const [data, setData] = useState([
    {
      id: 1,
      judul: 'Relaas Perkara No.0081/Pdt.G/2013/PA.Stg',
      link: 'Download',
      hits: '6 Kali',
      tanggal: '23 Sep 2014',
    },
    {
      id: 2,
      judul: 'Instruksi Ketua Umum IPASPI Pusat (new)',
      link: 'Download',
      hits: '24 Kali',
      tanggal: '23 Sep 2014',
    },
    {
      id: 3,
      judul: 'Verifikasi Kewajaran Nilai Tanah SIMAK-BMN',
      link: 'Download',
      hits: '3 Kali',
      tanggal: '23 Sep 2014',
    },
    {
      id: 4,
      judul: 'Tindaklanjut Temuan Pemeriksaan BPK RI',
      link: 'Download',
      hits: '12 Kali',
      tanggal: '23 Sep 2014',
    },
    {
      id: 5,
      judul: 'Penyusunan RKAKL Alokasi Anggaran DIPA (04)',
      link: 'Download',
      hits: '24 Kali',
      tanggal: '23 Sep 2014',
    },
    {
      id: 6,
      judul: 'Revisi Tata Cara Restore Backup SAKPA13 Audited',
      link: 'Download',
      hits: '44 Kali',
      tanggal: '23 Sep 2014',
    },
    {
      id: 7,
      judul: 'Penyusunan PAGU Indikatif Tahun Anggaran 2015',
      link: 'Download',
      hits: '57 Kali',
      tanggal: '23 Sep 2014',
    },
    {
      id: 8,
      judul: 'Pemanggilan Peserta Bimtek Hakim Tahun 2014',
      link: 'Download',
      hits: '33 Kali',
      tanggal: '23 Sep 2014',
    },
    {
      id: 9,
      judul: 'Lomba dan Penilaian SIMPEG dan E-DOCu',
      link: 'Download',
      hits: '90 Kali',
      tanggal: '23 Sep 2014',
    },
    {
      id: 10,
      judul: 'Rapat Koordinasi dan Konsultasi',
      link: 'Download',
      hits: '5 Kali',
      tanggal: '23 Sep 2014',
    },
  ]);

  const handleEdit = (id) => {
    // Logika untuk mengedit data
    console.log(`Edit item with id: ${id}`); // Perbaikan sintaksis
  };

  const handleDelete = (id) => {
    // Logika untuk menghapus data
    console.log(`Delete item with id: ${id}`); // Perbaikan sintaksis
    setData(data.filter((item) => item.id !== id));
  };

  return (
    <div className="dashboard">
      <h1>Dashboard</h1>
      <h2>Download File</h2>
      <button className="btn-add">Tambahkan Data</button>
      <table>
        <thead>
          <tr>
            <th>No</th>
            <th>Judul</th>
            <th>Link</th>
            <th>Hits</th>
            <th>Tanggal</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={item.id}>
              <td>{index + 1}</td>
              <td>{item.judul}</td>
              <td>
                <a href="#">{item.link}</a> {/* Pastikan link valid */}
              </td>
              <td>{item.hits}</td>
              <td>{item.tanggal}</td>
              <td>
                <button className="btn-edit" onClick={() => handleEdit(item.id)}>
                  Edit
                </button>
                <button className="btn-delete" onClick={() => handleDelete(item.id)}>
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