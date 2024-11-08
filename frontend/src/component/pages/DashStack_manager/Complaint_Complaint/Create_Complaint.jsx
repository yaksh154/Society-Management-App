import React, { useEffect, useState } from 'react'
import Sidebar from '../../../layout/Sidebar';
import Header from '../../../layout/Header';
import axios from 'axios';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';
import { GrFormView } from 'react-icons/gr';
import OpenEditComplintModel from '../../../Modals/OpenEditComplintModel';
import ViewComplintModel from '../../../Modals/ViewComplintModel';

const Create_Complaint = () => {
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

  useEffect(() => {
    getComplaintdata()
  }, [])

  const [getComplaint, setgetComplaint] = useState([]);
  const getComplaintdata = () => {
    axios.get('http://localhost:3030/user').then((res) => {
      setgetComplaint(res.data);
    })
  }

  const [EditComplint, setEditComplint] = useState(false);
  const [ViewComplint, setViewComplint] = useState(false);

  const closeEditComplint = () => {
    setEditComplint(false);
  }

  const closeViewComplint = () => {
    setViewComplint(false);
  }
  const OpneViewComplint = () => {
    setViewComplint(true)
  }

  return (
    <div>
      <Sidebar closeNav={closeNav} data={data} />
      <div id='main' className='max-[425px]:ml-0' style={{ marginLeft: getdata }} >
        <div className="open_he">
          <Header openNav={openNav} />
        </div>
        <div className="flex-1 bg-[#f0f5fb]">
          <div className="p-6">
            <div className="bg-white shadow-md rounded-lg p-6">
              <div className="flex justify-between items-center mb-6">
                <h1 className='font-semibold md:text-2xl text-md'>Create Complaint</h1>
                <button className="font-semibold bg-gradient-to-r from-orange-600 to-yellow-500 text-white px-4 py-2 rounded-md hover:bg-orange-600">
                  Create Complaint
                </button>
                {/* {create_facility && (
                <Create_facility_model
                  setClosecreate_facility={Closecreate_facility}
                />
              )} */}
              </div>
              <div className="overflow-auto h-svh">
                <table className="min-w-full bg-[#eef1fd] rounded-lg">
                  <thead>
                    <tr>
                      <th className="px-6 py-3 border-b font-medium ">
                        Complainer Name
                      </th>
                      <th className="px-6 py-3 border-b font-medium ">
                        Complaint Name
                      </th>
                      <th className="px-6 py-3 border-b font-medium ">
                        Description
                      </th>
                      <th className="px-6 py-3 border-b font-medium ">
                        Unit Number
                      </th>
                      <th className="px-6 py-3 border-b font-medium ">
                        Priority
                      </th>
                      <th className="px-6 py-3 border-b font-medium ">
                        Status
                      </th>
                      <th className="px-6 py-3 border-b font-medium ">
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {getComplaint.map((e, index) => {
                      return (
                        <tr key={index} className="border-b bg-white">
                          <td className="px-4 py-2 flex items-center space-x-2">
                            <img className="w-8 h-8 rounded-full" src="https://via.placeholder.com/40" alt="profile" />
                            <span>{e.Complainer_Name}</span>
                          </td>
                          <td className="px-4 py-2">{e.Complaint_Name}</td>
                          <td className="px-4 py-2">{e.Description}</td>
                          <td className="px-4 py-2 text-center">{e.Unit_Number}</td>
                          <td className="px-4 py-2 text-center">
                            <span className={`px-3 py-1 rounded-full text-md font-medium ${e.Priority === "High" ? "bg-[#e74c3c] text-white" :
                              e.Priority === "Medium" ? "bg-[#5678e9] text-white" :
                                e.Priority === "Low" ? "bg-[#39973d] text-white" : null
                              }`}>{e.Priority}</span>
                          </td>
                          <td className="px-4 py-2 text-center">
                            <span className={`px-3 py-1 rounded-full text-md font-medium ${e.Complain_Status === "Open" ? "bg-[#eef1fd] text-[#5678e9]" :
                              e.Complain_Status === "Pending" ? "bg-[#fff9e7] text-[#ffc313]" :
                                e.Complain_Status === "Solve" ? "bg-[#ebf5ec] text-[#39973d]" : null
                              }`}>{e.Complain_Status}</span>
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

                            <button className="text-blue-500 text-2xl rounded" onClick={() => OpneViewComplint()}>
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
        </div>
      </div>
    </div>
  )
}

export default Create_Complaint
