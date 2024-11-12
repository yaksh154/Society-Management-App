import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

const AddSecurityModal = ({ CloseAddSecurity }) => {

    const { register, handleSubmit, formState: { errors }, setValue } = useForm();
    const [photoPreview, setPhotoPreview] = useState(null);
    const [aadharCard, setAadharCard] = useState(null);

    // Submit handler
    const onSubmit = (data) => {
        console.log(data);
    };

    // File change handlers
    const handlePhotoChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setAadharCard(file);
            setPhotoPreview(URL.createObjectURL(file));
            setValue('photo', file); // Updating form state with file
        }
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setValue('aadharCard', file);
        }
    };

    const handleRemoveFile = () => {
        setAadharCard(null);
        setValue('aadharCard', null); // Reset form state
    };

    const uploadCard = (label, fileType) => (
        <div>
            <p className="text-gray-700 font-medium mb-2 text-sm">{label}</p>
            <div className="border-2 border-dashed border-gray-300 rounded-md p-4 text-center">
                <label className="cursor-pointer">
                    <div className="text-5xl flex justify-center">
                        <span className="text-[#a7a7a7]">+</span>
                    </div>
                    <div className="flex flex-col items-center">
                        {!aadharCard ? (
                            <>
                                <p>
                                    <span className="text-blue-500 underline">Upload a file</span> or drag and drop
                                </p>
                                <input
                                    type="file"
                                    accept=".png, .jpg, .jpeg, .gif"
                                    className="hidden"
                                    onChange={handleFileChange}
                                />
                                <p className="text-gray-500 text-xs mt-2">PNG, JPG, GIF up to 10MB</p>
                            </>
                        ) : null}
                    </div>
                </label>
            </div>
            {aadharCard ? (
                <div className="flex flex-col items-center mt-4">
                    <img
                        src={URL.createObjectURL(aadharCard)}
                        alt="Uploaded file preview"
                        className="w-12 h-12 mb-2"
                    />
                    <span className="text-gray-600 text-sm mb-2">{aadharCard.name}</span>
                    <button
                        onClick={handleRemoveFile}
                        className="text-red-500 text-sm"
                    >
                        Delete
                    </button>
                </div>
            ) : null}
        </div>
    );

    return (
        <div className='fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center z-50'>
            <form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md space-y-4">
                <div className="bg-white max-w-md w-full mx-auto relative z-60">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-6">Add Security</h2>
                </div>

                {/* Photo Upload Section */}
                <div className="flex items-center space-x-4">
                    <div className="relative">
                        <input
                            type="file"
                            accept="image/*"
                            onChange={handlePhotoChange}
                            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                            {...register('photo', { required: 'Photo is required' })}
                        />
                        <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center overflow-hidden">
                            {photoPreview ? (
                                <img src={photoPreview} alt="Preview" className="object-cover w-full h-full" />
                            ) : (
                                <span className="text-gray-500">Add Photo</span>
                            )}
                        </div>
                    </div>
                    <span className="text-blue-500">Add Photo</span>
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
                            pattern: {
                                value: /^[0-9]{10}$/,
                                message: 'Invalid phone number format',
                            },
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
                            <option value="morning">Morning</option>
                            <option value="evening">Evening</option>
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
                {uploadCard("Upload Aadhar Card", "aadharCard")}

                {/* Buttons */}
                <div className="flex justify-between mt-4">
                    <button
                        type="button"
                        className="px-4 py-2 text-gray-700 bg-gray-200 rounded-md hover:bg-gray-300"
                        onClick={CloseAddSecurity}
                    >
                        Cancel
                    </button>
                    <button
                        type="submit"
                        className="px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600"
                    >
                        Create
                    </button>
                </div>
            </form>
        </div>
    )
}

export default AddSecurityModal;
