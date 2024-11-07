import React, { useState } from 'react'
import Sidebar from '../../layout/Sidebar'
import Header from '../../layout/Header'

const Complaint_Tracking = () => {
  let [data, setdata] = useState(260);
  let [getdata, setget] = useState(260);

  function openNav() {
    setdata(260);
    setget(260);
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
        {/* Main Content */}
        <h1>Complaint_Tracking</h1>

      </div>
    </div>
  )
}

export default Complaint_Tracking
