"use client";
import { useState } from "react";

const SekilasInfoPage = () => {
  const [infoData, setInfoData] = useState([
    {
      id: 1,
      foto: "img1.jpg",
      info: "WHO merilis, 30 persen anak-anak di dunia kecanduan menonton televisi dan bermain komputer.",
      aktif: "Y",
      tanggal: "26 Okt 2017",
    },
    {
      id: 2,
      foto: "img2.jpg",
      info: "Menurut United Stated Trade Representatives, 25% obat yang beredar di adalah palsu.",
      aktif: "Y",
      tanggal: "17 Apr 2015",
    },
    {
      id: 3,
      foto: "img3.jpg",
      info: "Menurut peneliti di Detroit, orang yang selalu tersenyum lebar cenderung hidup lama.",
      aktif: "Y",
      tanggal: "17 Apr 2015",
    },
    {
      id: 4,
      foto: "img4.jpg",
      info: "WHO merilis, 30 persen anak di dunia kecanduan komputer dan menonton televisi.",
      aktif: "Y",
      tanggal: "16 Mar 2015",
    },
    {
      id: 5,
      foto: "img5.jpg",
      info: "Anak yang mengalami gangguan tidur, cenderung memakai obat2an dan alkohol berlebih saat dewasa.",
      aktif: "Y",
      tanggal: "11 Apr 2015",
    },
  ]);

  const handleEdit = (id) => {
    console.log(`Edit info dengan ID: ${id}`);
  };

  const handleDelete = (id) => {
    console.log(`Hapus info dengan ID: ${id}`);
    setInfoData(infoData.filter((item) => item.id !== id));
  };

  return (
    <div>
      <h2>Sekilas Info</h2>
      <div className="d-flex justify-content-end mb-3">
        <button className="btn btn-primary">Tambahkan Data</button>
      </div>
      <table className="table table-striped mt-3">
        <thead>
          <tr>
            <th>No</th>
            <th>Foto</th>
            <th>Info</th>
            <th>Aktif</th>
            <th>Tanggal Posting</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {infoData.map((item, index) => (
            <tr key={item.id}>
              <td>{index + 1}</td>
              <td className="text-center">
                <img
                  src={`/path/to/${item.foto}`}
                  alt="Info Foto"
                  className="w-16 h-16 object-cover"
                />
              </td>
              <td>{item.info}</td>
              <td className="text-center">{item.aktif}</td>
              <td className="text-center">{item.tanggal}</td>
              <td className="text-center">
                <div className="d-flex justify-content-center">
                  <button onClick={() => handleEdit(item.id)} className="btn btn-success mx-2">Edit</button>
                  <button onClick={() => handleDelete(item.id)} className="btn btn-danger mx-2">Hapus</button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SekilasInfoPage;
