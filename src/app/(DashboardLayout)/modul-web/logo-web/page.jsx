'use client';
import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const ChangeLogo = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedFile) {
      alert(`Logo updated: ${selectedFile.name}`);
    } else {
      alert('Please select a file');
    }
  };

  return (
    <div className="container mt-4">
      <h2>Ganti Logo Website</h2>
      <Form onSubmit={handleSubmit}>
        {/* Current Logo Display */}
        <div className="mb-3">
          <h4>Logo Terpasang</h4>
          <div className="d-flex align-items-center">
            <img
              src="path/to/current-logo.png" // Replace with the path to your current logo
              alt="Current Logo"
              style={{ width: '100px', height: '100px', marginRight: '20px' }}
            />
            <img
              src="path/to/current-banner.png" // Replace with the path to your current banner
              alt="Current Banner"
              style={{ width: '400px', height: '100px' }}
            />
          </div>
        </div>

        {/* File Upload Section */}
        <div className="mb-3">
          <h4>Ganti Logo</h4>
          <Form.Group controlId="formFile">
            <Form.Control type="file" onChange={handleFileChange} />
          </Form.Group>
        </div>

        {/* Buttons */}
        <div className="d-flex justify-content-between mt-3">
          <Button variant="primary" type="submit">
            Update
          </Button>
          <Button variant="secondary" onClick={() => setSelectedFile(null)}>
            Cancel
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default ChangeLogo;
