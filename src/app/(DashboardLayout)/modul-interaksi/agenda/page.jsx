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

  const handleEdit = (id) => {
    console.log(`Edit agenda dengan ID: ${id}`);
  };

  const handleDelete = (id) => {
    console.log(`Hapus agenda dengan ID: ${id}`);
    setAgendas(agendas.filter((agenda) => agenda.id !== id));
  };

  return (
    <div>
      <h2>Semua Agenda</h2>
      <button className="btn btn-primary">Tambahkan Data</button>
      <table className="table table-striped mt-3">
        <thead>
          <tr>
            <th>No</th>
            <th>Tema</th>
            <th>Tgl Mulai</th>
            <th>Tgl Selesai</th>
            <th>Jam</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {agendas.map((agenda, index) => (
            <tr key={agenda.id}>
              <td>{index + 1}</td>
              <td>{agenda.tema}</td>
              <td>{agenda.start}</td>
              <td>{agenda.end}</td>
              <td>{agenda.time}</td>
              <td>
                <button onClick={() => handleEdit(agenda.id)} className="btn btn-success mx-2">Edit</button>
                <button onClick={() => handleDelete(agenda.id)} className="btn btn-danger mx-2">Hapus</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Dashboard;
