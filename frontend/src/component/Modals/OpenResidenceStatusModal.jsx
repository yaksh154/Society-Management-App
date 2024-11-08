import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import OpneResidence_Vacate from './OpneResidence_Vacate';

const OpenResidenceStatusModal = ({ setShowResidenceStatus }) => {

    const navigate = useNavigate();

    const [editComplaint, setEditComplaint] = useState({
        Status: ''
    });

    useEffect(() => {
        editdata();
    }, []);

    const editdata = async () => {
        try {
            const response = await axios.get(`http://localhost:3030/user`);
            setEditComplaint(response.data);
        } catch (error) {
            console.error('Error fetching complaint data:', error);
        }
    };

    const handleInputChange = (e) => {
        setEditComplaint({ ...editComplaint, [e.target.name]: e.target.value });
    };

    const [showResidenceVacate, setshowResidenceVacate] = useState(false);

const handleSave = async () => {
    try {
        if (editComplaint.Status === "Occupied") {
            navigate('/resident_management/resident_owner');
            setShowResidenceStatus(false);
        }else if (editComplaint.Status === "Vacate") {
            setshowResidenceVacate(true); // Trigger state change
        }
    } catch (error) {
        console.error('Error saving complaint:', error);
    }
};

// Effect to track changes to showResidenceVacate
useEffect(() => {
    if (showResidenceVacate) {
        opnenew();
    }
}, [showResidenceVacate]);

const opnenew = () => {
    // Additional logic for opening ResidenceVacate
    console.log("Opening ResidenceVacate...");
};

const CloseResidenceVacate = () => {
    setshowResidenceVacate(false);
};


    return (
        <div className="fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center z-50">
            <div className="bg-white rounded-lg shadow-lg w-11/12 lg:w-1/4 md:w-1/2 p-6">
                <h2 className="text-xl font-semibold mb-4">Residence Status</h2>

                {/* Radio Buttons for Occupied/Vacate */}
                <div className="flex gap-4 mb-4">
                    <label className={`flex items-center px-4 py-2 rounded-lg cursor-pointer ${editComplaint.Status === "Occupied" ? 'border-2 border-orange-500' : 'border border-gray-300'}`}>
                        <input
                            type="radio"
                            name="Status"
                            value="Occupied"
                            checked={editComplaint.Status === "Occupied"}
                            onChange={handleInputChange}
                            className="mr-2"
                        />
                        <span className="text-lg font-medium">Occupied</span>
                    </label>
                    <label className={`flex items-center px-4 py-2 rounded-lg cursor-pointer ${editComplaint.Status === "Vacate" ? 'border-2 border-orange-500' : 'border border-gray-300'}`}>
                        <input
                            type="radio"
                            name="Status"
                            value="Vacate"
                            checked={editComplaint.Status === "Vacate"}
                            onChange={handleInputChange}
                            className="mr-2"
                        />
                        <span className="text-lg font-medium">Vacate</span>
                    </label>
                </div>

                {showResidenceVacate && (
                    <OpneResidence_Vacate
                        setShowResidence_Vacate={CloseResidenceVacate}
                        setShowResidenceStatusOne={setShowResidenceStatus}
                    />
                )}

                {/* Checkbox */}
                <div className="flex items-center mb-4">
                    <input
                        type="checkbox"
                        id="agree"
                        className="mr-2 w-5 h-5 text-orange-500 focus:ring-orange-500 border-gray-300 rounded"
                    />
                    <label htmlFor="agree" className="text-sm text-gray-600">By submitting, you agree to select Occupied</label>
                </div>

                {/* Buttons */}
                <div className="flex justify-between mt-4">
                    <button
                        type="button"
                        className="bg-gray-100 w-full py-2 mr-2 text-gray-700 font-semibold rounded"
                        onClick={setShowResidenceStatus}
                    >
                        Cancel
                    </button>
                    <button
                        type="button"
                        className="py-2 w-full bg-gradient-to-r from-orange-500 to-yellow-500 text-white rounded-lg font-semibold shadow-lg hover:from-orange-600 hover:to-yellow-600 transition duration-200"
                        onClick={handleSave}
                    >
                        Save
                    </button>
                </div>
            </div>
        </div>
    )
}

export default OpenResidenceStatusModal
