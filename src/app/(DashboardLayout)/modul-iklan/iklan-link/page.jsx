"use client";
import React, { useState } from "react";

const BannerLink = () => {
  const [data, setData] = useState([
    {
      id: 1,
      judul: "Komunitas Pecinta CMS Lokomedia",
      link: "https://phpmu.com",
      tanggal: "21 Mei 2017",
    },
    {
      id: 2,
      judul: "Jasa Pembuatan Website Murah",
      link: "https://phpmu.com",
      tanggal: "21 Mei 2017",
    },
    {
      id: 3,
      judul: "Komunitas Belajar Web Programming",
      link: "https://phpmu.com",
      tanggal: "21 Mei 2017",
    },
    {
      id: 4,
      judul: "Kursus Web Programming Online",
      link: "https://phpmu.com",
      tanggal: "21 Mei 2017",
    },
    {
      id: 5,
      judul: "Private Training Web Development",
      link: "https://phpmu.com",
      tanggal: "21 Mei 2017",
    },
  ]);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  return (
    <div className="container mx-auto mt-5">
      <h2 className="text-xl font-bold mb-4">Banner Link</h2>

      <div className="mb-4">
        <button className="bg-primary text-white px-4 py-2 rounded">
          Tambahkan Data
        </button>
      </div>

      <div className="mb-4 flex justify-between">
        <div>
          <label>Show </label>
          <select className="border p-1 rounded">
            <option value="10">10</option>
            <option value="25">25</option>
            <option value="50">50</option>
          </select>
          <label> entries</label>
        </div>
        <div>
          <input
            type="text"
            placeholder="Search"
            className="border rounded p-1"
          />
        </div>
      </div>

      <table className="min-w-full bg-white border border-gray-200">
        <thead>
          <tr>
            <th className="border px-4 py-2">No</th>
            <th className="border px-4 py-2">Judul</th>
            <th className="border px-4 py-2">Link</th>
            <th className="border px-4 py-2">Tgl Posting</th>
            <th className="border px-4 py-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={item.id}>
              <td className="border px-4 py-2">{index + 1}</td>
              <td className="border px-4 py-2">{item.judul}</td>
              <td className="border px-4 py-2">
                <a
                  href={item.link}
                  className="text-blue-500"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {item.link}
                </a>
              </td>
              <td className="border px-4 py-2">{item.tanggal}</td>
              <td className="border px-4 py-2">
                <button className="bg-success text-white px-2 py-1 rounded mr-2">
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(item.id)}
                  className="bg-danger text-white px-2 py-1 rounded"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="mt-4 flex justify-between items-center">
        <p>
          Showing 1 to {data.length} of {data.length} entries
        </p>
        <div>
          <button className="px-3 py-1 border bg-gray-200 rounded-l">
            Previous
          </button>
          <button className="px-3 py-1 border bg-blue-500 text-black">1</button>
          <button className="px-3 py-1 border bg-gray-200 rounded-r">
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default BannerLink;
