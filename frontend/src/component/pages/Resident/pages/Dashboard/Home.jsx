import React, { useEffect, useState } from 'react'
import Sidebar from '../../layout/Sidebar'
import Header from '../../layout/Header'
import Button from '../../../../layout/Button_gradient'
import Home_totle_card from '../../../../layout/Home_totle_card';
import { TiThMenu } from 'react-icons/ti';
import { MdOutlineAttachMoney } from 'react-icons/md';
import GetPassModal from './Modal/GetPassModal';
import TotalBalanceChart from '../../../../layout/TotalBalanceChart';
import { GetComplainy, ImportantNumbersGet } from '../../../../services/Api/api';
import axios from 'axios';
import { Get_Pending_Maintenances } from '../../Api/api';

const Home = () => {
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

  const [GetPass, setGetPass] = useState(false)

  const closeGetPass = () => {
    setGetPass(false)
  }

  const [loading, setLoading] = useState(true);
  const [contacts, setContacts] = useState('');

  useEffect(() => {
    Fdata()
  }, [])

  const Fdata = () => {
    ImportantNumbersGet(setContacts, setLoading)
  }

  // Pending Maintenances

  const [PendingData, setPendingData] = useState('');

  useEffect(() => {
    GetPendMain()
  }, [])

  const GetPendMain = () => {
    Get_Pending_Maintenances(setPendingData)
  }

  // get complaint List

  useEffect(() => {
    getComplaintdata()
  }, [])

  let [getComplaint, setgetComplaint] = useState([]);
  const getComplaintdata = () => {
    GetComplainy(setgetComplaint)
  }

  return (
    <div className='bg-[#f0f5fb] h-screen'>
      <Sidebar closeNav={closeNav} data={data} />
      <div id='main' className='max-[425px]:ml-0' style={{ marginLeft: getdata }} >
        <div className="open_he">
          <Header openNav={openNav} />
        </div>
        <div className="flex-1 space-y-6 p-6">
          <div className="grid xl:grid-cols-4 lg:grid-cols-2 md:grid-cols-2 max-[425px]:grid-cols-2 gap-4">
            <Home_totle_card
              total_title="Total Balance"
              total_price="2,22,520"
              totle_color="text-white"
              totle_icon_bg_back="bg-[#fff0e5]"
              totle_icon_bg="bg-[#ff6a00]"
              totle_Noch="bg-[#ffb480]"
              totle_simbol={<TiThMenu />}
            />
            <Home_totle_card
              total_title="Total Income"
              total_price="55,000"
              totle_color="text-white"
              totle_icon_bg_back="bg-[#ebf5ec]"
              totle_icon_bg="bg-[#39973d]"
              totle_Noch="bg-[#9ccb9e]"
              totle_simbol={<MdOutlineAttachMoney />}
            />
            <Home_totle_card
              total_title="Total Expense"
              total_price="20,550"
              totle_color="text-white"
              totle_icon_bg_back="bg-[#f3f5fe]"
              totle_icon_bg="bg-[#869ff3]"
              totle_Noch="bg-[#c3cff9]"
              totle_simbol={<MdOutlineAttachMoney />}
            />
            <Home_totle_card
              total_title="Total Unit"
              total_price="20,550"
              totle_color="text-white"
              totle_icon_bg_back="bg-[#fdebf9]"
              totle_icon_bg="bg-[#eb37c3]"
              totle_Noch="bg-[#f59be1]"
              totle_simbol={<MdOutlineAttachMoney />}
            />
          </div>
          <div className="grid xl:grid-cols-4 lg:grid-cols-2 md:grid-cols-1 gap-4">
            <div className="bg-white rounded-lg max-[425px]:overflow-x-auto shadow-lg xl:col-span-2 col-span-1">
              <TotalBalanceChart />
            </div>
            <div className="bg-white p-4 rounded-lg shadow-lg col-span-1">
              <div className=" bg-white rounded-lg">
                <div className="flex justify-between items-center mb-5">
                  <h2 className="text-lg font-semibold text-gray-800">Important Numbers</h2>
                </div>
                <div className="space-y-4 max-h-80 overflow-y-auto pr-2">
                  {loading ? (
                    <div className="text-center text-gray-500">Loading...</div>
                  ) : (
                    <div className="space-y-4 max-h-80 overflow-y-auto pr-2">
                      {contacts.map(contact => (
                        <div
                          key={contact._id}
                          className="flex justify-between items-center p-4 bg-gray-100 rounded-lg"
                        >
                          <div>
                            <p className="text-sm font-medium">
                              Name: <span className='text-[#a7a7a7]'>{contact.Fullname}</span>
                            </p>
                            <p className="text-sm">
                              Phone Number: <span className='text-[#a7a7a7]'>{contact.Phonenumber}</span>
                            </p>
                            <p className="text-sm">
                              Work: <span className='text-[#a7a7a7]'>{contact.Work}</span>
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-lg col-span-1">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold">Pending Maintenances</h2>
                <a href="#" className="text-blue-500 text-sm">View all</a>
              </div>
              <div className="space-y-4 overflow-y-auto w-full px-2">
                {PendingData.length > 0 ? (
                  PendingData.map((e, index) => (
                    <div key={index} className="flex justify-between items-center">
                      <div className="flex items-center space-x-3">
                        <img
                          className="w-10 h-10 rounded-full"
                          src={e.avatar || "https://via.placeholder.com/40"}
                          alt={`${e.name}'s avatar`}
                        />
                        <div>
                          <p className="font-medium">{e.Name}</p>
                          <p className="text-sm text-gray-500">{e.Status}</p>
                        </div>
                      </div>
                      <p className="text-red-500 font-semibold">₹ {e.Amount}</p>
                    </div>
                  ))
                ) : (
                  <p className="text-center text-gray-500">No pending data available.</p>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="grid xl:grid-cols-4 grid-cols-1 gap-4">
          <div className="bg-white xl:col-span-3 rounded-lg shadow">
            <div className="bg-white rounded-lg p-4">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold">Complaint List</h2>
                <select className="border border-gray-300 rounded-md px-2 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option>Month</option>
                  <option>Week</option>
                  <option>Day</option>
                </select>
              </div>
              <div className="overflow-x-auto h-32 px-2">
                <table className="min-w-full text-left">
                  <thead>
                    <tr className="bg-gray-100 text-gray-700">
                      <th className="px-4 py-2">Complainer Name</th>
                      <th className="px-4 py-2">Complaint Name</th>
                      <th className="px-4 py-2">Date</th>
                      <th className="px-4 py-2">Priority</th>
                      <th className="px-4 py-2">Complain Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {getComplaint.map((e, index) => {
                      return (
                        <tr key={index} className="border-b">
                          <td className="px-4 py-2 flex items-center space-x-2">
                            <img className="w-8 h-8 rounded-full" src="https://via.placeholder.com/40" alt="profile" />
                            <span>{e.Complainer_Name}</span>
                          </td>
                          <td className="px-4 py-2">{e.Complaint_Name}</td>
                          <td className="px-4 py-2">{e.Date}</td>
                          <td className="px-4 py-2 text-center">
                            <span className={`px-3 py-1 rounded-full text-md font-medium flex justify-center ${e.Priority === "High" ? "bg-[#e74c3c] text-white" :
                              e.Priority === "Medium" ? "bg-[#5678e9] text-white" :
                                e.Priority === "Low" ? "bg-[#39973d] text-white" : null
                              }`}>{e.Priority}</span>
                          </td>
                          <td className="px-4 py-2 text-center">
                            <span className={`px-3 py-1 rounded-full text-md font-medium flex justify-center ${e.Complain_Status === "Open" ? "bg-[#eef1fd] text-[#5678e9]" :
                              e.Complain_Status === "Pending" ? "bg-[#fff9e7] text-[#ffc313]" :
                                e.Complain_Status === "Solve" ? "bg-[#ebf5ec] text-[#39973d]" : null
                              }`}>{e.Complain_Status}</span>
                          </td>
                        </tr>
                      )
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold">Upcoming Activity</h2>
              <select className="border border-gray-300 rounded-md px-2 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option>Month</option>
                <option>Week</option>
                <option>Day</option>
              </select>
            </div>
            <div className="bg-white rounded-lg w-full h-32 overflow-auto px-2">
              <div className="space-y-4">
                {/* Activity Item */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 flex items-center justify-center rounded-full bg-orange-100 text-orange-600 font-bold">S</div>
                    <div>
                      <p className="text-gray-900 font-medium">Society Meeting</p>
                      <p className="text-gray-500 text-sm">8:00 PM To 10:00 PM</p>
                    </div>
                  </div>
                  <p className="text-gray-500 text-sm">24-09-2024</p>
                </div>
                {/* Activity Item */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 flex items-center justify-center rounded-full bg-green-100 text-green-600 font-bold">H</div>
                    <div>
                      <p className="text-gray-900 font-medium">Holi Festival</p>
                      <p className="text-gray-500 text-sm">8:00 PM To 10:00 PM</p>
                    </div>
                  </div>
                  <p className="text-gray-500 text-sm">24-09-2024</p>
                </div>
                {/* Activity Item */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 flex items-center justify-center rounded-full bg-blue-100 text-blue-600 font-bold">G</div>
                    <div>
                      <p className="text-gray-900 font-medium">Ganesh Chaturthi</p>
                      <p className="text-gray-500 text-sm">8:00 PM To 10:00 PM</p>
                    </div>
                  </div>
                  <p className="text-gray-500 text-sm">24-09-2024</p>
                </div>
                {/* Activity Item */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 flex items-center justify-center rounded-full bg-red-100 text-red-600 font-bold">N</div>
                    <div>
                      <p className="text-gray-900 font-medium">Navratri Festival</p>
                      <p className="text-gray-500 text-sm">8:00 PM To 10:00 PM</p>
                    </div>
                  </div>
                  <p className="text-gray-500 text-sm">24-09-2024</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
