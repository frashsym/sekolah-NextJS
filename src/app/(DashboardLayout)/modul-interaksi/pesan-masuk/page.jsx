"use client";
import { useState } from "react";

const PesanMasuk = () => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      nama: "Wildan Agissa",
      email: "dankrez48@gmail.com",
      subjek: "::1",
      tanggal: "25 Jan 2017",
    },
    {
      id: 2,
      nama: "Wildan Agissa",
      email: "dankrez48@gmail.com",
      subjek: "::1",
      tanggal: "23 Jan 2017",
    },
    {
      id: 3,
      nama: "Udin Sedunia",
      email: "udin.sedunia@gmail.com",
      subjek: "Ip Pengirim : 120.177.28.244",
      tanggal: "02 Jun 2015",
    },
    {
      id: 4,
      nama: "Lusi Rahmawati",
      email: "dankrez48@gmail.com",
      subjek: "xvgcxvxc",
      tanggal: "02 Jul 2014",
    },
    {
      id: 5,
      nama: "yusri renor",
      email: "aciafifah@gmail.com",
      subjek: "pertanyaan",
      tanggal: "19 Jan 2014",
    },
  ]);

  const handleReply = (id) => {
    console.log(`Reply to message with id: ${id}`);
  };

  const handleDelete = (id) => {
    console.log(`Delete message with id: ${id}`);
    setMessages(messages.filter((message) => message.id !== id));
  };

  return (
    <div>
      <h2>Pesan Masuk</h2>
      <div className="d-flex justify-content-end mb-3">
        <button className="btn btn-primary">Tambahkan Data</button>
      </div>
      <table className="table table-striped mt-3">
        <thead>
          <tr>
            <th>No</th>
            <th>Nama</th>
            <th>Email</th>
            <th>Subjek</th>
            <th>Tanggal</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {messages.map((message, index) => (
            <tr key={message.id}>
              <td>{index + 1}</td>
              <td>{message.nama}</td>
              <td>{message.email}</td>
              <td>{message.subjek}</td>
              <td className="text-center">{message.tanggal}</td>
              <td className="text-center">
                <div className="d-flex justify-content-center">
                  <button
                    onClick={() => handleReply(message.id)}
                    className="btn btn-success mx-2"
                  >
                    Reply
                  </button>
                  <button
                    onClick={() => handleDelete(message.id)}
                    className="btn btn-danger mx-2"
                  >
                    Hapus
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PesanMasuk;