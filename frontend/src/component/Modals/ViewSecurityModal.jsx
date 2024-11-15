import React, { useEffect, useState } from 'react'
import { FaFemale, FaMale, FaUser } from 'react-icons/fa'
import { IoSunnySharp } from 'react-icons/io5'
import { PiMoonFill } from 'react-icons/pi'
import { GetGuard_Details } from '../services/Api/api'

const ViewSecurityModal = ({ _id, CloseView }) => {

    useEffect(() => {
        Fdata()
    }, [])

    const [Guard_Details, setGuard_Details] = useState([]);


    const Fdata = () => {
        GetGuard_Details(setGuard_Details)
    }

    const sow_Guard_Details = Guard_Details.filter((e) => e._id === _id)

    return (
        <div
            className='fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center z-50'
            onClick={(e) => { if (e.target === e.currentTarget) CloseView() }}>
            <div className="bg-white rounded-lg shadow-lg w-11/12 lg:w-1/4 md:w-1/2">
                <div className="flex justify-between items-center p-4 border-b">
                    <h1 className="text-lg font-semibold">View Security Guard Details</h1>
                    <button
                        type="button"
                        className="text-gray-600 hover:text-gray-800 text-2xl"
                        onClick={CloseView}
                    >
                        &times;
                    </button>
                </div>

                {sow_Guard_Details.map((e, index) => {
                    return (
                        <div key={index}>
                            <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-start mb-6">
                                <img alt="Profile" className="w-20 h-20 rounded-full mx-2" />
                                <div className='sm:ml-4 my-5'>
                                    <h3 className="font-semibold text-lg">{e.Security_Guard_Name}</h3>
                                    <p className="text-[#a7a7a7] text-md">{e.Shift_Date}</p>
                                </div>
                            </div>
                            <div className="grid grid-cols-3 py-4">
                                <div className="flex flex-col items-center border-r-2 border-gray-300 sm:px-4">
                                    <span className="font-semibold text-gray-500">Select Shift</span>
                                    <span className={`px-3 py-1 rounded-full text-md font-medium flex justify-center items-center ${e.Select_Shift === "High" ? "bg-[#e74c3c] text-white" :
                                        e.Select_Shift === "Day" ? "bg-[#f4f4f4] text-[#ff9300]" :
                                            e.Select_Shift === "Night" ? "bg-[#4f4f4f] text-white" : ""
                                        }`}>
                                        {e.Select_Shift === "Day" && <IoSunnySharp className='mr-1' />}
                                        {e.Select_Shift === "Night" && <PiMoonFill className='mr-1' />}
                                        {` ${e.Select_Shift}`}
                                    </span>
                                </div>
                                <div className="flex flex-col items-center border-r-2 border-gray-300 sm:px-4">
                                    <span className="text-lg font-semibold text-gray-500">Shift Time</span>
                                    <span className="flex items-center rounded-full bg-[#f6f8fb] text-[#4f4f4f] font-semibold px-2 py-1 rounded-lg">
                                        {e.Shift_Time}
                                    </span>
                                </div>
                                <div className="flex flex-col items-center">
                                    <span className="text-lg font-semibold text-gray-500">Gender</span>
                                    <span className={`px-3 py-1 rounded-full text-md font-medium flex justify-center items-center ${e.Gender === "High" ? "bg-[#e74c3c] text-white" :
                                        e.Gender === "Male" ? "bg-[#e9f6fc] text-[#5678e9]" :
                                            e.Gender === "Female" ? "bg-[#fff1f6] text-[#fe76a8]" : ""
                                        }`}>
                                        {e.Gender === "Male" && <FaMale className='mr-1' />}
                                        {e.Gender === "Female" && <FaFemale className='mr-1' />}
                                        {` ${e.Gender}`}
                                    </span>
                                </div>
                            </div>
                        </div>
                    )
                })}

            </div>

        </div>
    )
}

export default ViewSecurityModal