<<<<<<< HEAD
import React, { useState } from 'react'
=======
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
import { ImportantNumbersGet } from '../../services/Api/api';
import CreateImportantNumbers from '../../Modals/CreateImportantNumbers';

>>>>>>> 05e6b2e5690a7f98cb490c435eb93d8b3856a4f6

const Home = () => {
  let [data, setdata] = useState(250);
  let [getdata, setget] = useState(250);

  function openNav() {
    setdata(250);
    setget(250);
  }
  function closeNav() {
    setdata(0);
    setget(0);
  }

  // 

  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    Fdata()
  }, [])

  const Fdata = () => {

    ImportantNumbersGet(setContacts, setLoading)
  }

  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
};

  const closeModal = () => {
    setShowModal(false);
};

  const editContact = (id) => {
    // Edit contact logic here
  };

  const deleteContact = (id) => {
    setContacts(contacts.filter(contact => contact.id !== id));
  };

  return (
    <div>
      <Sidebar closeNav={closeNav} data={data} />
      <div id='main' className='max-[425px]:ml-0' style={{ marginLeft: getdata }} >
        <div className="open_he">
          <Header openNav={openNav} />
        </div>
        {/* Main Content */}
        <main className="flex-1 space-y-6">
          {/* Header */}

          <div className="p-6 space-y-6 bg-[#f0f5fb]">
            {/* Dashboard Cards */}
            <div className="grid grid-cols-4 gap-4">
              {/* Card 1 */}
              <Home_totle_card
                total_title="Total Balance"
                total_price="2,22,520"
                totle_color="text-white"
                totle_icon_bg_back="bg-[#fff0e5]"
                totle_icon_bg="bg-[#ff6a00]"
                totle_simbol="≡"
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
            <div className="grid grid-cols-4 gap-4">
              <div className="bg-white p-4 rounded-lg shadow-lg col-span-2">
                <TotalBalanceChart />
              </div>
              <div className="bg-white p-4 rounded-lg shadow-lg col-span-1">
                <div className=" bg-white rounded-lg max-w-md">
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
                                Ph Number: <span className='text-[#a7a7a7]'>{contact.Phonenumber}</span>
                              </p>
                              <p className="text-sm">
                                Work: <span className='text-[#a7a7a7]'>{contact.Work}</span>
                              </p>
                            </div>
                            <div className="flex space-x-2">
                              <button
                                onClick={() => editContact(contact.id)}
                                className="text-green-500 hover:text-green-600"
                              >
                                <FaEdit />
                              </button>
                              <button
                                onClick={() => deleteContact(contact.id)}
                                className="text-red-500 hover:text-red-600"
                              >
                                <FaTrashAlt />
                              </button>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
            {/* Complaint List and Upcoming Activity */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-lg shadow">
                <h3 className="text-lg font-semibold">Complaint List</h3>
                <table className="w-full mt-2 text-sm">
                  <thead>
                    <tr className="text-left text-gray-500">
                      <th>Complainer Name</th>
                      <th>Complaint Name</th>
                      <th>Date</th>
                      <th>Priority</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Evelyn Harper</td>
                      <td>Unethical Behavior</td>
                      <td>01/02/2024</td>
                      <td className="text-yellow-500">Medium</td>
                      <td className="text-blue-500">Open</td>
                    </tr>
                    {/* Repeat for other complaints */}
                  </tbody>
                </table>
              </div>
              <div className="bg-white p-4 rounded-lg shadow">
                <h3 className="text-lg font-semibold">Upcoming Activity</h3>
                <ul className="mt-2 space-y-2">
                  <li className="flex justify-between">
                    <span>Society Meeting</span>
                    <span className="text-gray-500">24-08-2024</span>
                  </li>
                  {/* Repeat for other activities */}
                </ul>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

export default Home
