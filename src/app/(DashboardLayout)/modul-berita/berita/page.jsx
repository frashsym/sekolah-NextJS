'use client';  
import React, { useState } from 'react';

const BeritaTable = () => {
  const [berita, setBerita] = useState([
    { id: 1, judul: 'Lomba Baru GGWP', tanggal: '22 Jul 2024', status: 'Published' },
    { id: 2, judul: 'Kejuaraan Karate Tingkat Provinsi 2018', tanggal: '06 Okt 2018', status: 'Published' },
    { id: 3, judul: 'Pentas Drama Sanggar Seni Celoteh 2018', tanggal: '06 Okt 2018', status: 'Published' },
    { id: 4, judul: 'Kejurnas Universitas Teknologi Indonesia - BALI 2018', tanggal: '06 Okt 2018', status: 'Published' },
    { id: 5, judul: 'Lomba Karya Ilmiah Nasional 2018', tanggal: '06 Okt 2018', status: 'Published' },
    { id: 6, judul: 'Lomba Akuntansi 2018 di Universitas Islam 45 Bekasi', tanggal: '06 Okt 2018', status: 'Published' },
  ]);

  return (
    <div className="container">
      <div className="d-flex justify-content-between align-items-center">
        <h2>Semua Berita</h2>
        <button className="btn btn-primary" style={{ marginTop: '-5px' }}>Tambahkan Data</button>
      </div>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>No</th>
            <th>Judul Berita</th>
            <th>Tanggal</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {berita.map((item, index) => (
            <tr key={item.id}>
              <td>{index + 1}</td>
              <td>{item.judul}</td>
              <td>{item.tanggal}</td>
              <td>
                <span className="badge bg-success">{item.status}</span>
              </td>
              <td>
              <button className="btn btn-success btn-sm me-2">Edit</button>
              <button className="btn btn-danger btn-sm">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div>
        <p>Showing 1 to {berita.length} of {berita.length} entries.</p>
        <nav aria-label="Page navigation">
          <ul className="pagination">
            <li className="page-item"><button className="page-link">Previous</button></li>
            <li className="page-item active"><button className="page-link">1</button></li>
            <li className="page-item"><button className="page-link">Next</button></li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default BeritaTable;
