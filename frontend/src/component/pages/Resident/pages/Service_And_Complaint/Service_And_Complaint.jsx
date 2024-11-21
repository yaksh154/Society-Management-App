import React, { useState } from 'react'
import Sidebar from '../../layout/Sidebar'
import Header from '../../layout/Header'
import Button from '../../layout/Button_gradient'
import ComplaintModal from './Modal/ComplaintModal';
import DeleteModal from '../../layout/DeleteModal';

const Service_And_Complaint = () => {
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

    const [Complaint, setComplaint] = useState(false)

    const closeComplaint = () => {
        setComplaint(false)
    }

    // Delete 

    const [Delete, setDelete] = useState(false)

    const OpneDelete = () =>{
        setDelete(true);
    }
    
    const closeDelete = () => {
        setDelete(false);
    }

    const DeleteClick = () =>{
        console.log("Delete data");
    }

    return (
        <div className='bg-[#f0f5fb] h-screen'>
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
                                <Button onClick={() => setComplaint(true)} Btn_Name="Get Pass" />
                                {Complaint && (<ComplaintModal close={closeComplaint} />)}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex-1 bg-[#f0f5fb]">
                    <div className="p-6">
                        <div className="bg-white shadow-md rounded-lg p-6">
                            <div className="flex justify-between items-center mb-6">
                                <h1 className='font-semibold md:text-2xl text-md'>Delete</h1>
                                <Button onClick={() => OpneDelete()} Btn_Name="Delete" />
                                {Delete && (<DeleteModal close={closeDelete} DeleteClick={DeleteClick} />)}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Service_And_Complaint
