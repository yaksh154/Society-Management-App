import React, { useState } from 'react';
import { FaRupeeSign } from 'react-icons/fa';

const AddMaintenanceDetail = ({ setShowAddDetail }) => {
  const [maintenanceAmount, setMaintenanceAmount] = useState('');
  const [penaltyAmount, setPenaltyAmount] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [penaltyDaySelection, setPenaltyDaySelection] = useState('');

  // Get today's date in YYYY-MM-DD format
  const today = new Date().toISOString().split('T')[0];

  const handleCancel = () => {
    setShowAddDetail(false); // Close the modal
  };

  const handleApply = () => {
    // Validate the input data
    if (!maintenanceAmount || !penaltyAmount || !dueDate || !penaltyDaySelection) {
      alert('Please fill in all fields.');
      return;
    }

    // Collect data to store or send
    const maintenanceData = {
      maintenanceAmount,
      penaltyAmount,
      dueDate,
      penaltyDaySelection,
    };

    // Log data to the console (or you can send it to an API/parent component)
    console.log('Maintenance Data:', maintenanceData);

    // Close the modal after applying
    setShowAddDetail(false);

    // You can add an API call or callback function here if needed
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center z-50">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Add Maintenance Detail</h2>

        <div className="grid grid-cols-2 gap-6 mb-6">
          <div>
            <label className="block text-gray-700 mb-2 font-semibold">Maintenance Amount</label>
            <div className="flex items-center border rounded px-3 py-2">
              <FaRupeeSign className="text-gray-500 mr-2" />
              <input
                type="number"
                placeholder="1,000"
                className="w-full p-2 border-none focus:outline-none text-gray-700"
                value={maintenanceAmount}
                onChange={(e) => setMaintenanceAmount(e.target.value)}
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-gray-700 mb-2 font-semibold">Penalty Amount</label>
            <div className="flex items-center border rounded px-3 py-2">
              <FaRupeeSign className="text-gray-500 mr-2" />
              <input
                type="number"
                placeholder="250"
                className="w-full p-2 border-none focus:outline-none text-gray-700"
                value={penaltyAmount}
                onChange={(e) => setPenaltyAmount(e.target.value)}
                required
              />
            </div>
          </div>
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 mb-2 font-semibold">Maintenance Due Date</label>
          <div className="flex items-center border rounded px-3 py-2">
            <input
              type="date"
              className="w-full p-2 border-none focus:outline-none text-gray-700"
              value={dueDate}
              onChange={(e) => setDueDate(e.target.value)}
              min={today} // Disable past dates
              required
            />
          </div>
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 mb-2 font-semibold">Penalty Applied After Day Selection</label>
          <select
            className="w-full p-2 border rounded focus:outline-none text-gray-700"
            value={penaltyDaySelection}
            onChange={(e) => setPenaltyDaySelection(e.target.value)}
            required
          >
            <option value="" disabled>Select Penalty Applied After Day Selection</option>
            <option value="1">1 Day</option>
            <option value="2">2 Days</option>
            <option value="3">3 Days</option>
            <option value="4">4 Days</option>
            {/* Add more options as needed */}
          </select>
        </div>

        <div className="flex justify-evenly">
          <button
            onClick={handleCancel}
            className="px-14 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 focus:outline-none font-semibold transition duration-200"
          >
            Cancel
          </button>
          <button
            onClick={handleApply}
            className="px-14 py-2 text-white rounded-md font-semibold bg-gradient-to-r from-orange-400 to-red-500 hover:from-orange-500 hover:to-red-600 focus:outline-none transition duration-200"
          >
            Apply
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddMaintenanceDetail;
