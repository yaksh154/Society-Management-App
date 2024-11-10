import React, { useState } from 'react';
import Sidebar from '../../../../layout/Sidebar';
import Header from '../../../../layout/Header';

const Request_Tracking = () => {
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
  return (
    <div>
      <Sidebar closeNav={closeNav} data={data} />
      <div id='main' className='max-[425px]:ml-0' style={{ marginLeft: getdata }} >
        <div className="open_he">
          <Header openNav={openNav} />
        </div>
        <div className="flex-1 bg-[#f0f5fb]">
          <div className="p-6">
            <div className="bg-white shadow-md rounded-lg p-6 h-svh">
              <div className="flex justify-between items-center mb-6">
                <h1 className='font-semibold md:text-2xl text-md'>Request Tracking</h1>
                <button className="px-4 py-2 bg-gradient-to-r from-orange-500 to-yellow-500 text-white rounded-lg font-semibold shadow-lg hover:from-orange-600 hover:to-yellow-600 transition duration-200">
                  Request Tracking
                </button>
              </div>
              <div className="overflow-auto"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Request_Tracking
