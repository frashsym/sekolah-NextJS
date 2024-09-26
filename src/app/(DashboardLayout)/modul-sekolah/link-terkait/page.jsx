'use client';
import React from 'react';

const UniversityLinksTable = () => {
  const universities = [
    {
      no: 1,
      name: 'Universitas Indonesia',
      abbreviation: 'UI',
      url: 'http://www.ui.ac.id/',
    },
    {
      no: 2,
      name: 'Universitas Gajah Mada',
      abbreviation: 'UGM',
      url: 'http://www.ugm.ac.id/',
    },
    {
      no: 3,
      name: 'Universitas Brawijaya',
      abbreviation: 'UB',
      url: 'http://www.brawijaya.ac.id/',
    },
    {
      no: 4,
      name: 'Universitas Lampung',
      abbreviation: 'UL',
      url: 'http://www.unila.ac.id/',
    },
    {
      no: 5,
      name: 'Universitas Hasanuddin',
      abbreviation: 'UH',
      url: 'http://www.unhas.ac.id/',
    },
    {
      no: 6,
      name: 'Universitas Diponegoro',
      abbreviation: 'UD',
      url: 'http://www.undip.ac.id/',
    },
    {
      no: 7,
      name: 'Universitas Udayana',
      abbreviation: 'UU',
      url: 'http://www.unud.ac.id/',
    },
    {
      no: 8,
      name: 'Universitas Sumatera Utara',
      abbreviation: 'USU',
      url: 'http://www.usu.ac.id/',
    },
    {
      no: 9,
      name: 'Universitas Airlangga',
      abbreviation: 'UA',
      url: 'http://www.unair.ac.id/',
    },
    {
      no: 10,
      name: 'Institut Teknologi Bandung',
      abbreviation: 'ITB',
      url: 'http://www.itb.ac.id/',
    },
  ];

  return (
    <div className="container mt-5">
      <h2>Link Terkait</h2>
      <button className="btn btn-primary mb-3">Tambahkan Data</button>
      <div className="table-responsive">
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>No</th>
              <th>Judul</th>
              <th>Singkatan</th>
              <th>URL</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {universities.map((uni) => (
              <tr key={uni.no}>
                <td>{uni.no}</td>
                <td>{uni.name}</td>
                <td>{uni.abbreviation}</td>
                <td>
                  <a href={uni.url} target="_blank" rel="noopener noreferrer" className="text-primary">
                    {uni.url}
                  </a>
                </td>
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

export default UniversityLinksTable;
