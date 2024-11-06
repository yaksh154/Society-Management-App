import React, { useState } from "react";
import Sidebar from "../../layout/Sidebar";
import Header from "../../layout/Header";
import OpenResidenceStatusModal from "../../Modals/OpenResidenceStatusModal";

const Resident_Management = () => {
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
            <div className="p-8">
              <div className="bg-white shadow-md rounded-lg p-6">
                <div className="flex justify-between items-center mb-4">
                  <h1 className="font-semibold md:text-2xl text-md">
                    Resident Tenant and Owner Details
                  </h1>
                  <button
                    onClick={OpenResidenceStatus}
                    className="bg-orange-500 text-white px-4 py-2 rounded-lg md:text-md text-sm"
                  >
                    Add New Resident details
                  </button>
                  {showResidenceStatus && (
                    <OpenResidenceStatusModal
                      setShowResidenceStatus={CloseResidenceStatus}
                    />
                  )}
                </div>
                <div className="overflow-x-auto">
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
                            className={`px-2 py-1 rounded-lg text-sm ${
                              row.status === "Occupied"
                                ? "bg-green-100 text-green-600"
                                : "bg-purple-100 text-purple-600"
                            }`}
                          >
                            {row.status}
                          </span>
                        </td>
                        <td className="px-6 py-4 border-b">
                          <span
                            className={`px-2 py-1 rounded-lg text-sm ${
                              row.resident === "Tenant"
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
                          <button className="bg-green-500 text-white px-3 py-1 rounded-full mr-2">
                            ✓
                          </button>
                          <button className="bg-blue-500 text-white px-3 py-1 rounded-full">
                            🔍
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
