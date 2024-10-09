'use client';
import React, { useState } from "react";

const Dashboard = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Proses penggantian logo di sini
    alert("Logo has been updated!");
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h3>Ganti Logo Website</h3>
        <div style={styles.logoContainer}>
          <img 
            src="/path-to-your-image/logo.jpeg" // Ganti dengan URL logo saat ini
            alt="Logo Sekolah"
            style={styles.logo}
          />
        </div>
        <form onSubmit={handleSubmit}>
          <div style={styles.formGroup}>
            <label>Ganti Logo:</label>
            <input 
              type="file" 
              onChange={handleFileChange} 
              style={styles.inputFile}
            />
          </div>
          <div style={styles.buttonGroup}>
            <button type="submit" style={styles.updateButton}>Update</button>
            <button type="button" style={styles.cancelButton}>Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
};

const styles = {
  container: {
    fontFamily: "Arial, sans-serif",
    margin: "20px auto",
    maxWidth: "800px",
    backgroundColor: "#f9f9f9",
    padding: "20px",
    borderRadius: "8px",
    boxShadow: "0 0 10px rgba(0,0,0,0.1)"
  },
  title: {
    fontSize: "24px",
    marginBottom: "10px",
  },
  subTitle: {
    fontSize: "16px",
    color: "#666",
    marginLeft: "10px"
  },
  card: {
    padding: "20px",
    border: "1px solid #ddd",
    borderRadius: "8px",
    backgroundColor: "#fff"
  },
  logoContainer: {
    textAlign: "center",
    marginBottom: "20px"
  },
  logo: {
    maxWidth: "100%",
    height: "auto"
  },
  formGroup: {
    marginBottom: "20px"
  },
  inputFile: {
    width: "100%",
    padding: "8px",
    border: "1px solid #ddd",
    borderRadius: "4px"
  },
  buttonGroup: {
    display: "flex",
    justifyContent: "space-between"
  },
  updateButton: {
    backgroundColor: "#00aaff",
    color: "#fff",
    padding: "10px 20px",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer"
  },
  cancelButton: {
    backgroundColor: "#ddd",
    color: "#333",
    padding: "10px 20px",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer"
  },
  footer: {
    marginTop: "20px",
    textAlign: "center",
    fontSize: "12px",
    color: "#666"
  }
};

export default Dashboard;
