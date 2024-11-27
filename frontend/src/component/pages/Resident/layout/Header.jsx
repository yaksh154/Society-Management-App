import React from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from 'react-router-dom';
import OpneNotificationModal from '../layout/OpneNotification';


const Header = (props) => {
  return (
    <div>
      <header className="flex justify-between p-4 bg-white items-center">
        <div className='flex'>
          <span className='flex items-center mr-5' style={{ fontSize: 30, cursor: "pointer" }} onClick={props.openNav}>
            <GiHamburgerMenu />
          </span>
          <input type="text" placeholder="Search Here" className="w-full max-w-md px-4 py-2 border rounded-lg" />
        </div>
        <div className="flex items-center space-x-4">

          <OpneNotificationModal />
          <div className="flex items-center space-x-4" >
            <div className="Profie-img"><img src="../../../../../../public/images/Profile.png" alt="Profile" className="w-8 h-8 rounded-full" /> </div>
            <div className="profile-text">  <p className="font-medium">Arlene McCoy</p>
              <p className='text-gray-400'>Resident</p></div>
          </div>
        </div>
      </header>
    </div>
  )
}

export default Header
