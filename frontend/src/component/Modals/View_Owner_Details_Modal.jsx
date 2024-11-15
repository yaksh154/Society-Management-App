import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { FaEye, FaFilePdf } from 'react-icons/fa';
import { IoImageSharp } from 'react-icons/io5';

const View_Owner_Details_Modal = ({ _id, View_Owner_Details, closeModal }) => {
  const [image, setImage] = useState(null);
  const [fetchedImageSize, setFetchedImageSize] = useState(null);
  const [fetchedPdfSize, setFetchedPdfSize] = useState(null);
  const [data, setData] = useState([]);

  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setImage(URL.createObjectURL(file));
    }
  };

  useEffect(() => {
    Fdata();
  }, []);

  const Fdata = () => {
    axios.get("http://localhost:3030/Sumdata").then((res) => {
      setData(res.data);
    });
  };

  // Function to fetch image size from URL
  const fetchImageSize = async (url) => {
    try {
      const response = await axios.head(url); // HTTP HEAD request to get headers
      const contentLength = response.headers['content-length']; // Get content-length header
      if (contentLength) {
        setFetchedImageSize((contentLength / (1024 * 1024)).toFixed(2) + " MB");
      }
    } catch (error) {
      console.error("Error fetching image size:", error);
    }
  };

  // Function to fetch PDF size from URL
  const fetchPdfSize = async (url) => {
    try {
      const response = await axios.head(url); // HTTP HEAD request to get headers
      const contentLength = response.headers['content-length']; // Get content-length header
      if (contentLength) {
        setFetchedPdfSize((contentLength / (1024 * 1024)).toFixed(2) + " MB");
      }
    } catch (error) {
      console.error("Error fetching PDF size:", error);
    }
  };

  const ViewFdata = data.filter((e) => e._id === _id);

  useEffect(() => {
    if (ViewFdata.length > 0) {
      if (ViewFdata[0].img) {
        fetchImageSize(ViewFdata[0].img); // Fetch the image size of {e.img}
      }
      if (ViewFdata[0].pdf) {
        fetchPdfSize(ViewFdata[0].pdf); // Fetch the PDF size of {e.pdf}
      }
    }
  }, [ViewFdata]);

  return (
    <div>
      {View_Owner_Details && (
        <div
          className="fixed inset-0 bg-gray-800 bg-opacity-50 z-40"
          onClick={closeModal}
        ></div>
      )}

      {/* Offcanvas component */}
      <div
        className={`fixed top-0 right-0 w-80 h-full bg-white shadow-lg z-50 transform transition-transform duration-300 ${View_Owner_Details ? 'translate-x-0' : 'translate-x-full'
          }`}
      >
        <div className="flex items-center justify-between p-4 border-b">
          <h5 className="text-lg font-semibold">View Owner Details</h5>
          <button
            onClick={closeModal}
            className="text-gray-700 hover:text-gray-900 focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <div className="p-4">
          {ViewFdata.map((e, index) => (
            <div key={index}>
              <div className="text-center flex items-center justify-center mb-3">
                <div className="w-24 h-24 rounded-full overflow-hidden bg-gray-100 flex items-center justify-center relative">
                  {image ? (
                    <img
                      src={image}
                      alt="Profile"
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <span className="text-gray-400 text-xl">+</span>
                  )}
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                    className="absolute inset-0 opacity-0 cursor-pointer"
                  />
                </div>
              </div>
              <div className="mb-3">
                <p className="text-xl text-center font-medium">{e.name}</p>
                <p className="text-md text-center text-[#4f4f4f]">{e.email}</p>
              </div>
              <div className="m-2 mb-5 rounded-lg shadow-md">
                <div className="flex justify-between px-3 py-2 border-b">
                  <p className="text-sm font-medium">Wing</p>
                  <p className="text-sm">{e.wing}</p>
                </div>
                <div className="flex justify-between px-3 py-2 border-b">
                  <p className="text-sm font-medium">Unit</p>
                  <p className="text-sm">{e.unit}</p>
                </div>
                <div className="flex justify-between px-3 py-2">
                  <p className="text-sm font-medium">Gender</p>
                  <p className="text-sm">{e.gender}</p>
                </div>
              </div>
              <div className="m-2 rounded-lg shadow-md">
                <div className="px-3 py-2">
                  <p>Document</p>
                  <div className="mb-3">
                    {e.img && (
                      <div className='m-2 flex justify-between items-center'>
                        <div className="flex justify-between items-center">
                          <samp className='mr-4 p-2 bg-[#f0f5fb] rounded-lg'><IoImageSharp className='text-[#5678e9] text-lg' /></samp>
                          <div className="">
                            <p>Img name</p>
                            <p className="text-sm text-gray-500">{fetchedImageSize}</p>
                          </div>
                        </div>
                        <samp><FaEye className='text-[#a7a7a7]' /></samp>
                      </div>
                    )}
                    {e.pdf && (
                      <div className='m-2 flex justify-between items-center'>
                        <div className="flex justify-between items-center">
                          <samp className='mr-4 p-2 bg-[#f0f5fb] rounded-lg'><FaFilePdf className='text-[#5678e9] text-lg' /></samp>
                          <div className="">
                            <p>Img name</p>
                            <p className="text-sm text-gray-500">{fetchedPdfSize}</p>
                          </div>
                        </div>
                        <samp><FaEye className='text-[#a7a7a7]' /></samp>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default View_Owner_Details_Modal;
