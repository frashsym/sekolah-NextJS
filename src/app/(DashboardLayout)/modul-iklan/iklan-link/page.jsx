"use client";
import React, { useState } from "react";

const BannerLink = () => {
  const [data, setData] = useState([
    {
      id: 1,
      judul: "Komunitas Pecinta CMS Lokomedia",
      link: "https://phpmu.com",
      tanggal: "21 Mei 2017",
    },
    {
      id: 2,
      judul: "Jasa Pembuatan Website Murah",
      link: "https://phpmu.com",
      tanggal: "21 Mei 2017",
    },
    {
      id: 3,
      judul: "Komunitas Belajar Web Programming",
      link: "https://phpmu.com",
      tanggal: "21 Mei 2017",
    },
    {
      id: 4,
      judul: "Kursus Web Programming Online",
      link: "https://phpmu.com",
      tanggal: "21 Mei 2017",
    },
    {
      id: 5,
      judul: "Private Training Web Development",
      link: "https://phpmu.com",
      tanggal: "21 Mei 2017",
    },
  ]);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Banner Link</h2>

      <input
        type="text"
        placeholder="Search"
        className="form-control mb-4 w-auto"
      />

      <div className="mb-4 row">
        <div className="col-md-6">
          <label>Show </label>
          <select className="form-select d-inline-block w-auto">
            <option value="10">10</option>
            <option value="25">25</option>
            <option value="50">50</option>
          </select>
          <label> entries</label>
        </div>
        <div className="col-md-6 text-end">
          <button className="btn btn-primary me-2">Tambahkan Data</button>
        </div>
      </div>

      <table className="table table-striped">
        <thead>
          <tr>
            <th>No</th>
            <th>Judul</th>
            <th>Link</th>
            <th>Tgl Posting</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={item.id}>
              <td>{index + 1}</td>
              <td>{item.judul}</td>
              <td>
                <a
                  href={item.link}
                  className="text-primary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {item.link}
                </a>
              </td>
              <td>{item.tanggal}</td>
              <td>
                <button className="btn btn-success me-2">Edit</button>
                <button
                  onClick={() => handleDelete(item.id)}
                  className="btn btn-danger"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="mt-4 d-flex justify-content-between">
        <p>
          Showing 1 to {data.length} of {data.length} entries
        </p>
        <div>
          <button className="btn btn-secondary me-2">Previous</button>
          <button className="btn btn-primary">1</button>
          <button className="btn btn-secondary ms-2">Next</button>
        </div>
      </div>
    </div>
  );
};

export default BannerLink;
