import React from "react";
import { useForm } from "react-hook-form";
import { FaCalendarAlt, FaClock } from "react-icons/fa";
import { PostVisiter } from "../../Api/Api";


const AddVisiter = ({ setAddVisiterbox, Fdata }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const formatTimeTo12Hour = (time) => {
    const [hour, minute] = time.split(":");
    const period = hour >= 12 ? "PM" : "AM";
    const formattedHour = hour % 12 || 12; // Convert 0 to 12 for 12 AM
    return `${formattedHour}:${minute} ${period}`;
  };

  const onSubmit = (data) => {
    const formattedDate = new Date(data.date)
      .toLocaleDateString("en-GB")
      .split("/")
      .join("/");

    const formattedTime = formatTimeTo12Hour(data.time);

    const payload = {
      ...data,
      date: formattedDate,
      time: formattedTime,
    };

    console.log("Visitor Details Submitted:", payload);
    PostVisiter(payload, Fdata, setAddVisiterbox);
    reset();
  };

  const handleCancel = () => {
    setAddVisiterbox(false);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-2xl shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">Add Visitor Details</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4" method="post">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Visitor Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              {...register("name", { required: "Visitor Name is required" })}
              placeholder="Evelyn Harper"
              className={`mt-2 w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500 ${
                errors.name ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
           Phone  Number<span className="text-red-500">* </span>
            </label>
            <input
              type="text"
              {...register("phone", { required: " Phone  Number is required" })}
              placeholder="9821541540"
              className={`mt-2 w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500 ${
                errors.phone ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>}
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Wing <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                {...register("wing", { required: "Wing is required" })}
                placeholder="A"
                className={`mt-2 w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500 ${
                  errors.wing ? "border-red-500" : "border-gray-300"
                }`}
              />
              {errors.wing && <p className="text-red-500 text-sm mt-1">{errors.wing.message}</p>}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Unit <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                {...register("unit", { required: "Unit is required" })}
                placeholder="1001"
                className={`mt-2 w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500 ${
                  errors.unit ? "border-red-500" : "border-gray-300"
                }`}
              />
              {errors.unit && <p className="text-red-500 text-sm mt-1">{errors.unit.message}</p>}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Date <span className="text-red-500">*</span>
              </label>
              <div className="relative mt-2">
                <input
                  type="date"
                  {...register("date", { required: "Date is required" })}
                  className={`w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500 ${
                    errors.date ? "border-red-500" : "border-gray-300"
                  }`}
                />
                <FaCalendarAlt className="absolute top-3 right-4 text-gray-400 pointer-events-none" />
              </div>
              {errors.date && <p className="text-red-500 text-sm mt-1">{errors.date.message}</p>}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Time <span className="text-red-500">*</span>
              </label>
              <div className="relative mt-2">
                <input
                  type="time"
                  {...register("time", { required: "Time is required" })}
                  className={`w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500 ${
                    errors.time ? "border-red-500" : "border-gray-300"
                  }`}
                />
                <FaClock className="absolute top-3 right-4 text-gray-400 pointer-events-none" />
              </div>
              {errors.time && <p className="text-red-500 text-sm mt-1">{errors.time.message}</p>}
            </div>
          </div>

          <div className="flex justify-between mt-6">
            <button
              type="button"
              onClick={handleCancel}
              className="px-6 py-2 text-gray-700 bg-gray-100 border rounded-lg shadow-sm hover:bg-gray-200"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-6 py-2 text-white bg-gradient-to-r from-orange-500 to-red-500 rounded-lg shadow-sm hover:from-orange-600 hover:to-red-600"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddVisiter;
