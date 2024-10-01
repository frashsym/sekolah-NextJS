"use client";
import React from "react";

const PlaylistTable = () => {
  const data = [
    {
      no: 1,
      cover: "/path/to/image1.jpg",
      judul: "Keluarga Besar Swarakalibata",
      aktif: "Y",
    },
    {
      no: 2,
      cover: "/path/to/image2.jpg",
      judul: "Kantor Baru Swarakalibata",
      aktif: "Y",
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
              <th>Cover</th>
              <th>Judul Playlist</th>
              <th>Aktif</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.no}>
                <td>{item.no}</td>
                <td>
                  <img src={item.cover} alt="Cover" className="img-fluid" style={{ width: "50px", height: "50px", objectFit: "cover" }} />
                </td>
                <td>{item.judul}</td>
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
