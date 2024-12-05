


import React, { useState, useEffect } from 'react';
import Sidebar from '../../../../layout/Sidebar';
import Header from '../../../../layout/Header';
import { GetVisiter } from '../../../../services/Api/api';

const Visitor_Logs = () => {

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

    const [data, setData] = useState(280);
    const [getData, setGetData] = useState(280);

    function openNav() {
        setData(280);
        setGetData(280);
    }

    function closeNav() {
        setData(0);
        setGetData(0);
    }

    const [visitorLogs, setVisitorLogs] = useState([]);
    const [loding, setloding] = useState(true)

    useEffect(() => {
        fetchVisitorLogs();
    }, []);

    const fetchVisitorLogs = () => {
        GetVisiter(setVisitorLogs, setloding);
    };

    return (
        <div>
            <Sidebar toggleNav={toggleNav} data={data} />
            <div id='main' className='max-[425px]:ml-0' style={{ marginLeft: getData }}>
                <div className="open_he">
                    <Header toggleNav={toggleNav} />
                </div>
                <div className="p-6 bg-gray-100 rounded-lg shadow-lg">
                    <div className="overflow-x-auto bg-white p-4 rounded-xl">
                        <h2 className="text-2xl font-bold mb-4">Visitor Logs</h2>
                        {loding ? (
                            <div className='flex justify-center'>
                                <div className="animate-spin rounded-full h-5 w-5 border-t-2 border-b-2 border-[#F09619]" />
                            </div>
                        ) : (
                            <table className="min-w-full bg-[#eef1fd] rounded-lg">
                                <thead>
                                    <tr>
                                        <th className="px-6 py-3 border-b font-medium text-left">
                                            Visitor Name
                                        </th>
                                        <th className="px-6 py-3 border-b font-medium ">
                                            Phone Number
                                        </th>
                                        <th className="px-6 py-3 border-b font-medium ">
                                            Date
                                        </th>
                                        <th className="px-6 py-3 border-b font-medium ">
                                            Unit Number
                                        </th>
                                        <th className="px-6 py-3 border-b font-medium ">
                                            Time
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {visitorLogs.map((e, index) => {
                                        return (
                                            <tr key={index} className="border-b bg-white hover:bg-gray-50 font-medium md:font-semibold overflow-x-scroll">
                                                <td className="px-2 md:px-4 py-2 md:py-3 text-xs md:text-sm text-gray-700 flex items-center">
                                                    <img className="w-8 h-8 rounded-full mr-1" src={e.createdBy.Image} alt="profile" />
                                                    <span>{e.Visitor_Name}</span>
                                                </td>
                                                <td className="px-2 md:px-4 py-2 md:py-3 text-xs md:text-sm text-gray-700 truncate text-center">{e.Phone}</td>
                                                <td className="px-2 md:px-4 py-2 md:py-3 text-xs md:text-sm text-gray-700 truncate text-center">
                                                    {new Date(e.Date).toLocaleDateString("en-US", {
                                                        month: "2-digit",
                                                        day: "2-digit",
                                                        year: "numeric",
                                                    })}
                                                </td>
                                                <td className="px-2 md:px-4 py-2 md:py-3 text-xs md:text-sm text-gray-700 truncate text-center">
                                                    <samp className=' px-2 py-1 text-[#5678e9] bg-[#f6f8fb] mr-2 rounded-full'>{e.Wing}</samp>
                                                    {e.Unit}
                                                </td>
                                                <td className="px-2 md:px-4 py-2 md:py-3 text-xs md:text-sm text-gray-700 truncate text-center">
                                                    {(() => {
                                                        const time24 = e.Time;
                                                        const [hours, minutes] = time24.split(":");
                                                        let hour = parseInt(hours, 10);
                                                        const ampm = hour >= 12 ? "PM" : "AM";
                                                        hour = hour % 12;
                                                        hour = hour ? hour : 12;
                                                        return `${hour}:${minutes} ${ampm}`;
                                                    })()}
                                                </td>

                                            </tr>
                                        )
                                    })}
                                </tbody>
                            </table>
                        )}

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Visitor_Logs;
