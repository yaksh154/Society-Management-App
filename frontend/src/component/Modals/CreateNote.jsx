import React, { useState } from 'react'

const CreateNote = ({ setcreate }) => {
    
    const [data,setdata] = useState([]);

    const chang = (e) => {
        setdata({ ...data, [e.target.name]: e.target.value });
    };

    const handleSave = () => {
        console.log(data);
        setClose(false)
    };
    return (
        <div className="fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center z-50">
            <div className="bg-white rounded-lg shadow-lg w-11/12 lg:w-1/4 md:w-1/2 p-6">
                <h2 className="text-xl font-semibold mb-4">Create Note</h2>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-medium mb-2">Title<span className="text-red-500">*</span></label>
                    <input type="text" placeholder="Enter Title" name='Title' onChange={chang} className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500" />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-medium mb-2">Description<span className="text-red-500">*</span></label>
                    <textarea placeholder="Enter Description" name='description' onChange={chang} className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500" defaultValue={""} />
                </div>
              
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-medium mb-2">Date</label>
                    <input type="date" name='service_date' onChange={chang} className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500" />
                </div>
                <div className="flex justify-between mt-4">
                    <button type="button" onClick={()=>setcreate(false)} className="bg-white border w-full py-2 mr-2 text-gray-700 font-semibold rounded">
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

export default CreateNote
