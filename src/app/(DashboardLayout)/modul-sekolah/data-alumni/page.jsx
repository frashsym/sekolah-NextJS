'use client';
import React from 'react';

const AlumniTable = () => {
  const alumniData = [
    {
      no: 1,
      university: 'Universitas Indonesia',
      alumniCount: 71,
      year: 2017,
    },
    {
      no: 2,
      university: 'Universitas Gajah Mada',
      alumniCount: 55,
      year: 2017,
    },
    {
      no: 3,
      university: 'Universitas Brawijaya',
      alumniCount: 33,
      year: 2017,
    },
    {
      no: 4,
      university: 'Universitas Lampung',
      alumniCount: 11,
      year: 2017,
    },
    {
      no: 5,
      university: 'Universitas Hasanuddin',
      alumniCount: 45,
      year: 2017,
    },
    {
      no: 6,
      university: 'Universitas Diponegoro',
      alumniCount: 12,
      year: 2017,
    },
    {
      no: 7,
      university: 'Universitas Udayana',
      alumniCount: 23,
      year: 2017,
    },
    {
      no: 8,
      university: 'Universitas Sumatera Utara',
      alumniCount: 67,
      year: 2017,
    },
    {
      no: 9,
      university: 'Universitas Airlangga',
      alumniCount: 123,
      year: 2017,
    },
    {
      no: 10,
      university: 'Institut Teknologi Bandung',
      alumniCount: 78,
      year: 2017,
    },
  ];

  return (
    <div className="container mt-5">
      <h2>Semua Data Alumni</h2>
      <button className="btn btn-primary mb-3">Tambahkan Data</button>
      <div className="table-responsive">
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>No</th>
              <th>Nama Kampus</th>
              <th>Jumlah Sebaran</th>
              <th>Tahun</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {alumniData.map((data) => (
              <tr key={data.no}>
                <td>{data.no}</td>
                <td>{data.university}</td>
                <td>{data.alumniCount}</td>
                <td>{data.year}</td>
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

export default AlumniTable;
