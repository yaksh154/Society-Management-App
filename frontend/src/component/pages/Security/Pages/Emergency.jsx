import React, { useState, useCallback } from 'react';
import { useForm } from 'react-hook-form'; // Import react-hook-form
import Sidenav from '../layout/Sidenav';
import Header from '../layout/Header';
import { IoSend } from 'react-icons/io5';
import { PostAlert } from '../Api/Api'; // Import PostAlert function

const Emergency = ({ Fdata }) => {
  const [navWidth, setNavWidth] = useState(280); // Sidenav state
  const openNav = useCallback(() => setNavWidth(280), []);
  const closeNav = useCallback(() => setNavWidth(0), []);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm();

  const alertTypes = ['Emergency', 'Warning', 'Fire Alarm', 'Earth Quake', 'High Winds', 'Thunder'];

  const onSubmit = (data) => {
    console.log('Form Data:', data);

    const payload = {
      alertType: data.Alert_Type,
      description: data.Description
    };

    PostAlert(payload, () => {
      console.log('Alert sent successfully');
      reset(); // Reset form fields
    });
  };

  return (
    <div className="bg-[#f0f5fb] h-screen">
      <Sidenav closeNav={closeNav} data={navWidth} />
      <div id="main" className="max-[425px]:ml-0" style={{ marginLeft: navWidth }}>
        <div className="open_he">
          <Header openNav={openNav} />
        </div>
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 p-6 flex items-center justify-center">
          <div className="w-full max-w-md">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="bg-white rounded-2xl shadow-xl p-8 space-y-6"
            >
              <div className="flex items-center space-x-3">
                <h2 className="text-2xl font-bold text-gray-800">Alert</h2>
              </div>

              {/* Alert Type */}
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  Alert Type<span className="text-red-500">*</span>
                </label>
                <select
                  {...register('Alert_Type', { required: 'Please select an alert type' })}
                  className={`block w-full px-4 py-3 rounded-lg border ${
                    errors.Alert_Type ? 'border-red-500' : 'border-gray-200'
                  } focus:ring-1 focus:ring-slate-400`}
                >
                  <option value="">Select Alert</option>
                  {alertTypes.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
                {errors.Alert_Type && (
                  <p className="text-red-500 text-sm">{errors.Alert_Type.message}</p>
                )}
              </div>

              {/* Description */}
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  Description<span className="text-red-500">*</span>
                </label>
                <textarea
                  {...register('Description', { required: 'Please enter a description' })}
                  placeholder="Enter the details of the emergency"
                  className={`block w-full px-4 py-3 rounded-lg border ${
                    errors.Description ? 'border-red-500' : 'border-gray-200'
                  } focus:ring-1 focus:ring-slate-400 min-h-[120px] resize-none`}
                />
                {errors.Description && (
                  <p className="text-red-500 text-sm">{errors.Description.message}</p>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-slate-200 text-black py-3 px-6 rounded-lg font-medium hover:bg-gradient-to-r from-orange-600 to-yellow-500 hover:text-white flex items-center justify-center space-x-2"
              >
                <IoSend className="w-5 h-5" />
                <span>Send</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Emergency;
