"use client";
import React, { useState } from "react";

const GaleriBerita = () => {
  const allData = [
    {
      no: 1,
      foto: "/path/to/image1.jpg",
      judul: "Murah Meriah di Pasar Asemka",
      album: "Pasar Asemka",
    },
    {
      no: 2,
      foto: "/path/to/image2.jpg",
      judul: "Festival Seni Terbesar di Dunia",
      album: "Festival Seni",
    },
    {
      no: 3,
      foto: "/path/to/image3.jpg",
      judul: "Konser Kantata Barock 2011",
      album: "Konser Kantata Barock",
    },
    {
      no: 4,
      foto: "/path/to/image4.jpg",
      judul: "Konser Kantata Barock 2012",
      album: "Konser Kantata Barock",
    },
    {
      no: 5,
      foto: "/path/to/image5.jpg",
      judul: "Konser Kantata Barock 2013",
      album: "Konser Kantata Barock",
    },
  ];

  const [data, setData] = useState(allData);
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);
    const filteredData = allData.filter((item) => item.album.toLowerCase().includes(term));
    setData(filteredData);
  };

  return (
    <div className="container mt-4">
      <h2 className="h4 mb-4">Galeri Berita</h2>
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
      <div className="d-flex justify-content-end mb-3">
        <input type="text" className="form-control form-control-sm w-auto" placeholder="Cari berita..." value={searchTerm} onChange={handleSearch} />
      </div>
      <div className="table-responsive">
        <table className="table table-striped table-bordered">
          <thead>
            <tr>
              <th>No</th>
              <th>Foto</th>
              <th>Judul Foto</th>
              <th>Nama Album</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data.length > 0 ? (
              data.map((item) => (
                <tr key={item.no}>
                  <td>{item.no}</td>
                  <td>
                    <img src={item.foto} alt="Foto" className="img-fluid" style={{ width: "50px", height: "50px", objectFit: "cover" }} />
                  </td>
                  <td>{item.judul}</td>
                  <td>{item.album}</td>
                  <td>
                    <button className="btn btn-success btn-sm me-2">Edit</button>
                    <button className="btn btn-danger btn-sm">Delete</button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" className="text-center">
                  Data tidak ditemukan
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      <div className="d-flex justify-content-between align-items-center mt-2">
        <span>
          Showing 1 to {data.length} of {allData.length} entries
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

export default GaleriBerita;