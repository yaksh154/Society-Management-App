import React, { useState, useEffect } from 'react';
import PollComponent from '../PollComponent';
import Sidebar from '../../../../layout/Sidebar';
import Header from '../../../../layout/Header';
import { GetNewPoll, GetOwnPoll, GetPreviousPoll } from '../../../../Api/api';
import CreatePoll from '../../Modal/CreatePoll';

const Polls = () => {
  const [data, setData] = useState(280); // Sidebar width state
  const [pollType, setPollType] = useState('Own'); // Poll type selection state
  const [pollsData, setPollsData] = useState([]); // Data for displaying polls
  const [Create, setCreate] = useState(false); // Create poll modal state

  const openNav = () => setData(280);
  const closeNav = () => setData(0);
  const openCreatePoll = () => setCreate(true);
  const closeCreatePoll = () => setCreate(false);

  // Format date to 'dd-mm-yyyy'
  const formatDateToDDMMYYYY = (date) => {
    const d = new Date(date);
    return `${d.getDate().toString().padStart(2, '0')}-${(d.getMonth() + 1)
      .toString()
      .padStart(2, '0')}-${d.getFullYear()}`;
  };

  // Fetch data based on poll type
  const Fdata = async () => {
    let data = [];
    const today = new Date();
    const formattedToday = formatDateToDDMMYYYY(today); // Today's date in 'dd-mm-yyyy' format

    try {
      if (pollType === 'Own') {
        data = await GetOwnPoll();
      } else if (pollType === 'New') {
        const newPolls = await GetNewPoll();
        // Filter polls to show only those created today based on 'createdAt'
        data = newPolls.filter((poll) => {
          const pollDate = new Date(poll.createdAt); // Parse createdAt field to Date object
          const formattedPollDate = formatDateToDDMMYYYY(pollDate);
          return formattedPollDate === formattedToday;
        });
        console.log('New Polls (Today):', data); // Debugging
      } else if (pollType === 'Previous') {
        data = await GetPreviousPoll();
      }
    } catch (error) {
      console.error('Error fetching polls:', error);
    }

    setPollsData(data); // Update state with filtered data
  };

  useEffect(() => {
    Fdata(); // Fetch data whenever pollType changes
  }, [pollType]);

  return (
    <div className="bg-[#f0f5fb] h-screen">
      <Sidebar closeNav={closeNav} data={data} />
      <div id="main" style={{ marginLeft: data }}>
        <Header openNav={openNav} />
        <div className="p-6 bg-gray-100">
          <div className="flex space-x">
            {['Own', 'New', 'Previous'].map((type) => (
              <button
                key={type}
                onClick={() => setPollType(type)}
                className={`py-2 px-8 font-semibold text-center rounded-t-lg border-b-2 border-b-orange-500 ${
                  pollType === type
                    ? 'bg-orange-600 text-white'
                    : 'bg-white text-gray-700'
                }`}
              >
                {type} Poll
              </button>
            ))}
          </div>
          <div className="p-4 bg-white">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold text-gray-800">Polls</h2>
              <button
                onClick={openCreatePoll}
                className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg"
              >
                Create Poll
              </button>
              {Create && (
                <CreatePoll
                  Fdata={Fdata} // Refresh data after creating a poll
                  closeCreatePoll={closeCreatePoll}
                />
              )}
            </div>
            <PollComponent polls={pollsData} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Polls;
