import React from 'react'
import { IoIosNotifications } from 'react-icons/io'
import { GiHamburgerMenu } from "react-icons/gi";

const Header = (props) => {
  return (
    <div>
      <header className="flex justify-between p-6 bg-white items-center">
        <div className='flex'>
          <span className='flex items-center mr-5' style={{ fontSize: 30, cursor: "pointer" }} onClick={props.openNav}>
            <GiHamburgerMenu />
          </span>
          <input type="text" placeholder="Search Here" className="w-full max-w-md px-4 py-2 border rounded-lg" />
        </div>
        <div className="flex items-center space-x-4">
          {/* <span className="font-medium">Moni Roy</span> */}
          <button className='border-2 border-[#d3d3d3] p-1 rounded-lg text-2xl hover:bg-[#d3d3d3]'><IoIosNotifications /></button>
          <div className="">
            <img src="profile-image-url.jpg" alt="Profile" className="w-8 h-8 rounded-full" />
            <div className="">
              <span>Moni Roy</span>
              <span>Admin</span>
            </div>
          </div>
        </div>
      </header>
    </div>
  )
}

export default Header
