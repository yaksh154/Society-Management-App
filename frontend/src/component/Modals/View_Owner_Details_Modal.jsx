import React from 'react';

const View_Owner_Details_Modal = ({ _id, View_Owner_Details, closeModal }) => {
  return (
    <div>
      {View_Owner_Details && (
        <div
          className="fixed inset-0 bg-gray-800 bg-opacity-50 z-40"
          onClick={closeModal} // Use closeModal here
        ></div>
      )}

      {/* Offcanvas component */}
      <div
        className={`fixed top-0 right-0 w-72 h-full bg-white shadow-lg z-50 transform transition-transform duration-300 ${
          View_Owner_Details ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between p-4 border-b">
          <h5 className="text-lg font-semibold">View Details</h5>
          <button
            onClick={closeModal} // Use closeModal here as well
            className="text-gray-700 hover:text-gray-900 focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div className="p-4">
          <p>Try scrolling the rest of the page to see this option in action.</p>
        </div>
      </div>
    </div>
  );
};

export default View_Owner_Details_Modal;
