import React, { useState } from 'react';
import Sidebar from '../../layout/Sidebar';
import Header from '../../layout/Header';
import { FaPen } from 'react-icons/fa';

const Profile = ({ closeNav, openNav, data, getdata }) => {
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
    <>
<Sidebar closeNav={closeNav} data={data} />
      <div id='main' className='max-[425px]:ml-0 ' style={{ marginLeft: getdata }} >
        <div className="open_he">
          <Header openNav={openNav} />
        </div>

      <div className="main relative">
        <div
          className="flex justify-center items-center h-2/5 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/images/bg.png')" }}
        >
          <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-4xl relative sm:top-28 lg:top-56">
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/3 flex justify-center items-center">
                <div className="text-center mb-8 md:mb-32">
                  <img
                    className="w-24 h-24 sm:w-32 sm:h-32 lg:w-36 lg:h-36 rounded-full mx-auto"
                    src="/images/Ellipse 1101.png"
                    alt="Profile"
                  />
                  <div className="relative flex items-center justify-center w-7 h-7 bottom-9 start-28 bg-gray-300 border-gray-300 rounded-full border-2">
                    <div className="flex items-center justify-center w-5 h-5 bg-white rounded-lg p-1">
                      <FaPen />
                    </div>
                  </div>
                  <h2 className="mt-3 text-lg sm:text-xl font-semibold">{`${formData.firstName} ${formData.lastName}`}</h2>
                </div>
              </div>
              <div className="md:w-2/3 pl-0 md:pl-8">
                {error && <p className="text-red-500">{error}</p>}
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                    <div className="w-full sm:w-1/2">
                      <label className="block text-sm font-medium text-gray-700">First Name*</label>
                      <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        className="mt-1 border rounded-md p-2 w-full"
                        required
                      />
                    </div>
                    <div className="w-full sm:w-1/2">
                      <label className="block text-sm font-medium text-gray-700">Last Name*</label>
                      <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        className="mt-1 border rounded-md p-2 w-full"
                        required
                      />
                    </div>
                  </div>
                  <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                    <div className="w-full sm:w-1/2">
                      <label className="block text-sm font-medium text-gray-700">Phone Number*</label>
                      <input
                        type="tel"
                        name="phoneNumber"
                        value={formData.phoneNumber}
                        onChange={handleChange}
                        className="mt-1 border rounded-md p-2 w-full"
                        required
                      />
                    </div>
                    <div className="w-full sm:w-1/2">
                      <label className="block text-sm font-medium text-gray-700">Email Address*</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="mt-1 border rounded-md p-2 w-full"
                        required
                      />
                    </div>
                  </div>
                  <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                    <div className="w-full sm:w-1/2">
                      <label className="block text-sm font-medium text-gray-700">Select Society*</label>
                      <input
                        type="text"
                        name="society"
                        value={formData.society}
                        onChange={handleChange}
                        className="mt-1 border rounded-md p-2 w-full"
                        required
                      />
                    </div>
                    <div className="w-full sm:w-1/2">
                      <label className="block text-sm font-medium text-gray-700">Country*</label>
                      <input
                        type="text"
                        name="country"
                        value={formData.country}
                        onChange={handleChange}
                        className="mt-1 border rounded-md p-2 w-full"
                        required
                      />
                    </div>
                  </div>
                  <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                    <div className="w-full sm:w-1/2">
                      <label className="block text-sm font-medium text-gray-700">State*</label>
                      <input
                        type="text"
                        name="state"
                        value={formData.state}
                        onChange={handleChange}
                        className="mt-1 border rounded-md p-2 w-full"
                        required
                      />
                    </div>
                    <div className="w-full sm:w-1/2">
                      <label className="block text-sm font-medium text-gray-700">City*</label>
                      <input
                        type="text"
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                        className="mt-1 border rounded-md p-2 w-full"
                        required
                      />
                    </div>
                  </div>
                  <button
                    type="submit"
                    className=" w-full sm:w-40 p-2 *: mx-80 bg-gradient-to-r from-orange-500 to-yellow-500 text-white rounded-md hover:bg-orange-600"
                  >
                    Edit Profile
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gray-100  h-3/4 overflow-y-auto" ></div>
      </div>
      </div>
    </>
  );
};

export default Profile;
