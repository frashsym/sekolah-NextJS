'use client';
import React, { useState } from 'react';

const AdTable = () => {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="container mt-4">
      <h2>Iklan Home</h2>
      <div className="d-flex justify-content-between align-items-center mb-2">
        <div>
          <label>
            Show
            <select className="mx-2">
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

      <div className="d-flex justify-content-end mb-2">
        <input
          type="text"
          placeholder="Search"
          className="form-control"
          style={{ width: '200px' }}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <table className="table table-bordered">
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
                <td>{item.link}</td>
                <td>{item.tglPosting}</td>
                <td>
                  {/* Add your action buttons or links here */}
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>

      <div className="d-flex justify-content-between">
        <div>Showing 0 to 0 of 0 entries</div>
        <div>
          <button className="btn btn-link">Previous</button>
          <button className="btn btn-link">Next</button>
        </div>
      </div>
    </div>
  );
};

export default AdTable;
