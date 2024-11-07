import React, { useState } from 'react'
import Sidebar from '../../layout/Sidebar'
import Header from '../../layout/Header'

const Security_Guard = () => {
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
        {/* Main Content */}
        <h1>Security_Guard</h1>
      </div>
    </div>
  )
}

export default Security_Guard
