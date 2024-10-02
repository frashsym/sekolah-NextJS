'use client';
import React, { useState } from "react";

const TagVideo = () => {
  const [tags, setTags] = useState([
    { no: 1, nama: "Nasional", link: "video/tag/nasional" },
    { no: 2, nama: "Teknologi", link: "video/tag/teknologi" },
    { no: 3, nama: "Perang", link: "video/tag/perang" },
  ]);

  const handleEdit = (no) => {
    console.log(`Edit tag dengan nomor: ${no}`);
  };

  const handleDelete = (no) => {
    console.log(`Hapus tag dengan nomor: ${no}`);
    setTags(tags.filter(tag => tag.no !== no));
  };

  return (
    <div>
      <h2>Tag Video</h2>
      <button type="button" className="btn btn-primary mb-3">Tambahkan Data</button>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>No</th>
            <th>Nama Tag</th>
            <th>Link</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {tags.map((tag, index) => (
            <tr key={tag.no}>
              <td>{index + 1}</td>
              <td>{tag.nama}</td>
              <td>
                <a href={`/${tag.link}`} className="text-primary">
                  {tag.link}
                </a>
              </td>
              <td>
                <button onClick={() => handleEdit(tag.no)} className="btn btn-success mx-1">Edit</button>
                <button onClick={() => handleDelete(tag.no)} className="btn btn-danger mx-1">Hapus</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TagVideo;
