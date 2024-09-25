'use client'
import React from "react";

const KomentarVideo = () => {
  const comments = [
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
  ];

  return (
    <div className="container mx-auto mt-4">
      <h2 className="text-xl font-bold mb-4">Komentar Video</h2>
      <div className="flex justify-between mb-2">
        <div>
          <label>
            Show
            <select className="border ml-2 p-1">
              <option value="10">10</option>
              <option value="25">25</option>
              <option value="50">50</option>
            </select>
            entries
          </label>
        </div>
      </div>
      <table className="min-w-full border-collapse block md:table">
        <thead>
          <tr className="border-b">
            <th className="p-2 text-left">No</th>
            <th className="p-2 text-left">Nama Komentar</th>
            <th className="p-2 text-left">Isi Komentar</th>
            <th className="p-2 text-left">Aktif</th>
            <th className="p-2 text-left">Action</th>
          </tr>
        </thead>
        <tbody>
          {comments.map((comment) => (
            <tr key={comment.no} className="border-b">
              <td className="p-2">{comment.no}</td>
              <td className="p-2 text-blue-500 cursor-pointer">{comment.nama}</td>
              <td className="p-2">{comment.isi}</td>
              <td className="p-2">{comment.aktif}</td>
              <td className="p-2 flex space-x-2">
                <button className="bg-green-500 text-white px-2 py-1 rounded">Edit</button>
                <button className="bg-red-500 text-white px-2 py-1 rounded">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex justify-between items-center mt-2">
        <span>Showing 1 to {comments.length} of {comments.length} entries</span>
        <div>
          <button className="px-3 py-1 border">Previous</button>
          <button className="px-3 py-1 border bg-blue-500 text-white ml-2">1</button>
          <button className="px-3 py-1 border ml-2">Next</button>
        </div>
      </div>
    </div>
  );
};

export default KomentarVideo;
