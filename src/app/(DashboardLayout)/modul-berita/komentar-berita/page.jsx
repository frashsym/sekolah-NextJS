"use client";
import React, { useState, useEffect } from "react";

const KomentarBerita = () => {
  const data = [
    { no: 1, namakomentar: "", aktif: "Y", isikomentar: "Para pengunjuk rasa membawa bendera-bendera Palestina dan foro-foto pemimpin tertinggi Iran, Ayatollah Ali Khamenei." },
    { no: 2, namakomentar: "Tommy Utama", aktif: "Y", isikomentar: "Anda penyuka Transformer? Tentu hal yang paling menarik saat menonton film Transformer salah satunya adalah saat adegan transformasi yang begitu keren dari sebuah mobil atau truk menjadi robot yang gagah. Anda penyuka Transformer? Tentu hal yang paling menarik saat menonton film Transformer salah satunya adalah saat adegan transformasi yang begitu keren dari sebuah mobil atau truk menjadi robot yang gagah." },
    { no: 3, namakomentar: "Wildan Agissa", aktif: "N", isikomentar: "Peremimpin tertinggi Iran, Ayatollah Ali Khamenei menyampaikan pernyataan kontroversial terkait ketegangan di Gaza.Israele." },
    { no: 4, namakomentar: "Dewi Safitriir", aktif: "Y", isikomentar: "Setelah membentuk Timnas, PSSI versi KLB pimpinan La Nyalla Mahmud Matalitti menunjuk Alfred Riedl sebagai pelatihnya." },
    { no: 5, namakomentar: "Edo Ikfianda", aktif: "Y", isikomentar: "Mudah-mudahan windows 8.2 tampilannya lebih keren lagi dari windows 8.1 sebelumnya yang kurang enak di gunakan. heheheee" },
    { no: 6, namakomentar: "Eka Praja W", aktif: "Y", isikomentar: "Saya yakin PHP juga bisa bertahan sampai 2030" },
    { no: 7, namakomentar: "Rizal Faizal", aktif: "Y", isikomentar: "Saya yakin PHP juga bisa bertahan sampai 2030" },
    { no: 8, namakomentar: "Udin Sedunia", aktif: "Y", isikomentar: "selebritas" },
    { no: 9, namakomentar: "Dewi Sedunia", aktif: "Y", isikomentar: "olahraga" },
    { no: 10, namakomentar: "Eka Sedunia", aktif: "Y", isikomentar: "kesehatan" },
    { no: 11, namakomentar: "Udin Sedunia", aktif: "Y", isikomentar: "nasional" },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [paginatedData, setPaginatedData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredData, setFilteredData] = useState(data);

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  useEffect(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    setPaginatedData(filteredData.slice(startIndex, endIndex));
  }, [currentPage, itemsPerPage, filteredData]);

  useEffect(() => {
    const results = data.filter((item) => item.namakomentar.toLowerCase().includes(searchTerm.toLowerCase()) || item.isikomentar.toLowerCase().includes(searchTerm.toLowerCase()));
    setFilteredData(results);
    setCurrentPage(1); // Reset ke halaman 1 saat melakukan pencarian
  }, [searchTerm]);

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
      <h2 className="h4 mb-4">Komentar Berita</h2>
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
        {/* Ganti button dengan input live search */}
        <input type="text" className="form-control form-control-sm w-auto" placeholder="Cari komentar..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
      </div>
      <div className="table-responsive">
        <table className="table table-striped table-bordered">
          <thead>
            <tr>
              <th>No</th>
              <th className="w-25">Nama Komentar</th>
              <th>Isi Komentar</th>
              <th>Aktif</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {paginatedData.length > 0 ? (
              paginatedData.map((item) => (
                <tr key={item.no}>
                  <td>{item.no}</td>
                  <td>{item.namakomentar}</td>
                  <td>{item.isikomentar}</td>
                  <td>{item.aktif}</td>
                  <td>
                    <div className="d-flex justify-content-between">
                      <button className="btn btn-success btn-sm me-2">Edit</button>
                      <button className="btn btn-danger btn-sm">Delete</button>
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="text-center">
                  No data found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      <div className="d-flex justify-content-between align-items-center mt-2">
        <span>
          Showing {currentPage} to {paginatedData.length} of {filteredData.length} entries
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

export default KomentarBerita;
