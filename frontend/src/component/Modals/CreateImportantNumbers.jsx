import React, { useState } from 'react';
import { ImportantNumbersPost } from '../services/Api/api';

const CreateImportantNumbers = ({ setShowModal,Fdata }) => { 
    const [newNumber, setNewNumber] = useState({
        Fullname: '',
        Phonenumber: '',
        Work: ''
    });

    const [error, setError] = useState('');

    const handleNewNumberChange = (e) => {
        const { name, value } = e.target;
        setNewNumber({ ...newNumber, [name]: value });

        // Validate phone number
        if (name === 'Phonenumber') {
            if (!/^\d{0,10}$/.test(value)) {
                setError('Phone number must be 10 digits');
            } else if (value.length === 10) {
                setError('');
            } else {
                setError('');
            }
        }
    };

    const handleAddSociety = () => {
        // Check for errors before submitting
        if (newNumber.Phonenumber.length !== 10) {
            setError('Phone number must be exactly 10 digits');
            return;
        }
        ImportantNumbersPost(newNumber ,Fdata); 
        setShowModal(false);
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center z-50">
            <div className="bg-white rounded-lg shadow-lg w-11/12 lg:w-1/4 md:w-1/2">
                <div className="flex justify-between items-center p-4 border-b">
                    <h1 className="text-lg font-semibold">Create New Society</h1>
                    <button
                        type="button"
                        className="text-gray-600 hover:text-gray-800 text-2xl"
                        onClick={() => setShowModal(false)}
                    >
                        &times;
                    </button>
                </div>
                <div className="p-4">
                    {/* Full Name Input */}
                    <div className="mb-3">
                        <label className="block text-sm font-medium pb-2">Full Name<span className='text-red'>*</span></label>
                        <input
                            type="text"
                            className="w-full p-1 text-sm border border-gray-300 rounded"
                            name="Fullname"
                            value={newNumber.Fullname}
                            onChange={handleNewNumberChange}
                            placeholder="Enter Name"
                        />
                    </div>
                    {/* Phone Number Input */}
                    <div className="mb-3">
                        <label className="block text-sm font-medium pb-2">Phone Number<span className='text-red'>*</span></label>
                        <input
                            type="text"
                            className={`w-full p-1 text-sm border ${error ? 'border-red-500' : 'border-gray-300'} rounded`}
                            name="Phonenumber"
                            value={newNumber.Phonenumber}
                            onChange={handleNewNumberChange}
                            placeholder="Enter Number"
                        />
                        {error && <p className="text-red-500 text-sm">{error}</p>}
                    </div>
                    {/* Work Input */}
                    <div className="mb-3">
                        <label className="block text-sm font-medium pb-2">Work<span className='text-red'>*</span></label>
                        <input
                            type="text"
                            className="w-full p-1 text-sm border border-gray-300 rounded"
                            name="Work"
                            value={newNumber.Work}
                            onChange={handleNewNumberChange}
                            placeholder="Enter Work"
                        />
                    </div>
                    {/* Buttons for Cancel and Add Society */}
                    <div className="flex justify-end mt-4">
                        <button
                            type="button"
                            className="bg-gray-100 w-1/2 font-semibold text-gray-700 mr-2"
                            onClick={() => setShowModal(false)}
                        >
                            Cancel
                        </button>
                        <button
                            type="button"
                            className="bg-gray-100 w-1/2 hover:bg-gradient-to-r hover:from-orange-600 hover:to-yellow-500 hover:text-white text-black font-semibold py-1 rounded text-sm"
                            onClick={handleAddSociety}
                        >
                            Add Society
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CreateImportantNumbers;
