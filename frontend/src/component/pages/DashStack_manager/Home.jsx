import React, { useEffect, useState } from 'react'
import Sidebar from '../../layout/Sidebar';
import Header from '../../layout/Header';
import '../../../style/home.css'
import Home_totle_card from '../../layout/Home_totle_card';
import { MdOutlineAttachMoney } from "react-icons/md";
import TotalBalanceChart from '../../layout/TotalBalanceChart';
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Tooltip,
} from 'chart.js';
ChartJS.register(LineElement, PointElement, LinearScale, CategoryScale, Tooltip);
import { FaTrashAlt, FaEdit, FaPlus } from 'react-icons/fa';
import { ImportantNumbersDelete, ImportantNumbersGet } from '../../services/Api/api';
import { TiThMenu } from "react-icons/ti";
import CreateImportantNumbers from '../../Modals/CreateImportantNumbers';
import EditImportantNumbers from '../../Modals/EditImportantNumbers';
import OpenEditComplintModel from '../../Modals/OpenEditComplintModel';
import { GrFormView } from 'react-icons/gr';
import ViewComplintModel from '../../Modals/ViewComplintModel';
import axios from 'axios';


const Home = () => {
  let [data, setdata] = useState(260);
  let [getdata, setget] = useState(260);

  function openNav() {
    setdata(260);
    setget(260);
  }
  function closeNav() {
    setdata(0);
    setget(0);
  }

  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [editModal, seteditModal] = useState(false);

  useEffect(() => {
    Fdata()
  }, [])

  const Fdata = () => {
    ImportantNumbersGet(setContacts, setLoading)
  }

  // add numbers pop_up

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  // edit numbers pop_up

  const closeeditModal = () => {
    seteditModal(false);
  };

  const deleteContact = (_id) => {
    console.log(_id);
    ImportantNumbersDelete(_id, contacts, setContacts)
  };

  // get complaint List

  useEffect(() => {
    getComplaintdata()
  }, [])

  let [getComplaint, setgetComplaint] = useState([]);
  const getComplaintdata = () => {
    axios.get('http://localhost:3030/user').then((res) => {
      setgetComplaint(res.data);
    })
  }
  
  // edit complaint List pop_up

  const [EditComplint, setEditComplint] = useState(false);
  const [ViewComplint, setViewComplint] = useState(false);

  const closeEditComplint = () => {
    setEditComplint(false);
  }
  const closeViewComplint = () => {
    setViewComplint(false);
  }
  const OpneViewComplint = (_id) => {
    setViewComplint(true)
  }

  return (
    <div>
      <Sidebar closeNav={closeNav} data={data} />
      <div id='main' className='max-[425px]:ml-0 ' style={{ marginLeft: getdata }} >
        <div className="open_he">
          <Header openNav={openNav} />
        </div>
        <main className="flex-1 space-y-6 ">
          <div className="p-6 space-y-4 bg-[#f0f5fb]">
            {/* Dashboard Cards */}
            <div className="grid xl:grid-cols-4 lg:grid-cols-2 md:grid-cols-2 max-[425px]:grid-cols-2 gap-4">
              {/* Card 1 */}
              <Home_totle_card
                total_title="Total Balance"
                total_price="2,22,520"
                totle_color="text-white"
                totle_icon_bg_back="bg-[#fff0e5]"
                totle_icon_bg="bg-[#ff6a00]"
                totle_simbol={<TiThMenu />}
              />
              {/* Card 2 */}
              <Home_totle_card
                total_title="Total Income"
                total_price="55,000"
                totle_color="text-white"
                totle_icon_bg_back="bg-[#ebf5ec]"
                totle_icon_bg="bg-[#39973d]"
                totle_simbol={<MdOutlineAttachMoney />}
              />
              {/* Card 3 */}
              <Home_totle_card
                total_title="Total Expense"
                total_price="20,550"
                totle_color="text-white"
                totle_icon_bg_back="bg-[#f3f5fe]"
                totle_icon_bg="bg-[#869ff3]"
                totle_simbol={<MdOutlineAttachMoney />}
              />
              {/* Card 4 */}
              <Home_totle_card
                total_title="Total Unit"
                total_price="20,550"
                totle_color="text-white"
                totle_icon_bg_back="bg-[#fdebf9]"
                totle_icon_bg="bg-[#eb37c3]"
                totle_simbol={<MdOutlineAttachMoney />}
              />
            </div>
            {/* Graph and Important Numbers */}
            <div className="grid xl:grid-cols-4 lg:grid-cols-2 md:grid-cols-1 gap-4">
              <div className="bg-white rounded-lg max-[425px]:overflow-x-auto shadow-lg xl:col-span-2 col-span-1">
                <TotalBalanceChart />
              </div>
              <div className="bg-white p-4 rounded-lg shadow-lg col-span-1">
                <div className=" bg-white rounded-lg">
                  <div className="flex justify-between items-center mb-5">
                    <h2 className="text-lg font-semibold text-gray-800">Important Numbers</h2>
                    <button
                      onClick={openModal}
                      className="flex items-center bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600"
                    >
                      <FaPlus className="mr-2" />
                      Add
                    </button>
                    {showModal && (
                      <CreateImportantNumbers
                        setShowModal={closeModal}
                      />
                    )}
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
                            <div className="flex space-x-2">
                              <button
                                onClick={() => deleteContact(contact._id)}
                                className="text-red-500 hover:text-red-600"
                              >
                                <FaTrashAlt />
                              </button>
                              <button
                                onClick={() => seteditModal(true)}
                                className="text-green-500 hover:text-green-600"
                              >
                                <FaEdit />
                              </button>
                              {editModal && (
                                <EditImportantNumbers
                                  _id={contact._id}
                                  closeEditModal={closeeditModal}
                                  seteditShowModal={seteditModal}
                                />
                              )}
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
                <div className="space-y-4 overflow-y-auto max-h-80">
                  <div>
                    {/* Maintenance Item */}
                    <div className="flex justify-between items-center">
                      <div className="flex items-center space-x-3">
                        <img className="w-10 h-10 rounded-full" src="https://via.placeholder.com/40" alt="User Avatar" />
                        <div>
                          <p className="font-medium">Roger Lubin</p>
                          <p className="text-sm text-gray-500">2 Month Pending</p>
                        </div>
                      </div>
                      <p className="text-red-500 font-semibold">₹ 5,000</p>
                    </div>
                    {/* Repeat this block for each maintenance item */}
                    <div className="flex justify-between items-center">
                      <div className="flex items-center space-x-3">
                        <img className="w-10 h-10 rounded-full" src="https://via.placeholder.com/40" alt="User Avatar" />
                        <div>
                          <p className="font-medium">Roger Lubin</p>
                          <p className="text-sm text-gray-500">2 Month Pending</p>
                        </div>
                      </div>
                      <p className="text-red-500 font-semibold">₹ 5,000</p>
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="flex items-center space-x-3">
                        <img className="w-10 h-10 rounded-full" src="https://via.placeholder.com/40" alt="User Avatar" />
                        <div>
                          <p className="font-medium">Roger Lubin</p>
                          <p className="text-sm text-gray-500">2 Month Pending</p>
                        </div>
                      </div>
                      <p className="text-red-500 font-semibold">₹ 5,000</p>
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="flex items-center space-x-3">
                        <img className="w-10 h-10 rounded-full" src="https://via.placeholder.com/40" alt="User Avatar" />
                        <div>
                          <p className="font-medium">Roger Lubin</p>
                          <p className="text-sm text-gray-500">2 Month Pending</p>
                        </div>
                      </div>
                      <p className="text-red-500 font-semibold">₹ 5,000</p>
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="flex items-center space-x-3">
                        <img className="w-10 h-10 rounded-full" src="https://via.placeholder.com/40" alt="User Avatar" />
                        <div>
                          <p className="font-medium">Roger Lubin</p>
                          <p className="text-sm text-gray-500">2 Month Pending</p>
                        </div>
                      </div>
                      <p className="text-red-500 font-semibold">₹ 5,000</p>
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="flex items-center space-x-3">
                        <img className="w-10 h-10 rounded-full" src="https://via.placeholder.com/40" alt="User Avatar" />
                        <div>
                          <p className="font-medium">Roger Lubin</p>
                          <p className="text-sm text-gray-500">2 Month Pending</p>
                        </div>
                      </div>
                      <p className="text-red-500 font-semibold">₹ 5,000</p>
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="flex items-center space-x-3">
                        <img className="w-10 h-10 rounded-full" src="https://via.placeholder.com/40" alt="User Avatar" />
                        <div>
                          <p className="font-medium">Roger Lubin</p>
                          <p className="text-sm text-gray-500">2 Month Pending</p>
                        </div>
                      </div>
                      <p className="text-red-500 font-semibold">₹ 5,000</p>
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="flex items-center space-x-3">
                        <img className="w-10 h-10 rounded-full" src="https://via.placeholder.com/40" alt="User Avatar" />
                        <div>
                          <p className="font-medium">Roger Lubin</p>
                          <p className="text-sm text-gray-500">2 Month Pending</p>
                        </div>
                      </div>
                      <p className="text-red-500 font-semibold">₹ 5,000</p>
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="flex items-center space-x-3">
                        <img className="w-10 h-10 rounded-full" src="https://via.placeholder.com/40" alt="User Avatar" />
                        <div>
                          <p className="font-medium">Roger Lubin</p>
                          <p className="text-sm text-gray-500">2 Month Pending</p>
                        </div>
                      </div>
                      <p className="text-red-500 font-semibold">₹ 5,000</p>
                    </div>
                    {/* Add more items as needed */}
                  </div>
                </div>

              </div>
            </div>
            {/* Complaint List and Upcoming Activity */}
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
                  <div className="overflow-x-auto h-32">
                    <table className="min-w-full text-left">
                      <thead>
                        <tr className="bg-gray-100 text-gray-700">
                          <th className="px-4 py-2">Complainer Name</th>
                          <th className="px-4 py-2">Complaint Name</th>
                          <th className="px-4 py-2">Date</th>
                          <th className="px-4 py-2">Priority</th>
                          <th className="px-4 py-2">Complain Status</th>
                          <th className="px-4 py-2">Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {getComplaint.map((e, index) => {
                          return(
                            <tr key={index} className="border-b">
                            <td className="px-4 py-2 flex items-center space-x-2">
                              <img className="w-8 h-8 rounded-full" src="https://via.placeholder.com/40" alt="profile" />
                              <span>{e.Complainer_Name}</span>
                            </td>
                            <td className="px-4 py-2">{e.Complaint_Name}</td>
                            <td className="px-4 py-2">{e.Date}</td>
                            <td className="px-4 py-2">
                              <span className="text-white bg-blue-500 px-3 py-1 rounded-full text-sm">{e.Priority}</span>
                            </td>
                            <td className="px-4 py-2">
                              <span className="text-white bg-blue-400 px-3 py-1 rounded-full text-sm">{e.Complain_Status}</span>
                            </td>
                            <td className="px-4 py-2 flex space-x-2">
                              <button className="text-green-500 p-1" onClick={() => setEditComplint(true)}>
                                <FaEdit />
                              </button>
                              {EditComplint && (
                                <OpenEditComplintModel
                                  _id={e._id}
                                  closeEditComplint={closeEditComplint}
                                />
                              )}
                              <button className="text-blue-500 text-2xl rounded" onClick={() =>OpneViewComplint(e._id)}>
                                <GrFormView />
                              </button>
                              {ViewComplint && <ViewComplintModel _id={e._id} closeViewComplint={closeViewComplint} />}

                              <button className="text-red-500 p-1">
                                <FaTrashAlt />
                              </button>
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
                <div className="bg-white rounded-lg w-full h-32 overflow-auto">
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
        </main>
      </div>
    </div>
  )
}

export default Home
