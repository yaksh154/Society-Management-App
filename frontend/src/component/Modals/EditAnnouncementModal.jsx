import axios from 'axios';
import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form';

const EditAnnouncementModal = ({ ClaseEditAnnouncement, _id }) => {

  const { register, handleSubmit, formState: { errors }, setValue } = useForm();

  useEffect(() => {
    Fdata()
  }, [])

  const Fdata = () => {
    axios.put(`http://localhost:3030/incomeData/${_id}`).then((res) => {
      setValue('Announcement_Title', res.data.Announcement_Title);
      setValue('description', res.data.description);
      setValue('announcementDate', res.data.announcementDate);
      setValue('announcementTime', res.data.announcementTime);
    })
  }

  const onSubmit = (formData) => {
    console.log(formData);
    axios.put("url", formData).then((res) => {
      console.log();
    })
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValue(name, value);
  };

  return (
    <div className='fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center z-50'>
      <div className="bg-white rounded-lg shadow-lg w-11/12 lg:w-1/4 md:w-1/2">
        <div className="flex justify-between items-center p-4 border-b">
          <h1 className="text-lg font-semibold">Create New Society</h1>
          <button type="button" className="text-gray-600 hover:text-gray-800 text-2xl" onClick={ClaseEditAnnouncement}>
            &times;
          </button>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="p-4">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-medium mb-2">
              Announcement Title<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="Enter Name"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
              {...register('Announcement_Title', { required: "Title is required" })}
              onChange={handleChange} // Handle change event
            />
            {errors.Announcement_Title && <p className="text-red-500 text-sm">{errors.Announcement_Title.message}</p>}
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-medium mb-2">
              Description<span className="text-red-500">*</span>
            </label>
            <textarea
              placeholder="Enter Description"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
              {...register('description', { required: "Description is required" })}
              onChange={handleChange} // Handle change event
            />
            {errors.description && <p className="text-red-500 text-sm">{errors.description.message}</p>}
          </div>

          <div className="flex justify-between">
            <div className="mr-2 w-1/2">
              <label className="text-gray-800 text-sm font-medium">
                Announcement Date<span className="text-red-500">*</span>
              </label>
              <input
                type="date"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                {...register('announcementDate', { required: "Date is required" })}
                onChange={handleChange} // Handle change event
              />
              {errors.announcementDate && <p className="text-red-500 text-sm">{errors.announcementDate.message}</p>}
            </div>

            <div className="ml-2 w-1/2">
              <label className="text-gray-800 text-sm font-medium">
                Announcement Time<span className="text-red-500">*</span>
              </label>
              <input
                type="time"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-600"
                {...register('announcementTime', { required: "Time is required" })}
                onChange={handleChange} // Handle change event
              />
              {errors.announcementTime && <p className="text-red-500 text-sm">{errors.announcementTime.message}</p>}
            </div>
          </div>

          <div className="flex justify-end mt-4">
            <button
              type="button"
              className="bg-gray-100 transition-all duration-500 px-4 py-2 w-1/2 font-semibold text-gray-700 mr-2"
              onClick={() => ClaseEditAnnouncement(false)}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-gray-100 px-4 py-2 w-1/2 hover:bg-gradient-to-r hover:from-orange-600 hover:to-yellow-500 hover:text-white text-black font-semibold py-1 rounded text-sm"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default EditAnnouncementModal
