import React from 'react';
import { useForm } from 'react-hook-form';
import CloseBtn from '../../../../../layout/CloseButton'
import Button from '../../../../../layout/Button_gradient'

const ComplaintModal = ({ close }) => {
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
        console.log(data);
        // CreateComplaint(data,setClosecreateComplint,getComplaintdata)
    };
    return (
        <div className='fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center z-50'>
            <div className="p-6 bg-white rounded-lg shadow-md max-w-md w-full mx-auto relative z-60">
                <div className="flex mb-2 pb-2 justify-between items-center border-b">
                    <h2 className="text-xl font-semibold">Detail of the Per Person</h2>
                    <button type="button" className="text-gray-600 hover:text-gray-800 text-2xl" onClick={close}>
                        &times;
                    </button>
                </div>
                <form onSubmit={handleSubmit(onSubmit)}>
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
                                    className="mr-2 "
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
                        <CloseBtn type="button" Addclass='w-1/2' onClick={close} CloseName='Cancel' />
                        <Button
                            type="submit"
                            Btn_Name='Create'
                            Addclass='w-1/2'
                        />
                    </div>
                </form>
            </div>
        </div>
    )
}

export default ComplaintModal
