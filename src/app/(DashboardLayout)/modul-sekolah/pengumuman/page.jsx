'use client';
import React from 'react';

const AnnouncementTable = () => {
  const data = [
    {
      no: 1,
      title: 'Pengumuman Libur Lebaran Tahun 2015 / 1436 H',
      file: 'Tidak ada File',
      fileLink: null,
      date: '08 Jul 2015 07:13:40',
    },
    {
      no: 2,
      title: 'Penerimaan Peserta Didik Baru (PPDB) Tahun 2015',
      file: 'Download File',
      fileLink: '#', // Link to the file
      date: '08 Jul 2015 00:00:00',
    },
    {
      no: 3,
      title: 'Pengumuman Edaran Kelulusan Peserta Didik SMAN 01 Padang',
      file: 'Download File',
      fileLink: '#', // Link to the file
      date: '08 Jul 2015 00:00:00',
    },
  ];

  return (
    <div className="container mt-5">
      <h2>Data Pengumuman</h2>
      <button className="btn btn-primary mb-3">Tambahkan Data</button>
      <div className="table-responsive">
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>No</th>
              <th>Judul</th>
              <th>File</th>
              <th>Tanggal</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.no}>
                <td>{item.no}</td>
                <td>{item.title}</td>
                <td>
                  {item.fileLink ? (
                    <a href={item.fileLink} className="text-primary">
                      {item.file}
                    </a>
                  ) : (
                    <span className="text-danger">{item.file}</span>
                  )}
                </td>
                <td>{item.date}</td>
                <td>
                  <button className="btn btn-success btn-sm">Edit</button>{' '}
                  <button className="btn btn-danger btn-sm">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AnnouncementTable;
