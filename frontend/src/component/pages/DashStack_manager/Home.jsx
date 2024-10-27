import React, { useState } from 'react'
import Sidebar from '../../layout/Sidebar';
import Header from '../../layout/Header';
import '../../../style/home.css'
import Home_totle_card from '../../layout/Home_totle_card';

const Home = () => {
  let [data, setdata] = useState(250);
  let [getdata, setget] = useState(250);

  function openNav() {
    setdata(250);
    setget(250);
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
        <main className="flex-1 space-y-6">
          {/* Header */}

          <div className="p-6 space-y-6">
            {/* Dashboard Cards */}
            <div className="grid grid-cols-4 gap-4">
              {/* Card 1 */}
              <Home_totle_card 
                total_title="Total Balance"
                total_price="2,22,520"
              />
              {/* Card 2 */}
              <div className="bg-white p-4 rounded-lg shadow">
                <h3 className="text-gray-600">Total Income</h3>
                <p className="text-2xl font-semibold">₹ 55,000</p>
              </div>
              {/* Card 3 */}
              <div className="bg-white p-4 rounded-lg shadow">
                <h3 className="text-gray-600">Total Expense</h3>
                <p className="text-2xl font-semibold">₹ 20,550</p>
              </div>
              {/* Card 4 */}
              <div className="bg-white p-4 rounded-lg shadow">
                <h3 className="text-gray-600">Total Unit</h3>
                <p className="text-2xl font-semibold">₹ 20,550</p>
              </div>
            </div>
            {/* Graph and Important Numbers */}
            <div className="grid grid-cols-3 gap-4">

              <div className="bg-white p-4 rounded-lg shadow col-span-2">
                <h3 className="text-lg font-semibold">Important Numbers</h3>
                <ul>
                  <li className="flex items-center justify-between mt-2">
                    <span>Home: +123 456789</span>
                    <button className="text-green-500">Call</button>
                    <button className="text-red-500">Delete</button>
                  </li>
                  {/* Repeat for other numbers */}
                </ul>
              </div>
            </div>
            {/* Complaint List and Upcoming Activity */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-lg shadow">
                <h3 className="text-lg font-semibold">Complaint List</h3>
                <table className="w-full mt-2 text-sm">
                  <thead>
                    <tr className="text-left text-gray-500">
                      <th>Complainer Name</th>
                      <th>Complaint Name</th>
                      <th>Date</th>
                      <th>Priority</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Evelyn Harper</td>
                      <td>Unethical Behavior</td>
                      <td>01/02/2024</td>
                      <td className="text-yellow-500">Medium</td>
                      <td className="text-blue-500">Open</td>
                    </tr>
                    {/* Repeat for other complaints */}
                  </tbody>
                </table>
              </div>
              <div className="bg-white p-4 rounded-lg shadow">
                <h3 className="text-lg font-semibold">Upcoming Activity</h3>
                <ul className="mt-2 space-y-2">
                  <li className="flex justify-between">
                    <span>Society Meeting</span>
                    <span className="text-gray-500">24-08-2024</span>
                  </li>
                  {/* Repeat for other activities */}
                </ul>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

export default Home
