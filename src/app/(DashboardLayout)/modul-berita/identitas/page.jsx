"use client";
import React from "react";

const PlaylistTable = () => {
  const data = [
    {
      no: 1,
      judul: "Lomba baru GGWP",
      tanggal: "22 Jul 2024",
      aktif: "Published",
    },
    {
      no: 2,
      judul: "Kejuaraan Karate Tingkat Provinsi 2018",
      tanggal: "23 Jul 2024",
      aktif: "Published",
    },
    {
      no: 3,
      judul: "Pentas Drama Sanggar Seni Celoteh 2018",
      tanggal: "24 Jul 2024",
      aktif: "Published",
    },
    {
      no: 4,
      judul: "Kejurnas Universitas Teknologi Indonesia - BALI 2018",
      tanggal: "25 Jul 2024",
      aktif: "Published",
    },
    {
      no: 5,
      judul: "Lomba Karya Ilmiah Nasional 2018",
      tanggal: "26 Jul 2024",
      aktif: "Published",
    },
  ];

  return (
    <div className="container mt-4">
      <h2 className="h4 mb-4">Playlist</h2>
      <div className="d-flex justify-content-between mb-2">
        <div>
          <label className="me-2">
            Show
            <select className="form-select form-select-sm d-inline-block w-auto ms-2">
              <option value="10">10</option>
              <option value="25">25</option>
              <option value="50">50</option>
            </select>
            entries
          </label>
        </div>
        <button className="btn btn-primary">Tambahkan Data</button>
      </div>
      <div className="table-responsive">
        <table className="table table-striped table-bordered">
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
            {data.map((item) => (
              <tr key={item.no}>
                <td>{item.no}</td>
                <td>{item.judul}</td>
                <td>{item.tanggal}</td>
                <td>{item.aktif}</td>
                <td>
                  <button className="btn btn-success btn-sm me-2">Edit</button>
                  <button className="btn btn-danger btn-sm">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="d-flex justify-content-between align-items-center mt-2">
        <span>
          Showing 1 to {data.length} of {data.length} entries
        </span>
        <div>
          <button className="btn btn-outline-secondary btn-sm me-2">Previous</button>
          <button className="btn btn-primary btn-sm">1</button>
          <button className="btn btn-outline-secondary btn-sm ms-2">Next</button>
        </div>
      </div>
    </div>
  );
};

export default PlaylistTable;
