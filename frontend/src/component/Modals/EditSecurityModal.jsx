import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';

const EditSecurityModal = ({ _id, CloseEdit }) => {
  const { register, handleSubmit, formState: { errors }, setValue } = useForm();
  const [photoPreview, setPhotoPreview] = useState(null);
  const [aadharCard, setAadharCard] = useState(null);

  // Fetch data on component mount
  useEffect(() => {
    if (_id) {
      fetch(`/api/security/${_id}`)
        .then(response => response.json())
        .then(data => {
          // Set form values with fetched data
          setValue('fullName', data.fullName);
          setValue('phoneNumber', data.phoneNumber);
          setValue('gender', data.gender);
          setValue('shift', data.shift);
          setValue('shiftDate', data.shiftDate);
          setValue('shiftTime', data.shiftTime);
          setPhotoPreview(data.photoUrl); // Assuming URL is stored for preview
          setAadharCard(data.aadharCard);
        })
        .catch(error => console.error('Error fetching security data:', error));
    }
  }, [_id, setValue]);

  // Submit handler
  const onSubmit = (data) => {
    const formData = new FormData();
    Object.keys(data).forEach(key => {
      formData.append(key, data[key]);
    });

    if (aadharCard) formData.append('aadharCard', aadharCard);
    
    fetch(`/api/security/${_id}`, {
      method: 'PUT',
      body: formData,
    })
    .then(response => response.json())
    .then(updatedData => {
      console.log('Updated data:', updatedData);
      CloseEdit();
    })
    .catch(error => console.error('Error updating security data:', error));
  };

  // File change handlers
  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPhotoPreview(URL.createObjectURL(file));
      setValue('photo', file);
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setAadharCard(file);
      setValue('aadharCard', file);
    }
  };

  const handleRemoveFile = () => {
    setAadharCard(null);
    setValue('aadharCard', null);
  };

  return (
    <div className='fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center z-50'>
      <form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md space-y-4">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Edit Security</h2>

        {/* Photo Upload Section */}
        <div className="flex items-center space-x-4">
          <div className="relative">
            <input
              type="file"
              accept="image/*"
              onChange={handlePhotoChange}
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
              {...register('photo')}
            />
            <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center overflow-hidden">
              {photoPreview ? (
                <img src={photoPreview} alt="Preview" className="object-cover w-full h-full" />
              ) : (
                <span className="text-gray-500">Add Photo</span>
              )}
            </div>
          </div>
          <span className="text-blue-500">Edit Photo</span>
        </div>

        {/* Full Name */}
        <div>
          <label className="block text-gray-700">Full Name</label>
          <input
            type="text"
            placeholder="Enter Full Name"
            className="mt-1 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            {...register('fullName', { required: 'Full name is required' })}
          />
          {errors.fullName && <p className="text-red-500 text-sm">{errors.fullName.message}</p>}
        </div>

        {/* Phone Number */}
        <div>
          <label className="block text-gray-700">Phone Number</label>
          <input
            type="tel"
            placeholder="+91"
            className="mt-1 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            {...register('phoneNumber', {
              required: 'Phone number is required',
              pattern: { value: /^[0-9]{10}$/, message: 'Invalid phone number format' },
            })}
          />
          {errors.phoneNumber && <p className="text-red-500 text-sm">{errors.phoneNumber.message}</p>}
        </div>

        {/* Gender & Shift */}
        <div className="flex space-x-4">
          <div className="w-1/2">
            <label className="block text-gray-700">Gender</label>
            <select
              className="mt-1 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              {...register('gender', { required: 'Gender is required' })}
            >
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
            {errors.gender && <p className="text-red-500 text-sm">{errors.gender.message}</p>}
          </div>

          <div className="w-1/2">
            <label className="block text-gray-700">Shift</label>
            <select
              className="mt-1 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              {...register('shift', { required: 'Shift is required' })}
            >
              <option value="">Select Shift</option>
              <option value="day">Day</option>
              <option value="night">Night</option>
            </select>
            {errors.shift && <p className="text-red-500 text-sm">{errors.shift.message}</p>}
          </div>
        </div>

        {/* Shift Date & Time */}
        <div className="flex space-x-4">
          <div className="w-1/2">
            <label className="block text-gray-700">Shift Date</label>
            <input
              type="date"
              className="mt-1 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              {...register('shiftDate', { required: 'Shift date is required' })}
            />
            {errors.shiftDate && <p className="text-red-500 text-sm">{errors.shiftDate.message}</p>}
          </div>

          <div className="w-1/2">
            <label className="block text-gray-700">Shift Time</label>
            <input
              type="time"
              className="mt-1 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              {...register('shiftTime', { required: 'Shift time is required' })}
            />
            {errors.shiftTime && <p className="text-red-500 text-sm">{errors.shiftTime.message}</p>}
          </div>
        </div>

        {/* Aadhar Card Upload */}
        <div>
          <label className="block text-gray-700">Upload Aadhar Card</label>
          <div className="border-2 border-dashed border-gray-300 rounded-md p-4 text-center">
            {!aadharCard ? (
              <label className="cursor-pointer">
                <p className="text-blue-500 underline">Upload a file</p>
                <input
                  type="file"
                  accept=".png, .jpg, .jpeg"
                  className="hidden"
                  onChange={handleFileChange}
                />
              </label>
            ) : (
              <div className="flex flex-col items-center mt-4">
                <img src={URL.createObjectURL(aadharCard)} alt="Aadhar Preview" className="w-12 h-12 mb-2" />
                <span className="text-gray-600 text-sm">{aadharCard.name}</span>
                <button onClick={handleRemoveFile} className="text-red-500 text-sm">Delete</button>
              </div>
            )}
          </div>
        </div>

        {/* Buttons */}
        <div className="flex justify-between mt-4">
          <button
            type="button"
            className="px-4 py-2 text-gray-700 bg-gray-200 rounded-md hover:bg-gray-300"
            onClick={CloseEdit}
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-4 py-2 text-white bg-orange-500 rounded-md hover:bg-orange-600"
          >
            Update
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditSecurityModal;
