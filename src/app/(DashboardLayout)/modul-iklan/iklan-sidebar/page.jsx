"use client";
import React, { useState } from "react";

const IklanSidebar = () => {
  const [data, setData] = useState([
    {
      id: 1,
      judul: "Iklan Sidebar Kanan",
      link: "http://phpmu.com",
      tanggal: "22 Jun 2014",
    },
    {
      id: 2,
      judul: "Iklan Sidebar Kiri",
      link: "http://phpmu.com",
      tanggal: "22 Jun 2014",
    },
  ]);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Iklan Sidebar</h2>

      <div className="mb-4 row">
        <div className="col-md-6 text-start">
          <div className="mb-4">
            <button className="btn btn-primary">Tambahkan Data</button>
          </div>
          <label>Show </label>
          <select className="form-select d-inline-block w-auto">
            <option value="10">10</option>
            <option value="25">25</option>
            <option value="50">50</option>
          </select>
          <label> entries</label>
        </div>
        <div className="col-md-6 text-end">
          <input
            type="text"
            placeholder="Search"
            className="form-control d-inline-block w-auto"
          />
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
                <a href={item.link} className="text-primary">
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

export default IklanSidebar;
