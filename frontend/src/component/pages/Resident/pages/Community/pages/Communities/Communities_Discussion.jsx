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
