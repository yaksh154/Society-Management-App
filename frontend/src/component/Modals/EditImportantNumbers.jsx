import React, { useEffect, useState } from 'react';
import { updateImportantNumber } from '../services/Api/api';
import axios from 'axios';

const EditImportantNumbers = ({ _id, closeEditModal, seteditShowModal }) => {

    const [editNumber, setEditNumber] = useState({
        Fullname: '',
        Phonenumber: '',
        Work: ''
    });

    const url = 'https:/society-management-app-server.onrender.com'
    useEffect(() => {
        editdata()
    }, []);
    
    const editdata = () =>{
        axios.put(`${url}/importantnumber/updateImportantNumber/${_id}`).then((res)=>{
            setEditNumber(res.data);
        })
    }

    const handleNewNumberChange = (e) => {
        setEditNumber({ ...editNumber, [e.target.name]: e.target.value });
    };

    const handleSave = () => {
        updateImportantNumber(_id,editNumber, seteditShowModal ,closeEditModal)
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center z-50">
            <div className="bg-white rounded-lg shadow-lg w-11/12 lg:w-1/4 md:w-1/2">
                <div className="flex justify-between items-center p-4 border-b">
                    <h1 className="text-lg font-semibold">Edit Contact</h1>
                    <button
                        type="button"
                        className="text-gray-600 hover:text-gray-800 text-2xl"
                        onClick={closeEditModal}
                    >
                        &times;
                    </button>
                </div>
                <div className="p-4">
                    <div className="mb-3">
                        <label className="block text-sm font-medium pb-2">Full Name<span className='text-red'>*</span></label>
                        <input
                            type="text"
                            className="w-full p-1 text-sm border border-gray-300 rounded"
                            name="Fullname"
                            value={editNumber.Fullname}
                            onChange={handleNewNumberChange}
                            placeholder="Enter Name"
                        />
                    </div>
                    <div className="mb-3">
                        <label className="block text-sm font-medium pb-2">Phone Number<span className='text-red'>*</span></label>
                        <input
                            type="text"
                            className="w-full p-1 text-sm border border-gray-300 rounded"
                            name="Phonenumber"
                            value={editNumber.Phonenumber}
                            onChange={handleNewNumberChange}
                            placeholder="Enter Number"
                        />
                    </div>
                    <div className="mb-3">
                        <label className="block text-sm font-medium pb-2">Work<span className='text-red'>*</span></label>
                        <input
                            type="text"
                            className="w-full p-1 text-sm border border-gray-300 rounded"
                            name="Work"
                            value={editNumber.Work}
                            onChange={handleNewNumberChange}
                            placeholder="Enter Work"
                        />
                    </div>
                    <div className="flex justify-end mt-4">
                        <button
                            type="button"
                            className="bg-gray-100 w-1/2 font-semibold text-gray-700 mr-2"
                            onClick={closeEditModal} // Closes modal without saving
                        >
                            Cancel
                        </button>
                        <button
                            type="button"
                            className="bg-gray-100 w-1/2 hover:bg-gradient-to-r hover:from-orange-600 hover:to-yellow-500 hover:text-white text-black font-semibold py-1 rounded text-sm"
                            onClick={handleSave} // Saves changes
                        >
                            Save Changes
                        </button>
                    </div>

                </div>
            </div>
        </div>  
    );
};

export default EditImportantNumbers;
