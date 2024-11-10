import React, { useState } from "react";
import Sidebar from "../../../layout/Sidebar";
import Header from "../../../layout/Header";
import OpenResidenceStatusModal from "../../../Modals/OpenResidenceStatusModal";
import { FaEdit } from "react-icons/fa";
import { GrFormView } from "react-icons/gr";

const Resident_Management = () => {
  let [data, setdata] = useState(280);
  let [getdata, setget] = useState(280);

  function openNav() {
    setdata(280);
    setget(280);
  }
  function closeNav() {
    setdata(0);
    setget(0);
  }

  const Sumdata = [
    {
      name: "Evelyn Harper",
      unit: "A 1001",
      status: "Occupied",
      resident: "Tenant",
      phone: "97587 85828",
      members: 1,
      vehicles: 2,
    },
    {
      name: "Evelyn Harper",
      unit: "A 1001",
      status: "Occupied",
      resident: "Tenant",
      phone: "97587 85828",
      members: 1,
      vehicles: 2,
    },
    {
      name: "Evelyn Harper",
      unit: "A 1001",
      status: "Occupied",
      resident: "Tenant",
      phone: "97587 85828",
      members: 1,
      vehicles: 2,
    },
    {
      name: "-",
      unit: "B 1002",
      status: "Vacate",
      resident: "--",
      phone: "--",
      members: "-",
      vehicles: "-",
    },
    {
      name: "-",
      unit: "B 1002",
      status: "Vacate",
      resident: "--",
      phone: "--",
      members: "-",
      vehicles: "-",
    },
    {
      name: "-",
      unit: "B 1002",
      status: "Vacate",
      resident: "--",
      phone: "--",
      members: "-",
      vehicles: "-",
    },
    {
      name: "Evelyn Harper",
      unit: "C 1003",
      status: "Occupied",
      resident: "Owner",
      phone: "97587 85828",
      members: 1,
      vehicles: 4,
    },
    {
      name: "Evelyn Harper",
      unit: "C 1003",
      status: "Occupied",
      resident: "Owner",
      phone: "97587 85828",
      members: 1,
      vehicles: 4,
    },
    {
      name: "Evelyn Harper",
      unit: "C 1003",
      status: "Occupied",
      resident: "Owner",
      phone: "97587 85828",
      members: 1,
      vehicles: 4,
    },
    {
      name: "Robert Fox",
      unit: "F 2002",
      status: "Occupied",
      resident: "Tenant",
      phone: "97587 85828",
      members: 3,
      vehicles: 2,
    },
    {
      name: "Robert Fox",
      unit: "F 2002",
      status: "Occupied",
      resident: "Tenant",
      phone: "97587 85828",
      members: 3,
      vehicles: 2,
    },
    {
      name: "Robert Fox",
      unit: "F 2002",
      status: "Occupied",
      resident: "Tenant",
      phone: "97587 85828",
      members: 3,
      vehicles: 2,
    },
  ];

  const [showResidenceStatus, setShowResidenceStatus] = useState(false);

  const OpenResidenceStatus = () => {
    setShowResidenceStatus(true);
  };
  const CloseResidenceStatus = () => {
    setShowResidenceStatus(false);
  };

  return (
    <div>
      <Sidebar closeNav={closeNav} data={data} />
      <div
        id="main"
        className="max-[425px]:ml-0"
        style={{ marginLeft: getdata }}
      >
        <div className="">
          <div className="open_he">
            <Header openNav={openNav} />
          </div>
          {/* Main Content */}
          <div className="flex-1 bg-[#f0f5fb]">
            <div className="p-6">
              <div className="bg-white shadow-md rounded-lg p-6">
                <div className="flex justify-between items-center mb-4">
                  <h1 className="font-semibold md:text-2xl text-md">
                    Resident Tenant and Owner Details
                  </h1>
                  <button
                    onClick={OpenResidenceStatus}
                    className="px-4 py-2 bg-gradient-to-r from-orange-500 to-yellow-500 text-white rounded-lg font-semibold shadow-lg hover:from-orange-600 hover:to-yellow-600 transition duration-200"
                  >
                    Add New Resident details
                  </button>
                  {showResidenceStatus && (
                    <OpenResidenceStatusModal
                      setShowResidenceStatus={CloseResidenceStatus}
                    />
                  )}
                </div>
                <div className="overflow-auto h-svh">
                  <table className="min-w-full bg-white border border-gray-200">
                    <thead>
                      <tr>
                        <th className="px-6 py-3 border-b font-medium text-gray-500">
                          Full Name
                        </th>
                        <th className="px-6 py-3 border-b font-medium text-gray-500">
                          Unit Number
                        </th>
                        <th className="px-6 py-3 border-b font-medium text-gray-500">
                          Unit Status
                        </th>
                        <th className="px-6 py-3 border-b font-medium text-gray-500">
                          Resident Status
                        </th>
                        <th className="px-6 py-3 border-b font-medium text-gray-500">
                          Phone Number
                        </th>
                        <th className="px-6 py-3 border-b font-medium text-gray-500">
                          Member
                        </th>
                        <th className="px-6 py-3 border-b font-medium text-gray-500">
                          Vehicle
                        </th>
                        <th className="px-6 py-3 border-b font-medium text-gray-500">
                          Action
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {Sumdata.map((row, index) => (
                        <tr key={index} className="text-center">
                          <td className="px-6 py-4 border-b">{row.name}</td>
                          <td className="px-6 py-4 border-b">{row.unit}</td>
                          <td className="px-6 py-4 border-b">
                            <span
                              className={`px-2 py-1 rounded-lg text-sm ${row.status === "Occupied"
                                  ? "bg-green-100 text-green-600"
                                  : "bg-purple-100 text-purple-600"
                                }`}
                            >
                              {row.status}
                            </span>
                          </td>
                          <td className="px-6 py-4 border-b">
                            <span
                              className={`px-2 py-1 rounded-lg text-sm ${row.resident === "Tenant"
                                  ? "bg-pink-100 text-pink-600"
                                  : row.resident === "Owner"
                                    ? "bg-blue-100 text-blue-600"
                                    : ""
                                }`}
                            >
                              {row.resident}
                            </span>
                          </td>
                          <td className="px-6 py-4 border-b">{row.phone}</td>
                          <td className="px-6 py-4 border-b">{row.members}</td>
                          <td className="px-6 py-4 border-b">{row.vehicles}</td>
                          <td className="px-6 py-4 border-b flex justify-center">
                            <button className="bg-[#f6f8fb] text-[#39973d] text-lg px-3 py-1 rounded-lg mr-2">
                              <FaEdit />
                            </button>
                            <button className="bg-[#f6f8fb] text-[#5678e9] text-3xl px-1 py-1 rounded-lg">
                              <GrFormView />
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resident_Management;
