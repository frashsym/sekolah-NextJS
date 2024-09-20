'use client';
import React, { useState } from 'react';

const WebsiteIdentityForm = () => {
  const [formData, setFormData] = useState({
    namaWebsite: 'Selamat Datang di SMAN 1 TAMBUN SELATAN',
    email: 'dankrez48@gmail.com',
    domain: 'http://localhost/sekolah_ci',
    sosialNetwork: 'https://www.facebook.com/dankrez, https://twitter.com/dankrez48, https://plus.google.com/11071531578423039586, https://id.linkedin.com/',
    noRekening: '9000019999805',
    noTelpon: '085716129917',
    metaDeskripsi: 'website sekolah SMAN 1 Tambun Selatan',
    metaKeyword: 'sekolah, sman 1 tambun selatan, smantas, bekasi, pendidikan, sekolah menengah atas',
    googleMaps: 'https://www.google.com/maps/embed?...',
    favicon: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'favicon') {
      setFormData({
        ...formData,
        [name]: files[0],
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div style={{ maxWidth: '600px', margin: '0 auto' }}>
      <h3>Identitas Website</h3>
      <form onSubmit={handleSubmit}>
        {Object.entries(formData).map(([key, value]) => (
          key !== 'favicon' ? (
            <div key={key} style={{ marginBottom: '20px' }}>
              <label>{key.replace(/([A-Z])/g, ' $1').toUpperCase()}</label>
              <input
                type={key === 'googleMaps' ? 'url' : 'text'}
                name={key}
                value={value}
                onChange={handleChange}
                style={{ width: '100%', padding: '8px', margin: '5px 0' }}
              />
            </div>
          ) : (
            <div key={key} style={{ marginBottom: '20px' }}>
              <label>FAVICON</label>
              <br />
              <input type="file" name={key} onChange={handleChange} />
              {formData.favicon && (
                <div>
                  <img
                    src={URL.createObjectURL(formData.favicon)}
                    alt="Favicon preview"
                    style={{ width: '32px', height: '32px' }}
                  />
                </div>
              )}
            </div>
          )
        ))}
        <button type="submit" style={{ padding: '10px 20px', backgroundColor: '#00aeef', border: 'none', color: '#fff' }}>
          Update
        </button>
      </form>
    </div>
  );
};

export default WebsiteIdentityForm;
