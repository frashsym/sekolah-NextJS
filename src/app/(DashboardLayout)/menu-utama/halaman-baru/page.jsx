'use client';
import { useState } from 'react';

const TableWithPagination = () => {
  // Example Data - You can replace this with real data or fetch it from an API.
  const tableData = [
    { no: 1, judul: 'Sambutan Kepala Sekolah SMAN 01 Tambun Selatan', link: 'halaman/detail/sambutan-kepala-sekolah-sman-01-tambun-selatan', kelompok: 'Sambutan Kepsek', urutan: 1, tglPosting: '06 Jul 2015' },
    { no: 2, judul: 'Ruang Radio Sekolah', link: 'halaman/detail/ruang-radio-sekolah', kelompok: 'Sarana dan Prasarana', urutan: 10, tglPosting: '05 Jul 2015' },
    { no: 3, judul: 'Ruang Piket', link: 'halaman/detail/ruang-piket', kelompok: 'Sarana dan Prasarana', urutan: 9, tglPosting: '05 Jul 2015' },
    { no: 4, judul: 'Ruang Osis', link: 'halaman/detail/ruang-osis', kelompok: 'Sarana dan Prasarana', urutan: 8, tglPosting: '05 Jul 2015' },
    { no: 5, judul: 'Ruang UKS', link: 'halaman/detail/ruang-uks', kelompok: 'Sarana dan Prasarana', urutan: 7, tglPosting: '05 Jul 2015' },
    { no: 6, judul: 'Perpustakaan', link: 'halaman/detail/perpustakaan', kelompok: 'Sarana dan Prasarana', urutan: 6, tglPosting: '05 Jul 2015' },
    { no: 7, judul: 'Laboratorium', link: 'halaman/detail/laboratorium', kelompok: 'Sarana dan Prasarana', urutan: 5, tglPosting: '05 Jul 2015' },
    { no: 8, judul: 'Ruang Audio Visual', link: 'halaman/detail/ruang-audio-visual', kelompok: 'Sarana dan Prasarana', urutan: 4, tglPosting: '05 Jul 2015' },
    { no: 9, judul: 'Ruang Guru', link: 'halaman/detail/ruang-guru', kelompok: 'Sarana dan Prasarana', urutan: 3, tglPosting: '05 Jul 2015' },
    { no: 10, judul: 'Ruang Kelas', link: 'halaman/detail/ruang-kelas', kelompok: 'Sarana dan Prasarana', urutan: 2, tglPosting: '05 Jul 2015' },
    { no: 11, judul: 'Ruang Sekretariat', link: 'halaman/detail/ruang-sekretariat', kelompok: 'Sarana dan Prasarana', urutan: 1, tglPosting: '05 Jul 2015' },
    { no: 12, judul: 'Kantin', link: 'halaman/detail/kantin', kelompok: 'Sarana dan Prasarana', urutan: 11, tglPosting: '05 Jul 2015' },
    { no: 13, judul: 'Lapangan Sekolah', link: 'halaman/detail/lapangan-sekolah', kelompok: 'Sarana dan Prasarana', urutan: 12, tglPosting: '05 Jul 2015' },
    { no: 14, judul: 'Ruang Meeting', link: 'halaman/detail/ruang-meeting', kelompok: 'Sarana dan Prasarana', urutan: 13, tglPosting: '05 Jul 2015' },
    { no: 15, judul: 'Ruang Kepala Sekolah', link: 'halaman/detail/ruang-kepala-sekolah', kelompok: 'Sarana dan Prasarana', urutan: 14, tglPosting: '05 Jul 2015' },
    { no: 16, judul: 'Ruang Wakil Kepala Sekolah', link: 'halaman/detail/ruang-wakil-kepala-sekolah', kelompok: 'Sarana dan Prasarana', urutan: 15, tglPosting: '05 Jul 2015' },
    { no: 17, judul: 'Ruang IT', link: 'halaman/detail/ruang-it', kelompok: 'Sarana dan Prasarana', urutan: 16, tglPosting: '05 Jul 2015' },
    { no: 18, judul: 'Aula', link: 'halaman/detail/aula', kelompok: 'Sarana dan Prasarana', urutan: 17, tglPosting: '05 Jul 2015' },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const totalPages = Math.ceil(tableData.length / itemsPerPage);

  // Get current page data
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentData = tableData.slice(indexOfFirstItem, indexOfLastItem);

  const handlePrevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  return (
    <div className="container">
      <h2>Halaman Baru</h2>
      <button className="btn btn-primary" style={{ float: 'right', marginBottom: '10px' }}>
        Tambah Data
      </button>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>No</th>
            <th>Judul</th>
            <th>Link</th>
            <th>Kelompok</th>
            <th>Urutan</th>
            <th>Tgl Posting</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {currentData.map((row, index) => (
            <tr key={index}>
              <td>{row.no}</td>
              <td>{row.judul}</td>
              <td><a href={row.link}>{row.link}</a></td>
              <td>{row.kelompok}</td>
              <td>{row.urutan}</td>
              <td>{row.tglPosting}</td>
              <td>
                <button className="btn btn-success">Edit</button>
                <button className="btn btn-danger">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination Controls */}
      <div className="pagination">
        <button onClick={handlePrevPage} disabled={currentPage === 1}>
          Previous
        </button>
        <span>{`Page ${currentPage} of ${totalPages}`}</span>
        <button onClick={handleNextPage} disabled={currentPage === totalPages}>
          Next
        </button>
      </div>
    </div>
  );
};    

export default TableWithPagination;
