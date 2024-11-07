import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const SetMaintenancePwd = () => {
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleCancel = () => {
    // Handle cancel action here
    console.log('Cancelled');
  };

  const handleContinue = () => {
    // Handle continue action here
    console.log('Password entered:', password);
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Set Maintenance</h2>
      
      <div className="mb-6 relative">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Password<span className="text-red-500">*</span>
        </label>
        <input
          type={showPassword ? 'text' : 'password'}
          value={password}
          onChange={handlePasswordChange}
          className="w-full border rounded-md p-2 pr-10 text-gray-700 focus:outline-none focus:border-orange-500"
          required
        />
        <button
          type="button"
          onClick={togglePasswordVisibility}
          className="absolute inset-y-0 right-3 flex items-center text-gray-500"
        >
          {showPassword ? <FaEyeSlash  className='mt-6'/> : <FaEye  className='mt-6'/>}
        </button>
      </div>

      <div className="flex justify-between">
        <button
          onClick={handleCancel}
          className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-100"
        >
          Cancel
        </button>
        <button
          onClick={handleContinue}
          className="px-4 py-2 bg-gradient-to-r from-orange-500 to-yellow-500 text-white rounded-md hover:bg-orange-600"
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default SetMaintenancePwd;
