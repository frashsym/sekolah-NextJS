"use client";
import { useState } from "react";

const Dashboard = () => {
  const [agendas, setAgendas] = useState([
    {
      id: 1,
      tema: "Elton John Greatest Hits Tour",
      start: "17 Nov 2012",
      end: "17 Nov 2012",
      time: "--",
    },
    {
      id: 2,
      tema: "Festival Musik Bambu Nusantara 2012",
      start: "01 Sep 2012",
      end: "02 Sep 2012",
      time: "09.00 - 21.00 Wib",
    },
    {
      id: 3,
      tema: "Maroon Live in Jakarta 2012",
      start: "05 Okt 2012",
      end: "05 Okt 2012",
      time: "--",
    },
  ]);

  return (
    <div className="min-h-screen flex">
      <main className="flex-1 bg-gray-100 p-8">
        <section className="mt-8 bg-white shadow rounded-lg p-6">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-semibold">Semua Agenda</h2>
            <button className="bg-primary text-white px-4 py-2 rounded">
              Tambahkan Data
            </button>
          </div>
          <table className="w-full mt-4 border-collapse table-fixed">
            {" "}
            <thead>
              <tr className="bg-gray-200">
                <th className="border py-2 px-4 w-1/12">No</th>{" "}
                <th className="border py-2 px-4 w-3/12">Tema</th>{" "}
                <th className="border py-2 px-4 w-2/12">Tgl Mulai</th>{" "}
                <th className="border py-2 px-4 w-2/12">Tgl Selesai</th>{" "}
                <th className="border py-2 px-4 w-2/12">Jam</th>{" "}
                <th className="border py-2 px-4 w-1/12">Action</th>{" "}
              </tr>
            </thead>
            <tbody>
              {agendas.map((agenda) => (
                <tr key={agenda.id}>
                  <td className="border py-2 px-4 text-center">{agenda.id}</td>
                  <td className="border py-2 px-4">{agenda.tema}</td>
                  <td className="border py-2 px-4">{agenda.start}</td>
                  <td className="border py-2 px-4">{agenda.end}</td>
                  <td className="border py-2 px-4">{agenda.time}</td>
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

export default Dashboard;
