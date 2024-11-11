import React from 'react'
import { useForm } from 'react-hook-form';
import { PostAnnouncement } from '../services/Api/api';

const AddAnnouncementModal = ({ ClaseAddAnnouncement, Fdata }) => {

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

    // Submit handler
    const onSubmit = (data) => {
        PostAnnouncement(data,Fdata,ClaseAddAnnouncement)
        reset()
    };

    return (
        <div className='fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center z-50'>
            <div className="bg-white rounded-lg shadow-lg w-11/12 lg:w-1/4 md:w-1/2">
                <div className="flex justify-between items-center p-4 border-b">
                    <h1 className="text-lg font-semibold">Create New Society</h1>
                    <button type="button" className="text-gray-600 hover:text-gray-800 text-2xl" onClick={ClaseAddAnnouncement}>
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
                            {...register('Announcement_Title', { required: 'Title is required' })}
                            className="w-full px-4 py-2 border rounded-md focus:black"
                        />
                        {errors.Announcement_Title && (
                            <p className="text-red-500 text-xs mt-1">{errors.Announcement_Title.message}</p>
                        )}
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-medium mb-2">
                            Description<span className="text-red-500">*</span>
                        </label>
                        <textarea
                            placeholder="Enter Description"
                            {...register('description', { required: 'Description is required' })}
                            className="w-full px-4 py-2 border rounded-md focus:black"
                        />
                        {errors.description && (
                            <p className="text-red-500 text-xs mt-1">{errors.description.message}</p>
                        )}
                    </div>

                    <div className="flex justify-between">
                        <div className="mr-2 w-1/2">
                            <label className="text-gray-800 text-sm font-medium">
                                Announcement Date<span className="text-red-500">*</span>
                            </label>
                            <input
                                type="date"
                                {...register('AnnouncementDate', { required: 'Date is required' })}
                                className="w-full px-4 py-2 border rounded-md focus:black"
                            />
                            {errors.AnnouncementDate && (
                                <p className="text-red-500 text-xs mt-1">{errors.AnnouncementDate.message}</p>
                            )}
                        </div>

                        <div className="ml-2 w-1/2">
                            <label className="text-gray-800 text-sm font-semibold">
                                Announcement Time<span className="text-red-500">*</span>
                            </label>
                            <input
                                type="time"
                                {...register('Announcement_Time', { required: 'Time is required' })}
                                className="w-full px-4 py-2 border rounded-md focus:black"
                            />
                            {errors.Announcement_Time && (
                                <p className="text-red-500 text-xs mt-1">{errors.Announcement_Time.message}</p>
                            )}
                        </div>
                    </div>

                    <div className="flex justify-end mt-4">
                        <button
                            type="button"
                            className="bg-gray-100 transition-all duration-500 px-4 py-2 w-1/2 font-semibold text-gray-700 mr-2"
                            onClick={ClaseAddAnnouncement}
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

export default AddAnnouncementModal
