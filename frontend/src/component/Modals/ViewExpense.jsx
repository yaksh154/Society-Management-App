import React from 'react';
import { FaRupeeSign } from 'react-icons/fa';
import { IoClose } from 'react-icons/io5';
import { AiOutlineFileImage, AiOutlineEye } from 'react-icons/ai';

const ViewExpenseDetails = ({ onClose }) => {
  // Sample data for demonstration purposes
  const expenseData = {
    title: "Rent Or Mortgage",
    description: "A visual representation of your spending categories visual representation.",
    date: "01/02/2024",
    amount: "1,500",
    bill: {
      fileName: "Adharcard Front Side.JPG",
      fileSize: "3.5 MB",
      fileUrl: "https://example.com/path/to/your/image.jpg" // Replace with actual file URL
    },
  };

  const openImage = () => {
    window.open(expenseData.bill.fileUrl, '_blank');
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center">
      <div className="bg-white rounded-lg w-full max-w-md p-6 shadow-lg relative">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
        >
          <IoClose size={24} />
        </button>
        
        <h2 className="text-xl font-semibold mb-4">View Expense Details</h2>

        <div className="mb-4">
          <label className="block text-gray-500 text-sm font-medium mb-1">Title</label>
          <p className="text-gray-800">{expenseData.title}</p>
        </div>

        <div className="mb-4">
          <label className="block text-gray-500 text-sm font-medium mb-1">Description</label>
          <p className="text-gray-800">{expenseData.description}</p>
        </div>

        <div className="flex gap-4 mb-4">
          <div className="w-1/2">
            <label className="block text-gray-500 text-sm font-medium mb-1">Date</label>
            <p className="text-gray-800">{expenseData.date}</p>
          </div>
          <div className="w-1/2">
            <label className="block text-gray-500 text-sm font-medium mb-1">Amount</label>
            <div className="flex items-center bg-gray-100 rounded-full px-2 py-1">
              <FaRupeeSign className="text-gray-600 mr-1" />
              <span className="text-gray-800">{expenseData.amount}</span>
            </div>
          </div>
        </div>

        <div className="mb-4">
          <label className="block text-gray-500 text-sm font-medium mb-1">Bill</label>
          <div className="flex items-center bg-gray-100 p-3 rounded-lg">
            <AiOutlineFileImage className="text-blue-500 text-2xl mr-3" />
            <div className="flex-1">
              <p className="text-gray-800">{expenseData.bill.fileName}</p>
              <p className="text-gray-500 text-sm">{expenseData.bill.fileSize}</p>
            </div>
            <button
              onClick={openImage}
              className="text-gray-500 hover:text-gray-700 ml-2"
              aria-label="View Image"
            >
              <AiOutlineEye size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewExpenseDetails;
