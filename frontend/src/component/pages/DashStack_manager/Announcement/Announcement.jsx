import React, { useEffect, useState } from 'react'
import Sidebar from '../../../layout/Sidebar'
import Header from '../../../layout/Header'
import { BsThreeDotsVertical } from 'react-icons/bs';
import EditAnnouncementModal from "../../../Modals/EditAnnouncementModal.jsx"
import AddAnnouncementModal from '../../../Modals/AddAnnouncementModal.jsx';
import { GetAnnouncement } from '../../../services/Api/api.jsx';
import DeleteAnnouncementModal from '../../../Modals/DeleteAnnouncementModal.jsx';

const Announcement = () => {
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

  const [getAnnouncement,setgetAnnouncement] = useState([]);

  useEffect(()=>{
    Fdata()
  },[])

  const Fdata = () =>{
    GetAnnouncement(setgetAnnouncement)
  }

  const [AddAnnouncement, setAddAnnouncement] = useState(false)

  const ClaseAddAnnouncement = () => {
    setAddAnnouncement(false)
  }

  const [EditAnnouncement, setEditAnnouncement] = useState(false)
  const [EditAnnouncementId, setEditAnnouncementId] = useState([])
  const [DeleteAnnouncement, setDeleteAnnouncement] = useState(false)
  const [DeleteAnnouncementId, setDeleteAnnouncementId] = useState([])

  const OpneEditAnnouncement = (_id) => {
    setEditAnnouncement(true)
    setEditAnnouncementId(_id)
  }

  const ClaseEditAnnouncement = () => {
    setEditAnnouncement(false)
  }

  const OpneDeleteAnnouncement = (_id) =>{
    setDeleteAnnouncement(true)
    setDeleteAnnouncementId(_id)
  }
  const ClaseDeleteAnnouncement = (_id) =>{
    setDeleteAnnouncement(false)
    setDeleteAnnouncementId(_id)
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
                <h1 className='font-semibold md:text-2xl text-md'>Announcement</h1>
                <button onClick={() => setAddAnnouncement(true)} className="px-4 py-2 bg-gradient-to-r from-orange-500 to-yellow-500 text-white rounded-lg font-semibold shadow-lg hover:from-orange-600 hover:to-yellow-600 transition duration-200">
                  Create Announcement
                </button>
                {AddAnnouncement && (
                  <AddAnnouncementModal Fdata={Fdata} ClaseAddAnnouncement={ClaseAddAnnouncement}/>
                )}
              </div>
              <div className="grid gap-4 grid-cols-1 md:grid-cols-3 sm:grid-cols-2 lg:grid-cols-4">
                {getAnnouncement.map((e, index) => (
                  <div key={index} className="bg-white shadow-md rounded-md relative">
                    <div className="flex justify-between items-center mb-3 rounded-t-lg p-2 bg-[#5678e9]">
                      <h2 className="text-lg font-semibold text-white">{e.Announcement_Title}</h2>
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
                              <li onClick={() => OpneEditAnnouncement(e._id)} className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                                Edit
                              </li>
                              <li onClick={() => OpneDeleteAnnouncement(e._id)} className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
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
                        <span className="ml-1 text-base font-semibold text-gray-700">{e.AnnouncementDate}</span>
                      </div>
                      <div className="text-sm text-gray-500">
                        Description
                        <p className="text-black text-sm">{e.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
                {EditAnnouncement && (
                  <EditAnnouncementModal _id={EditAnnouncementId} ClaseEditAnnouncement={ClaseEditAnnouncement} />
                )}
                {DeleteAnnouncement && (
                  <DeleteAnnouncementModal Fdata={Fdata} _id={DeleteAnnouncementId} ClaseDeleteAnnouncement={ClaseDeleteAnnouncement}/>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Announcement
