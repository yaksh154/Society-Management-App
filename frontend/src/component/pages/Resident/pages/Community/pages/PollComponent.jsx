import React from 'react';
import { BiRadioCircle } from 'react-icons/bi';
import { FaRegEye, FaUserCircle } from 'react-icons/fa';
import ProfileImage from '../../../../../../../public/images/Profile.png'; // Adjust the path as needed
import { AiOutlinePlus } from 'react-icons/ai';

const PollComponent = ({ polls, onCreatePoll }) => {
  return (
    <div className="p-5 bg-white">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold text-gray-800">Polls</h2>
        <button
          onClick={onCreatePoll}
          className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg"
        >
          Create Poll
        </button>
      </div>
      {polls.length === 0 ? (
        <p className="text-gray-600">No polls available.</p>
      ) : (
        <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {polls.map((poll) => (
            <div
              key={poll.id}
              className="bg-white border border-gray-200 rounded-lg shadow p-6"
            >
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <img
                    src={ProfileImage}
                    alt="Profile"
                    className="w-12 h-12 rounded-full border"
                  />
                  <div className="ml-4">
                    <h5 className="text-lg font-bold text-blue-500">{poll.author}</h5>
                    <p className="text-sm text-gray-500">Multichoice Poll</p>
                  </div>
                </div>
                <div className="flex items-center text-white bg-blue-500 p-2 rounded-full">
                  <FaRegEye className="mr-2" />
                  <span className="font-bold text-sm">{poll.views || 0}</span>
                </div>
              </div>
              <hr className="mt-4" />
              <h3 className="mt-4 text-lg font-semibold text-gray-800">{poll.title}</h3>
              <div className="mt-2 text-sm text-orange-500 font-medium flex items-center">
                <BiRadioCircle className="mr-2" />
                <span>Select one or more</span>
              </div>
              <div className="mt-4">
                {/* Example options - Adjust with real data */}
                <div className="mb-2">
                  <label className="text-gray-700">
                    <input type="radio" name={`poll-${poll.id}`} className="mr-2" />
                    Yes ({poll.votesYes})
                  </label>
                </div>
                <div className="mb-2">
                  <label className="text-gray-700">
                    <input type="radio" name={`poll-${poll.id}`} className="mr-2" />
                    No ({poll.votesNo})
                  </label>
                </div>
              </div>
              <p className="text-sm text-gray-400 mt-4 text-right">{poll.createdAt}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default PollComponent;
