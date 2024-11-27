import React, { useState } from 'react'
import FaUser from "../../../../../../public/images/Profile.png";

const Activity = () => {
    const activityData = [
        {
          ParticipatorName: "Cody Fisher",
          Description: "Event and recreational activities.",
          ActivityTime: "2:45 PM",
          ActivityDate: "10/02/2024",
          ActivityName: "Society Meeting",
        },
        {
          ParticipatorName: "Esther Howard",
          Description: "Securing critical government systems.",
          ActivityTime: "1:45 PM",
          ActivityDate: "11/02/2024",
          ActivityName: "Holi Festival",
        },
        {
          ParticipatorName: "Jenny Wilson",
          Description: "Implementing surveillance public spaces.",
          ActivityTime: "7:00 PM",
          ActivityDate: "12/02/2024",
          ActivityName: "Navratri Festival",
        },
        {
          ParticipatorName: "Robert Fox",
          Description: "Event and recreational activities.",
          ActivityTime: "4:45 PM",
          ActivityDate: "13/02/2024",
          ActivityName: "Ganesh Chaturthi",
        },
        {
          ParticipatorName: "Albert Flores",
          Description: "Securing critical government systems.",
          ActivityTime: "1:00 PM",
          ActivityDate: "14/02/2024",
          ActivityName: "Society Meeting",
        },
        {
          ParticipatorName: "Floyd Miles",
          Description: "Implementing surveillance public spaces.",
          ActivityTime: "6:45 PM",
          ActivityDate: "15/02/2024",
          ActivityName: "Holi Festival",
        },
        {
          ParticipatorName: "Albert Flores",
          Description: "Event and recreational activities.",
          ActivityTime: "7:35 PM",
          ActivityDate: "16/02/2024",
          ActivityName: "Navratri Festival",
        },
        {
          ParticipatorName: "Floyd Miles",
          Description: "Securing critical government systems.",
          ActivityTime: "4:30 PM",
          ActivityDate: "17/02/2024",
          ActivityName: "Ganesh Chaturthi",
        },
        {
          ParticipatorName: "Cody Fisher",
          Description: "Implementing surveillance public spaces.",
          ActivityTime: "1:30 PM",
          ActivityDate: "18/02/2024",
          ActivityName: "Society Meeting",
        },
        {
          ParticipatorName: "Cody Fisher",
          Description: "Event and recreational activities.",
          ActivityTime: "3:45 PM",
          ActivityDate: "19/02/2024",
          ActivityName: "Holi Festival",
        },
    
      ];
      const [activeTab, setActiveTab] = useState("Activity");

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
            {activityData.map((item, index) => (
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
