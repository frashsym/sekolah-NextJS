'use client';
import React, { useState } from 'react';

const AdTable = () => {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="container mt-4">
      <h2 className="mb-3">Iklan Home</h2>

      <div className="d-flex justify-content-between align-items-center mb-4">
        <div>
          <label>
            Show
            <select className="form-select d-inline-block mx-2 w-auto">
              <option value="10">10</option>
              <option value="25">25</option>
              <option value="50">50</option>
              <option value="100">100</option>
            </select>
            entries
          </label>
        </div>
        <div>
          <button className="btn btn-primary">Tambahkan Data</button>
        </div>
      </div>

      <div className="d-flex justify-content-end mb-3">
        <input
          type="text"
          placeholder="Search"
          className="form-control w-auto"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <table className="table table-striped table-bordered">
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
          {data.length === 0 ? (
            <tr>
              <td colSpan="5" className="text-center">
                No data available in table
              </td>
            </tr>
          ) : (
            data.map((item, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{item.judul}</td>
                <td>
                  <a href={item.link} target="_blank" rel="noopener noreferrer">
                    {item.link}
                  </a>
                </td>
                <td>{item.tglPosting}</td>
                <td>
                  <button className="btn btn-success me-2">Edit</button>
                  <button className="btn btn-danger">Delete</button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>

      <div className="d-flex justify-content-between">
        <div>Showing 0 to 0 of 0 entries</div>
        <div>
          <button className="btn btn-secondary me-2">Previous</button>
          <button className="btn btn-secondary">Next</button>
        </div>
      </div>
    </div>
  );
};

export default AdTable;
