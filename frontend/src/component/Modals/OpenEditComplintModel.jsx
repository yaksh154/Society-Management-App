import React, { useState, useEffect } from 'react';
import axios from 'axios';

const OpenEditComplintModel = ({ _id, closeEditComplint }) => {

    const [editComplaint, seteditComplaint] = useState({
        Complainer_Name: '',
        Complaint_Name: '',
        Description: '',
        Wing: '',
        Unit_Number: '',
        Priority: '',
        Complain_Status: ''
    });

    useEffect(() => {
        editdata(_id);
    }, []);

    const editdata = async (_id) => {
        try {
            const res = await axios.get(`http://localhost:3030/user/${_id}`);
            if (res.data) {
                seteditComplaint({
                    Complainer_Name: res.data.Complainer_Name || '',
                    Complaint_Name: res.data.Complaint_Name || '',
                    Description: res.data.Description || '',
                    Wing: res.data.Wing || '',
                    Unit_Number: res.data.Unit_Number || '',
                    Priority: res.data.Priority || '',
                    Complain_Status: res.data.Complain_Status || ''
                });
            }
            console.log('Fetched data:', res.data);
        } catch (error) {
            console.error('Error fetching complaint data:', error);
        }
    };

    const handleInputChange = (e) => {
        seteditComplaint({ ...editComplaint, [e.target.name]: e.target.value });
    };

    const handleSave = async () => {
        try {
            await axios.put(`http://localhost:3030/user/${_id}`, editComplaint);
            closeEditComplint();
        } catch (error) {
            console.error('Error saving complaint:', error);
        }
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center z-50">
            <div className="bg-white rounded-lg shadow-lg w-11/12 lg:w-1/4 md:w-1/2">
                <div className="flex justify-between items-center p-4 border-b">
                    <h1 className="text-lg font-semibold">Edit Complaint</h1>
                    <button
                        type="button"
                        className="text-gray-600 hover:text-gray-800 text-2xl"
                        onClick={closeEditComplint}
                    >
                        &times;
                    </button>
                </div>
                <div className="p-4">
                    <div className="mb-3">
                        <label className="block text-sm font-medium pb-2">Complainer Name<span className='text-red'>*</span></label>
                        <input
                            type="text"
                            className="w-full p-1 text-sm border border-gray-300 rounded"
                            name="Complainer_Name"
                            value={editComplaint.Complainer_Name}
                            onChange={handleInputChange}
                            placeholder="Enter Complainer Name"
                        />
                    </div>
                    <div className="mb-3">
                        <label className="block text-sm font-medium pb-2">Complaint Name<span className='text-red'>*</span></label>
                        <input
                            type="text"
                            className="w-full p-1 text-sm border border-gray-300 rounded"
                            name="Complaint_Name"
                            value={editComplaint.Complaint_Name}
                            onChange={handleInputChange}
                            placeholder="Enter Complaint Name"
                        />
                    </div>
                    <div className="mb-3">
                        <label className="block text-sm font-medium pb-2">Description<span className='text-red'>*</span></label>
                        <textarea
                            className="w-full p-1 text-sm border border-gray-300 rounded"
                            name="Description"
                            value={editComplaint.Description}
                            onChange={handleInputChange}
                            placeholder="Enter Description"
                        />
                    </div>
                    <div className="flex gap-2 mb-3">
                        <div className="flex-1">
                            <label className="block text-sm font-medium pb-2">Wing<span className='text-red'>*</span></label>
                            <input
                                type="text"
                                className="w-full p-1 text-sm border border-gray-300 rounded"
                                name="Wing"
                                value={editComplaint.Wing}
                                onChange={handleInputChange}
                                placeholder="Enter Wing"
                            />
                        </div>
                        <div className="flex-1">
                            <label className="block text-sm font-medium pb-2">Unit<span className='text-red'>*</span></label>
                            <input
                                type="text"
                                className="w-full p-1 text-sm border border-gray-300 rounded"
                                name="Unit_Number"
                                value={editComplaint.Unit_Number}
                                onChange={handleInputChange}
                                placeholder="Enter Unit"
                            />
                        </div>
                    </div>
                    <div className="mb-3">
                        <label className="block text-sm font-medium pb-2">Priority<span className='text-red'>*</span></label>
                        <div className="flex gap-2">
                            <label className={`flex items-center px-3 py-1 border rounded-lg ${editComplaint.Priority === "High" ? 'border-yellow-500' : ''}`}>
                                <input
                                    className="mr-2"
                                    type="radio"
                                    name="Priority"
                                    value="High"
                                    checked={editComplaint.Priority === "High"}
                                    onChange={handleInputChange}
                                />
                                High
                            </label>
                            <label className={`flex items-center px-3 py-1 border rounded-lg ${editComplaint.Priority === "Medium" ? 'border-yellow-500' : ''}`}>
                                <input
                                    className="mr-2"
                                    type="radio"
                                    name="Priority"
                                    value="Medium"
                                    checked={editComplaint.Priority === "Medium"}
                                    onChange={handleInputChange}
                                />
                                Medium
                            </label>
                            <label className={`flex items-center px-3 py-1 border rounded-lg ${editComplaint.Priority === "Low" ? 'border-yellow-500' : ''}`}>
                                <input
                                    className="mr-2"
                                    type="radio"
                                    name="Priority"
                                    value="Low"
                                    checked={editComplaint.Priority === "Low"}
                                    onChange={handleInputChange}
                                />
                                Low
                            </label>
                        </div>
                    </div>
                    <div className="mb-3">
                        <label className="block text-sm font-medium pb-2">Status<span className='text-red'>*</span></label>
                        <div className="flex gap-2">
                            <label className={`flex items-center px-3 py-1 border rounded-lg ${editComplaint.Complain_Status === "Open" ? 'border-yellow-500' : ''}`}>
                                <input
                                    className="mr-2"
                                    type="radio"
                                    name="Complain_Status"
                                    value="Open"
                                    checked={editComplaint.Complain_Status === "Open"}
                                    onChange={handleInputChange}
                                />
                                Open
                            </label>
                            <label className={`flex items-center px-3 py-1 border rounded-lg ${editComplaint.Complain_Status === "Pending" ? 'border-yellow-500' : ''}`}>
                                <input
                                    className="mr-2"
                                    type="radio"
                                    name="Complain_Status"
                                    value="Pending"
                                    checked={editComplaint.Complain_Status === "Pending"}
                                    onChange={handleInputChange}
                                />
                                Pending
                            </label>
                            <label className={`flex items-center px-3 py-1 border rounded-lg ${editComplaint.Complain_Status === "Solved" ? 'border-yellow-500' : ''}`}>
                                <input
                                    className="mr-2"
                                    type="radio"
                                    name="Complain_Status"
                                    value="Solved"
                                    checked={editComplaint.Complain_Status === "Solved"}
                                    onChange={handleInputChange}
                                />
                                Solved
                            </label>
                        </div>
                    </div>
                    <div className="flex justify-end mt-4">
                        <button
                            type="button"
                            className="bg-gray-100 w-1/2 font-semibold text-gray-700 mr-2"
                            onClick={closeEditComplint}
                        >
                            Cancel
                        </button>
                        <button
                            type="button"
                            className="bg-orange-500 hover:bg-orange-600 text-white w-1/2 font-semibold py-1 rounded text-sm"
                            onClick={handleSave}
                        >
                            Save
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OpenEditComplintModel;
