import React, { useState } from 'react';

const Profile = () => {
  const [formData, setFormData] = useState({
    firstName: 'Arlene',
    lastName: 'McCoy',
    phoneNumber: '+91 99130 44537',
    email: 'ArleneMcCoy25@gmail.com',
    society: 'Shantigram residency',
    country: 'McCoy',
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
    // Example validation
    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      setError('Please enter a valid email address.');
      return;
    }
    console.log(formData);
    setError(''); // Clear error if validation passes
    // Handle form submission logic here
  };

  return (
    <div
      className="flex justify-center items-center h-96 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/images/bg.png')" }}  // Adjust path to the correct image location
    >
      <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-4xl">
        <div className="flex">
          {/* Left side: Profile Picture */}
          <div className="w-1/3 flex justify-center items-center">
            <div className="text-center mb-32">
              <img
                className="w-36 h-36 rounded-full mx-auto"
                src="https://via.placeholder.com/150"
                alt="Profile"
              />
              <h2 className="mt-4 text-xl font-semibold">{`${formData.firstName} ${formData.lastName}`}</h2>
            </div>
          </div>

          {/* Right side: Form */}
          <div className="w-2/3 pl-8">
            {error && <p className="text-red-500">{error}</p>}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="flex space-x-4">
                <div className="w-1/2">
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
                <div className="w-1/2">
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

              <div className="flex space-x-4">
                <div className="w-1/2">
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
                <div className="w-1/2">
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

              <div className="flex space-x-4">
                <div className="w-1/2">
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
                <div className="w-1/2">
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

              <div className="flex space-x-4">
                <div className="w-1/2">
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
                <div className="w-1/2">
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
                className="mt-6 w-40 mx-auto p-5 bg-gradient-to-r from-orange-500 to-yellow-500 text-white py-2 rounded-md hover:bg-orange-600"
              >
                Update Profile
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
