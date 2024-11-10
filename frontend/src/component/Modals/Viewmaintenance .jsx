import React from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { FaRupeeSign, FaUser } from 'react-icons/fa';
import { HiOutlineCash } from 'react-icons/hi';
import { IoIosCash } from 'react-icons/io';
import { MdOutlinePendingActions } from 'react-icons/md';

const profileImage = 'https://via.placeholder.com/150';

const ViewMaintenance = ({setShowViewUser}) => {
  const handleCancel = () => {
    setShowViewUser(false); // This should close the modal
  };
  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center z-50">
      <div className="max-w-xl w-full p-6 bg-white rounded-lg shadow-lg relative">
        {/* Close Button */}
        <button className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 "  onClick={handleCancel}>
          <AiOutlineClose size={20}   />
        </button>

        {/* Header */}
        <h2 className="text-2xl font-semibold text-center mb-6">Maintenance Details</h2>

        {/* Profile Section */}
        <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-start mb-6">
          <img src={profileImage} alt="Profile" className="w-20 h-20 rounded-full mx-2" />
          <div className='sm:ml-4 my-5'>
            <h3 className="font-semibold text-xl">Cody Fisher</h3>
            <p className="text-gray-500 text-lg">Feb 10, 2024</p>
          </div>
        </div>

        {/* Details Section */}
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-6 pt-4">
          {/* Wing */}
          <div className="flex flex-col items-center border-r-2 border-gray-300 sm:pr-4">
            <span className="text-lg font-semibold text-gray-500">Wing</span>
            <span className="bg-gray-100 text-blue-600 font-bold text-lg rounded-full w-10 h-10 flex items-center justify-center">
              A
            </span>
          </div>

          {/* Unit */}
          <div className="flex flex-col items-center border-r-2 border-gray-300 sm:px-4">
            <span className="text-lg font-semibold text-gray-500">Unit</span>
            <span className="text-lg font-semibold text-gray-900">101</span>
          </div>

          {/* Status */}
          <div className="flex flex-col items-center border-r-2 border-gray-300 sm:px-4">
            <span className="text-lg font-semibold text-gray-500">Status</span>
            <span className="flex items-center bg-blue-100 text-blue-600 font-semibold px-2 py-1 rounded-lg">
              <FaUser className="mr-1" />
              Owner
            </span>
          </div>

          {/* Amount */}
          <div className="flex flex-col items-center">
            <span className="text-lg font-semibold text-gray-500">Amount</span>
            <span className="flex items-center text-lg font-semibold text-green-600">
              <FaRupeeSign className="mr-1" />
              1000
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 pt-4">
          {/* Penalty */}
          <div className="flex flex-col items-center border-r-2 border-gray-300 sm:pr-4">
            <span className="text-lg font-semibold text-gray-500">Penalty</span>
            <span className="bg-gray-100 text-gray-600 font-bold text-lg rounded-full w-14 h-10 flex items-center justify-center">
              --
            </span>
          </div>

          {/* Status */}
          <div className="flex flex-col items-center border-r-2 border-gray-300 sm:px-4">
            <span className="text-lg font-semibold text-gray-500">Status</span>
            <span className="flex items-center text-yellow-500 bg-yellow-200 font-semibold px-2 py-1 rounded-lg">
              <MdOutlinePendingActions className="mr-1" />
              Pending
            </span>
          </div>

          {/* Payment */}
          <div className="flex flex-col items-center">
            <span className="text-gray-500 text-lg font-semibold">Payment</span>
            <span className="flex items-center bg-gray-300 text-black font-semibold px-2 py-1 rounded-lg">
              <HiOutlineCash className="mr-1" />
              Cash
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewMaintenance;
