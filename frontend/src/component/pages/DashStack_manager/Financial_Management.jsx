import React, { useState } from 'react';
import Sidebar from '../../layout/Sidebar';
import Header from '../../layout/Header';
import { MdOutlinePendingActions } from 'react-icons/md';
import { FaCheckCircle, FaEye, FaUser } from 'react-icons/fa';
import { HiOutlineCash } from 'react-icons/hi';
import { IoMdWallet } from 'react-icons/io';
import { BsPersonBoundingBox } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import Otherincome from './Income/Otherincome';
import SetMaintenancePwd from '../../Modals/SetMaintenancePwd';

const Financial_Management = () => {
  const [data, setData] = useState(280);
  const [getdata, setGetdata] = useState(280);




  function openNav() {
    setData(280);
    setGetdata(280);
  }

  function closeNav() {
    setData(0);
    setGetdata(0);
  }

  const [activeTab, setActiveTab] = useState("Maintenance");

  const udata = [
    { img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4CRKPij6o2waFROp-89BCE8lEf96jLsndRQ&s", name: 'Cody Fisher', unit: 'A 101', date: '10/02/2024', status: 'Tenant', phone: '92524 34522', amount: 1000, penalty: null, paymentStatus: 'Pending', paymentMethod: 'Online' },
    { img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSnyw54qdhqa0ISfF-_xM8H06WxfkM8hXhxudqC1j5Ood5T7yEIgM3c6n5qCcOQD9lc_c&usqp=CAU", name: 'Esther Howard', unit: 'B 202', date: '11/02/2024', status: 'Owner', phone: '92524 12365', amount: 1000, penalty: 250, paymentStatus: 'Done', paymentMethod: 'Cash' },
    { img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ48JWGkSOWJegd_jiLj6C5cz-Ityd6OMLR-w&s", name: 'Jenny Wilson', unit: 'C 303', date: '12/02/2024', status: 'Tenant', phone: '92589 34522', amount: 1000, penalty: null, paymentStatus: 'Pending', paymentMethod: 'Cash' },
    { img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4CRKPij6o2waFROp-89BCE8lEf96jLsndRQ&s", name: 'Cody Fisher', unit: 'D 101', date: '10/02/2024', status: 'Owner', phone: '92524 34522', amount: 1000, penalty: null, paymentStatus: 'Pending', paymentMethod: 'Online' },
    { img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSnyw54qdhqa0ISfF-_xM8H06WxfkM8hXhxudqC1j5Ood5T7yEIgM3c6n5qCcOQD9lc_c&usqp=CAU", name: 'Esther Howard', unit: 'E 202', date: '11/02/2024', status: 'Owner', phone: '92524 12365', amount: 1000, penalty: 250, paymentStatus: 'Done', paymentMethod: 'Cash' },
    { img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ48JWGkSOWJegd_jiLj6C5cz-Ityd6OMLR-w&s", name: 'Jenny Wilson', unit: 'F 303', date: '12/02/2024', status: 'Tenant', phone: '92589 34522', amount: 1000, penalty: null, paymentStatus: 'Pending', paymentMethod: 'Cash' },
    // Add more entries as needed...
  ];

  const [ShowMaintenance, setShowMaintenance] = useState(false);

  const OpenMaintenance = () => {
    setShowMaintenance(true);
  };
  const CloseMaintenance = () => {
    setShowMaintenance(false);
  };

  return (
    <div >
      <Sidebar closeNav={closeNav} data={data} />
      <div id='main' className='ml-[250px] max-lg:ml-0' style={{ marginLeft: getdata }}>
        <Header openNav={openNav} />

        {/* Main Content */}
        <main className='flex-1  bg-[#f0f5fb] p-6'>
          {activeTab === "Maintenance" && (
            <div className="flex flex-col lg:flex-row items-center justify-between p-4 mb-4 bg-white rounded-lg space-y-4   lg:space-y-0">

              {/* Cards Container */}
              <div className="flex space-x-4">
                {/* Maintenance Amount Card */}
                <div className="p-4 bg-white rounded-lg shadow-lg border-l-4 border-green-500 w-full lg:w-60">
                  <h3 className="text-gray-600 font-medium">Maintenance Amount</h3>
                  <p className="text-green-500 font-bold text-2xl">₹ 0</p>
                </div>

                {/* Penalty Amount Card */}
                <div className="p-4 bg-white rounded-lg shadow-lg border-l-4 border-red-500 w-full lg:w-60">
                  <h3 className="text-gray-600 font-medium">Penalty Amount</h3>
                  <p className="text-red-500 font-bold text-2xl">₹ 0</p>
                </div>
              </div>

              {/* Set Maintenance Button */}
              <button    onClick={OpenMaintenance} className="px-4 py-2 w-full lg:w-auto bg-gradient-to-r from-orange-500 to-yellow-500 text-white rounded-lg font-semibold shadow-lg hover:from-orange-600 hover:to-yellow-600 transition duration-200">
                Set Maintenance
              </button>
              {ShowMaintenance && (
                    <SetMaintenancePwd
                    setShowMaintenance={CloseMaintenance}
                    />
                  )}
            </div>
          )}


          {/* Tabs */}
          <div className="flex">
            <button
              className={`py-2 px-8 font-semibold text-center rounded-t-lg border-b-2 border-b-orange-500 ${activeTab === "Maintenance"
                ? "bg-gradient-to-r from-orange-600 to-yellow-500 text-white"
                : "bg-white text-gray-700"
                }`}
              onClick={() => setActiveTab("Maintenance")}
            >
              Maintenance
            </button>
            <button
              className={`py-2 px-8 font-semibold text-center rounded-t-lg border-b-2 border-b-orange-500 ${activeTab === "Other_Income"
                ? "bg-gradient-to-r from-orange-600 to-yellow-500 text-white"
                : "bg-white text-gray-700"
                }`}
              onClick={() => setActiveTab("Other_Income")}
            >
              Other Income
            </button>
          </div>

          {activeTab === "Maintenance" && (
            <div className="p-4 bg-white rounded-lg shadow-lg overflow-x-auto">
              <table className="w-full table-auto">
                <thead className="bg-blue-100 text-gray-700">
                  <tr>
                    <th className="px-4 py-2 text-left">Name</th>
                    <th className="px-4 py-2 text-left">Unit Number</th>
                    <th className="px-4 py-2 text-left">Date</th>
                    <th className="px-4 py-2 text-left">Status</th>
                    <th className="px-4 py-2 text-left">Phone Number</th>
                    <th className="px-4 py-2 text-left">Amount</th>
                    <th className="px-4 py-2 text-left">Penalty</th>
                    <th className="px-4 py-2 text-left">Status</th>
                    <th className="px-4 py-2 text-left">Payment</th>
                    <th className="px-4 py-2 text-left">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {udata.map((item, index) => (
                    <tr key={index} className="border-b">
                      <td className="px-4 py-3 flex items-center space-x-2">
                        <img src={item.img} alt="Profile" className="w-9 h-9 rounded-full" />
                        <span>{item.name}</span>
                      </td>
                      <td className="px-4 py-3">
                        <span className="px-2 py-1 rounded-full bg-blue-100 text-blue-600">{item.unit}</span>
                      </td>
                      <td className="px-4 py-3">{item.date}</td>
                      <td className="p-4">
                        {item.status === 'Owner' ? (
                          <span className="px-2 py-1 flex items-center gap-1 rounded-full text-blue-700 bg-blue-100">
                            <FaUser /> Owner
                          </span>
                        ) : (
                          <span className="px-2 py-1 flex items-center gap-1 rounded-full text-pink-700 bg-pink-100">
                            <BsPersonBoundingBox /> Tenant
                          </span>
                        )}
                      </td>
                      <td className="px-4 py-3">{item.phone}</td>
                      <td className="px-4 py-3 text-green-600 font-bold">{item.amount}</td>
                      <td className="p-4">{item.penalty ? <span className="text-red-600  font-semibold">{item.penalty}</span> : '--'}</td>
                      <td className="p-4">
                        {item.paymentStatus === 'Pending' ? (
                          <span className="px-2 py-1 flex items-center gap-1 rounded-full text-yellow-700 bg-yellow-100">
                            <MdOutlinePendingActions /> Pending
                          </span>
                        ) : (
                          <span className="px-2 py-1 flex items-center gap-1 rounded-full text-green-700 bg-green-100">
                            <FaCheckCircle /> Done
                          </span>
                        )}
                      </td>
                      <td className="p-4">
                        {item.paymentMethod === 'Online' ? (
                          <span className="px-2 py-1 flex items-center gap-1 rounded-full bg-blue-100 text-blue-600">
                            <IoMdWallet /> Online
                          </span>
                        ) : (
                          <span className="px-2 py-1 flex items-center gap-1 rounded-full bg-gray-200 text-gray-600">
                            <HiOutlineCash /> Cash
                          </span>
                        )}
                      </td>
                      <td className="px-4 py-3">
                        <button className="p-2 bg-gray-200 rounded-full hover:bg-gray-300">
                          <FaEye className="text-customBlue" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {activeTab === "Other_Income" && (
            <div>
              <Otherincome />
            </div>
          )}

        </main>
      </div>
    </div>
  );
};

export default Financial_Management;
