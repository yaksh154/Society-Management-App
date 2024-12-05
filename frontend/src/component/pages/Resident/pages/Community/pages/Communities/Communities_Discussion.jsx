import React, { useState } from 'react';
import Sidebar from '../../../../layout/Sidebar';
import Header from '../../../../layout/Header';
import { FaUserCircle, FaCheck ,FaThumbsUp, FaRegEye, FaCommentAlt } from 'react-icons/fa';
import { RiCheckDoubleFill, RiCheckFill } from 'react-icons/ri';


import React, { useState } from 'react'
import Sidebar from '../../../../layout/Sidebar'
import Header from '../../../../layout/Header'


const Communities_Discussion = () => {
    let [data, setdata] = useState(280);
    let [getdata, setget] = useState(280);

    const [isOpen, setIsOpen] = useState(true);

    const toggleNav = () => {
        setIsOpen((prevState) => !prevState);
    };

    React.useEffect(() => {
        if (isOpen) {
            openNav();
        } else {
            closeNav();
        }
    }, [isOpen]);

    function openNav() {
        setdata(280);
        setget(280);
    }
  ];
  const chats = [
    { name: 'Michael John', message: 'Hi, John! How are you doing?', time: '10:27', status: 'read', online: true },
    { name: 'Jenny Wilson', message: 'Hello, Jenny', time: '7:00', status: 'unread', online: false },
    { name: 'Community', message: 'Typing...', time: '9:20', status: 'typing', online: true },
    { name: 'Esther Howard', message: 'Hello, Esther', time: '10:27', status: 'unread', online: true },
    { name: 'Cody Fisher', message: 'Thank you for your order!', time: '7:00', status: 'read', online: false },
  ];

  return (
    <div className="bg-[#f0f5fb] min-h-screen flex">
      <Sidebar closeNav={closeNav} data={data} />
      <div id="main" className="ml-[280px] md:ml-0 flex-grow" style={{ marginLeft: getdata }}>
        <div className="open_he">
          <Header openNav={openNav} />
        </div>

        <div className="bg-gray-100 p-10">
          <div className="flex flex-col md:flex-row max-w-full mx-auto bg-white shadow-lg rounded-lg h-[80vh]">

            {/* Scrollable Sidebar */}
            <div className="w-full md:w-1/4 p-4 border-b md:border-r md:border-b-0 overflow-y-auto h-full">
              <h2 className="text-xl font-semibold mb-4">Chat</h2>
              <div>
                {chats.map((chat, index) => (
                  <div
                    key={index}
                    className={`flex items-center p-3 mb-2 rounded-lg hover:bg-gray-200 cursor-pointer ${
                      chat.status === 'typing text-green-200' ? 'bg-white ' : ''
                    }`}
                  >
                    <FaUserCircle size={40} className="mr-3 text-gray-500" />
                    <div>
                      <p className="text-lg font-semibold flex items-center">
                        {chat.name}
                        <span
                          className={`ml-2 w-3 h-3 rounded-full ${
                            chat.online ? 'bg-green-500' : 'bg-gray-400'
                          }`}
                          title={chat.online ? 'Online' : 'Offline'}
                        />
                      </p>
                      <p className={`text-sm ${chat.status === 'unread' ? 'text-gray-700 font-bold' : 'text-gray-500'}`}>
                        {chat.message}
                      </p>
                    </div>
                    <div className="ml-auto text-right">
                      <p className="text-xs text-gray-400">{chat.time}</p>
                      {chat.status === 'read' && <RiCheckDoubleFill className="text-blue-500 inline-block" />}
                      {chat.status === 'unread' && <RiCheckFill  className="text-gray-500 inline-block" />}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Scrollable Chat Window */}
            <div className="w-full md:w-3/4 p-4 overflow-y-auto h-full ">
              <h2 className="text-xl font-semibold mb-2 ">Community</h2>
              <hr  className=' border-b-0 mb-2'/>

      <div className=" mx-auto bg-slate-100 shadow-lg rounded-lg p-5">
        {questions.map((q) => (
          <div
            key={q.id}
            className="border-b border-gray-300 p-4 flex items-start gap-4"
          >
            {/* Vote Section */}
            <div className="Vote">
            <div className="flex flex-col items-center mt-2">
              <span className="text-sm text-gray-600">{q.votes} Votes</span>
            </div>
            <div className="flex flex-col items-center mt-2">
              <span className="text-sm text-gray-600">{q.votes} Answers</span>
            </div> </div>

            {/* Content Section */}
            <div className="flex-1">
              <h3 className="text-lg font-semibold">{q.question}</h3>
              <p className="text-sm text-gray-600">{q.dummyText}</p>
              <div className="flex items-center space-x-4 text-gray-500 text-xs mt-2">
               
              </div>
            </div>
            <div className="flex items-center bg-white p-2 rounded-full">
                  <FaRegEye className="mr-1" /> {q.views} 
=======
    function closeNav() {
        setdata(0);
        setget(0);
    }
    return (
        <div className='bg-[#f0f5fb] h-screen'>
            <Sidebar toggleNav={toggleNav} data={data} />
            <div id='main' className='max-[425px]:ml-0' style={{ marginLeft: getdata }} >
                <div className="open_he">
                    <Header toggleNav={toggleNav} />
>>>>>>> ccc7a76117dc362bfa0cdedef7490a043cb9acac
                </div>
          </div>
        ))}
      </div>


              <div className="mt-4 flex items-center">
                <input
                  type="text"
                  placeholder="Type your message..."
                  className="w-full p-3 border rounded-l-lg focus:outline-none"
                />
                <button className="bg-blue-500 text-white px-4 py-3 rounded-r-lg w-24 md:w-auto">Send</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Communities_Discussion;
