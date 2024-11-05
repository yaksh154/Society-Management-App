
import React, { useState } from 'react';
import Sidebar from '../../../layout/Sidebar';
import Header from '../../../layout/Header';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { FaRupeeSign } from 'react-icons/fa';

const Otherincome = () => {
  let [data, setdata] = useState(250);
  let [getdata, setget] = useState(250);
  const [dropdownOpenIndex, setDropdownOpenIndex] = useState(null); // State to track dropdown

  function openNav() {
    setdata(250);
    setget(250);
  }
  function closeNav() {
    setdata(0);
    setget(0);
  }

  const toggleDropdown = (index) => {
    setDropdownOpenIndex(dropdownOpenIndex === index ? null : index);
  };

  const incomeData = [
    {
      title: 'Ganesh Chaturthi',
      amountPerMember: 1500,
      totalMember: 12,
      date: '01/07/2024',
      dueDate: '10/07/2024',
      description: 'The celebration of Ganesh Chaturthi involves the installation of clay idols of Ganesha in.',
    },
    {
      title: 'Navratri',
      amountPerMember: 1500,
      totalMember: 12,
      date: '01/07/2024',
      dueDate: '10/07/2024',
      description: 'The celebration of Navratri involves the installation of clay idols of Durga in Resident.',
    },
    {
      title: 'Diwali',
      amountPerMember: 1500,
      totalMember: 12,
      date: '01/07/2024',
      dueDate: '10/07/2024',
      description: 'The celebration of Diwali involves the installation of clay idols of Ganesha in.',
    },
    {
      title: 'Holi',
      amountPerMember: 1500,
      totalMember: 12,
      date: '01/07/2024',
      dueDate: '10/07/2024',
      description: 'The celebration of Holi involves the installation of clay idols of Ganesha in.',
    },
  ];

  return (
    <div>
      <Sidebar closeNav={closeNav} data={data} />
      <div id="main" className="max-[425px]:ml-0" style={{ marginLeft: getdata }}>
        <div className="open_he">
          <Header openNav={openNav} />
        </div>

        <div className="p-6 bg-gray-100 min-h-screen">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-semibold">Other Income</h1>
            <button className="bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600">
              Create Other Income
            </button>
          </div>
          <div className="grid gap-4 grid-cols-1 md:grid-cols-1 lg:grid-cols-4">
            {incomeData.map((item, index) => (
              <div key={index} className="bg-white shadow-md rounded-md relative">
                <div className="flex justify-between items-center mb-3 rounded-t-lg p-2 bg-blue-600">
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
                            onClick={() => alert(`Editing ${item.title}`)}
                          >
                            Edit
                          </li>
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
                    Amount Per Member:
                    <span className="ml-2 flex items-center text-lg font-semibold text-blue-500 bg-blue-100 px-2 py-1 rounded-md">
                      <FaRupeeSign className="mr-1" />{item.amountPerMember}
                    </span>
                  </div>
                  <div className="text-sm text-gray-500">
                    Total Member:
                    <span className="ml-2 text-base font-semibold text-gray-700">{item.totalMember}</span>
                  </div>
                  <div className="text-sm text-gray-500">
                    Date:
                    <span className="ml-2 text-base font-semibold text-gray-700">{item.date}</span>
                  </div>
                  <div className="text-sm text-gray-500">
                    Due Date:
                    <span className="ml-2 text-base font-semibold text-gray-700">{item.dueDate}</span>
                  </div>
                  <p className="text-gray-500 text-sm font-bold">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Otherincome;
