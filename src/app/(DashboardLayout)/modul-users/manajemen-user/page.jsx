'use client';
import React, { useState } from 'react';
import { Table, Button } from 'react-bootstrap';

const ManajemenUsers = () => {
  // Sample data for users
  const initialData = [
    { id: 1, username: 'kepala', namaLengkap: 'Wildan Agissa, M.Kom', email: 'dankreze48@gmail.com', foto: 'user1.jpg', blokir: 'N', level: 'user' },
    { id: 2, username: 'admin', namaLengkap: 'Wildan Agissa', email: 'dankreze48@gmail.com', foto: 'user2.jpg', blokir: 'N', level: 'admin' },
    // Add more entries to complete the data
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
        <h2>Manajemen Users</h2>
        <Button variant="primary">Tambahkan Data</Button>
      </div>
      
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>No</th>
            <th>Username</th>
            <th>Nama Lengkap</th>
            <th>Email</th>
            <th>Foto</th>
            <th>Blokir</th>
            <th>Level</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {currentEntries.map((entry, index) => (
            <tr key={entry.id}>
              <td>{indexOfFirstEntry + index + 1}</td>
              <td>{entry.username}</td>
              <td>{entry.namaLengkap}</td>
              <td>{entry.email}</td>
              <td><img src={entry.foto} alt="Foto User" width="50" /></td>
              <td>{entry.blokir}</td>
              <td>{entry.level}</td>
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

export default ManajemenUsers;
