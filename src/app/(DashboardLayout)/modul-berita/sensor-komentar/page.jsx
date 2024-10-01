"use client";
import React, { useState } from "react";

const SensorKomentar = () => {
  const data = [
    { no: 1, katajelek: "jembut", menjadi: "j....t" },
    { no: 2, katajelek: "kontol", menjadi: "k....l" },
    { no: 3, katajelek: "fuck", menjadi: "f..k" },
    { no: 4, katajelek: "sex", menjadi: "s.." },
    { no: 5, katajelek: "bangsat", menjadi: "b.....t" },
    { no: 6, katajelek: "babi", menjadi: "b..i" },
    { no: 7, katajelek: "pantat", menjadi: "p....t" },
    { no: 8, katajelek: "jomok", menjadi: "j...k" },
    { no: 9, katajelek: "sodom", menjadi: "s...m" },
    { no: 10, katajelek: "haram", menjadi: "h...m" },
    { no: 11, katajelek: "ngentot", menjadi: "n.....t" },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const [entriesPerPage, setEntriesPerPage] = useState(10);

  // Calculate the number of pages
  const totalPages = Math.ceil(data.length / entriesPerPage);

  // Get the current data to display
  const indexOfLastItem = currentPage * entriesPerPage;
  const indexOfFirstItem = indexOfLastItem - entriesPerPage;
  const currentData = data.slice(indexOfFirstItem, indexOfLastItem);

  const handlePrevious = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const handleEntriesChange = (event) => {
    setEntriesPerPage(parseInt(event.target.value));
    setCurrentPage(1); // Reset to the first page
  };

  return (
    <div className="container mt-4">
      <h2 className="h4 mb-4">Sensor Komentar Berita</h2>
      <div className="d-flex justify-content-between mb-2">
        <div>
          <label className="me-2">
            Show
            <select className="form-select form-select-sm d-inline-block w-auto ms-2" value={entriesPerPage} onChange={handleEntriesChange}>
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
              <th>Kata Jelek</th>
              <th>Ganti Menjadi</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {currentData.map((item) => (
              <tr key={item.no}>
                <td>{item.no}</td>
                <td>{item.katajelek}</td>
                <td>{item.menjadi}</td>
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
          Showing {indexOfFirstItem + 1} to {Math.min(indexOfLastItem, data.length)} of {data.length} entries
        </span>
        <div>
          <button className="btn btn-outline-secondary btn-sm me-2" onClick={handlePrevious} disabled={currentPage === 1}>
            Previous
          </button>
          <button className="btn btn-primary btn-sm">{currentPage}</button>
          <button className="btn btn-outline-secondary btn-sm ms-2" onClick={handleNext} disabled={currentPage === totalPages}>
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default SensorKomentar;
