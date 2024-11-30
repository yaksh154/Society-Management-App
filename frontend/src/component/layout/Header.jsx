import React, { useEffect, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";
import OpneNotificationModal from "../Modals/OpneNotificationModal";
import { Profile_img } from "../services/Api/api";

const Header = (props) => {
  const [FormData, setFormData] = useState('')

  useEffect(() => {
    Fdata();
  }, []);

  const Fdata = () => {
    Profile_img(setFormData);
  };

  return (
    <div>
      <header className="flex justify-between p-4 bg-white items-center">
        {/* Left Section */}
        <div className="flex">
          <span
            className="flex items-center mr-5"
            style={{ fontSize: 30, cursor: "pointer" }}
            onClick={props.openNav}
          >
            <GiHamburgerMenu />
          </span>
          <input
            type="text"
            placeholder="Search Here"
            className="w-full max-w-md px-4 py-2 border rounded-lg"
          />
        </div>

        {/* Right Section */}
        <div className="flex items-center space-x-4">
          <OpneNotificationModal />
          <Link className="flex items-center space-x-4" to="/profile">
            {FormData ? (
              <div className="flex items-center">
                <div className="Profie-img mr-3">
                  <img
                    src={FormData.image || "/images/user.png"}
                    alt="Profile"
                    className="w-8 h-8 rounded-full"
                  />
                </div>
                <div className="profile-text">
                  <p className="font-medium">{FormData.Firstname || "User"} {FormData.Lastname || ""}</p>
                  <p className="text-gray-400">{FormData.Rol || "Role"}</p>
                </div>
              </div>
            ) : (
              <p>Loading...</p>
            )}
          </Link>
        </div>
      </header>
    </div>
  );
};

export default Header;
