'use client';
import { useState } from 'react';

export default function EditAdmin() {
  const [formData, setFormData] = useState({
    username: 'admin',
    password: '',
    fullName: 'Wildan Agissa',
    email: 'dankrez48@gmail.com',
    phone: '081267771344',
    block: 'Tidak',
    access: [],
    role: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setFormData({
      ...formData,
      access: checked
        ? [...formData.access, name]
        : formData.access.filter((access) => access !== name),
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  return (
    <div className="container mx-auto my-8 p-6 bg-white shadow-md rounded-md">
      <h2 className="text-2xl font-bold mb-6">Edit Data Admin</h2>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Username */}
          <div>
            <label className="block text-gray-700">Username</label>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleInputChange}
              className="w-full mt-2 p-2 border border-gray-300 rounded-md"
              disabled
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-gray-700">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              className="w-full mt-2 p-2 border border-gray-300 rounded-md"
            />
          </div>

          {/* Full Name */}
          <div>
            <label className="block text-gray-700">Nama Lengkap</label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleInputChange}
              className="w-full mt-2 p-2 border border-gray-300 rounded-md"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-gray-700">Alamat Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full mt-2 p-2 border border-gray-300 rounded-md"
            />
          </div>

          {/* Phone */}
          <div>
            <label className="block text-gray-700">No Telepon</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              className="w-full mt-2 p-2 border border-gray-300 rounded-md"
            />
          </div>

          {/* Ganti Foto */}
          <div>
            <label className="block text-gray-700">Ganti Foto</label>
            <input
              type="file"
              className="w-full mt-2 p-2 border border-gray-300 rounded-md"
            />
            <p className="text-gray-600 mt-1">
              Foto Saat ini: <a href="#" className="text-blue-500">admin.png</a>
            </p>
          </div>
        </div>

        {/* Blokir */}
        <div className="mt-6">
          <label className="block text-gray-700 mb-2">Blokir</label>
          <div className="flex items-center space-x-6">
            <label className="flex items-center">
              <input
                type="radio"
                name="block"
                value="Ya"
                checked={formData.block === 'Ya'}
                onChange={handleInputChange}
                className="mr-2"
              />
              Ya
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="block"
                value="Tidak"
                checked={formData.block === 'Tidak'}
                onChange={handleInputChange}
                className="mr-2"
              />
              Tidak
            </label>
          </div>
        </div>

        {/* Tambah Akses */}
        <div className="mt-6">
          <label className="block text-gray-700 mb-2">Tambah Akses</label>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {['Pesan Masuk', 'Logo Website', 'Komentar Video', 'Tag Video', 'Playlist Video'].map((access) => (
              <label key={access} className="flex items-center">
                <input
                  type="checkbox"
                  name={access}
                  checked={formData.access.includes(access)}
                  onChange={handleCheckboxChange}
                  className="mr-2"
                />
                {access}
              </label>
            ))}
          </div>
        </div>

        {/* Hak Akses */}
        <div className="mt-6">
          <label className="block text-gray-700">Hak Akses</label>
          <textarea
            name="role"
            value={formData.role}
            onChange={handleInputChange}
            className="w-full mt-2 p-2 border border-gray-300 rounded-md h-24"
          />
        </div>

        {/* Buttons */}
        <div className="mt-6 flex space-x-4">
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
          >
            Update
          </button>
          <button
            type="button"
            className="bg-gray-300 text-black py-2 px-4 rounded-md hover:bg-gray-400"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}
