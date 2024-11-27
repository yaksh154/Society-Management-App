import React, { useEffect, useState } from 'react'
import Sidebar from '../../layout/Sidebar'
import Header from '../../layout/Header'
import { FaUser } from 'react-icons/fa';
import { Get_Security_Protocols } from '../../../../services/Api/api';

const Security_Protocols = () => {
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
      

  const [Security, setSecurity] = useState([])

  useEffect(() => {
      Fdata()
  }, [])

  const Fdata = () => {
      Get_Security_Protocols(setSecurity)
  }
    return (
        <div className='bg-[#f0f5fb] h-screen'>
            <Sidebar closeNav={closeNav} data={data} />
            <div id='main' className='max-[425px]:ml-0' style={{ marginLeft: getdata }} >
                <div className="open_he">
                    <Header openNav={openNav} />
                </div>
                <div className="p-6 rounded-lg ">
          <div className="overflow-x-auto bg-white p-4 rounded-xl">
          <h2 className="text-2xl font-bold mb-4">Security Protocols</h2>
            <table className="w-full table-auto">
              <thead className="bg-blue-100 text-gray-700 ">
                <tr>
                  <th className="px-4 py-2 text-left">Title</th>
                  <th className="px-4 py-2 text-left">Description</th>
                  <th className="px-4 py-2 text-left">Date</th>
                  <th className="px-4 py-2 text-left">Time</th>
                </tr>
              </thead>
              <tbody>
                {Security.map((item, index) => (
                  <tr key={index} className="border-b">
                    <td className="px-4 py-3 flex items-center space-x-2">{item.Title }</td>
                    <td className="px-4 py-3">{item.Description}</td>
                    <td className="px-4 py-3">{item.Date}</td>

                    <td className="px-4 py-3">
                      <span className="px-2 py-1 rounded-full bg-gray-200 text-black">{item.Time}</span>
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

export default Security_Protocols
