import React, { useState } from 'react'
import Sidebar from '../../layout/Sidebar'
import Header from '../../layout/Header'
import Complaint_Submission from './Pages/Complaint_Submission';
import Request_Submission from './Pages/Request_Submission';

const Service_And_Complaint = () => {

    const [isOpen, setIsOpen] = useState(true);

    const toggleNav = () => {
        setIsOpen((prevState) => !prevState);
    };

    React.useEffect(() => {
        if (isOpen) {
            openNav();
        } else {
            closeNav();
        }
    }, [isOpen]);

    let [data, setdata] = useState(280);
    let [getdata, setget] = useState(280);

    function openNav() {
        setdata(280);
        setget(280);
    }
    function closeNav() {
        setdata(0);
        setget(0);
    }

    const [activeTab, setActiveTab] = useState("Complaint_Submission");

    return (
        <div className='bg-[#f0f5fb]'>
            <Sidebar toggleNav={toggleNav} data={data} />
            <div id='main' className='max-[425px]:ml-0' style={{ marginLeft: getdata }} >
                <div className="open_he">
                    <Header toggleNav={toggleNav} />
                </div>
                <div className="flex p-5 pb-0">
                    <button
                        className={`py-2 px-8 font-semibold text-center rounded-t-lg border-b-2 border-b-orange-500 ${activeTab === "Complaint_Submission"
                            ? "bg-gradient-to-r from-orange-600 to-yellow-500 text-white"
                            : "bg-white text-gray-700"
                            }`}
                        onClick={() => setActiveTab("Complaint_Submission")}
                    >
                        Complaint Submission
                    </button>
                    <button
                        className={`py-2 px-8 font-semibold text-center rounded-t-lg border-b-2 border-b-orange-500 ${activeTab === "Request_Submission"
                            ? "bg-gradient-to-r from-orange-600 to-yellow-500 text-white"
                            : "bg-white text-gray-700"
                            }`}
                        onClick={() => setActiveTab("Request_Submission")}
                    >
                        Request Submission
                    </button>
                </div>
                {activeTab === "Complaint_Submission" && (
                    <div className='p-5 pt-0'>
                        <Complaint_Submission />
                    </div>
                )}
                {activeTab === "Request_Submission" && (
                    <div className='p-5 pt-0'>
                        <Request_Submission />
                    </div>
                )}
            </div>
        </div>
    )
}

export default Service_And_Complaint
