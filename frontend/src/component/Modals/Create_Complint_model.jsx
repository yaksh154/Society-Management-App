import React from 'react';
import { useForm } from 'react-hook-form';
import { CreateComplaint } from '../services/Api/api';

const Create_Complint_model = ({ setClosecreateComplint,getComplaintdata }) => {
    const getCurrentDate = () => {
        const today = new Date();
        return `${String(today.getDate()).padStart(2, '0')}/${String(today.getMonth() + 1).padStart(2, '0')}/${today.getFullYear()}`;
    };

    const { register, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            Complainer_Name: '',
            Complaint_Name: '',
            Description: '',
            Wing: '',
            Unit_Number: '',
            Priority: '',
            Complain_Status: '',
            Date: getCurrentDate(),
        },
    });

    const onSubmit = (data) => {
        CreateComplaint(data,setClosecreateComplint,getComplaintdata)
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center z-50">
            <div className="bg-white rounded-lg shadow-lg w-11/12 lg:w-1/4 md:w-1/2">
                <div className="flex justify-between items-center p-4 border-b">
                    <h1 className="text-lg font-semibold">Edit Complaint</h1>
                    <button
                        type="button"
                        className="text-gray-600 hover:text-gray-800 text-2xl"
                        onClick={() => setClosecreateComplint(false)}
                    >
                        &times;
                    </button>
                </div>
                <form onSubmit={handleSubmit(onSubmit)} className="p-4">
                    <div className="mb-3">
                        <label className="block text-sm font-medium pb-2">Complainer Name<span className="text-red-500">*</span></label>
                        <input
                            type="text"
                            className="w-full p-1 text-sm border border-gray-300 rounded"
                            {...register("Complainer_Name", { required: "Complainer name is required" })}
                            placeholder="Enter Complainer Name"
                        />
                        {errors.Complainer_Name && <p className="text-red-500 text-xs mt-1">{errors.Complainer_Name.message}</p>}
                    </div>
                    <div className="mb-3">
                        <label className="block text-sm font-medium pb-2">Complaint Name<span className="text-red-500">*</span></label>
                        <input
                            type="text"
                            className="w-full p-1 text-sm border border-gray-300 rounded"
                            {...register("Complaint_Name", { required: "Complaint name is required" })}
                            placeholder="Enter Complaint Name"
                        />
                        {errors.Complaint_Name && <p className="text-red-500 text-xs mt-1">{errors.Complaint_Name.message}</p>}
                    </div>
                    <div className="mb-3">
                        <label className="block text-sm font-medium pb-2">Description<span className="text-red-500">*</span></label>
                        <textarea
                            className="w-full p-1 text-sm border border-gray-300 rounded"
                            {...register("Description", { required: "Description is required" })}
                            placeholder="Enter Description"
                        />
                        {errors.Description && <p className="text-red-500 text-xs mt-1">{errors.Description.message}</p>}
                    </div>
                    <div className="flex gap-2 mb-3">
                        <div className="flex-1">
                            <label className="block text-sm font-medium pb-2">Wing<span className="text-red-500">*</span></label>
                            <input
                                type="text"
                                className="w-full p-1 text-sm border border-gray-300 rounded"
                                {...register("Wing", { required: "Wing is required" })}
                                placeholder="Enter Wing"
                            />
                            {errors.Wing && <p className="text-red-500 text-xs mt-1">{errors.Wing.message}</p>}
                        </div>
                        <div className="flex-1">
                            <label className="block text-sm font-medium pb-2">Unit<span className="text-red-500">*</span></label>
                            <input
                                type="text"
                                className="w-full p-1 text-sm border border-gray-300 rounded"
                                {...register("Unit_Number", { required: "Unit is required" })}
                                placeholder="Enter Unit"
                            />
                            {errors.Unit_Number && <p className="text-red-500 text-xs mt-1">{errors.Unit_Number.message}</p>}
                        </div>
                    </div>
                    <div className="mb-3">
                        <label className="block text-sm font-medium pb-2">Priority<span className="text-red-500">*</span></label>
                        <div className="flex gap-2">
                            <label className={`flex items-center px-3 py-1 border rounded-lg ${errors.Priority ? 'border-red-500' : ''}`}>
                                <input
                                    className="mr-2"
                                    type="radio"
                                    value="High"
                                    {...register("Priority", { required: "Priority is required" })}
                                />
                                High
                            </label>
                            <label className={`flex items-center px-3 py-1 border rounded-lg ${errors.Priority ? 'border-red-500' : ''}`}>
                                <input
                                    className="mr-2"
                                    type="radio"
                                    value="Medium"
                                    {...register("Priority")}
                                />
                                Medium
                            </label>
                            <label className={`flex items-center px-3 py-1 border rounded-lg ${errors.Priority ? 'border-red-500' : ''}`}>
                                <input
                                    className="mr-2"
                                    type="radio"
                                    value="Low"
                                    {...register("Priority")}
                                />
                                Low
                            </label>
                        </div>
                        {errors.Priority && <p className="text-red-500 text-xs mt-1">{errors.Priority.message}</p>}
                    </div>
                    <div className="mb-3">
                        <label className="block text-sm font-medium pb-2">Status<span className="text-red-500">*</span></label>
                        <div className="flex gap-2">
                            <label className={`flex items-center px-3 py-1 border rounded-lg ${errors.Complain_Status ? 'border-red-500' : ''}`}>
                                <input
                                    className="mr-2"
                                    type="radio"
                                    value="Open"
                                    {...register("Complain_Status", { required: "Status is required" })}
                                />
                                Open
                            </label>
                            <label className={`flex items-center px-3 py-1 border rounded-lg ${errors.Complain_Status ? 'border-red-500' : ''}`}>
                                <input
                                    className="mr-2"
                                    type="radio"
                                    value="Pending"
                                    {...register("Complain_Status")}
                                />
                                Pending
                            </label>
                            <label className={`flex items-center px-3 py-1 border rounded-lg ${errors.Complain_Status ? 'border-red-500' : ''}`}>
                                <input
                                    className="mr-2"
                                    type="radio"
                                    value="Solve"
                                    {...register("Complain_Status")}
                                />
                                Solve
                            </label>
                        </div>
                        {errors.Complain_Status && <p className="text-red-500 text-xs mt-1">{errors.Complain_Status.message}</p>}
                    </div>
                    <div className="flex justify-end mt-4">
                        <button
                            type="button"
                            className="bg-gray-100 w-1/2 font-semibold text-gray-700 mr-2"
                            onClick={() => setClosecreateComplint(false)}
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="bg-orange-500 hover:bg-orange-600 text-white w-1/2 font-semibold py-1 rounded text-sm"
                        >
                            Save
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Create_Complint_model;
