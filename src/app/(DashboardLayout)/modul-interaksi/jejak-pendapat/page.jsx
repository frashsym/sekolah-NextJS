"use client";
import { useState } from "react";

const PollingPage = () => {
  const [pollingData, setPollingData] = useState([
    {
      id: 1,
      pilihan: "Laura Himahi v Nisaa - Safaruddin",
      status: "Jawaban",
      rating: 5,
      aktif: "Y",
    },
    {
      id: 2,
      pilihan: "Willy Fernando - Vicky Armita",
      status: "Jawaban",
      rating: 9,
      aktif: "Y",
    },
    {
      id: 3,
      pilihan: "Tommy Utama - Laura Hikmah",
      status: "Jawaban",
      rating: 3,
      aktif: "Y",
    },
    {
      id: 4,
      pilihan: "Wildan Agissa - Dewi Safitri",
      status: "Jawaban",
      rating: 1,
      aktif: "Y",
    },
    {
      id: 5,
      pilihan: "Mahyeldi Ansyarullah - Emzalmi",
      status: "Jawaban",
      rating: 25,
      aktif: "Y",
    },
    {
      id: 6,
      pilihan:
        "Siapakah Calon Walikota dan Wakil Walikota Padang Favorit Anda?",
      status: "Pertanyaan",
      rating: 0,
      aktif: "Y",
    },
  ]);

  const handleEdit = (id) => {
    console.log(`Edit polling dengan ID: ${id}`);
  };

  const handleDelete = (id) => {
    console.log(`Hapus polling dengan ID: ${id}`);
    setPollingData(pollingData.filter((item) => item.id !== id));
  };

  return (
    <div>
      <h2>Polling / Jajak Pendapat</h2>
      <div className="d-flex justify-content-end mb-3">
        <button className="btn btn-primary">Tambahkan Data</button>
      </div>
      <table className="table table-striped mt-3">
        <thead>
          <tr>
            <th>No</th>
            <th>Pilihan</th>
            <th>Status</th>
            <th>Rating</th>
            <th>Aktif</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {pollingData.map((item, index) => (
            <tr key={item.id}>
              <td>{index + 1}</td>
              <td>{item.pilihan}</td>
              <td className="text-center">{item.status}</td>
              <td className="text-center">{item.rating}</td>
              <td className="text-center">{item.aktif}</td>
              <td className="text-center">
                <button onClick={() => handleEdit(item.id)} className="btn btn-success mx-2">Edit</button>
                <button onClick={() => handleDelete(item.id)} className="btn btn-danger mx-2">Hapus</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PollingPage;
