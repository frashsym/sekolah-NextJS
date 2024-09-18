"use client"; // Ensure this is treated as a client component

import React, { useState } from "react";

const MenuTable = () => {
  const initialData = [
    { no: 1, menu: "Album Foto", levelMenu: "Galeri", link: "albums", aktif: "Ya", position: "Bottom", urutan: 0 },
    { no: 2, menu: "Home", levelMenu: "Menu Utama", link: "main", aktif: "Ya", position: "Bottom", urutan: 1 },
    { no: 3, menu: "Paskibra", levelMenu: "Ekstrakulikuler", link: "playlist", aktif: "Ya", position: "Bottom", urutan: 1 },
    { no: 4, menu: "Koleksi Video", levelMenu: "Galeri", link: "playlist", aktif: "Ya", position: "Bottom", urutan: 1 },
    { no: 5, menu: "Index Berita", levelMenu: "Menu Utama", link: "berita/indeks_berita", aktif: "Ya", position: "Top", urutan: 1 },
    { no: 6, menu: "Prestasi Siswa", levelMenu: "Informasi", link: "kategori/detail/prestasi", aktif: "Ya", position: "Bottom", urutan: 1 },
    { no: 7, menu: "Informasi", levelMenu: "Menu Utama", link: "#", aktif: "Ya", position: "Bottom", urutan: 2 },
    { no: 8, menu: "Tentang Kami", levelMenu: "Menu Utama", link: "halaman/detail/tentang-kami-tunggul-news", aktif: "Ya", position: "Top", urutan: 2 },
    { no: 9, menu: "Ekstrakulikuler", levelMenu: "Menu Utama", link: "#", aktif: "Ya", position: "Bottom", urutan: 3 },
    { no: 10, menu: "Alamat Kami", levelMenu: "Menu Utama", link: "halaman/detail/alamat-perusahaan", aktif: "Ya", position: "Top", urutan: 3 },
  ];

  const [menuData, setMenuData] = useState(initialData);
  const [searchTerm, setSearchTerm] = useState("");

  const handleDelete = (no) => {
    setMenuData(menuData.filter(item => item.no !== no));
  };

  const handleEdit = (no) => {
    alert(`Edit item with No: ${no}`);
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredData = menuData.filter(item =>
    item.menu.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
      <h3>Menu Website (Multilevel)</h3>

      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "10px" }}>
        <div>
          Show 
          <select style={{ marginLeft: "5px" }}>
            <option value="10">10</option>
            <option value="20">20</option>
            <option value="30">30</option>
          </select>
          entries
        </div>
        <div>
          <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={handleSearch}
            style={{ padding: "5px", marginLeft: "10px" }}
          />
        </div>
        <button
          style={{
            backgroundColor: "blue",
            color: "#fff",
            padding: "5px 10px",
            border: "none",
            borderRadius: "3px",
            cursor: "pointer",
          }}
          onClick={() => alert('Tambah Data')}
        >
          Tambah Data
        </button>
      </div>

      <table style={{ width: "100%", borderCollapse: "collapse" }}>
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
            <tr key={item.no} style={{ borderBottom: "1px solid #ddd" }}>
              <td>{item.no}</td>
              <td>{item.menu}</td>
              <td>{item.levelMenu}</td>
              <td><a href={item.link}>{item.link}</a></td>
              <td>{item.aktif}</td>
              <td>{item.position}</td>
              <td>{item.urutan}</td>
              <td>
                <button
                  style={{
                    backgroundColor: "green",
                    color: "#fff",
                    padding: "5px 10px",
                    marginRight: "5px",
                    border: "none",
                    borderRadius: "3px",
                    cursor: "pointer",
                  }}
                  onClick={() => handleEdit(item.no)}
                >
                  Edit
                </button>
                <button
                  style={{
                    backgroundColor: "red",
                    color: "#fff",
                    padding: "5px 10px",
                    border: "none",
                    borderRadius: "3px",
                    cursor: "pointer",
                  }}
                  onClick={() => handleDelete(item.no)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div style={{ display: "flex", justifyContent: "space-between", marginTop: "20px" }}>
        <div>Showing 1 to {menuData.length} of {menuData.length} entries</div>
        <div>
          <button style={{ marginRight: "10px" }}>Previous</button>
          <button>Next</button>
        </div>
      </div>
    </div>
  );
};

export default MenuTable;
