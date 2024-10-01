"use client";
import React, { useState, useEffect } from "react";

const PlaylistTable = () => {
  const data = [
    { no: 1, judul: "", link: "berita/tag/" },
    { no: 2, judul: "Prestasi", link: "berita/tag/manusia-ind" },
    { no: 3, judul: "Tutorial", link: "berita/tag/wisata-orang" },
    { no: 4, judul: "Komunitas", link: "berita/tag/manusia" },
    { no: 5, judul: "Teknologi", link: "berita/tag/hutan" },
    { no: 6, judul: "Internasional", link: "berita/tag/internasional" },
    { no: 7, judul: "Palestina", link: "berita/tag/palestina" },
    { no: 8, judul: "Selebritas", link: "berita/tag/selebritas" },
    { no: 9, judul: "Olahraga", link: "berita/tag/olahraga" },
    { no: 10, judul: "Kesehatan", link: "berita/tag/kesehatan" },
    { no: 11, judul: "Nasional", link: "berita/tag/nasional" },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [paginatedData, setPaginatedData] = useState([]);

  const totalPages = Math.ceil(data.length / itemsPerPage);

  useEffect(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    setPaginatedData(data.slice(startIndex, endIndex));
  }, [currentPage, itemsPerPage]);

  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handleItemsPerPageChange = (e) => {
    setItemsPerPage(Number(e.target.value));
    setCurrentPage(1);
  };

  return (
    <div className="container mt-4">
      <h2 className="h4 mb-4">Kategori Berita</h2>
      <div className="d-flex justify-content-between mb-2">
        <div>
          <label className="me-2">
            Show
            <select className="form-select form-select-sm d-inline-block w-auto ms-2" value={itemsPerPage} onChange={handleItemsPerPageChange}>
              <option value="5">5</option>
              <option value="10">10</option>
              <option value="25">25</option>
              <option value="50">50</option>
            </select>
            entries
          </label>
        </div>
        <button className="btn btn-primary">Tag Berita</button>
      </div>
      <div className="table-responsive">
        <table className="table table-striped table-bordered">
          <thead>
            <tr>
              <th>No</th>
              <th>Nama Tag</th>
              <th>Link</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {paginatedData.map((item) => (
              <tr key={item.no}>
                <td>{item.no}</td>
                <td>{item.judul}</td>
                <td>{item.link}</td>
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
          Showing {currentPage} to {paginatedData.length} of {data.length} entries
        </span>
        <div>
          <button className={`btn btn-outline-secondary btn-sm me-2 ${currentPage === 1 ? "disabled" : ""}`} onClick={handlePrevious}>
            Previous
          </button>
          <span>{currentPage}</span>
          <button className={`btn btn-outline-secondary btn-sm ms-2 ${currentPage === totalPages ? "disabled" : ""}`} onClick={handleNext}>
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default PlaylistTable;
