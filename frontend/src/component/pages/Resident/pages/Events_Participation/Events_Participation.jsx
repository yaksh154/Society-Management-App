import React, { useEffect, useState } from "react";
import Sidebar from "../../layout/Sidebar";
import Header from "../../layout/Header";
import FaUser from "../../../../../../public/images/Profile.png"; // Corrected image import
import Activity from "./Activity";
import { GetEventData } from "../../Api/api"; // Ensure API is properly defined

const Events_Participation = () => {
  const [data, setData] = useState(280);
  const [getData, setGet] = useState(280);
  const [activeTab, setActiveTab] = useState("Events");
  const [EventData, setEventData] = useState([]); // Initialize as an empty array

  // Open and Close navigation functions
  const openNav = () => {
    setData(280);
    setGet(280);
  };

  const closeNav = () => {
    setData(0);
    setGet(0);
  };

  // Fetch Event Data on component mount
  useEffect(() => {
    Fdata();
  }, []);

  const Fdata = async () => {
    try {
      await GetEventData(setEventData);
      // console.log("Fetched event data:", EventData); // Debug log
    } catch (error) {
      console.error("Error fetching event data:", error);
    }
  };

  return (
    <div className="bg-[#f0f5fb] min-h-screen">
      <Sidebar closeNav={closeNav} data={data} />
      <div
        id="main"
        className="max-[425px]:ml-0 transition-all"
        style={{ marginLeft: getData }}
      >
        <div className="open_he">
          <Header openNav={openNav} />
        </div>
        <div className="p-6 bg-gray-100">
          <div className="flex flex-wrap">
            <button
              className={`py-2 px-8 font-semibold text-center rounded-t-lg border-b-2 border-b-orange-500 ${
                activeTab === "Events"? "bg-gradient-to-r from-orange-600 to-yellow-500 text-white"
                  : "bg-white text-gray-700"
                }`}
              onClick={() => setActiveTab("Events")}
            >
              Events Participate
            </button>
            <button
              className={`py-2 px-8 font-semibold text-center rounded-t-lg border-b-2 border-b-orange-500 ${activeTab === "Activity"
                  ? "bg-gradient-to-r from-orange-600 to-yellow-500 text-white"
                  : "bg-white text-gray-700"
                }`}
              onClick={() => setActiveTab("Activity")}
            >
              Activity Participate
            </button>
          </div>
          
          {activeTab === "Events" && (
          <div className="overflow-x-auto bg-white p-4 rounded-xl shadow-lg">
            <h2 className="text-2xl font-bold mb-4">Events Participation</h2>
            <table className="w-full table-auto border-collapse">
              <thead className="bg-blue-100 text-gray-700">
                <tr>
                  <th className="px-4 py-2 text-left">Participator Name</th>
                  <th className="px-4 py-2 text-left">Description</th>
                  <th className="px-4 py-2 text-left">Event Time</th>
                  <th className="px-4 py-2 text-left">Event Date</th>
                  <th className="px-4 py-2 text-left">Event Name</th>
                </tr>
              </thead>
              <tbody>
                {data_lines.map((item, index) => (
                  <tr key={index} className="border-b">
                    <td className="px-4 py-3 flex items-center space-x-2">
                      <img
                        src={FaUser}
                        alt="Profile"
                        className="w-8 h-8 rounded-full border border-gray-400"
                      />
                      <span>{item.ParticipatorName}</span>
                    </td>
                    <td className="px-4 py-3">{item.Description}</td>
                    <td className="px-4 py-3">{item.EventTime}</td>
                    <td className="px-4 py-3">{item.EventDate}</td>
                    <td className="px-4 py-3">{item.EventName}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
           )} 
           {activeTab === "Activity" && (
     
     <Activity/>
     )}
        </div>
      </div>
    </div>
  );
};

export default Events_Participation;
