import React from 'react';
import { useForm } from 'react-hook-form';
import { PostNotes } from '../services/Api/api';

const CreateNote = ({ setcreate, Fdata }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data); 
    PostNotes(data,Fdata,setcreate)
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg shadow-lg w-11/12 lg:w-1/4 md:w-1/2 p-6">
        <h2 className="text-xl font-semibold mb-4">Create Note</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Title Field */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-medium mb-2">
              Title<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="Enter Title"
              {...register('title', { required: 'Title is required.' })}
              className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 ${
                errors.title ? 'border-red-500 focus:ring-red-500' : 'focus:ring-orange-500'
              }`}
            />
            {errors.title && (
              <p className="text-red-500 text-sm mt-1">{errors.title.message}</p>
            )}
          </div>

          {/* Description Field */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-medium mb-2">
              Description<span className="text-red-500">*</span>
            </label>
            <textarea
              placeholder="Enter Description"
              {...register('description', { required: 'Description is required.' })}
              className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 ${
                errors.description ? 'border-red-500 focus:ring-red-500' : 'focus:ring-orange-500'
              }`}
            />
            {errors.description && (
              <p className="text-red-500 text-sm mt-1">{errors.description.message}</p>
            )}
          </div>

          {/* Date Field */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-medium mb-2">
              Date
            </label>
            <input
              type="date"
              {...register('date', {
                required: 'Date is required.',
                validate: (value) =>
                  new Date(value) >= new Date() || 'Date cannot be in the past.',
              })}
              className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 ${
                errors.date ? 'border-red-500 focus:ring-red-500' : 'focus:ring-orange-500'
              }`}
            />
            {errors.date && (
              <p className="text-red-500 text-sm mt-1">{errors.date.message}</p>
            )}
          </div>

          {/* Buttons */}
          <div className="flex justify-between mt-4">
            <button
              type="button"
              onClick={() => setcreate(false)}
              className="bg-white border w-full py-2 mr-2 text-gray-700 font-semibold rounded"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="py-2 w-full bg-[#f6f8fb] hover:bg-gradient-to-r from-orange-500 to-yellow-500 hover:text-white rounded-lg font-semibold hover:from-orange-600 hover:to-yellow-600 transition duration-200"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateNote;
