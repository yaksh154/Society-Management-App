import React, { useState } from 'react'

const Create_facility_model = ({ setClosecreate_facility }) => {
    
    const [data,setdata] = useState([]);

    const chang = (e) => {
        setdata({ ...data, [e.target.name]: e.target.value });
    };

    const handleSave = () => {
        console.log(data);
        setClosecreate_facility(false)
    };
    return (
        <div className="fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center z-50">
            <div className="bg-white rounded-lg shadow-lg w-11/12 lg:w-1/4 md:w-1/2 p-6">
                <h2 className="text-xl font-semibold mb-4">Create Facility</h2>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-medium mb-2">Facility Name<span className="text-red-500">*</span></label>
                    <input type="text" placeholder="Enter Name" name='facility_name' onChange={chang} className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500" />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-medium mb-2">Description<span className="text-red-500">*</span></label>
                    <textarea placeholder="Enter Description" name='description' onChange={chang} className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500" defaultValue={""} />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-medium mb-2">Schedule Service Date</label>
                    <input type="date" name='service_date' onChange={chang} className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500" />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-medium mb-2">Remind Before</label>
                    <select name='remind_before' onChange={chang} className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500">
                        <option value>Select Day</option>
                        <option value={1}>1 Day Before</option>
                        <option value={2}>2 Days Before</option>
                        <option value={3}>3 Days Before</option>
                    </select>
                </div>
                <div className="flex justify-between mt-4">
                    <button type="button" onClick={()=>setClosecreate_facility(false)} className="bg-white border w-full py-2 mr-2 text-gray-700 font-semibold rounded">
                        Cancel
                    </button>
                    <button type="button" onClick={handleSave} className="py-2 w-full bg-[#f6f8fb] hover:bg-gradient-to-r from-orange-500 to-yellow-500 hover:text-white rounded-lg font-semibold hover:from-orange-600 hover:to-yellow-600 transition duration-200">
                        Save
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Create_facility_model
