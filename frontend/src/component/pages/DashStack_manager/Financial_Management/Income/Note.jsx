import React, { useEffect, useState } from 'react'
import Sidebar from '../../../../layout/Sidebar';
import Header from '../../../../layout/Header';
import { FaEllipsisV } from 'react-icons/fa';
import Create_facility_model from '../../../../Modals/Create_facility_model';
import { BsThreeDotsVertical } from 'react-icons/bs';
import CreateNote from '../../../../Modals/CreateNote';
import EditNote from '../../../../Modals/EditNote';
import DeleteModal from '../../../../Modals/DeleteModal';
import { GetNotes } from '../../../../services/Api/api';

const Note = () => {
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
  //Add ..
  const [create, setcreate] = useState(false);

  const sowcreate = () => {
    setcreate(true);
  };

  const Closecreate = () => {
    setcreate(false);
  };

  // Edit ...
  const [editcreate, seteditcreate] = useState(false);

  const editsowcreate = () => {
    seteditcreate(true);
  };
  const editClosecreate = () => {
    seteditcreate(false);
  };

  //Delete...
  const [DeleteBox, setDeleteBox] = useState(false);


const DeleteOpen = () =>  {
    setDeleteBox(true);
  };
  const DeleteClose = () => {
    setDeleteBox(false);
  };
  const [dropdownOpenIndex, setDropdownOpenIndex] = useState(null);

  const toggleDropdown = (index) => {
    setDropdownOpenIndex(dropdownOpenIndex === index ? null : index);
  };
  const [Notes, setNotes] = useState([])

  useEffect(() => {
    Fdata()
  }, [0])

  const Fdata = () => {
    GetNotes(setNotes)
  }

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
                <h1 className='font-semibold md:text-2xl text-md'>Note</h1>
                <button onClick={sowcreate} className="px-4 py-2 bg-gradient-to-r from-orange-500 to-yellow-500 text-white rounded-lg font-semibold shadow-lg hover:from-orange-600 hover:to-yellow-600 transition duration-200">
                  Create Note
                </button>
                {create && (
                  <CreateNote
                  setcreate={Closecreate} 
                  />
                )}
              </div>
              <div className="grid gap-4 grid-cols-1 md:grid-cols-3 sm:grid-cols-2 lg:grid-cols-4">
                {Notes.map((item, index) => (
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
                                onClick={editsowcreate}
                              >
                                Edit
                              </li>
                              {editcreate &&(
                                <EditNote
                                seteditcreate={editClosecreate}
                                />
                              )}
                              <li 
                                className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                              onClick={DeleteOpen}
                              >
                                Delete
                              </li>    {DeleteBox &&(
                                < DeleteModal
                                setDeleteBox={DeleteClose}
                                />
                              )}
                              
                            </ul>
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="flex flex-col gap-2 mb-4 p-2">
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

export default Note