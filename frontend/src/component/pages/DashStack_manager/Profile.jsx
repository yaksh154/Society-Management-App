import React, { useState } from 'react';
import { FaPencilAlt } from 'react-icons/fa';
import Sidebar from '../../layout/Sidebar';
import Header from '../../layout/Header';

const Profile = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const sidebarWidth = isSidebarOpen ? 250 : 0;

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const [formData, setFormData] = useState({
    firstName: 'Arlene',
    lastName: 'McCoy',
    phoneNumber: '+91 99130 44537',
    email: 'ArleneMcCoy25@gmail.com',
    society: 'Shantigram residency',
    country: 'India',
    state: 'Gujarat',
    city: 'Baroda',
  });

  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      setError('Please enter a valid email address.');
      return;
    }
    console.log(formData);
    setError('');
  };

  return (
    <div className="flex">
      {/* Sidebar */}
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

      {/* Main Content */}
      <div
        id="main"
        className="flex-1 transition-all duration-300"
        style={{ marginLeft: sidebarWidth }}
      >
        <Header toggleSidebar={toggleSidebar} />

        <div
          className="flex justify-center items-center h-96 bg-cover bg-center relative bg-no-repeat p-4"
          style={{ backgroundImage: "url('/images/bg.png')" }}
        >
          <div className="bg-white rounded-lg shadow-lg p-4 sm:p-8 w-full max-w-2xl lg:max-w-4xl absolute top-28">
            <div className="flex flex-col lg:flex-row">
              {/* Left side: Profile Picture */}
              <div className="lg:w-1/3 flex justify-center lg:justify-start items-center mb-8 lg:mb-0">
                <div className="text-center relative">
                  <img
                    className="w-28 h-28 sm:w-36 sm:h-36 rounded-full mx-auto"
                    src="../../../public/images/Arlene.png"
                    alt="Profile"
                  />
                  <div className="absolute top-20 sm:top-28 -right-0 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white border border-gray-200 flex items-center justify-center">
                    <div className="bg-gray-800 p-1.5 rounded-md">
                      <FaPencilAlt className="text-white text-xs sm:text-sm" />
                    </div>
                  </div>
                  <h2 className="mt-4 text-lg sm:text-xl font-semibold">{`${formData.firstName} ${formData.lastName}`}</h2>
                </div>
              </div>

              {/* Right side: Form */}
              <div className="lg:w-2/3 lg:pl-8">
                {error && <p className="text-red-500 text-sm">{error}</p>}
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs sm:text-sm font-medium text-gray-700">
                        First Name*
                      </label>
                      <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        className="mt-1 border rounded-md p-2 w-full text-xs sm:text-sm"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-xs sm:text-sm font-medium text-gray-700">
                        Last Name*
                      </label>
                      <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        className="mt-1 border rounded-md p-2 w-full text-xs sm:text-sm"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs sm:text-sm font-medium text-gray-700">
                        Phone Number*
                      </label>
                      <input
                        type="tel"
                        name="phoneNumber"
                        value={formData.phoneNumber}
                        onChange={handleChange}
                        className="mt-1 border rounded-md p-2 w-full text-xs sm:text-sm"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-xs sm:text-sm font-medium text-gray-700">
                        Email Address*
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="mt-1 border rounded-md p-2 w-full text-xs sm:text-sm"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs sm:text-sm font-medium text-gray-700">
                        Select Society*
                      </label>
                      <input
                        type="text"
                        name="society"
                        value={formData.society}
                        onChange={handleChange}
                        className="mt-1 border rounded-md p-2 w-full text-xs sm:text-sm"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-xs sm:text-sm font-medium text-gray-700">
                        Country*
                      </label>
                      <input
                        type="text"
                        name="country"
                        value={formData.country}
                        onChange={handleChange}
                        className="mt-1 border rounded-md p-2 w-full text-xs sm:text-sm"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs sm:text-sm font-medium text-gray-700">
                        State*
                      </label>
                      <input
                        type="text"
                        name="state"
                        value={formData.state}
                        onChange={handleChange}
                        className="mt-1 border rounded-md p-2 w-full text-xs sm:text-sm"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-xs sm:text-sm font-medium text-gray-700">
                        City*
                      </label>
                      <input
                        type="text"
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                        className="mt-1 border rounded-md p-2 w-full text-xs sm:text-sm"
                        required
                      />
                    </div>
                  </div>

                  <div className="flex justify-end">
                    <button
                      type="submit"
                      className="mt-4 sm:mt-6 px-4 sm:px-8 py-2 bg-gradient-to-r from-orange-500 to-yellow-500 text-white rounded-md hover:bg-orange-600 text-xs sm:text-sm"
                    >
                      Update Profile
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
