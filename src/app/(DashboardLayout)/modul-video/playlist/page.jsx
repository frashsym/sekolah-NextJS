'use client';
import React from "react";

const PlaylistTable = () => {
  const data = [
    {
      no: 1,
      cover: "/path/to/image1.jpg",
      judul: "Keluarga Besar Swarakalibata",
      aktif: "Y",
    },
    {
      no: 2,
      cover: "/path/to/image2.jpg",
      judul: "Kantor Baru Swarakalibata",
      aktif: "Y",
    },
  ];

  return (
    <div className="container mx-auto mt-4">
      <h2 className="text-xl font-bold mb-4">Playlist</h2>
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
        <button className="bg-blue-500 text-white px-4 py-2 rounded">Tambahkan Data</button>
      </div>
      <table className="min-w-full border-collapse block md:table">
        <thead>
          <tr className="border-b">
            <th className="p-2 text-left">No</th>
            <th className="p-2 text-left">Cover</th>
            <th className="p-2 text-left">Judul Playlist</th>
            <th className="p-2 text-left">Aktif</th>
            <th className="p-2 text-left">Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.no} className="border-b">
              <td className="p-2">{item.no}</td>
              <td className="p-2">
                <img src={item.cover} alt="Cover" className="w-16 h-16 object-cover" />
              </td>
              <td className="p-2">{item.judul}</td>
              <td className="p-2">{item.aktif}</td>
              <td className="p-2 flex space-x-2">
                <button className="bg-green-500 text-white px-2 py-1 rounded">Edit</button>
                <button className="bg-red-500 text-white px-2 py-1 rounded">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex justify-between items-center mt-2">
        <span>Showing 1 to {data.length} of {data.length} entries</span>
        <div>
          <button className="px-3 py-1 border">Previous</button>
          <button className="px-3 py-1 border bg-blue-500 text-white ml-2">1</button>
          <button className="px-3 py-1 border ml-2">Next</button>
        </div>
      </div>
    </div>
  );
};

export default PlaylistTable;
