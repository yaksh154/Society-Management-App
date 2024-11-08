import { Link } from "react-router-dom";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { MdAttachEmail, MdDashboard, MdSecurity } from "react-icons/md";
import { GrAnnounce } from "react-icons/gr";
import { RiMoneyDollarBoxFill } from "react-icons/ri";
import { IoIosContact } from "react-icons/io";
import { FaCity } from "react-icons/fa";
import { BsFillRecordBtnFill } from "react-icons/bs";

export default function Sidenav({ closeNav, data }) {
  const { pathname } = useLocation();

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div
      id="mySidenav"
      style={{
        width: data,
        display: data === 0 ? 'none' : 'block', // Conditionally set display
        transition: 'width 0.3s', // Smooth transition effect
      }}
      className="fixed overflow-y-auto top-0 left-0 h-full z-10 transition-all duration-500 bg-white text-white max-[425px]:fixed"
    >
      <div className="flex justify-center my-4">
        <h1 className="text-4xl font-bold text-orange-600 mt-10 mb-5">Dash<span className="text-black">Stack</span></h1>

      </div>

      <button onClick={closeNav} className="absolute text-black top-0 right-6 text-3xl">
        ×
      </button>

      <Link
        to="/"
        className={`relative p-3 ms-4 m-2 rounded-lg text-lg block transition-colors duration-300 flex text-black items-center ${pathname === "/" ? "bg-gradient-to-r from-orange-600 to-yellow-500 text-white font-semibold" : "hover:bg-gray-100"
          }`}
      >
        {pathname === "/" && (
          <div className="absolute -left-4 top-0 bottom-0 w-2 bg-orange-600 rounded-r-lg"></div>
        )}
        <MdDashboard className="inline mr-2" />
        Dashboard
      </Link>

      <Link
        to="/resident_management"
        className={`relative p-3 ms-4 m-2 rounded-lg text-lg block transition-colors duration-300 text-black flex items-center ${
          pathname.startsWith("/resident_management")
            ? "bg-gradient-to-r from-orange-600 to-yellow-500 text-white font-semibold"
            : "hover:bg-gray-200"
        }`}
      >
        {pathname.startsWith("/resident_management") && (
          <div className="absolute -left-4 top-0 bottom-0 w-2 bg-orange-600 rounded-r-lg"></div>
        )}
        <BsFillRecordBtnFill className="inline mr-2" />
        Resident Management
      </Link>

      <Link
        onClick={toggleDropdown}
        aria-current={pathname.startsWith("/financial_management") ? "page" : undefined}
        className={`relative p-3 ms-4 m-2 rounded-lg text-lg transition-colors duration-300 flex items-center ${
           pathname.startsWith("/financial_management")
            ? "bg-gradient-to-r from-orange-600 to-yellow-500 text-white font-semibold"
            : "hover:bg-gray-100 text-black"
        }`}
      >
        {/* Active Indicator */}
        {pathname.startsWith("/financial_management") && (
          <div className="absolute -left-4 top-0 bottom-0 w-2 bg-orange-600 rounded-r-lg"></div>
        )}
        <RiMoneyDollarBoxFill className="inline mr-2" />
        Financial Management
      </Link>

      {/* Dropdown Menu */}
      {isDropdownOpen && (
        <div
          className={`mt-2 w-full bg-white rounded-lg overflow-hidden transition-all duration-500 ${
            isDropdownOpen ? "max-h-screen" : "max-h-0"
          }`}
        >
          <ul className="w-full">
            <li className="ml-6">
              <Link
                to="/financial_management"
                className={`block px-4 py-2 hover:bg-gray-100 text-black border-l-4 ${pathname.startsWith("/financial_management") ? "border-black font-semibold":""}`}
              >
                Income
              </Link>
            </li>
            <li className="ml-6">
              <Link
                to="/financial_management/Expanse"
                className="block px-4 py-2 hover:bg-gray-100 text-black border-l-4"
              >
                Expanse
              </Link>
            </li>
            <li className="ml-6">
              <Link
                to="/financial_management/note"
                className="block px-4 py-2 hover:bg-gray-100 text-black border-l-4"
              >
                Note
              </Link>
            </li>
          </ul>
        </div>
      )}

      <Link
        to="/facility_management"
        className={`relative p-3 ms-4 m-2 rounded-lg text-lg block transition-colors duration-300 flex text-black items-center ${pathname === "/facility_management" ? "bg-gradient-to-r from-orange-600 to-yellow-500 text-white font-semibold" : "hover:bg-gray-100"
          }`}
      >
        {pathname.startsWith("/facility_management") && (
          <div className="absolute -left-4 top-0 bottom-0 w-2 bg-orange-600 rounded-r-lg"></div>
        )}
        <FaCity className="inline mr-2" />
        Facility Management
      </Link>

      <Link
        to="/complaint_tracking"
        className={`relative p-3 ms-4 m-2 rounded-lg text-lg block transition-colors duration-300 flex text-black items-center ${pathname === "/complaint_tracking"
            ? "bg-gradient-to-r from-orange-600 to-yellow-500 text-white font-semibold"
            : "hover:bg-gray-100"
          }`}
      >
        {pathname.startsWith("/complaint_tracking") && (
          <div className="absolute -left-4 top-0 bottom-0 w-2 bg-orange-600 rounded-r-lg"></div>
        )}
        <MdAttachEmail className="inline mr-2" />
        Complaint Tracking
      </Link>

      <Link
        to="/security_management"
        className={`relative p-3 ms-4 m-2 rounded-lg text-lg block transition-colors duration-300 flex text-black items-center ${pathname === "/security_management"
            ? "bg-gradient-to-r from-orange-600 to-yellow-500 text-white font-semibold"
            : "hover:bg-gray-100"
          }`}
      >
        {pathname.startsWith("/security_management") && (
          <div className="absolute -left-4 top-0 bottom-0 w-2 bg-orange-600 rounded-r-lg"></div>
        )}
        <MdSecurity className="inline mr-2" />
        Security Management
      </Link>

      <Link
        to="/security_guard"
        className={`relative p-3 ms-4 m-2 rounded-lg text-lg block transition-colors duration-300 flex text-black items-center ${pathname === "/security_guard"
            ? "bg-gradient-to-r from-orange-600 to-yellow-500 text-white font-semibold"
            : "hover:bg-gray-100"
          }`}
      >
        {pathname.startsWith("/security_guard") && (
          <div className="absolute -left-4 top-0 bottom-0 w-2 bg-orange-600 rounded-r-lg"></div>
        )}
        <IoIosContact className="inline mr-2" />
        Security Guard
      </Link>

      <Link
        to="/announcement"
        className={`relative p-3 ms-4 m-2 rounded-lg text-lg block transition-colors duration-300 flex text-black items-center ${pathname === "/announcement"
            ? "bg-gradient-to-r from-orange-600 to-yellow-500 text-white font-semibold"
            : "hover:bg-gray-100"
          }`}
      >
        {pathname.startsWith("/announcement") && (
          <div className="absolute -left-4 top-0 bottom-0 w-2 bg-orange-600 rounded-r-lg"></div>
        )}
        <GrAnnounce className="inline mr-2" />
        Announcement
      </Link>

    </div>
  );
}
