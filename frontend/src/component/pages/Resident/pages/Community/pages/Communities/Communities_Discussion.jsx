import React, { useState } from 'react'
import Sidebar from '../../../../layout/Sidebar'
import Header from '../../../../layout/Header'
import useSidbarTogal from '../../../../../../layout/useSidbarTogal';

const Communities_Discussion = () => {
    const [isOpen, setIsOpen] = useState(true);
    const [data, setdata] = useState(280);
    const [getdata, setget] = useState(280);
    
    const toggleNav = () => {
      setIsOpen((prevState) => !prevState);
    };

    useSidbarTogal({setdata, setget, isOpen})

    return (
        <div className='bg-[#f0f5fb] h-screen'>
            <Sidebar toggleNav={toggleNav} data={data} />
            <div id='main' className='max-[425px]:ml-0' style={{ marginLeft: getdata }} >
                <div className="open_he">
                    <Header toggleNav={toggleNav} />
                </div>
                <div className="">
                    Communities_Discussion
                </div>
            </div>
        </div>
    )
}

export default Communities_Discussion
