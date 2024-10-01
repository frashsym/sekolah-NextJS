import React, { useState } from 'react';

const AlamatKontak = () => {
  const [content, setContent] = useState(
    Mengapa menghubungi kami ?\n\nKami memiliki komitmen untuk memberikan layanan terbaik kepada Anda dan selalu berusaha untuk menyediakan produk dan layanan terbaik yang Anda butuhkan. Apabila untuk alasan tertentu Anda merasa tidak puas dengan pelayanan kami, Anda dapat menyampaikan kritik dan saran Anda kepada kami. Kami akan menindaklanjuti masukan yang Anda berikan dan bila perlu mengambil tindakan untuk mencegah masalah yang sama terulang kembali.\n\nHubungi kami segera ?\n\nSilahkan menghubungi kami melalui private message melalui form yang berada pada bagian kanan halaman ini. Kritik dan saran Anda sangat penting bagi kami untuk terus meningkatkan kualitas produk dan layanan kami.
  );

  const handleUpdate = () => {
    try {
      // Logika untuk menyimpan konten
      console.log('Konten diperbarui:', content);
    } catch (error) {
      console.error('Terjadi kesalahan saat memperbarui konten:', error);
    }
  };

  const handleCancel = () => {
    try {
      // Logika untuk membatalkan perubahan
      console.log('Perubahan dibatalkan');
    } catch (error) {
      console.error('Terjadi kesalahan saat membatalkan perubahan:', error);
    }
  };

  return (
    <div className="alamat-kontak">
      <h1>Dashboard</h1>
      <h2>Alamat Kontak</h2>
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        rows="15"
        cols="80"
      />
      <div className="buttons">
        <button className="btn-update" onClick={handleUpdate}>
          Update
        </button>
        <button className="btn-cancel" onClick={handleCancel}>
          Cancel
        </button>
      </div>
    </div>
  );
};

export default AlamatKontak;