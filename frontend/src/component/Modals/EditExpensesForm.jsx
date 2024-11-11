import React, { useState, useEffect } from 'react';
import { BiImageAdd } from 'react-icons/bi';
import { FaRegFileAlt, FaTrash } from 'react-icons/fa';

const EditExpensesForm = ({ setEditData }) => {
  const [title, setTitle] = useState('Rent or Mortgage');
  const [description, setDescription] = useState('The celebration of Ganesh Chaturthi involves the installation of clay idols of Ganesha in Resident.');
  const [date, setDate] = useState('2024-12-05');
  const [amount, setAmount] = useState('₹1500');
  const [file, setFile] = useState({
    name: 'OldFile.jpg',
    size: '1.2',
  });

  useEffect(() => {
    // Simulate fetching existing data (e.g., from a server or props)
  }, []);

  const handleFileChange = (e) => {
    if (e.target.files.length > 0) {
      const selectedFile = e.target.files[0];
      setFile({
        name: selectedFile.name,
        size: (selectedFile.size / 1024).toFixed(2),
      });
    }
  };

  const handleFileClear = () => {
    setFile(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Form submitted!');
  };

  const handleCancel = () => {
    if (setEditData) {
      setEditData(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center z-50">
      <form onSubmit={handleSubmit} className="max-w-md mx-auto p-6 bg-white shadow-md rounded-lg">
        <div className="form-group mb-4">
          <label htmlFor="title" className="block text-gray-700 mb-1">Title<span className='text-red-800'> *</span></label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full px-3 py-2 border rounded-md focus:outline-none border-black focus:ring-2 focus:ring-indigo-500"
            placeholder="Enter title"
            required
          />
        </div>

        <div className="form-group mb-4">
          <label htmlFor="description" className="block text-gray-700 mb-1">Description<span className='text-red-800'> *</span></label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full px-3 py-2 border rounded-md focus:outline-none border-black focus:ring-2 focus:ring-indigo-500"
            placeholder="Enter description"
            required
          />
        </div>

        <div className="Main flex">
          <div className="form-group mb-4 pe-5">
            <label htmlFor="date" className="block text-gray-700 mb-1">Date<span className='text-red-800'> *</span></label>
            <input
              type="date"
              id="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="w-full px-3 py-2 border rounded-md focus:outline-none border-black focus:ring-2 focus:ring-indigo-500"
              required
            />
          </div>
          <div className="form-group mb-4 ps-5">
            <label htmlFor="amount" className="block text-gray-700 mb-1">Amount<span className='text-red-800'> *</span></label>
            <input
              type="number"
              id="amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="w-full px-3 py-2 border border-black rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Enter amount"
              required
            />
          </div>
        </div>

        <div className="form-group mb-4">
          <label className="block text-gray-700 mb-1">Upload Bill<span className='text-red-800'> *</span></label>
          <div className="border border-black rounded-md p-2">
            <div className="flex items-center space-x-2">
              <input
                type="file"
                onChange={handleFileChange}
                className="hidden"
                id="file-upload"
              />
              <label htmlFor="file-upload" className="cursor-pointer bg-slate-600 text-slate-50 px-4 py-2 rounded-md hover:bg-slate-700">
                <BiImageAdd />
              </label>
              {file && (
                <div className="text-sm flex items-center space-x-2">
                  <FaRegFileAlt className="text-gray-600" />
                  <span>{file.name} ({file.size} KB)</span>
                  <button type="button" onClick={handleFileClear} className="text-red-500">
                    <FaTrash />
                  </button>
                </div>
              )}
            </div>
            {file && <p className="text-green-600 mt-1">File Uploaded Successfully</p>}
          </div>
        </div>
        
        <div className="flex justify-between mt-4">
          <button
            type="button"
            className="px-4 py-2 border border-gray-300 font-semibold rounded text-gray-700 hover:text-gray-800 hover:border-gray-500"
            onClick={handleCancel}
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-4 py-2 text-white rounded-md font-semibold bg-gradient-to-r from-orange-400 to-red-500 hover:from-orange-500 hover:to-red-600"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditExpensesForm;
