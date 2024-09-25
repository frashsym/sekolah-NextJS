'use client';
import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const BackgroundWebsite = () => {
  const [selectedColor, setSelectedColor] = useState('');

  const colors = [
    { name: 'Red', colorCode: '#FF0000' },
    { name: 'Green', colorCode: '#008000' },
    { name: 'Blue', colorCode: '#0000FF' },
    { name: 'Orange', colorCode: '#FFA500' },
    { name: 'Purple', colorCode: '#800080' },
    { name: 'Pink', colorCode: '#FF69B4' },
    { name: 'Toska', colorCode: '#008080' },
    { name: 'Black', colorCode: '#000000' },
  ];

  const handleColorChange = (e) => {
    setSelectedColor(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`You selected: ${selectedColor}`);
  };

  return (
    <div className="container mt-4">
      <h2>Background Website</h2>
      <Form onSubmit={handleSubmit}>
        {colors.map((color, index) => (
          <div
            key={index}
            className="form-check mb-2"
            style={{ backgroundColor: color.colorCode, padding: '10px', borderRadius: '5px' }}
          >
            <Form.Check
              type="radio"
              id={`color-${color.name}`}
              name="backgroundColor"
              value={color.name}
              label={color.name}
              onChange={handleColorChange}
              checked={selectedColor === color.name}
              style={{ color: '#fff' }}
            />
          </div>
        ))}

        <div className="d-flex justify-content-between mt-3">
          <Button variant="primary" type="submit">
            Update
          </Button>
          <Button variant="secondary" onClick={() => setSelectedColor('')}>
            Cancel
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default BackgroundWebsite;
