import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Get_Security_Protocols } from '../services/Api/api';

const EditProtocolsModal = ({ _id, CloseEditProtocols }) => {
    const [Security, setSecurity] = useState([]);
    const [Edata, setEdata] = useState({ Title: '', Description: '', Date: '', Time: '' });

    // Initialize react-hook-form
    const { register, handleSubmit, setValue, formState: { errors } } = useForm();

    useEffect(() => {
        Fdata();
    }, []);

    const Fdata = () => {
        Get_Security_Protocols(setSecurity);
    };

    const Editdata = () => {
        const edit = Security[_id];
        setEdata({
            Title: edit.Title,
            Description: edit.Description,
            Date: edit.Date,
            Time: edit.Time
        });
    };

    useEffect(() => {
        if (Security.length > 0 && _id !== undefined) {
            Editdata();
        }
    }, [Security, _id]);

    useEffect(() => {
        // Convert Date format to DD/MM/YYYY (if it's not empty)
        const formattedDate = Edata.Date
            ? Edata.Date.split('-').reverse().join('/') // Converts yyyy-MM-dd to DD/MM/yyyy
            : '';

        // Validate and convert Time to 12-hour format with AM/PM
        const time12HrFormat = Edata.Time && !isNaN(Date.parse(`1970-01-01T${Edata.Time}`))
            ? new Date(`1970-01-01T${Edata.Time}`).toLocaleTimeString('en-US') // Converts HH:mm to h:mm AM/PM
            : '12:00 AM'; // Default to '12:00 AM' if time is invalid

        // Sync data with react-hook-form fields when Edata changes
        setValue('Title', Edata.Title);
        setValue('Description', Edata.Description);
        setValue('Date', formattedDate); // Set formatted date
        setValue('Time', time12HrFormat); // Set formatted time
    }, [Edata, setValue]);

    const onSubmit = (data) => {
        // Handle the logic to submit the form data here
        console.log("Data submitted: ", data);
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center z-50">
            <div className="bg-white rounded-lg shadow-lg w-11/12 lg:w-1/4 md:w-1/2 p-6">
                <h2 className="text-xl font-semibold mb-4">Edit Protocol</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-medium mb-2">
                            Title<span className="text-red-500">*</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Enter Title"
                            {...register('Title', { required: 'Title is required' })}
                            className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 ${errors.Title ? 'border-red-500' : ''}`}
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
                            className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 ${errors.Description ? 'border-red-500' : ''}`}
                        />
                        {errors.Description && <p className="text-red-500 text-sm">{errors.Description.message}</p>}
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-medium mb-2">
                            Date<span className="text-red-500">*</span>
                        </label>
                        <input
                            type="text"
                            {...register('Date', { required: 'Date is required' })}
                            className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 ${errors.Date ? 'border-red-500' : ''}`}
                             // Keeping it disabled as the date will be pre-populated in DD/MM/YYYY format
                        />
                        {errors.Date && <p className="text-red-500 text-sm">{errors.Date.message}</p>}
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-medium mb-2">
                            Time<span className="text-red-500">*</span>
                        </label>
                        <input
                            type="text"
                            {...register('Time', { required: 'Time is required' })}
                            className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 ${errors.Time ? 'border-red-500' : ''}`}
                             // Keeping it disabled as the time will be pre-populated in h:mm AM/PM format
                        />
                        {errors.Time && <p className="text-red-500 text-sm">{errors.Time.message}</p>}
                    </div>
                    <div className="flex justify-between mt-4">
                        <button
                            type="button"
                            onClick={CloseEditProtocols}
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

export default EditProtocolsModal;
