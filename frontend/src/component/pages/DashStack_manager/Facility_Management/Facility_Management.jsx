import React, { useState } from 'react'
import Sidebar from '../../../layout/Sidebar'
import Header from '../../../layout/Header'
import { BsThreeDotsVertical } from 'react-icons/bs';
import Create_facility_model from '../../../Modals/Create_facility_model';
import Editcreate_facility_Modal from '../../../Modals/Editcreate_facility_Modal';

const Facility_Management = () => {
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

  const [dropdownOpenIndex, setDropdownOpenIndex] = useState(null);

  const toggleDropdown = (index) => {
    setDropdownOpenIndex(dropdownOpenIndex === index ? null : index);
  };

  const incomeData = [
    {
      title: 'Ganesh Chaturthi',
      date: '01/07/2024',
      description: 'The celebration of Ganesh Chaturthi involves the installation of clay idols of Ganesha in.',
    },
    {
      title: 'Navratri',
      date: '01/07/2024',
      description: 'The celebration of Navratri involves the installation of clay idols of Durga in Resident.',
    },
    {
      title: 'Diwali',
      date: '01/07/2024',
      description: 'The celebration of Diwali involves the installation of clay idols of Ganesha in.',
    },
    {
      title: 'Holi',
      date: '01/07/2024',
      description: 'The celebration of Holi involves the installation of clay idols of Ganesha in.',
    },
  ];

  const [create_facility, setcreate_facility] = useState(false);

  const sowcreate_facility = () => {
    setcreate_facility(true);
  };
  const Closecreate_facility = () => {
    setcreate_facility(false);
  };

  const [editcreate_facility, seteditcreate_facility] = useState(false);

  const editsowcreate_facility = () => {
    seteditcreate_facility(true);
  };
  const editClosecreate_facility = () => {
    seteditcreate_facility(false);
  };

  return (
    <div>
      <Sidebar closeNav={closeNav} data={data} />
      <div id='main' className='max-[425px]:ml-0' style={{ marginLeft: getdata }} >
        <div className="open_he">
          <Header openNav={openNav} />
        </div>
        <div className="flex-1 bg-[#f0f5fb] h-dvh">
          <div className="p-6">
            <div className="bg-white shadow-md rounded-lg p-6">
              <div className="flex justify-between items-center mb-6">
                <h1 className='font-semibold md:text-2xl text-md'>Facility Management</h1>
                <button onClick={sowcreate_facility} className="px-4 py-2 bg-gradient-to-r from-orange-500 to-yellow-500 text-white rounded-lg font-semibold shadow-lg hover:from-orange-600 hover:to-yellow-600 transition duration-200">
                  Create Facility
                </button>
                {create_facility && (
                  <Create_facility_model
                    setClosecreate_facility={Closecreate_facility}
                  />
                )}
              </div>
              <div className="grid gap-4 grid-cols-1 md:grid-cols-3 sm:grid-cols-2 lg:grid-cols-4">
                {incomeData.map((item, index) => (
                  <div key={index} className="bg-white shadow-md rounded-md relative">
                    <div className="flex justify-between items-center mb-3 rounded-t-lg p-2 bg-[#5678e9]">
                      <h2 className="text-lg font-semibold text-white">{item.title}</h2>
                      <div className="relative">
                        <button
                          onClick={() => toggleDropdown(index)}
                          className="text-blue-500  bg-white   rounded-md  pb-1 focus:outline-none"
                        >
                          <BsThreeDotsVertical className="h-5 w-5 mt-1" />
                        </button>
                        {dropdownOpenIndex === index && (
                          <div className="absolute right-0 mt-2 w-32 bg-white rounded-md shadow-lg z-10">
                            <ul className="py-1 text-gray-700">
                              <li
                                className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                                onClick={editsowcreate_facility}
                              >
                                Edit
                              </li>
                              {editcreate_facility&&(
                                <Editcreate_facility_Modal
                                seteditcreate_facility={editClosecreate_facility}
                                />
                              )}
                              <li
                                className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                                onClick={() => alert(`Deleting ${item.title}`)}
                              >
                                Delete
                              </li>
                            </ul>
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="flex flex-col gap-2 mb-4 p-2">
                      <div className="text-sm text-gray-500 flex items-center">
                        Upcoming Schedule Service Date
                        <span className="ml-1 text-base font-semibold text-gray-700">{item.date}</span>
                      </div>
                      <div className="text-sm text-gray-500">
                        Description
                        <p className="text-black text-sm">{item.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Facility_Management
