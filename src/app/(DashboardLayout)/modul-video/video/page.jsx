'use client';
import React, { useState } from 'react';

const VideoTable = () => {
  const [videos, setVideos] = useState([
    {
      id: 1,
      title: "Chomsky: Calling for change on US support for Israel",
      date: "17 Agu 2014",
      playlist: "Keluarga Besar Swarakalibata",
    },
    {
      id: 2,
      title: "Gaza conflict: Israel & Hamas face allegations of war crimes",
      date: "17 Agu 2014",
      playlist: "Keluarga Besar Swarakalibata",
    },
    {
      id: 3,
      title: "Israel Tembak Mati Warga Palestina Saat Gencatan",
      date: "23 Jul 2014",
      playlist: "Keluarga Besar Swarakalibata",
    },
    {
      id: 4,
      title: "Israel dan Palestina Memanas",
      date: "23 Jul 2014",
      playlist: "Keluarga Besar Swarakalibata",
    },
    {
      id: 5,
      title: "Perang Sengit Pasukan Darat Israel Vs Hamas",
      date: "23 Jul 2014",
      playlist: "Keluarga Besar Swarakalibata",
    },
    {
      id: 6,
      title: "Hutan Hujan Tropis Indonesia",
      date: "02 Jul 2014",
      playlist: "Kantor Baru Swarakalibata",
    },
    {
      id: 7,
      title: "Selamatkan Hutan di Indonesia",
      date: "02 Jul 2014",
      playlist: "Kantor Baru Swarakalibata",
    },
  ]);

  const handleEdit = (id) => {
    // Logic untuk mengedit video berdasarkan id
    console.log(`Edit video dengan ID: ${id}`); // Perbaikan sintaksis
  };

  const handleDelete = (id) => {
    // Logic untuk menghapus video berdasarkan id
    console.log(`Hapus video dengan ID: ${id}`); // Perbaikan sintaksis
    setVideos(videos.filter(video => video.id !== id));
  };

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h2 style={{ marginBottom: 0 }}>Semua Video</h2>
        <button type="button" className="btn btn-primary">Tambahkan Data</button>
      </div>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>No</th>
            <th>Judul Video</th>
            <th>Tanggal Video</th>
            <th>Playlist</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {videos.map((video, index) => (
            <tr key={video.id}>
              <td>{index + 1}</td>
              <td>{video.title}</td>
              <td>{video.date}</td>
              <td>{video.playlist}</td>
              <td>
                <button onClick={() => handleEdit(video.id)} className="btn btn-success">Edit</button>
                <button onClick={() => handleDelete(video.id)} className="btn btn-danger">Hapus</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default VideoTable;