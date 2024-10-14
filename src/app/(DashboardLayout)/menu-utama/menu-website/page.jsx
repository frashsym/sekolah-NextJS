"use client";

import React, { useState, useEffect } from "react";
import { API_Frontend, API_Backend } from "../../../api/api.js";

const MenuTable = () => {
  const initialData = [
    {
      no: 1,
      menu: "Album Foto",
      levelMenu: "Galeri",
      link: "albums",
      aktif: "Ya",
      position: "Bottom",
      urutan: 0,
    },
    {
      no: 2,
      menu: "Home",
      levelMenu: "Menu Utama",
      link: "main",
      aktif: "Ya",
      position: "Bottom",
      urutan: 1,
    },
    // ... Add remaining menu items here
  ];

  const [menuData, setMenuData] = useState(initialData);
  const [searchTerm, setSearchTerm] = useState("");
  const [menu, setMenu] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const [menuRes] = await Promise.all([axios.get(`${API_Backend}/menu`)]);
        setMenu(menuRes.data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleDelete = (no) => {
    setMenuData(menuData.filter((item) => item.no !== no));
  };

  const handleEdit = (no) => {
    alert(`Edit item with No: ${no}`);
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredData = menuData.filter((item) =>
    item.menu.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <div className="d-flex justify-content-between mb-3">
        <h2>Menu Website (Multilevel)</h2>
        <button type="button" className="btn btn-primary">
          Tambahkan Data
        </button>
      </div>

      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleSearch}
        className="form-control mb-3"
      />

      <table className="table table-striped">
        <thead>
          <tr>
            <th>No</th>
            <th>Menu</th>
            <th>Level Menu</th>
            <th>Link</th>
            <th>Aktif</th>
            <th>Position</th>
            <th>Urutan</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((item) => (
            <tr key={item.no}>
              <td>{item.no}</td>
              <td>{item.menu}</td>
              <td>{item.levelMenu}</td>
              <td>
                <a href={item.link}>{item.link}</a>
              </td>
              <td>{item.aktif}</td>
              <td>{item.position}</td>
              <td>{item.urutan}</td>
              <td>
                <button
                  onClick={() => handleEdit(item.no)}
                  className="btn btn-success me-2"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(item.no)}
                  className="btn btn-danger"
                >
                  Hapus
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MenuTable;
