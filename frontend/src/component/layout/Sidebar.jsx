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
  const [popup, setPopup] = useState(false);
  const openpopup = () => {
    setPopup(true);
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
        className={`p-4 my-2 text-lg block transition-colors duration-300 flex text-black items-center ${pathname === "/" ? "bg-gradient-to-r from-orange-600 to-yellow-500 text-white font-semibold" : "hover:bg-gray-100"
          }`}
      >
        <MdDashboard className="inline mr-2" />
        Dashboard
      </Link>

      <Link
        to="/resident_management"
        className={`p-4 text-lg block transition-colors duration-300 flex text-black items-center ${pathname === "/resident_management"
            ? "bg-gradient-to-r from-orange-600 to-yellow-500 text-white font-semibold"
            : "hover:bg-gray-100"
          }`}
      >
        <BsFillRecordBtnFill className="inline mr-2" />
        Resident Management
      </Link>

      <Link
        to="/financial_management"
        className={`p-4 text-lg block transition-colors duration-300 flex text-black items-center ${pathname === "/financial_management"
            ? "bg-gradient-to-r from-orange-600 to-yellow-500 text-white font-semibold"
            : "hover:bg-gray-100"
          }`}
      >
        <RiMoneyDollarBoxFill className="inline mr-2" />
        Financial Management
      </Link>

      <Link
        to="/facility_management"
        className={`p-4 text-lg block transition-colors duration-300 flex text-black items-center ${pathname === "/facility_management" ? "bg-gradient-to-r from-orange-600 to-yellow-500 text-white font-semibold" : "hover:bg-gray-100"
          }`}
      >
        <FaCity className="inline mr-2" />
        Facility Management
      </Link>

      <Link
        to="/complaint_tracking"
        className={`p-4 text-lg block transition-colors duration-300 flex text-black items-center ${pathname === "/complaint_tracking"
            ? "bg-gradient-to-r from-orange-600 to-yellow-500 text-white font-semibold"
            : "hover:bg-gray-100"
          }`}
      >
        <MdAttachEmail className="inline mr-2" />
        Complaint Tracking
      </Link>

      <Link
        to="/security_management"
        className={`p-4 text-lg block transition-colors duration-300 flex text-black items-center ${pathname === "/security_management"
            ? "bg-gradient-to-r from-orange-600 to-yellow-500 text-white font-semibold"
            : "hover:bg-gray-100"
          }`}
      >
        <MdSecurity className="inline mr-2" />
        Security Management
      </Link>

      <Link
        to="/security_guard"
        className={`p-4 text-lg block transition-colors duration-300 flex text-black items-center ${pathname === "/security_guard"
            ? "bg-gradient-to-r from-orange-600 to-yellow-500 text-white font-semibold"
            : "hover:bg-gray-100"
          }`}
      >
        <IoIosContact className="inline mr-2" />
        Security Guard
      </Link>

      <Link
        to="/announcement"
        className={`p-4 text-lg block transition-colors duration-300 flex text-black items-center ${pathname === "/announcement"
            ? "bg-gradient-to-r from-orange-600 to-yellow-500 text-white font-semibold"
            : "hover:bg-gray-100"
          }`}
      >
        <GrAnnounce className="inline mr-2" />
        Announcement
      </Link>

    </div>
  );
}
