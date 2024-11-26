import React, { useState } from 'react'
import Sidebar from '../../layout/Sidebar'
import Header from '../../layout/Header'
import { FaFileAlt } from "react-icons/fa";


const Personal_Detail = () => {
    let [data, setdata] = useState(280);
    let [getdata, setget] = useState(280);
    const [activeTab, setActiveTab] = useState("Owner");

    function openNav() {
        setdata(280);
        setget(280);
    }
    function closeNav() {
        setdata(0);
        setget(0);
    }
    const [members] = useState([
      {
        name: 'Arlene McCoy',
        email: 'Arlenemccoy@gmail.com',
        phone: '+91 99130 52221',
        age: 22,
        gender: 'Male',
        relation: 'Brother',
      },
      {
        name: 'Arlene McCoy',
        email: 'BrooklynSimmons@gmail.com',
        phone: '+91 99233 66134',
        age: 22,
        gender: 'Male',
        relation: 'Uncle',
      },
      {
        name: 'Arlene McCoy',
        email: 'JennyWilson@gmail.com',
        phone: '+91 99130 52221',
        age: 22,
        gender: 'Male',
        relation: 'Sister',
      },
      {
        name: 'Arlene McCoy',
        email: 'JaneCooper@gmail.com',
        phone: '+91 99130 52221',
        age: 22,
        gender: 'Male',
        relation: 'Mother',
      },
    ]);
  
    const [vehicles] = useState([
      {
        type: 'Two Wheelers',
        name: 'Splendor',
        number: 'GJ-5216',
      },
      {
        type: 'Four Wheelers',
        name: 'Fortuner',
        number: 'GJ-5216',
      },
      {
        type: 'Two Wheelers',
        name: 'Splendor',
        number: 'GJ-5216',
      },
      {
        type: 'Two Wheelers',
        name: 'Splendor',
        number: 'GJ-5216',
      },
    ]);
    const Pending = [
      {
        billDate: "11/01/2024",
        pendingDate: "11/01/2024",
        maintenanceAmount: 1000,
        penaltyAmount: 250,
        totalAmount: 1250,
      },
      {
        billDate: "11/01/2024",
        pendingDate: "11/01/2024",
        maintenanceAmount: 1000,
        penaltyAmount: 250,
        totalAmount: 1250,
      },
      {
        billDate: "11/01/2024",
        pendingDate: "11/01/2024",
        maintenanceAmount: 1000,
        penaltyAmount: 250,
        totalAmount: 1250,
      },
    ];
    const duePending =[
      {
        Date: "11/01/2024",
        Amount: 1000,
        dueAmount: 250,
      }, {
        Date: "11/01/2024",
        Amount: 1000,
        dueAmount: 250,
      }
    ];
    const Announcement =[
      {
        Date: "11/01/2024",
        Time:"8:15 PM",
        name: "Annual Maintenance",
        Description: "All vehicles should be checked and serviced annually.",
      }, {
        Date: "11/01/2024",
        Time:"9:55 AM",
        name: "Annual Maintenance",
        Description: "All vehicles should be checked and serviced annually.",
      }
    ]
    return (
        <div className='bg-[#f0f5fb] h-screen'>
            <Sidebar closeNav={closeNav} data={data} />
            <div id='main' className='max-[425px]:ml-0' style={{ marginLeft: getdata }} >
                <div className="open_he">
                    <Header openNav={openNav} />
                </div>
                <div className="p-6 bg-gray-100 min-h-screen">
      {/* Tabs Section */}
      <div className="flex">
            <button
              className={`py-2 px-8 font-semibold text-center rounded-t-lg border-b-2 border-b-orange-500 ${activeTab === "Owner"
                ? "bg-gradient-to-r from-orange-600 to-yellow-500 text-white"
                : "bg-white text-gray-700"
                }`}
              onClick={() => setActiveTab("Owner")}
            >
              Owner
            </button>
            <button
              className={`py-2 px-8 font-semibold text-center rounded-t-lg border-b-2 border-b-orange-500 ${activeTab === "Tenant"
                ? "bg-gradient-to-r from-orange-600 to-yellow-500 text-white"
                : "bg-white text-gray-700"
                }`}
              onClick={() => setActiveTab("Tenant")}
            >
            Tenant
            </button>
          </div>

      {/* Profile Section */}
      <div className="bg-white p-6 shadow rounded-md ">
        <div className="flex justify-between items-center mx-6 ">
          {/* Left Section: Profile Picture and Info */}
          <div className="flex items-center gap-6  ">
            <img
              src="../../../../../../public/images/Profile.png"
              alt="Profile"
              className="rounded-full w-36 h-36  border-gray-950 border-spacing-6  border-wither-6 border"
            />
       <div>
            {/* <h2 className="text-lg font-semibold">Arlene McCoy</h2> */}
            <div className="grid grid-cols-4 gap-8 mt-2 text-lg text-gray-700 mx-20">
              <p>
                <span className="font-medium">Full Name:</span> <br /> <span>Arlene McCoy </span>
              </p>
              <p>
                <span className="font-medium">Phone Number:</span> <br /> <span>+91 99130 44537</span>
              </p>
              <p>
                <span className="font-medium">Email Address:</span>  <br />
                <span>arlenemccoy@gmail.com</span>
              </p>
              <p>
                <span className="font-medium">Gender:</span> <br /> <span>Male</span>
              </p>
              <p>
                <span className="font-medium">Wing:</span><br /> <span>A</span>
              </p>
              <p>
                <span className="font-medium">Age:</span>  <br /> <span>20</span>
              </p>
              <p>
                <span className="font-medium">Unit:</span> <br /> <span>1001</span>
              </p>
              <p>
                <span className="font-medium">Relation:</span> <br /> <span>Father</span>
              </p>
            </div>
          </div>
          </div>

          {/* Right Section: Documents */}
          <div className="space-y-3">
            <div className="flex items-center gap-3 p-3 bg-gray-50 border rounded-md">
              <FaFileAlt className="text-blue-500" />
              <div>
                <p>Syncfusion Essential Adharcard Front Side.JPG</p>
                <p className="text-xs text-gray-500">3.5 MB</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 bg-gray-50 border rounded-md">
              <FaFileAlt className="text-blue-500" />
              <div>
                <p>Address Proof Front Side.PDF</p>
                <p className="text-xs text-gray-500">3.5 MB</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Members Section */}
      <div className="bg-white p-6 shadow rounded-md mt-8 ">
        <h2 className="text-lg font-bold text-black p-1">Member : (04)</h2>
      <div className="grid gap-4 grid-cols-1 md:grid-cols-3 sm:grid-cols-2 lg:grid-cols-4  ">
                {members.map((member, index) => (
                  <div key={index} className="bg-white shadow-md rounded-md relative  ">
                    <div className="flex justify-between items-center mb-3 rounded-t-lg p-2 bg-[#5678e9]">
                      <h2 className="text-lg font-semibold text-white">{member.name}</h2>
                    </div>
                    <div className="maincontc p-2">
                    <p className="text-sm text-gray-600 mb-1">
                <strong>Email:</strong> {member.email}
              </p>
              <p className="text-sm text-gray-600 mb-1">
                <strong>Phone Number:</strong> {member.phone}
              </p>
              <p className="text-sm text-gray-600 mb-1">
                <strong>Age:</strong> {member.age}
              </p>
              <p className="text-sm text-gray-600 mb-1">
                <strong>Gender:</strong> {member.gender}
              </p>
              <p className="text-sm text-gray-600">
                <strong>Relation:</strong> {member.relation}
              </p>
              </div>
                  </div>
                 ))}
              </div>
              </div>


      {/* Vehicle Section */}
      <div className="bg-white p-6 shadow rounded-md mt-8 ">
        <h2 className="text-lg font-bold text-black p-1">Vehicle : (04)</h2>
      <div className="grid gap-4 grid-cols-1 md:grid-cols-3 sm:grid-cols-2 lg:grid-cols-4  ">
                {vehicles.map((vehicle, index) => (
                  <div key={index} className="bg-white shadow-md rounded-md relative  ">
                    <div className="flex justify-between items-center mb-3 rounded-t-lg p-2 bg-[#5678e9]">
                      <h2 className="text-lg font-semibold text-white">{vehicle.type}</h2>
                    </div>
                    <div className="maincontc p-2">
                    <p className="text-sm text-gray-600 mb-1">
                <strong>Email:</strong> {vehicle.name}
              </p>
              <p className="text-sm text-gray-600 mb-1">
                <strong>Phone Number:</strong> {vehicle.number}
              </p>
              </div>
                  </div>
                 ))}
              </div>
              </div>

              {/* Maintenance Details */}
                 <div className="flex flex-col lg:flex-row items-center justify-between p-4 mb-4 bg-white rounded-lg space-y-4   lg:space-y-0 mt-6">
              <h2 className="px-4 py-2 w-full lg:w-auto text-black rounded-lg text-lg font-semibold  ">
              Show Maintenance Details
              </h2>
              <div className="flex space-x-4">
                <div className="p-4 bg-white rounded-lg shadow-lg border-l-4 border-green-500 w-full lg:w-60">
                  <h3 className="text-gray-600 font-medium">Maintenance Amount</h3>
                  <p className="text-green-500 font-bold text-2xl">₹ 0</p>
                </div>
                <div className="p-4 bg-white rounded-lg shadow-lg border-l-4 border-red-500 w-full lg:w-60">
                  <h3 className="text-gray-600 font-medium">Penalty Amount</h3>
                  <p className="text-red-500 font-bold text-2xl">₹ 0</p>
                </div>
              </div>
            </div>


            {/* Pending Maintenance */}
    <div className=" bg-white rounded-lg p-4  items-center justify-center ">
      <h2 className="text-lg   font-semibold m-4">Pending Maintenance</h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
        {Pending.map((item, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg   "
          >
              <div className="flex justify-between items-center mb-3 rounded-t-lg  bg-[#5678e9] p-2">
            <div className="flex justify-between items-center ">
                      <h2 className="text-lg font-semibold text-white">Maintenance</h2>
                    </div>
              <span className="text-sm bg-blue-700 text-white py-1 px-3 rounded-full">
                Pending
              </span>
            </div>
            <div className="mt-4 text-gray-700 p-2">
              <div className="flex justify-between">
                <span>Bill Date</span>
                <span>{item.billDate}</span>
              </div>
              <div className="flex justify-between mt-2">
                <span>Pending Date</span>
                <span>{item.pendingDate}</span>
              </div>
              <hr />
              
              <div className="flex justify-between mt-2 text-red-500">
                <span>Maintenance Amount</span>
                <span>₹ {item.maintenanceAmount.toFixed(2)}</span>
              </div>
              <div className="flex justify-between mt-2 text-red-500">
                <span>Maintenance Penalty Amount</span>
                <span>₹ {item.penaltyAmount.toFixed(2)}</span>
              </div>
              <hr />
              <div className="flex justify-between mt-4 font-bold text-green-600">
                <span>Grand Total</span>
                <span>₹ {item.totalAmount.toFixed(2)}</span>
              </div>
            </div>
            <button className="mt-4 w-10/12 bg-gradient-to-r from-orange-500 to-yellow-400 text-white py-2  mx-8  mb-2 justify-center rounded-lg shadow">
              Pay Now
            </button>
          </div>
        ))}
      </div>
    </div>

    {/* Due  Maintenance */}
    <div className="p-4 bg-gray-100   items-center justify-center ">
      <h2 className="text-2xl font-semibold mb-4">Due Maintenance</h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
        {duePending.map((item, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg  "
          >
              <div className="flex justify-between items-center mb-3 rounded-t-lg  bg-[#5678e9] p-2">
            <div className="flex justify-between items-center ">
                      <h2 className="text-lg font-semibold text-white">Maintenance</h2>
                    </div>
              <span className="text-sm bg-blue-500 text-white py-1 px-3 rounded-full">
                Pending
              </span>
            </div>
            <div className="mt-4 text-gray-700 p-2">
              <div className="flex justify-between">
                <span> Date</span>
                <span>{item.Date}</span>
              </div>
                        <hr />
  
              <div className="flex justify-between mt-2 text-red-500">
                <span> Amount</span>
                <span>₹ {item.Amount.toFixed(2)}</span>
              </div>
           
              <div className="flex justify-between mt-2  text-red-500">
                <span>Due Maintenance Amount  </span>
                <span>₹ {item.dueAmount.toFixed(2)}</span>
              </div>
              <hr />
            </div>
            <button className="mt-4 w-10/12 bg-gradient-to-r from-orange-500 to-yellow-400 text-white py-2  mx-8  mb-2 justify-center rounded-lg shadow">
              Pay Now
            </button>
          </div>
        ))}
      </div>
    </div>

    {/* Announcement  */}
    <div className="bg-white p-6 shadow rounded-md mt-8 ">
        <h2 className="text-lg font-bold text-black p-1">Member : (04)</h2>
      <div className="grid gap-4 grid-cols-1 md:grid-cols-3 sm:grid-cols-2 lg:grid-cols-4  ">
                {Announcement.map((Annou, index) => (
                  <div key={index} className="bg-white shadow-md rounded-md relative  ">
                    <div className="flex justify-between items-center mb-3 rounded-t-lg p-2 bg-[#5678e9]">
                      <h2 className="text-lg font-semibold text-white">{Annou.name}</h2>
                    </div>
                    <div className="maincontc p-2">
                    <p className="text-sm text-gray-600 mb-1">
                <strong>Date:</strong> {Annou.Date}
              </p>
              <p className="text-sm text-gray-600 mb-1">
                <strong>Time:</strong> {Annou.Time}
              </p>
              <p className="text-sm text-gray-600 mb-1">
                <strong>Description:</strong> 
                <span>{Annou.Description}</span>
              </p>
             
              </div>
                  </div>
                 ))}
              </div>
              </div>

    </div>
            </div>
        </div>
    )
}

export default Personal_Detail
