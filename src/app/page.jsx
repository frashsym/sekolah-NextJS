// pages/landingPage.tsx
"use client";
import React, { useEffect, useState } from "react";

const LandingPage = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="bg-gray-100 container mx-auto flex">
     <div>
     <header
      style={{
        backgroundColor: "white",
        boxShadow: isScrolled ? "0px 4px 8px rgba(0, 0, 0, 0.1)" : "none",
        padding: "1rem 0",
        marginBottom: "1.5rem",
        position: isScrolled ? "fixed" : "relative",
        width: isScrolled ? "100%" : "auto",
        left: 0,
        zIndex: 1000,
      }}
    >
      {/* Header Section */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          padding: "0 1.5rem",
        }}
      >
        {!isScrolled && (
          <div
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <img
              src="logo-url" // Ganti dengan URL logo
              alt="Logo"
              style={{ height: "64px", width: "64px" }}
            />
            <div style={{ display: "flex", flexDirection: "column" }}>
              <h1 style={{ fontSize: "1.25rem", fontWeight: "bold" }}>
                SMAN 1 TAMBUN SELATAN
              </h1>
              <p style={{ fontSize: "0.875rem" }}>
                Jl. Kebon Kelapa No. 2 Tambun Selatan Kab. Bekasi Telp 021 88325613
              </p>
            </div>
          </div>
        )}
        {!isScrolled && (
          <div>
            <img
              src="header-image-url" // Ganti dengan URL gambar di kanan header
              alt="Header"
              style={{ height: "80px", width: "auto" }}
            />
          </div>
        )}
      </div>

      {/* Navbar Section */}
      <nav style={{ backgroundColor: "#1E3A8A", color: "white", padding: "1rem" }}>
        <ul
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "1.5rem",
            listStyleType: "none",
          }}
        >
          {["HOME", "INFORMASI", "EKSTRAKULIKULER", "GALERI", "E-LEARNING", "AGENDA", "DATA ALUMNI", "KONSULTASI", "HUBUNGI KAMI"].map(
            (item, index) => (
              <li
                key={index}
                style={{
                  position: "relative",
                  transition: "transform 0.3s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "scale(1.05)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "scale(1)";
                }}
              >
                <a
                  href="#"
                  style={{
                    color: "white",
                    textDecoration: "none",
                    transition: "color 0.3s",
                  }}
                  onMouseEnter={(e) => {
                    const dropdown = e.currentTarget.nextSibling;
                    if (dropdown) dropdown.style.display = "block";
                  }}
                  onMouseLeave={(e) => {
                    const dropdown = e.currentTarget.nextSibling;
                    if (dropdown) dropdown.style.display = "none";
                  }}
                >
                  {item}
                </a>
                {/* Dropdown Menu */}
                {(item === "INFORMASI" || item === "EKSTRAKULIKULER" || item === "GALERI") && (
                  <ul
                    style={{
                      display: "none",
                      position: "absolute",
                      top: "100%",
                      left: "0",
                      backgroundColor: "#1E3A8A",
                      color: "white",
                      padding: "0.5rem",
                      width: "160px",
                      zIndex: "10",
                      listStyleType: "none",
                    }}
                  >
                    <li style={{ padding: "0.5rem" }}>
                      <a
                        href="#"
                        style={{
                          color: "white",
                          textDecoration: "none",
                          display: "block",
                        }}
                      >
                        Submenu 1
                      </a>
                    </li>
                    <li style={{ padding: "0.5rem" }}>
                      <a
                        href="#"
                        style={{
                          color: "white",
                          textDecoration: "none",
                          display: "block",
                        }}
                      >
                        Submenu 2
                      </a>
                    </li>
                  </ul>
                )}
              </li>
            )
          )}
        </ul>
      </nav>
    </header>

      {/* Sidebar */}
      <aside className="w-1/4">
        <div className="bg-white p-6 mb-6 shadow-lg">
          <h2 className="font-bold border-b-2 border-blue-600 mb-4">
            PROFILE SEKOLAH
          </h2>
          <ul className="space-y-2">
            <li>1. Sejarah Singkat</li>
            <li>2. Visi dan Misi</li>
            <li>3. Struktur Organisasi</li>
            <li>4. Dokumen</li>
            <li>5. Guru dan Karyawan</li>
            <li>6. Program Sekolah</li>
            <li>7. Prestasi Sekolah</li>
          </ul>
        </div>

        <div className="bg-white p-6 shadow-lg">
          <h2 className="font-bold border-b-2 border-blue-600 mb-4">
            SARANA DAN PRASARANA
          </h2>
          <ul className="space-y-2">
            <li>1. Lapangan Parkir</li>
            <li>2. Lapangan Olahraga</li>
            <li>3. Ruang Kelas</li>
            <li>4. Ruang Audio Visual</li>
          </ul>
        </div>
      </aside>

      {/* Main Content Section */}
      <main className="w-2/4">
        <div className="bg-white p-6 shadow-lg mb-6">
          <div className="relative">
            <img
              src="image-url" // Ganti dengan URL gambar yang sesuai
              alt="Pentas Drama"
              className="w-full rounded-lg"
            />
            <div className="absolute bottom-0 bg-black bg-opacity-50 text-white p-2">
              <p>Sabtu, 06 Okt 2018 | 10:13:54 WIB</p>
              <h3 className="font-bold">Pentas Drama Sanggar Seni Celoteh 2018</h3>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 shadow-lg">
          <h2 className="font-bold border-b-2 border-blue-600 mb-4">
            PENGUMUMAN
          </h2>
          <ul className="space-y-2">
            <li>
              1. Pengumuman Libur Lebaran Tahun 2015 / 1436 H
              <p className="text-red-600">
                Tidak Ada File yang Di sertakan/lampirkan
              </p>
            </li>
            <li>
              2. Penerimaan Peserta Didik Baru (PPDB) Tahun 2015
              <a href="#" className="text-blue-600">
                {" "}Download Lampiran file : Contoh File Download 13.txt
              </a>
            </li>
            <li>
              3. Pengumuman Edaran Kelulusan Peserta Didik SMAN 01 Padang
              <a href="#" className="text-blue-600">
                {" "}Download Lampiran file : Contoh File Download 12.txt
              </a>
            </li>
          </ul>
          <p className="text-right">
            <a href="#" className="text-blue-600">
              Lihat Semua Pengumuman
            </a>
          </p>
        </div>
      </main>

      {/* Sidebar Right */}
      <aside className="w-1/4">
        <div className="bg-white p-6 shadow-lg mb-6">
          <h2 className="font-bold border-b-2 border-blue-600 mb-4">
            PRINCIPAL
          </h2>
          <div className="text-center">
            <img
              src="principal-image-url"
              alt="Principal"
              className="w-full mb-4 rounded-lg"
            />{" "}
            {/* Ganti dengan URL gambar */}
            <p>Kepala Sekolah</p>
            <h3 className="font-bold">Wildan Agissa, M.Kom</h3>
            <a href="#" className="text-red-600">
              Baca Sambutan
            </a>
          </div>
        </div>

        <div className="bg-white p-6 shadow-lg">
          <h2 className="font-bold border-b-2 border-blue-600 mb-4">
            ARTIKEL TERPOPULER
          </h2>
          {/* Tambahkan konten artikel terpopuler di sini */}
        </div>
      </aside>
    </div>
    </div>
  );
};

// Fungsi untuk menentukan layout yang akan digunakan
LandingPage.getLayout = function getLayout(page) {
  return <LandingLayout>{page}</LandingLayout>;
};

export default LandingPage;
