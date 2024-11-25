import { Link } from "react-router-dom";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import {  MdSecurity } from "react-icons/md";
import { RiCommunityFill } from "react-icons/ri";
import { BiSolidUserDetail } from "react-icons/bi";
import { BsFillBoxSeamFill } from "react-icons/bs";
import { FaCcAmazonPay } from "react-icons/fa";
import { IoLogOut } from "react-icons/io5";

export default function Sidenav({ closeNav, data }) {
  const { pathname } = useLocation();

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const [isComplaintTrackingDropdown, setIsComplaintTrackingDropdown] = useState(false);

  const toggleComplaintTrackingDropdown = () => {
    setIsComplaintTrackingDropdown(!isComplaintTrackingDropdown);
  };

  return (
    <div id="mySidenav" style={{ width: data, display: data === 0, transition: 'width 0.3s' }} className="fixed overflow-y-auto top-0 left-0 h-full z-10 transition-all duration-500 bg-white text-white max-[425px]:fixed">
      <div className="flex flex-col justify-between h-screen">
        <div>
          <div className="flex justify-center my-4">
            <h1 className="text-4xl font-bold text-orange-600 mt-10 mb-5">Dash<span className="text-black">Stack</span></h1>
          </div>

          <button onClick={closeNav} className="absolute text-black top-0 right-6 text-3xl">
            ×
          </button>

          <Link
            onClick={toggleDropdown}
            aria-current={pathname.startsWith("/resident/community") ? "page" : undefined}
            className={`text-nowrap relative p-3 ms-4 m-2 rounded-lg text-lg transition-colors duration-300 flex items-center bg-gradient-to-r  text-white from-orange-600 to-yellow-500   ${pathname.startsWith("/resident/community")
              ? "bg-gradient-to-r from-orange-600 to-yellow-500 text-white font-semibold"
              : "hover:bg-gray-100 text-black"
              }`}
          >
            {/* Active Indicator */}
            {pathname.startsWith("/Security") && (
              <div className="absolute -left-4 top-0 bottom-0 w-2 bg-orange-600 rounded-r-lg"></div>
            )}
            <MdSecurity  className="inline mr-2" />
            Security
          </Link>

          {/* Dropdown Menu */}
          {isDropdownOpen && (
            <div
              className={`mt-2 w-full bg-white rounded-lg overflow-hidden transition-all duration-500 ${isDropdownOpen ? "max-h-screen" : "max-h-0"
                }`}
            >
              <ul className="w-full">
                <li className="ml-6">
                  <Link
                    to="/Security/visitor"
                    className={`block px-4 py-2 hover:bg-gray-100 text-black border-l-4 ${pathname.startsWith("/Security/visitor") ? "border-black font-semibold" : ""}`}
                  >
                  Visitor Tracking
                  </Link>
                </li>
                <li className="ml-6">
                  <Link
                    to="/Security/Emergency"
                    className={`block px-4 py-2 hover:bg-gray-100 text-black border-l-4 ${pathname.startsWith("/Security/Emergency") ? "border-black font-semibold" : ""}`}
                  >
                    Emergency Management
                  </Link>
                </li>
                
              </ul>
            </div>
          )}
        </div>
        <div className="border-t">
          <Link to="/login"
            className={`text-nowrap relative p-3 ms-4 m-2 rounded-lg text-lg block transition-colors duration-300 flex text-black text-red-600 items-center ${pathname === "/login"
              ? "bg-gradient-to-r from-orange-600 to-yellow-500 text-white font-semibold"
              : "hover:bg-gray-100"
              }`}
          >
            {pathname.startsWith("/login") && (
              <div className="absolute -left-4 top-0 bottom-0 w-2 bg-orange-600 rounded-r-lg"></div>
            )}
            <IoLogOut className="inline text-red-600 mr-2" />
            Logout
          </Link>
        </div>
      </div>

    </div>
  );
}