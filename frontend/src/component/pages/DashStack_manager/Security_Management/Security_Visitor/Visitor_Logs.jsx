import React, { useState } from 'react'
import Sidebar from '../../../../layout/Sidebar';
import Header from '../../../../layout/Header';
import { FaUser } from 'react-icons/fa';


const Visitor_Logs = () => {
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
    const visitorLogs = [
        { name: 'Evelyn Harper', phone: '97852 12369', date: '10/01/2024', unit: 'A 1001', time: '3:45 PM' },
        { name: 'Wade Warren', phone: '97852 25893', date: '11/01/2024', unit: 'A 1002', time: '2:45 AM' },
        { name: 'Guy Hawkins', phone: '975869 55563', date: '12/01/2024', unit: 'A 1003', time: '3:00 PM' },
        { name: 'Robert Fox', phone: '97444 96323', date: '13/01/2024', unit: 'A 1004', time: '5:30 AM' },
        { name: 'Jacob Jones', phone: '97123 12583', date: '14/01/2024', unit: 'B 2001', time: '12:45 PM' },
        { name: 'Ronald Richards', phone: '97259 12363', date: '15/01/2024', unit: 'B 2002', time: '3:45 PM' },
        { name: 'Annette Black', phone: '97569 77763', date: '16/01/2024', unit: 'B 2003', time: '6:00 AM' },
        { name: 'Jerome Bell', phone: '97123 25863', date: '17/01/2024', unit: 'B 2004', time: '3:45 PM' },
        { name: 'Theresa Webb', phone: '97258 36973', date: '18/01/2024', unit: 'C 3001', time: '7:00 PM' },
        { name: 'Kathryn Murphy', phone: '97577 66663', date: '19/01/2024', unit: 'C 3002', time: '6:00 AM' },
        { name: 'Eleanor Pena', phone: '97259 69963', date: '20/01/2024', unit: 'C 3003', time: '7:00 PM' },
      ];
      console.log(visitorLogs);
      
    return (
        <div>
            <Sidebar closeNav={closeNav} data={data} />
            <div id='main' className='max-[425px]:ml-0' style={{ marginLeft: getdata }} >
                <div className="open_he">
                    <Header openNav={openNav} />
                </div>
                <div className="p-6 bg-gray-100 rounded-lg shadow-lg">
      <div className="overflow-x-auto bg-white p-4 rounded-xl">
      <h2 className="text-2xl font-bold mb-4">Visitor Logs</h2>
     
         <table className="w-full table-auto   ">
                <thead className="bg-blue-100 text-gray-700 ">
                  <tr >
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
                        <FaUser className="w-9 h-9 rounded-full border border-gray-400" />
                        <span>{item.name}</span>
                      </td>
                      <td className="px-4 py-3">{item.phone}</td>
                      <td className="px-4 py-3">{item.date}</td>
                      <td className="px-4 py-3">
                        <span className="px-2 py-1 rounded-full bg-blue-100 text-blue-600">{item.unit}</span>
                      </td>
                      <td className="px-4 py-3 ">
                      <span className="px-2 py-1 rounded-full bg-gray-200 text-black ">{item.time}</span></td>
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

export default Visitor_Logs
