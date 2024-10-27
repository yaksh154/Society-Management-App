import React from 'react'

const   Header = (props) => {
  return (
    <div>
      <header className="flex justify-between p-6 bg-white items-center">
      <span className='open' style={{fontSize:30, cursor:"pointer"}} onClick={props.openNav}>
            open
          </span>
        <input type="text" placeholder="Search Here" className="w-full max-w-md px-4 py-2 border rounded-lg" />
        <div className="flex items-center space-x-4">
          <span className="font-medium">Moni Roy</span>
          <img src="profile-image-url.jpg" alt="Profile" className="w-8 h-8 rounded-full" />
        </div>
      </header>
    </div>
  )
}

export default Header
