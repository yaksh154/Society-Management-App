import axios from 'axios'
import React, { useEffect, useState } from 'react'
import ComplaintModal from '../Modal/ComplaintModal';
import Button from '../../../../../layout/Button_gradient';
import { BsThreeDotsVertical } from 'react-icons/bs';
import DeleteModal from '../../../../../layout/DeleteModal';

const Complaint_Submission = () => {

    const [dropdownOpenIndex, setDropdownOpenIndex] = useState(null);

    const toggleDropdown = (index) => {
        setDropdownOpenIndex(dropdownOpenIndex === index ? null : index);
    };

    const [Complaint, setComplaint] = useState(false)

    const closeComplaint = () => {
        setComplaint(false)
    }

    useEffect(() => {
        Fdata()
    }, [])

    const [data, setdata] = useState('')

    const Fdata = () => {
        axios.get('http://localhost:3030/Complaint_Submission').then((res) => {
            setdata(res.data);

        })
    }

    // Delete

    const [Delete, setDelete] = useState(false)
    const [DId, setDId] = useState('')

    const OpneDelete = (id) => {
        setDelete(true);
        setDId(id)
        console.log(id);

    }

    const closeDelete = () => {
        setDelete(false);
    }

    const DeleteClick = () => {
        axios.delete(`http://localhost:3030/Complaint_Submission/${DId}`).then((res) => {
                console.log("Deleted:", res.data);
                setdata((prevData) => prevData.filter((item) => item.id !== DId));
                closeDelete();
            })
            .catch((err) => {
                console.error("Error deleting:", err);
            });
    };


    return (
        <div>
            <div className="p-6 bg-white rounded-lg">
                <div className="flex justify-between items-center mb-6  ">
                    <h1 className="text-2xl font-semibold">Complaint</h1>
                    <Button onClick={() => setComplaint(true)} Btn_Name="Create Complaint" />
                    {Complaint && (<ComplaintModal close={closeComplaint} />)}
                </div>
                <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                    {data.length > 0 ? (
                        data.map((item, index) => (
                            <div key={index} className="bg-white shadow-md rounded-md relative">
                                <div className="flex justify-between items-center mb-3 rounded-t-lg p-2 bg-blue-600">
                                    <h2 className="text-lg font-semibold text-white">{item.ComplaintName}</h2>
                                    <div className="relative">
                                        <button
                                            onClick={() => toggleDropdown(index)}
                                            className="text-blue-500 bg-white rounded-md pb-1 focus:outline-none"
                                        >
                                            <BsThreeDotsVertical className="h-5 w-5 mt-1" />
                                        </button>
                                        {dropdownOpenIndex === index && (
                                            <div className="absolute right-0 mt-2 w-32 bg-white rounded-md shadow-lg z-10">
                                                <ul className="py-1 text-gray-700">
                                                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer" onClick={() => OpneDelete(item.id)}>
                                                        Delete
                                                    </li>
                                                </ul>
                                            </div>
                                        )}
                                    </div>
                                </div>
                                <div className="flex flex-col gap-2 mb-4 p-2">
                                    <div className="text-sm text-gray-500 flex justify-between">
                                        Request Date:
                                        <span className="ml-2 text-base font-semibold text-gray-700">{new Date(item.Date).toLocaleDateString("en-US", {
                                            month: "2-digit",
                                            day: "2-digit",
                                            year: "numeric",
                                        })}</span>
                                    </div>
                                    <div className="text-sm text-gray-500 flex justify-between">
                                        Status:
                                        <span className={`px-3 py-1 rounded-full text-md font-medium flex justify-center ${item.Status === "Open" ? "bg-[#eef1fd] text-[#5678e9]" :
                                            item.Status === "Pending" ? "bg-[#fff9e7] text-[#ffc313]" :
                                                item.Status === "Solve" ? "bg-[#ebf5ec] text-[#39973d]" : null
                                            }`}>{item.Status}</span>
                                    </div>
                                    <div className="text-sm text-gray-500">
                                        Description:
                                    </div>
                                    <p className="text-gray-500 text-sm font-bold">{item.Description}</p>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className="col-span-4 text-gray-500">No data available.</div>
                    )}
                    {Delete && (<DeleteModal close={closeDelete} DeleteClick={DeleteClick} />)}
                </div>
            </div>
        </div>
    )
}

export default Complaint_Submission
