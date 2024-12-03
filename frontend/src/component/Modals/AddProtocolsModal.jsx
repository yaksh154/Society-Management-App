import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form'; // Import useForm from react-hook-form
import { Post_Security_Protocols } from '../services/Api/api';

const AddProtocolsModal = ({ CloseAddProtocols, Fdata }) => {
    const { register, handleSubmit, formState: { errors }, setValue } = useForm({
        defaultValues: {
            Titl: '',
            Description: '',
            Date: '',
            Time: ''
        }
    });

    useEffect(() => {
        const updateDateTime = () => {
            const now = new Date();
            const currentDate = now.toISOString().split('T')[0]; 
            const currentTime = now.toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' })
            setValue('Date', currentDate); 
            setValue('Time', currentTime); 
        };
        updateDateTime();
        const interval = setInterval(updateDateTime, 1000);
        return () => clearInterval(interval);
    }, [setValue]);

    const onSubmit = (data) => {
        Post_Security_Protocols(data, CloseAddProtocols, Fdata);
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center z-50">
            <div className="bg-white rounded-lg shadow-lg w-11/12 lg:w-1/4 md:w-1/2 p-6">
                <h2 className="text-xl font-semibold mb-4">Create Note</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-medium mb-2">
                            Title<span className="text-red-500">*</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Enter Title"
                            {...register('Title', { required: 'Title is required' })}
                            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                        />
                        {errors.Title && <p className="text-red-500 text-sm">{errors.Title.message}</p>}
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-medium mb-2">
                            Description<span className="text-red-500">*</span>
                        </label>
                        <textarea
                            placeholder="Enter Description"
                            {...register('Description', { required: 'Description is required' })}
                            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                        />
                        {errors.Description && <p className="text-red-500 text-sm">{errors.Description.message}</p>}
                    </div>
                    <div className="flex justify-between mt-4">
                        <button
                            type="button"
                            onClick={CloseAddProtocols}
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

export default AddProtocolsModal;
