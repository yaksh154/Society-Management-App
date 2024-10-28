import React from 'react'
import { Link } from 'react-router-dom'

const   Header = (props) => {
  return (
    <div>
      <header className="flex justify-between p-6 bg-white items-center">
      <span className='open' style={{fontSize:30, cursor:"pointer"}} onClick={props.openNav}>
            open
          </span>
        <input type="text" placeholder="Search Here" className="w-full max-w-md px-4 py-2 border rounded-lg" />
        <Link className="flex items-center space-x-4" to="/profile">
          <div className="Profie-img"><img src="../../../public/images/Admin.png" alt="Profile" className="w-8 h-8 rounded-full" /> </div>
         <div className="profile-text">  <p className="font-medium">Moni Roy</p>
          <p className='text-gray-400'>Admin</p></div>
        </Link>
      </header>
    </div>
  )
}

export default Header
