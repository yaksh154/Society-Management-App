import React, { useEffect, useState } from 'react'
import FaUser from "../../../../../../public/images/Profile.png";
import { GetActivityData } from '../../Api/api';

const Activity = () => {
    
      const [activeTab, setActiveTab] = useState("Activity");
      const [ActivityData, setActivityData] = useState([]);

      useEffect(() => {
        Fdata();
      }, []);
    
      const Fdata = async () => {
        try {
          await GetActivityData(setActivityData);
          // console.log("Fetched event data:", ActivityData); // Debug log
        } catch (error) {
          console.error("Error fetching event data:", error);
        }
      };
    

    return (
        <div className="overflow-x-auto bg-white p-4 rounded-xl shadow-lg">
        <h2 className="text-2xl font-bold mb-4">Activity Participation</h2>
        <table className="w-full table-auto border-collapse">
          <thead className="bg-blue-100 text-gray-700">
            <tr>
              <th className="px-4 py-2 text-left">Participator Name</th>
              <th className="px-4 py-2 text-left">Description</th>
              <th className="px-4 py-2 text-left">Activity Time</th>
              <th className="px-4 py-2 text-left">Activity Date</th>
              <th className="px-4 py-2 text-left">Activity Name</th>
            </tr>
          </thead>
          <tbody>
            {ActivityData.map((item, index) => (
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
                <td className="px-4 py-3">{item.ActivityTime}</td>
                <td className="px-4 py-3">{item.ActivityDate}</td>
                <td className="px-4 py-3">{item.ActivityName}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )
}

export default Activity
