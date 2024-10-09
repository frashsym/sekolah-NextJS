'use client';
import React, { useState } from 'react';

const Dashboard = () => {
  const [entries, setEntries] = useState([
    {
      id: 1,
      templateName: 'Lokomedia ke Sekolah - Template Web Sekolah',
      creator: 'Wildan Agissa',
      directory: 'lokomedia_sekolah',
      active: 'Y',
    },
  ]);

  return (
    <div className="dashboard-container" style={{ padding: '20px', backgroundColor: '#f8f9fa' }}>
      
      <div className="card mt-4">
        <div className="card-header">
          <h5>Template Website</h5>
          <button className="btn btn-primary" style={{ float: 'right' }}>Tambahkan Data</button>
        </div>
        
        <div className="card-body">
          <div className="mb-3">
            <label htmlFor="entries" className="form-label">Show</label>
            <select id="entries" className="form-select" style={{ display: 'inline', width: '80px', marginLeft: '10px' }}>
              <option value="10">10</option>
              <option value="25">25</option>
              <option value="50">50</option>
            </select>
            <span> entries</span>
          </div>

          <table className="table table-bordered">
            <thead>
              <tr>
                <th>No</th>
                <th>Nama Template</th>
                <th>Pembuat</th>
                <th>Directory</th>
                <th>Aktif</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {entries.map((entry, index) => (
                <tr key={entry.id}>
                  <td>{index + 1}</td>
                  <td>{entry.templateName}</td>
                  <td>{entry.creator}</td>
                  <td>{entry.directory}</td>
                  <td>{entry.active}</td>
                  <td>
                    <button className="btn btn-warning btn-sm mr-2">★</button>
                    <button className="btn btn-success btn-sm mr-2">✎</button>
                    <button className="btn btn-danger btn-sm">✗</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="pagination d-flex justify-content-between">
            <span>Showing 1 to 1 of 1 entries</span>
            <nav aria-label="Page navigation">
              <ul className="pagination">
                <li className="page-item disabled">
                  <a className="page-link" href="#">Previous</a>
                </li>
                <li className="page-item active">
                  <a className="page-link" href="#">1</a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">Next</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
