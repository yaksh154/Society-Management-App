import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ViewComplintModel = ({ _id, closeViewComplint }) => {
    const [editNumber, setEditNumber] = useState([]);

    useEffect(() => {
        const editdata = async () => {
            try {
                const res = await axios.get(`http://localhost:3030/user`);
                setEditNumber(res.data); 
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        editdata();
    }, []);

    // Filter data to get the specific complaint by _id
    const editNumberFdata = editNumber.filter((item) => item._id === _id);
    console.log(editNumberFdata);
    

    return (
        <div className="fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center z-50">
            <div className="bg-white rounded-lg shadow-lg w-11/12 lg:w-1/4 md:w-1/2">
                <div className="flex justify-between items-center p-4 border-b">
                    <h1 className="text-lg font-semibold">View Complaint</h1>
                    <button
                        type="button"
                        className="text-gray-600 hover:text-gray-800 text-2xl"
                        onClick={closeViewComplint}
                    >
                        &times;
                    </button>
                </div>
                
                {editNumberFdata.length > 0 ? (
                    editNumberFdata.map((e, index) => (
                        <div key={index} className="p-4">
                            <div className="flex items-center mb-4">
                                <img src="profile-image-url.jpg" alt="Profile" className="w-18 h-18 mr-5 rounded-full" />
                                <div>
                                    <p>{e.Complainer_Name}</p>
                                    <p className="text-sm text-gray-500">Admin</p>
                                </div>
                            </div>
                            <div className="mb-3">
                                <p className="font-semibold">Request Name</p>
                                <p>{e.Complainer_Name}</p>
                            </div>
                            <div className="mb-3">
                                <p className="font-semibold">Description</p>
                                <p>{e.Description}</p> 
                            </div>
                            <div className="mb-3">
                                <label className="block text-sm font-medium pb-2">Work<span className="text-red">*</span></label>
                              
                            </div>
                        </div>
                    ))
                ) : (
                    <p className="p-4">No data found</p>
                )}
            </div>
        </div>
    );
};

export default ViewComplintModel;
