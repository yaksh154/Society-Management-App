import React, { useState } from 'react';
import { FaCalendarAlt } from 'react-icons/fa';

const EditOIncome = ({ setEditIncome }) => {
  const [formData, setFormData] = useState({
    title: '',
    date: '',
    dueDate: '',
    description: '',
    amount: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleCancel = () => {
    if (setEditIncome) {
        setEditIncome(false);
    }
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data Submitted:', formData);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center z-50">
      <div className="max-w-md mx-auto p-6 bg-white rounded-md shadow-md">
        <h2 className="text-xl font-semibold mb-4">Edit Income </h2>
        <form onSubmit={handleSubmit} method="post">
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1" htmlFor="title">
              Title <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
              placeholder="Enter Title"
              required
            />
          </div>

          <div className="mb-4 grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1" htmlFor="date">
                Date <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <input
                  type="date"
                  id="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
                  required
                />
                <FaCalendarAlt className="absolute right-2 top-3 text-gray-400" />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-1" htmlFor="dueDate">
                Due Date <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <input
                  type="date"
                  id="dueDate"
                  name="dueDate"
                  value={formData.dueDate}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
                  required
                />
                <FaCalendarAlt className="absolute right-2 top-3 text-gray-400" />
              </div>
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium mb-1" htmlFor="description">
              Description <span className="text-red-500">*</span>
            </label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
              placeholder="Enter Description"
              required
            ></textarea>
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium mb-1" htmlFor="amount">
              Amount <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <span className="absolute left-2 top-2.5 text-gray-500">₹</span>
              <input
                type="number"
                id="amount"
                name="amount"
                value={formData.amount}
                onChange={handleChange}
                className="w-full pl-8 pr-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
                placeholder="0000"
                required
              />
            </div>
          </div>

          <div className="flex justify-evenly mt-6">
            <button
              type="button"
              className="px-8 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-100"
              onClick={handleCancel}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-8 py-2 bg-gradient-to-r from-orange-500 to-yellow-500 text-white rounded-md hover:from-orange-600 hover:to-yellow-600"
            >
              Continue
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditOIncome;