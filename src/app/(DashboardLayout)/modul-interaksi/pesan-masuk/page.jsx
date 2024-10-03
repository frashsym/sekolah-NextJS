"use client";
import React, { useState } from "react";

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
    // Logika untuk membalas pesan
    console.log(`Reply to message with id: ${id}`);
  };

  const handleDelete = (id) => {
    // Logika untuk menghapus pesan
    console.log(`Delete message with id: ${id}`);
    setMessages(messages.filter((message) => message.id !== id));
  };

  return (
    <div className="pesan-masuk container my-4">
      <h2 className="mb-2">Pesan Masuk</h2>
      <table className="table table-bordered">
        <thead className="table-light">
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
              <td>{message.tanggal}</td>
              <td>
                <button
                  className="btn btn-success me-2"
                  onClick={() => handleReply(message.id)}
                >
                  Reply
                </button>
                <button
                  className="btn btn-danger"
                  onClick={() => handleDelete(message.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PesanMasuk;
