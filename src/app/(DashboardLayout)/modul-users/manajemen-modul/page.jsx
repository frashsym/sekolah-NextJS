'use client';

import React, { useState } from 'react';
import { Table, Button } from 'react-bootstrap';

const ManajemenModul = () => {
  // Sample data for 29 entries
  const initialData = [
    { id: 1, namaModul: 'Alamat Kontak', link: '/alamat', publish: 'Y', aktif: 'Y', status: 'admin' },
    { id: 2, namaModul: 'Download Area', link: '/download', publish: 'Y', aktif: 'Y', status: 'admin' },
    { id: 3, namaModul: 'Yahoo Messenger', link: '/ym', publish: 'N', aktif: 'N', status: 'admin' },
    { id: 4, namaModul: 'Sekilas Info', link: '/sekilasinfo', publish: 'N', aktif: 'N', status: 'admin' },
    { id: 5, namaModul: 'Background Website', link: '/background', publish: 'N', aktif: 'N', status: 'admin' },
    { id: 6, namaModul: 'Pesan Masuk', link: '/pesanmasuk', publish: 'N', aktif: 'Y', status: 'user' },
    { id: 7, namaModul: 'Iklan Atas', link: '/iklanatas', publish: 'N', aktif: 'N', status: 'admin' },
    { id: 8, namaModul: 'Iklan Home', link: '/iklanhome', publish: 'N', aktif: 'N', status: 'admin' },
    { id: 9, namaModul: 'Iklan Sidebar', link: '/iklansidebar', publish: 'N', aktif: 'N', status: 'admin' },
    { id: 10, namaModul: 'Logo Website', link: '/logowebsite', publish: 'Y', aktif: 'Y', status: 'user' },
    // Add more entries to complete 29
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const [entriesPerPage] = useState(10);

  // Pagination logic
  const indexOfLastEntry = currentPage * entriesPerPage;
  const indexOfFirstEntry = indexOfLastEntry - entriesPerPage;
  const currentEntries = initialData.slice(indexOfFirstEntry, indexOfLastEntry);

  const totalPages = Math.ceil(initialData.length / entriesPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="container">
      <div className="d-flex justify-content-between align-items-center my-3">
        <h2>Manajemen Modul</h2>
        <Button variant="primary">Tambahkan Data</Button>
      </div>
      
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>No</th>
            <th>Nama Modul</th>
            <th>Link</th>
            <th>Publish</th>
            <th>Aktif</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {currentEntries.map((entry, index) => (
            <tr key={entry.id}>
              <td>{indexOfFirstEntry + index + 1}</td>
              <td>{entry.namaModul}</td>
              <td><a href={entry.link}>{entry.link}</a></td>
              <td>{entry.publish}</td>
              <td>{entry.aktif}</td>
              <td>{entry.status}</td>
              <td>
                <Button variant="success" size="sm" className="me-2">Edit</Button>
                <Button variant="danger" size="sm">Delete</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      {/* Pagination */}
      <nav>
        <ul className="pagination">
          {Array.from({ length: totalPages }, (_, i) => (
            <li key={i + 1} className={`page-item ${currentPage === i + 1 ? 'active' : ''}`}>
              <Button className="page-link" onClick={() => paginate(i + 1)}>
                {i + 1}
              </Button>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default ManajemenModul;
