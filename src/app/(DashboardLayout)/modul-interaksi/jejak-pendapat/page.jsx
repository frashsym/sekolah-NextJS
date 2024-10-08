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

  return (
    <div className="min-h-screen flex">
      <main className="flex-1 bg-gray-100 p-8">
        <section className="mt-8 bg-white shadow rounded-lg p-6">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-semibold">Polling / Jajak Pendapat</h2>
            <button className="bg-primary text-white px-4 py-2 rounded">
              Tambahkan Data
            </button>
          </div>
          <table className="w-full mt-4 border-collapse">
            <thead>
              <tr className="bg-gray-200">
                <th className="border py-2 px-4">No</th>
                <th className="border py-2 px-4">Pilihan</th>
                <th className="border py-2 px-4">Status</th>
                <th className="border py-2 px-4">Rating</th>
                <th className="border py-2 px-4">Aktif</th>
                <th className="border py-2 px-4">Action</th>
              </tr>
            </thead>
            <tbody>
              {pollingData.map((item) => (
                <tr key={item.id}>
                  <td className="border py-2 px-4 text-center">{item.id}</td>
                  <td className="border py-2 px-4">{item.pilihan}</td>
                  <td className="border py-2 px-4 text-center">
                    {item.status}
                  </td>
                  <td className="border py-2 px-4 text-center">
                    {item.rating}
                  </td>
                  <td className="border py-2 px-4 text-center">{item.aktif}</td>
                  <td className="border py-2 px-4 text-center">
                    <button className="text-green-500 mx-2">✎</button>
                    <button className="text-red-500 mx-2">✖</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </main>
    </div>
  );
};

export default PollingPage;
