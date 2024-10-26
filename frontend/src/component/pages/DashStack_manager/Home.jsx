import React, { useState } from 'react'
import Sidenav from '../../layout/Sidenav'

const Home = () => {
    let [data,setdata] = useState(200);
    let [getdata,setget] = useState(200);
    let [oppocard,setoppocard] = useState(true);

    function openNav () {
        setdata(200);
        setget(200);
        setoppocard(true);
    }
    function closeNav () {
        setdata(200);
        setget(200);
        setoppocard(false);
    }
  return (
    <div>
      <Sidenav cleseNav={openNav} data={data}/>
    </div>
  )
}

export default Home
