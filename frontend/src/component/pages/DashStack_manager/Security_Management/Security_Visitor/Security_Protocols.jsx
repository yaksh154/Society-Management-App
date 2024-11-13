import React, { useEffect, useState } from 'react'
import Sidebar from '../../../../layout/Sidebar';
import Header from '../../../../layout/Header';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';
import { GrFormView } from 'react-icons/gr';
import axios from 'axios';
import ViewProtocolsModal from '../../../../Modals/ViewProtocolsModal';
import { Get_Security_Protocols } from '../../../../services/Api/api';
import DeleteProtocolsModal from '../../../../Modals/DeleteProtocolsModal';

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

    const [Security,setSecurity]=useState([])
    
    useEffect(()=>{
        Fdata()
    },[])

    const Fdata = () =>{
        Get_Security_Protocols(setSecurity)
    }

    const [ViewProtocols,setViewProtocols]=useState(false)
    const [ViewId,setViewId]=useState(null)
    const [DeleteProtocols,setDeleteProtocols]=useState(false)
    const [DeleteId,setDeleteId]=useState(null)

    const OpneViewProtocols = (_id)=>{
        setViewProtocols(true)
        setViewId(_id)
    }
    const CloseViewProtocols = ()=>{
        setViewProtocols(false)
    }
    const OpneDeleteProtocols = (_id)=>{
        setDeleteProtocols(true)
        setDeleteId(_id)
    }
    const CloseDeleteProtocols = ()=>{
        setDeleteProtocols(false)
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
                                <h1 className='font-semibold md:text-2xl text-md'>Security Protocols</h1>
                                <button className="px-4 py-2 bg-gradient-to-r from-orange-500 to-yellow-500 text-white rounded-lg font-semibold shadow-lg hover:from-orange-600 hover:to-yellow-600 transition duration-200">
                                    Create Protocol
                                </button>
                            </div>
                            <div className="overflow-auto h-svh">
                                <table className="min-w-full bg-[#eef1fd] rounded-lg">
                                    <thead>
                                        <tr>
                                            <th className="px-6 py-3 border-b font-medium ">
                                                Title
                                            </th>
                                            <th className="px-6 py-3 border-b font-medium ">
                                                Description
                                            </th>
                                            <th className="px-6 py-3 border-b font-medium ">
                                                Date
                                            </th>
                                            <th className="px-6 py-3 border-b font-medium ">
                                                Time
                                            </th>
                                            <th className="px-6 py-3 border-b font-medium ">
                                                Action
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {Security.map((e, index) => {
                                            return (
                                                <tr key={index} className="border-b bg-white hover:bg-gray-50 font-medium md:font-semibold overflow-x-scroll">
                                                    
                                                    <td className="px-2 md:px-4 py-2 md:py-3 text-xs md:text-sm text-gray-700 truncate">{e.Title}</td>
                                                    <td className="px-2 md:px-4 py-2 md:py-3 text-xs md:text-sm text-gray-700 truncate">{e.Description}</td>
                                                    <td className="px-2 md:px-4 py-2 md:py-3 text-xs md:text-sm text-gray-700 text-center truncate">{e.Date}</td>
                                                    <td className="px-1 md:px-2 py-1 md:py-3 text-xs md:text-sm text-gray-700 text-center truncate"><samp className='rounded-full px-2 py-1 bg-[#f6f8fb]'>{e.Time}</samp></td>
                                                    <td className="px-2 md:px-4 py-2 md:py-3 text-xs md:text-sm text-gray-700 flex justify-center space-x-2 md:space-x-2">
                                                        <button className="text-green-500 p-1">
                                                            <FaEdit />
                                                        </button>

                                                        <button onClick={()=>OpneViewProtocols(e._id)} className="text-blue-500 text-2xl rounded">
                                                            <GrFormView />
                                                        </button>

                                                        <button onClick={()=>OpneDeleteProtocols(e._id)} className="text-red-500 p-1">
                                                            <FaTrashAlt />
                                                        </button>
                                                    </td>
                                                </tr>
                                            )
                                        })}
                                    </tbody>
                                </table>
                                {ViewProtocols && (<ViewProtocolsModal _id={ViewId} CloseViewProtocols={CloseViewProtocols}/>)}
                                {DeleteProtocols && (<DeleteProtocolsModal Fdata={Fdata} _id={DeleteId} CloseDeleteProtocols={CloseDeleteProtocols}/>)}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Security_Protocols
