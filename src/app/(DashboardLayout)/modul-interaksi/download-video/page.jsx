"use client";
import { useState } from "react";

const Dashboard = () => {
  const [data, setData] = useState([
    {
      id: 1,
      judul: "Relaas Perkara No.0081/Pdt.G/2013/PA.Stg",
      link: "Download",
      hits: "6 Kali",
      tanggal: "23 Sep 2014",
    },
    {
      id: 2,
      judul: "Instruksi Ketua Umum IPASPI Pusat (new)",
      link: "Download",
      hits: "24 Kali",
      tanggal: "23 Sep 2014",
    },
    {
      id: 3,
      judul: "Verifikasi Kewajaran Nilai Tanah SIMAK-BMN",
      link: "Download",
      hits: "3 Kali",
      tanggal: "23 Sep 2014",
    },
    {
      id: 4,
      judul: "Tindaklanjut Temuan Pemeriksaan BPK RI",
      link: "Download",
      hits: "12 Kali",
      tanggal: "23 Sep 2014",
    },
    {
      id: 5,
      judul: "Penyusunan RKAKL Alokasi Anggaran DIPA (04)",
      link: "Download",
      hits: "24 Kali",
      tanggal: "23 Sep 2014",
    },
    {
      id: 6,
      judul: "Revisi Tata Cara Restore Backup SAKPA13 Audited",
      link: "Download",
      hits: "44 Kali",
      tanggal: "23 Sep 2014",
    },
    {
      id: 7,
      judul: "Penyusunan PAGU Indikatif Tahun Anggaran 2015",
      link: "Download",
      hits: "57 Kali",
      tanggal: "23 Sep 2014",
    },
    {
      id: 8,
      judul: "Pemanggilan Peserta Bimtek Hakim Tahun 2014",
      link: "Download",
      hits: "33 Kali",
      tanggal: "23 Sep 2014",
    },
    {
      id: 9,
      judul: "Lomba dan Penilaian SIMPEG dan E-DOCu",
      link: "Download",
      hits: "90 Kali",
      tanggal: "23 Sep 2014",
    },
    {
      id: 10,
      judul: "Rapat Koordinasi dan Konsultasi",
      link: "Download",
      hits: "5 Kali",
      tanggal: "23 Sep 2014",
    },
  ]);

  const handleEdit = (id) => {
    console.log(`Edit item dengan ID: ${id}`);
  };

  const handleDelete = (id) => {
    console.log(`Hapus item dengan ID: ${id}`);
    setData(data.filter((item) => item.id !== id));
  };

  return (
    <div>
      <h2>Dashboard</h2>
      <div className="d-flex justify-content-end mb-3">
        <button className="btn btn-primary">Tambahkan Data</button>
      </div>
      <table className="table table-striped mt-3">
        <thead>
          <tr>
            <th>No</th>
            <th>Judul</th>
            <th>Link</th>
            <th>Hits</th>
            <th>Tanggal</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={item.id}>
              <td>{index + 1}</td>
              <td>{item.judul}</td>
              <td>
                <a href="#" className="text-primary">
                  {item.link}
                </a>
              </td>
              <td className="text-center">{item.hits}</td>
              <td className="text-center">{item.tanggal}</td>
              <td className="text-center">
                <div className="d-flex justify-content-center">
                  <button
                    onClick={() => handleEdit(item.id)}
                    className="btn btn-success mx-2"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(item.id)}
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

export default Dashboard;
