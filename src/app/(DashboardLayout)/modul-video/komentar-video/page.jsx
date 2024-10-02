'use client';
import React, { useState } from "react";

const KomentarVideo = () => {
  const [comments, setComments] = useState([
    {
      no: 1,
      nama: "Dewiit Saiftri",
      isi: "Pemimpin tertinggi Iran, Ayatollah Ali Khamenei menyampaikan pernyataan kontroversial terkait ketegangan di Gaza. Khamenei mendorong agar Palestina terus melawan Israel...",
      aktif: "Y",
    },
    {
      no: 2,
      nama: "Wildan Agissa",
      isi: "Exclusive Di IDAFF Academy - 'Social Blogging Mastery 2' - Workshop 2 Hari Yang Akan Merubah Hidup Anda Di Tahun 2017...",
      aktif: "Y",
    },
    {
      no: 3,
      nama: "Wildan Agissa",
      isi: "Swarakalibata V.3 sekarang hadir dengan tampilan baru yang pastinya sudah jauh lebih maju dari versi sebelumnya.",
      aktif: "Y",
    },
    {
      no: 4,
      nama: "Wildan Agissa",
      isi: "Kita memang harus selamatkan hutan indonesia, walau apapun yang terjadi.",
      aktif: "Y",
    },
    {
      no: 5,
      nama: "Prabowo Subianto",
      isi: "Your email address will not be published. Required fields are marked",
      aktif: "N",
    },
  ]);

  const handleEdit = (no) => {
    console.log(`Edit komentar dengan nomor: ${no}`);
  };

  const handleDelete = (no) => {
    console.log(`Hapus komentar dengan nomor: ${no}`);
    setComments(comments.filter(comment => comment.no !== no));
  };

  return (
    <div>
      <h2>Komentar Video</h2>
      <button type="button" className="btn btn-primary mb-3">Tambahkan Data</button>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>No</th>
            <th>Nama Komentar</th>
            <th>Isi Komentar</th>
            <th>Aktif</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {comments.map((comment, index) => (
            <tr key={comment.no}>
              <td>{index + 1}</td>
              <td>{comment.nama}</td>
              <td>{comment.isi}</td>
              <td>{comment.aktif}</td>
              <td>
                <button onClick={() => handleEdit(comment.no)} className="btn btn-success mx-1">Edit</button>
                <button onClick={() => handleDelete(comment.no)} className="btn btn-danger mx-1">Hapus</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default KomentarVideo;
