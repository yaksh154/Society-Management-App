import React, { useState } from 'react'
import Sidenav from '../layout/Sidenav'
import Header from '../layout/Header'
import { IoAlertCircle, IoSend } from 'react-icons/io5';
const Emergency = () => {
    let [data, setdata] = useState(280);
    let [getdata, setget] = useState(280);

    function openNav() {
        setdata(280);
        setget(280);
    }
    function closeNav() {
        setdata(0);
        setget(0);
    }
    const [alertType, setAlertType] = useState('');
    const [description, setDescription] = useState('');
    const [isOpen, setIsOpen] = useState(false);
    const [error, setError] = useState({ type: false, description: false });
  
    const alertTypes= [
      'Emergency',
      'Warning',
      'Fire Alarm',
      'Earth Quake',
      'High Winds',
      'Thunder'
    ];
  
    const handleSubmit = (e) => {
      e.preventDefault();
      setError({
        type: !alertType,
        description: !description.trim()
      });
  
      if (alertType && description.trim()) {
        console.log({ alertType, description });
        // Handle form submission here
        setAlertType('');
        setDescription('');
        setIsOpen(false);
      }
    };
  return (
    <div className='bg-[#f0f5fb] h-screen'>
    <Sidenav closeNav={closeNav} data={data} />
    <div id='main' className='max-[425px]:ml-0' style={{ marginLeft: getdata }} >
        <div className="open_he">
            <Header openNav={openNav} />
        </div>
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 p-6 flex items-center justify-center">
      <div className="w-full max-w-md">
        <form 
          onSubmit={handleSubmit}
          className="bg-white rounded-2xl shadow-xl p-8 space-y-6 transform transition-all duration-300"
        >
          <div className="flex items-center space-x-3">
            <h2 className="text-2xl font-bold text-gray-800">Alert</h2>
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              Alert Type<span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <select
                value={alertType}
                onChange={(e) => {
                  setAlertType(e.target.value);
                  setError({ ...error, type: false });
                }}
                className={`block w-full px-4 py-3 rounded-lg border ${
                  error.type ? 'border-red-500' : 'border-gray-200'
                } focus:ring-1 focus:ring-slate-400 focus:border-transparent appearance-none bg-white`}
              >
                <option value="">Select Alert</option>
                {alertTypes.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
            {error.type && (
              <p className="text-red-500 text-sm">Please select an alert type</p>
            )}
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              Description<span className="text-red-500">*</span>
            </label>
            <textarea
              value={description}
              onChange={(e) => {
                setDescription(e.target.value);
                setError({ ...error, description: false });
              }}
              placeholder="An emergency description typically refers to a detailed account or explanation of an emergency situation."
              className={`block w-full px-4 py-3 rounded-lg border ${
                error.description ? 'border-red-500' : 'border-gray-200'
              } focus:ring-1 focus:ring-slate-400  focus:border-transparent min-h-[120px] resize-none`}
            />
            {error.description && (
              <p className="text-red-500 text-sm">Please enter a description</p>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-slate-200 text-black py-3 px-6 rounded-lg font-medium hover:bg-gradient-to-r from-orange-600 to-yellow-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-orange-600 focus:ring-offset-2 transform transition-all duration-200 flex items-center justify-center space-x-2"
          >
            <IoSend className="w-5 h-5" />
            <span>Send </span>
          </button>
        </form>
      </div>
    </div>
    </div>
</div>
  )
}

export default Emergency