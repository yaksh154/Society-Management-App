import React, { useState, useEffect } from 'react';
import PollComponent from '../PollComponent';
import Sidebar from "../../../../layout/Sidebar";
import Header from "../../../../layout/Header";
import { GetNewPoll, GetOwnPoll, GetPreviousPoll } from '../../../../Api/api';

const Polls = () => {
  const [data, setData] = useState(280);
  const [pollType, setPollType] = useState("Own");
  const [pollsData, setPollsData] = useState([]);

  const openNav = () => {
    setData(280);
  };

  const closeNav = () => {
    setData(0);
  };

  useEffect(() => {
    const fetchData = async () => {
      let data = [];
      if (pollType === "Own") data = await GetOwnPoll();
      if (pollType === "New") data = await GetNewPoll();
      if (pollType === "Previous") data = await GetPreviousPoll();
      setPollsData(data);
    };
    fetchData();
  }, [pollType]);

  return (
    <div className="bg-[#f0f5fb] h-screen">
      <Sidebar closeNav={closeNav} data={data} />
      <div id="main" style={{ marginLeft: data }}>
        <Header openNav={openNav} />
        <div className="p-6 bg-gray-100">
          <div className="flex space-x">
            {["Own", "New", "Previous"].map((type) => (
              <button
                key={type}
                onClick={() => setPollType(type)}
                className={`py-2 px-8 font-semibold text-center rounded-t-lg border-b-2 border-b-orange-500 ${
                  pollType === type
                    ? "bg-orange-600 text-white"
                    : "bg-white text-gray-700"
                } border-b-2 border-orange-500`}
              >
                {type} Poll
              </button>
            ))}
          </div>
          <PollComponent polls={pollsData} onCreatePoll={() => alert('Create Poll clicked!')} />
        </div>
      </div>
    </div>
  );
};

export default Polls;
