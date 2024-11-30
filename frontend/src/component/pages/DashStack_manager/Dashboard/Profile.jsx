import React, { useEffect, useState } from 'react';
import Sidebar from '../../../layout/Sidebar';
import Header from '../../../layout/Header';
// import userImg from '../../../../../public/images/userImg'
import { GetCreateSocirty, Profile_img } from '../../../services/Api/api';

const Profile = () => {
  const [data, setData] = useState(280);
  const [getData, setGetData] = useState(280);
  const [previewImage, setPreviewImage] = useState('');
  const [isEditable, setIsEditable] = useState(false);
  const [error, setError] = useState('');

  const [formData, setFormData] = useState({
    Firstname: '',
    Lastname: '',
    society: '',
    Country: '',
    State: '',
    City: '',
    Number: '',
    Email: '',
  });

  const [societies, setSocieties] = useState([]);

  useEffect(() => {
    Getsocieties()
  }, [])

  const Getsocieties = () => {
    GetCreateSocirty(setSocieties)
  }

  useEffect(() => {
    Fdata();
  }, []);

  const Fdata = () => {
    Profile_img(setFormData);
  };

  const openNav = () => {
    setData(280);
    setGetData(280);
  };

  const closeNav = () => {
    setData(0);
    setGetData(0);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const fileURL = URL.createObjectURL(file);
      setPreviewImage(fileURL);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.Email)) {
      setError('Please enter a valid email address.');
      return;
    }
    setError('');

    const updatedFormData = {
      ...formData,
      profileImage: previewImage,
    };

    console.log('Form submitted:', updatedFormData);
    console.log(previewImage);

    setIsEditable(false);
  };


  return (
    <div>
      <Sidebar closeNav={closeNav} data={data} />
      <div id="main" className="max-[425px]:ml-0" style={{ marginLeft: getData }}>
        <div className="open_he">
          <Header openNav={openNav} />
        </div>
        <div
          className="flex justify-center items-center h-80 bg-cover bg-center relative bg-no-repeat p-4"
          style={{ backgroundImage: "url('/images/bg.png')" }}
        >
          <div className="bg-white rounded-lg shadow-lg p-4 sm:p-8 w-full max-w-2xl lg:max-w-4xl absolute top-28">
            <div className="flex flex-col lg:flex-row">
              {/* Left side: Profile Picture */}
              <div className="lg:w-1/4 flex flex-col justify-center items-center mb-4 lg:mb-0">
                <div className="relative">
                  <img
                    src={previewImage || "../../../public/images/user.png"}
                    alt="Profile"
                    className="w-24 h-24 rounded-full object-cover border"
                  />
                  {isEditable && (
                    <label
                      htmlFor="imageUpload"
                      className="absolute bottom-0 right-0 bg-white p-1 rounded-full border cursor-pointer"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 text-gray-700"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M17.707 7.707a1 1 0 010-1.414L16.293 5.293a1 1 0 00-1.414 0L14 6.172 16.828 9l1.879-1.879a1 1 0 000-1.414zM11 9.586L8.172 12.414a1 1 0 00-.293.707v2.828a1 1 0 001 1h2.828a1 1 0 00.707-.293l2.828-2.828L11 9.586z" />
                      </svg>
                    </label>
                  )}
                  <input
                    type="file"
                    id="imageUpload"
                    accept="image/*"
                    className="hidden"
                    onChange={handleFileChange}
                    disabled={!isEditable}
                  />
                </div>
                <p className="mt-2 text-gray-700 text-sm">{`${formData.Firstname} ${formData.Lastname}`}</p>
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
                        name="Firstname"
                        value={formData.Firstname}
                        onChange={handleChange}
                        className="mt-1 border rounded-md p-2 w-full text-xs sm:text-sm"
                        required
                        disabled={!isEditable}
                      />
                    </div>
                    <div>
                      <label className="block text-xs sm:text-sm font-medium text-gray-700">
                        Last Name*
                      </label>
                      <input
                        type="text"
                        name="Lastname"
                        value={formData.Lastname}
                        onChange={handleChange}
                        className="mt-1 border rounded-md p-2 w-full text-xs sm:text-sm"
                        required
                        disabled={!isEditable}
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
                        name="Number"
                        value={formData.Number}
                        onChange={handleChange}
                        className="mt-1 border rounded-md p-2 w-full text-xs sm:text-sm"
                        required
                        disabled={!isEditable}
                      />
                    </div>
                    <div>
                      <label className="block text-xs sm:text-sm font-medium text-gray-700">
                        Email Address*
                      </label>
                      <input
                        type="email"
                        name="Email"
                        value={formData.Email}
                        onChange={handleChange}
                        className="mt-1 border rounded-md p-2 w-full text-xs sm:text-sm"
                        required
                        disabled={!isEditable}
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">
                        Select Society*
                      </label>
                      <select
                        name="society"
                        value={formData.society}
                        onChange={handleChange}
                        disabled={!isEditable}
                        className="w-full p-2 text-sm border border-gray-300 rounded"
                      >
                        <option value="">Select Society</option>
                        {societies.map((e, index) => (
                          <option key={index} value={e._id}>
                            {e.societyname}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs sm:text-sm font-medium text-gray-700">
                        Country*
                      </label>
                      <input
                        type="text"
                        name="Country"
                        value={formData.Country}
                        onChange={handleChange}
                        className="mt-1 border rounded-md p-2 w-full text-xs sm:text-sm"
                        required
                        disabled={!isEditable}
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
                        name="State"
                        value={formData.State}
                        onChange={handleChange}
                        className="mt-1 border rounded-md p-2 w-full text-xs sm:text-sm"
                        required
                        disabled={!isEditable}
                      />
                    </div>
                    <div>
                      <label className="block text-xs sm:text-sm font-medium text-gray-700">
                        City*
                      </label>
                      <input
                        type="text"
                        name="City"
                        value={formData.City}
                        onChange={handleChange}
                        className="mt-1 border rounded-md p-2 w-full text-xs sm:text-sm"
                        required
                        disabled={!isEditable}
                      />
                    </div>
                  </div>
                  <div className="flex justify-end">
                    {!isEditable && (
                      <button
                        type="button"
                        className="mt-4 sm:mt-6 px-4 sm:px-8 py-2 bg-gradient-to-r from-orange-500 to-yellow-500 text-white rounded-md hover:bg-orange-600 text-xs sm:text-sm"
                        onClick={() => setIsEditable(true)}
                      >
                        View Profile
                      </button>
                    )}
                    {isEditable && (
                      <>
                        <button
                          type="submit"
                          className="mt-4 sm:mt-6 px-4 sm:px-8 py-2 bg-gradient-to-r from-green-500 to-teal-500 text-white rounded-md hover:bg-green-600 text-xs sm:text-sm"
                        >
                          Update Profile
                        </button>
                        <button
                          type="button"
                          className="mt-4 sm:mt-6 ml-2 px-4 sm:px-8 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600 text-xs sm:text-sm"
                          onClick={() => setIsEditable(false)}
                        >
                          Cancel
                        </button>
                      </>
                    )}
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
