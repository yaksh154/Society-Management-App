
import React, { useState, useEffect } from 'react';
import { FaUser } from 'react-icons/fa';
import Sidenav from '../layout/Sidenav';
import Header from '../layout/Header';
import { GetVisiter } from '../../../services/Api/api';
import { AiOutlinePlus } from 'react-icons/ai';
import AddVisiter from './Models/AddVisiter';

const VisitorTracking = () => {
    const [data, setData] = useState(280);
    const [getData, setGetData] = useState(280);
    const [visitorLogs, setVisitorLogs] = useState([]);
    const [error, setError] = useState(null);

    // Replace with your API endpoint
    useEffect(() => {
    const fetchVisitorLogs = async () => {
      setError(null);
      GetVisiter((data) => {
        if (data && Array.isArray(data)) {
          setVisitorLogs(data);
        } else {
          setError('Failed to load data or data is invalid.');
        }
    ;
      });
    };

    useEffect(() => {
        Fdata();
    }, []);

    function openNav() {
        setData(280);
        setGetData(280);
    }

    function closeNav() {
        setData(0);
        setGetData(0);
    }
  
    const [AddVisiterbox, setAddVisiterbox] = useState(false);

    const OpenVisiterBox = () => {
        console.log("hii");
        
      setAddVisiterbox(true);
    };
    const CloseVisiterBox = () => {
      setAddVisiterbox(false);
    };
  

    return (
        <div>
            <Sidenav closeNav={closeNav} data={data} />
            <div id='main' className='max-[425px]:ml-0' style={{ marginLeft: getData }}>
                <div className="open_he">
                    <Header openNav={openNav} />
                </div>
                <div className="p-6 bg-gray-100 rounded-lg shadow-lg">
                    <div className="overflow-x-auto bg-white p-4 rounded-xl">
                    <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-semibold text-gray-700">Visitor Tracking</h1>
        <button className="flex items-center bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition">
          <AiOutlinePlus className="mr-2" size={20} />
          Add Visitor Details
        </button>
      </div>

                            <table className="w-full table-auto">
                                <thead className="bg-blue-100 text-gray-700">
                                    <tr>
                                        <th className="px-4 py-2 text-left">Name</th>
                                        <th className="px-4 py-2 text-left">Phone Number</th>
                                        <th className="px-4 py-2 text-left">Date</th>
                                        <th className="px-4 py-2 text-left">Unit Number</th>
                                        <th className="px-4 py-2 text-left">Time</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {visitorLogs.map((item, index) => (
                                        <tr key={index} className="border-b">
                                            <td className="px-4 py-3 flex items-center space-x-2">
                                                <FaUser className="w-8 h-8 rounded-full border border-gray-400" />
                                                <span>{item.name}</span>
                                            </td>
                                            <td className="px-4 py-3">{item.phone}</td>
                                            <td className="px-4 py-3">{item.date}</td>
                                            <td className="px-4 py-3">
                                                <span className="px-2 py-1 rounded-full bg-blue-100 text-blue-600">{item.unit}</span>
                                            </td>
                                            <td className="px-4 py-3">
                                                <span className="px-2 py-1 rounded-full bg-gray-200 text-black">{item.time}</span>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default VisitorTracking