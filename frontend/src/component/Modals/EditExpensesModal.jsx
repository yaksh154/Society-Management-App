import React, { useState } from "react";
import { useForm } from "react-hook-form";

const EditExpensesModal = ({ Close, _id }) => {

    const {
        register,
        handleSubmit,
        formState: { errors },
        setValue,
    } = useForm();

    const [fileName, setFileName] = useState("");

    // Handle form submission
    const onSubmit = (data) => {
        console.log("Form Submitted Data:", data);
    };

    // Handle file input change
    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setFileName(file.name);
        }
    };

    // Handle other input changes
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setValue(name, value); // Update react-hook-form state
    };
    return (
        <div className='fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center z-50'>
            <div className="bg-white rounded-lg shadow-lg w-11/12 lg:w-1/4 md:w-1/2">
                <div className="flex justify-between items-center p-4 border-b">
                    <h1 className="text-lg font-semibold">Edit Contact</h1>
                    <button
                        type="button"
                        className="text-gray-600 hover:text-gray-800 text-2xl"
                        onClick={Close}
                    >
                        &times;
                    </button>
                </div>
                <div className="p-6">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        {/* Title Field */}
                        <div className="mb-4">
                            <label className="block text-sm font-medium mb-2" htmlFor="title">
                                Title
                            </label>
                            <input
                                type="text"
                                id="title"
                                {...register("title", { required: "Title is required" })}
                                className={`w-full border ${errors.title ? "border-red-500" : "border-gray-300"
                                    } rounded-lg px-3 py-2 focus:outline-none focus:ring ${errors.title ? "focus:ring-red-500" : "focus:ring-indigo-300"
                                    }`}
                                onChange={handleInputChange}  // onChange handler for title
                            />
                            {errors.title && (
                                <p className="mt-1 text-sm text-red-500">{errors.title.message}</p>
                            )}
                        </div>

                        {/* Description Field */}
                        <div className="mb-4">
                            <label
                                className="block text-sm font-medium mb-2"
                                htmlFor="description"
                            >
                                Description
                            </label>
                            <textarea
                                id="description"
                                {...register("description", {
                                    required: "Description is required",
                                    minLength: {
                                        value: 10,
                                        message: "Description must be at least 10 characters long",
                                    },
                                })}
                                className={`w-full border ${errors.description ? "border-red-500" : "border-gray-300"
                                    } rounded-lg px-3 py-2 focus:outline-none focus:ring ${errors.description ? "focus:ring-red-500" : "focus:ring-indigo-300"
                                    }`}
                                onChange={handleInputChange}  // onChange handler for description
                            ></textarea>
                            {errors.description && (
                                <p className="mt-1 text-sm text-red-500">
                                    {errors.description.message}
                                </p>
                            )}
                        </div>

                        <div className="flex">
                            {/* Date Field */}
                            <div className="mb-4 w-1/2">
                                <label className="block text-sm font-medium mb-2" htmlFor="date">
                                    Date
                                </label>
                                <input
                                    type="date"
                                    id="date"
                                    {...register("date", { required: "Date is required" })}
                                    className={` border ${errors.date ? "border-red-500" : "border-gray-300"
                                        } rounded-lg px-3 py-2 focus:outline-none focus:ring ${errors.date ? "focus:ring-red-500" : "focus:ring-indigo-300"
                                        }`}
                                    onChange={handleInputChange}  // onChange handler for date
                                />
                                {errors.date && (
                                    <p className="mt-1 text-sm text-red-500">{errors.date.message}</p>
                                )}
                            </div>

                            {/* Amount Field */}
                            <div className="mb-4 w-1/2">
                                <label className="block text-sm font-medium mb-2" htmlFor="amount">
                                    Amount
                                </label>
                                <input
                                    type="number"
                                    id="amount"
                                    {...register("amount", {
                                        required: "Amount is required",
                                        min: { value: 1, message: "Amount must be greater than 0" },
                                    })}
                                    className={`border ${errors.amount ? "border-red-500" : "border-gray-300"
                                        } rounded-lg py-2 focus:outline-none focus:ring ${errors.amount ? "focus:ring-red-500" : "focus:ring-indigo-300"
                                        }`}
                                    onChange={handleInputChange}  // onChange handler for amount
                                />
                                {errors.amount && (
                                    <p className="mt-1 text-sm text-red-500">{errors.amount.message}</p>
                                )}
                            </div>
                        </div>

                        {/* File Upload Field */}
                        <div className="mb-4">
                            <label className="block text-sm font-medium mb-2" htmlFor="file">
                                Upload Bill
                            </label>
                            <input
                                type="file"
                                id="file"
                                {...register("file", {
                                    required: "File is required",
                                })}
                                className={`w-full border ${errors.file ? "border-red-500" : "border-gray-300"
                                    } rounded-lg px-3 py-2 focus:outline-none focus:ring ${errors.file ? "focus:ring-red-500" : "focus:ring-indigo-300"
                                    }`}
                                onChange={handleFileChange}  // onChange handler for file upload
                            />
                            {fileName && (
                                <p className="mt-2 text-sm text-green-600">
                                    {fileName} Uploaded Successfully
                                </p>
                            )}
                            {errors.file && (
                                <p className="mt-1 text-sm text-red-500">{errors.file.message}</p>
                            )}
                        </div>

                        {/* Buttons */}
                        <div className="flex justify-end space-x-3">
                            <button
                                type="button"
                                className="px-4 py-2 bg-gray-300 rounded-lg hover:bg-gray-400"
                                onClick={Close}
                            >
                                Cancel
                            </button>
                            <button
                                type="submit"
                                className="px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600"
                            >
                                Save
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default EditExpensesModal
