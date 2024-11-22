import React, { useEffect, useState } from 'react'
import Sidebar from '../../layout/Sidebar'
import Header from '../../layout/Header'
import Button from '../../layout/Button_gradient'
import Home_totle_card from '../../../../layout/Home_totle_card';
import { TiThMenu } from 'react-icons/ti';
import { MdOutlineAttachMoney } from 'react-icons/md';
import GetPassModal from './Modal/GetPassModal';
import TotalBalanceChart from '../../../../layout/TotalBalanceChart';
import { ImportantNumbersGet } from '../../../../services/Api/api';
import axios from 'axios';

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
    axios.get('http://localhost:3030/PendingMaintenances').then((res)=>{
      
    })
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
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-lg font-semibold">Pending Maintenances</h2>
                </div>
                <div className="space-y-4 overflow-y-auto max-h-80 px-2">

                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex-1 bg-[#f0f5fb]">
          <div className="p-6 pt-0">
            <div className="bg-white shadow-md rounded-lg p-6">
              <div className="flex justify-between items-center mb-6">
                <h1 className='font-semibold md:text-xl text-md'>Detail of the Per Person</h1>
                <Button onClick={() => setGetPass(true)} Btn_Name="Get Pass" />
                {GetPass && (<GetPassModal close={closeGetPass} />)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
