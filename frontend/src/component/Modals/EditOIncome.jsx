import React, { useState, useEffect } from 'react';
import { FaCalendarAlt } from 'react-icons/fa';
import { UpdateOtherIncome } from '../services/Api/api';

const EditOIncome = ({ setEditIncome, initialData, onUpdate }) => {
  const [formData, setFormData] = useState({
    title: '',
    date: '',
    dueDate: '',
    description: '',

  });

  const formatDate = (dateString) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    return date.toISOString().split('T')[0];
  };

  useEffect(() => {
    if (initialData) {
      setFormData({
        title: initialData.title || '',
        date: formatDate(initialData.date),
        dueDate: formatDate(initialData.dueDate),
        description: initialData.description || '',
  
      });
    }
  }, [initialData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleCancel = () => {
    setEditIncome(false);
  };

  const handleSubmit = async (e) => {
    // e.preventDefault();
    try {
      const response = await UpdateOtherIncome(initialData._id, formData);
      console.log(initialData._id);
      
      if (response.success) {
        onUpdate(); // Callback to refresh data
        setEditIncome(false); // Close the edit form
      } else {
        alert('Failed to update income.');
      }
    } catch (error) {
      alert('An error occurred while updating income.');
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center z-50">
      <div className="max-w-md mx-auto p-6 bg-white rounded-md shadow-md">
        <h2 className="text-xl font-semibold mb-4">Edit Income</h2>
        <form onSubmit={handleSubmit}>
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
              className="w-full px-3 py-2 border rounded-md"
              placeholder="Enter Title"
              required
            />
          </div>
          {/* Other Fields */}
          <div className="mb-4 grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1" htmlFor="date">
                Date <span className="text-red-500">*</span>
              </label>
              <input
                type="date"
                id="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-md"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1" htmlFor="dueDate">
                Due Date <span className="text-red-500">*</span>
              </label>
              <input
                type="date"
                id="dueDate"
                name="dueDate"
                value={formData.dueDate}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-md"
                required
              />
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
              className="w-full px-3 py-2 border rounded-md"
              placeholder="Enter Description"
              required
            ></textarea>
          </div>

          <div className="flex justify-between mt-4">
            <button
              type="button"
              className="px-4 py-2 bg-gray-300 rounded-md"
              onClick={handleCancel}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white rounded-md"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditOIncome;
