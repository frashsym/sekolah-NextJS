'use client';
import React from 'react';
import { Table, Button, Form } from 'react-bootstrap';

const TemplateWebsite = () => {
  return (
    <div className="container mt-4">
      <h2>Template Website</h2>

      {/* Top Section: Show Entries & Search */}
      <div className="d-flex justify-content-between mb-3">
        <div>
          <label>
            Show{' '}
            <Form.Control as="select" size="sm" style={{ display: 'inline', width: '60px' }}>
              <option>10</option>
              <option>25</option>
              <option>50</option>
              <option>100</option>
            </Form.Control>{' '}
            entries
          </label>
        </div>

        <Form.Control type="text" placeholder="Search" style={{ width: '200px' }} />
      </div>

      {/* Table */}
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>No</th>
            <th>Nama Template</th>
            <th>Pembuat</th>
            <th>Directory</th>
            <th>Aktif</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Lokomedia ke Sekolah - Template Web Sekolah</td>
            <td>Wildan Agissa</td>
            <td>lokomedia_sekolah</td>
            <td>Y</td>
            <td>
              <Button variant="warning" className="me-2">
                <i className="fas fa-star"></i>
              </Button>
              <Button variant="success" className="me-2">
                <i className="fas fa-edit"></i>
              </Button>
              <Button variant="danger">
                <i className="fas fa-trash-alt"></i>
              </Button>
            </td>
          </tr>
        </tbody>
      </Table>

      {/* Pagination */}
      <div className="d-flex justify-content-between">
        <div>Showing 1 to 1 of 1 entries</div>
        <div>
          <Button variant="primary" size="sm" disabled>
            Previous
          </Button>{' '}
          <Button variant="primary" size="sm" active>
            1
          </Button>{' '}
          <Button variant="primary" size="sm" disabled>
            Next
          </Button>
        </div>
      </div>
    </div>
  );
};

export default TemplateWebsite;
