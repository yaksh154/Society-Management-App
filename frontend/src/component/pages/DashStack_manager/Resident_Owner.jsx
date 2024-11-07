import React, { useState } from "react";
import Header from "../../layout/Header";
import Sidebar from "../../layout/Sidebar";
import { LuImagePlus } from "react-icons/lu";
import { Link } from "react-router-dom";

const Resident_Owner = () => {
  let [data, setdata] = useState(280);
  let [getdata, setget] = useState(280);

  function openNav() {
    setdata(280);
    setget(280);
  }
  function closeNav() {
    setdata(0);
    setget(0);
  }

  const [activeTab, setActiveTab] = useState("Owner");
  const [image, setImage] = useState(null);


  const [formValuesfortenant, setFormValuesfortenant] = useState({
    owner_full_name: "",
    owner_number: "",
    owner_address: ""
  })

  const handleInputChangefortenant = (e) => {
    const { name, value } = e.target;
    setFormValuesfortenant({
      ...formValuesfortenant,
      [name]: value,
    });
  };

  const [formValues, setFormValues] = useState({
    fullName: "",
    phoneNumber: "",
    email: "",
    age: "",
    gender: "",
    wing: "",
    unit: "",
    relation: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setImage(URL.createObjectURL(file));
    }
  };

  const [isOpen, setIsOpen] = useState(false);
  const toggleAccordion = () => setIsOpen(!isOpen);

  // State to manage dynamic members
  const [memberCount, setMemberCount] = useState(1);
  const [members, setMembers] = useState([{ fullName: "", phone: "", email: "", age: "", gender: "", relation: "" }]);

  const handleMemberCountChange = (e) => {
    const count = Number(e.target.value);
    setMemberCount(count);

    setMembers((prevMembers) => {
      const newMembers = [...prevMembers];
      if (count > newMembers.length) {
        return [...newMembers, ...Array(count - newMembers.length).fill({ fullName: "", phone: "", email: "", age: "", gender: "", relation: "" })];
      } else {
        return newMembers.slice(0, count);
      }
    });
  };

  const handleMemberInputChange = (index, field, value) => {
    setMembers((prevMembers) => {
      const newMembers = [...prevMembers];
      newMembers[index] = { ...newMembers[index], [field]: value };
      return newMembers;
    });
  };

  // State to manage dynamic vehicles
  const [vehicleCount, setVehicleCount] = useState(1);
  const [vehicles, setVehicles] = useState([{ type: "Two Wheeler", name: "", number: "" }]);

  const handleVehicleCountChange = (e) => {
    const count = Number(e.target.value);
    setVehicleCount(count);

    setVehicles((prevVehicles) => {
      const newVehicles = [...prevVehicles];
      if (count > newVehicles.length) {
        return [...newVehicles, ...Array(count - newVehicles.length).fill({ type: "Two Wheeler", name: "", number: "" })];
      } else {
        return newVehicles.slice(0, count);
      }
    });
  };

  const handleVehicleInputChange = (index, field, value) => {
    setVehicles((prevVehicles) => {
      const newVehicles = [...prevVehicles];
      newVehicles[index] = { ...newVehicles[index], [field]: value };
      return newVehicles;
    });
  };

  // Function to handle create button click
  const handleCreate = () => {
    const data = {
      formValuesfortenant,
      formValues,
      members,
      vehicles,
      files,
      image, // Include the image here
    };
    console.log("Form Submission Data:", data);
  };
  

  const [files, setFiles] = useState({
    frontAadhar: null,
    backAadhar: null,
    addressProof: null,
    rentAgreement: null,
  });

  const handleFileChange = (e, fileType) => {
    setFiles({
      ...files,
      [fileType]: e.target.files[0],
    });
  };

  const handleRemoveFile = (fileType) => {
    setFiles({
      ...files,
      [fileType]: null,
    });
  };

  const uploadCard = (label, fileType) => (
    <div>
      <p className="text-gray-700 font-medium mb-2 text-sm">{label}</p>
      <div className="border-2 border-dashed border-gray-300 rounded-md p-4 text-center">
        <label className="cursor-pointer">
          <div className="text-5xl flex justify-center">
            <LuImagePlus className="text-[#a7a7a7]" />
          </div>
          <div className="flex flex-col items-center">
            {!files[fileType] ? (
              <>
                <p>
                  <span className="text-blue-500 underline">Upload a file</span> or drag and drop
                </p>
                <input
                  type="file"
                  accept=".png, .jpg, .jpeg, .gif"
                  className="hidden"
                  onChange={(e) => handleFileChange(e, fileType)}
                />
                <p className="text-gray-500 text-xs mt-2">PNG, JPG, GIF up to 10MB</p>
              </>
            ) : null}
          </div>
        </label>
      </div>
      {files[fileType] ? (
        <div className="flex flex-col items-center mt-4">
          <img
            src={URL.createObjectURL(files[fileType])}
            alt="Uploaded file preview"
            className="w-12 h-12 mb-2"
          />
          <span className="text-gray-600 text-sm mb-2">{files[fileType].name}</span>
          <button
            onClick={() => handleRemoveFile(fileType)}
            className="text-red-500 text-sm"
          >
            Delete
          </button>
        </div>
      ) : null}
    </div>
  );
  

  return (
    <div>
      <Sidebar closeNav={closeNav} data={data} />
      <div id="main" className="max-[425px]:ml-0" style={{ marginLeft: getdata }}>
        <div className="open_he">
          <Header openNav={openNav} />
        </div>
        <main className="flex-1">
          <div className="p-6 h-full bg-[#f0f5fb]">
            <div className="flex">
              <button
                className={`py-2 px-8 font-semibold text-center rounded-t-lg border-b-2 border-b-orange-500 ${activeTab === "Owner"
                  ? "bg-gradient-to-r from-orange-600 to-yellow-500 text-white"
                  : "bg-white text-gray-700"
                  }`}
                onClick={() => setActiveTab("Owner")}
              >
                Owner
              </button>
              <button
                className={`py-2 px-8 font-semibold text-center rounded-t-lg border-b-2 border-b-orange-500 ${activeTab === "Tenant"
                  ? "bg-gradient-to-r from-orange-600 to-yellow-500 text-white"
                  : "bg-white text-gray-700"
                  }`}
                onClick={() => setActiveTab("Tenant")}
              >
                Tenant
              </button>
            </div>

            {activeTab === "Owner" && (
              <div className="">
                <div className="bg-white mb-6 p-6 flex rounded-lg shadow">
                  <div className="text-center pr-5">
                    <div className="w-24 h-24 rounded-full overflow-hidden bg-gray-100 flex items-center justify-center relative">
                      {image ? (
                        <img src={image} alt="Profile" className="w-full h-full object-cover" />
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
                    <button className="mt-2 text-blue-500">Add Photo</button>
                  </div>
                  <div className="w-full">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <input
                        type="text"
                        name="fullName"
                        placeholder="Full Name"
                        value={formValues.fullName}
                        onChange={handleInputChange}
                        className="p-3 border border-gray-300 rounded-md w-full"
                        required
                      />
                      <input
                        type="tel"
                        name="phoneNumber"
                        placeholder="Phone Number"
                        value={formValues.phoneNumber}
                        onChange={handleInputChange}
                        className="p-3 border border-gray-300 rounded-md w-full"
                        required
                      />
                      <input
                        type="email"
                        name="email"
                        placeholder="Email Address"
                        value={formValues.email}
                        onChange={handleInputChange}
                        className="p-3 border border-gray-300 rounded-md w-full"
                        required
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-5 gap-4 my-4">
                      <input
                        type="number"
                        name="age"
                        placeholder="Age"
                        value={formValues.age}
                        onChange={handleInputChange}
                        className="p-3 border border-gray-300 rounded-md w-full"
                        required
                      />
                      <select
                        name="gender"
                        value={formValues.gender}
                        onChange={handleInputChange}
                        className="p-3 border border-gray-300 rounded-md w-full"
                        required
                      >
                        <option value="">Select Gender</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Other">Other</option>
                      </select>
                      <input
                        type="text"
                        name="wing"
                        placeholder="Wing"
                        value={formValues.wing}
                        onChange={handleInputChange}
                        className="p-3 border border-gray-300 rounded-md w-full"
                        required
                      />
                      <input
                        type="text"
                        name="unit"
                        placeholder="Unit"
                        value={formValues.unit}
                        onChange={handleInputChange}
                        className="p-3 border border-gray-300 rounded-md w-full"
                        required
                      />
                      <input
                        type="text"
                        name="relation"
                        placeholder="Relation"
                        value={formValues.relation}
                        onChange={handleInputChange}
                        className="p-3 border border-gray-300 rounded-md w-full"
                        required
                      />
                    </div>

                    <div className="">
                      <div className="grid grid-cols-2 md:grid-cols-4 flex space-x-4">
                        {uploadCard("Upload Aadhar Card (Front Side)", "frontAadhar")}
                        {uploadCard("Upload Aadhar Card (Back Side)", "backAadhar")}
                        {uploadCard("Address Proof (Vera Bill OR Light Bill)", "addressProof")}
                        {uploadCard("Rent Agreement", "rentAgreement")}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-lg shadow">
                  <div className="flex justify-between items-center px-5 py-2">
                    <p>Member Counting : <span className="text-[#a7a7a7]">(Other Members)</span></p>
                    <select
                      value={memberCount}
                      onChange={handleMemberCountChange}
                      className="p-1 border rounded"
                    >
                      {[1, 2, 3, 4, 5, 6, 7].map(count => (
                        <option key={count} value={count}>{count}</option>
                      ))}
                    </select>
                  </div>
                  {members.map((member, index) => (
                    <div key={index} className="grid grid-cols-6 md:grid-cols-9 gap-4 mb-4 px-5 pb-5">
                      <input
                        type="text"
                        placeholder="Full Name"
                        value={member.fullName}
                        onChange={(e) => handleMemberInputChange(index, "fullName", e.target.value)}
                        className="p-2 border col-span-2 border-gray-300 rounded-md w-full"
                      />
                      <input
                        type="tel"
                        placeholder="Phone"
                        value={member.phone}
                        onChange={(e) => handleMemberInputChange(index, "phone", e.target.value)}
                        className="p-2 border col-span-2 border-gray-300 rounded-md w-full"
                      />
                      <input
                        type="email"
                        placeholder="Email"
                        value={member.email}
                        onChange={(e) => handleMemberInputChange(index, "email", e.target.value)}
                        className="p-2 border col-span-2 border-gray-300 rounded-md w-full"
                      />
                      <input
                        type="number"
                        placeholder="Age"
                        value={member.age}
                        onChange={(e) => handleMemberInputChange(index, "age", e.target.value)}
                        className="p-2 border border-gray-300 rounded-md w-full"
                      />
                      <select
                        value={member.gender}
                        onChange={(e) => handleMemberInputChange(index, "gender", e.target.value)}
                        className="p-2 border border-gray-300 rounded-md w-full"
                      >
                        <option value="">Select Gender</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Other">Other</option>
                      </select>
                      <input
                        type="text"
                        placeholder="Relation"
                        value={member.relation}
                        onChange={(e) => handleMemberInputChange(index, "relation", e.target.value)}
                        className="p-2 border border-gray-300 rounded-md w-full"
                      />
                    </div>
                  ))}
                </div>

                <div className="bg-white rounded-lg shadow mt-4">
                  <div className="flex justify-between items-center px-5 py-2">
                    <p>Vehicle Counting :</p>
                    <select
                      value={vehicleCount}
                      onChange={handleVehicleCountChange}
                      className="p-1 border rounded"
                    >
                      {[1, 2, 3, 4, 5, 6, 7].map(count => (
                        <option key={count} value={count}>{count}</option>
                      ))}
                    </select>
                  </div>
                  {vehicles.map((vehicle, index) => (
                    <div key={index} className="grid grid-cols-3 gap-4 mb-4 px-5 pb-5">
                      <select
                        value={vehicle.type}
                        onChange={(e) => handleVehicleInputChange(index, "type", e.target.value)}
                        className="p-2 border border-gray-300 rounded-md w-full"
                      >
                        <option value="Two Wheeler">Two Wheeler</option>
                        <option value="Four Wheeler">Four Wheeler</option>
                      </select>
                      <input
                        type="text"
                        placeholder="Vehicle Name"
                        value={vehicle.name}
                        onChange={(e) => handleVehicleInputChange(index, "name", e.target.value)}
                        className="p-2 border border-gray-300 rounded-md w-full"
                      />
                      <input
                        type="text"
                        placeholder="Vehicle Number"
                        value={vehicle.number}
                        onChange={(e) => handleVehicleInputChange(index, "number", e.target.value)}
                        className="p-2 border border-gray-300 rounded-md w-full"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}
            {activeTab === "Tenant" && (
              <div className="">
                <div className="bg-white mb-6 p-6 rounded-lg shadow">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <input
                      type="text"
                      name="Owner_Full_Name*"
                      placeholder="Enter Owner Full Name*"
                      value={formValuesfortenant.owner_full_name}
                      onChange={handleInputChangefortenant}
                      className="p-3 border border-gray-300 rounded-md w-full"
                      required
                    />
                    <input
                      type="tel"
                      name="Owner_Number"
                      placeholder="Owner Number"
                      value={formValuesfortenant.owner_number}
                      onChange={handleInputChangefortenant}
                      className="p-3 border border-gray-300 rounded-md w-full"
                      required
                    />
                    <input
                      type="text"
                      name="Owner_Address"
                      placeholder="Enter Address"
                      value={formValuesfortenant.owner_address}
                      onChange={handleInputChangefortenant}
                      className="p-3 border border-gray-300 rounded-md w-full"
                      required
                    />
                  </div>
                </div>

                <div className="bg-white mb-6 p-6 flex rounded-lg shadow">
                  <div className="text-center pr-5">
                    <div className="w-24 h-24 rounded-full overflow-hidden bg-gray-100 flex items-center justify-center relative">
                      {image ? (
                        <img src={image} alt="Profile" className="w-full h-full object-cover" />
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
                    <button className="mt-2 text-blue-500">Add Photo</button>
                  </div>
                  <div className="w-full">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <input
                        type="text"
                        name="fullName"
                        placeholder="Full Name"
                        value={formValues.fullName}
                        onChange={handleInputChange}
                        className="p-3 border border-gray-300 rounded-md w-full"
                        required
                      />
                      <input
                        type="tel"
                        name="phoneNumber"
                        placeholder="Phone Number"
                        value={formValues.phoneNumber}
                        onChange={handleInputChange}
                        className="p-3 border border-gray-300 rounded-md w-full"
                        required
                      />
                      <input
                        type="email"
                        name="email"
                        placeholder="Email Address"
                        value={formValues.email}
                        onChange={handleInputChange}
                        className="p-3 border border-gray-300 rounded-md w-full"
                        required
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mt-4">
                      <input
                        type="number"
                        name="age"
                        placeholder="Age"
                        value={formValues.age}
                        onChange={handleInputChange}
                        className="p-3 border border-gray-300 rounded-md w-full"
                        required
                      />
                      <select
                        name="gender"
                        value={formValues.gender}
                        onChange={handleInputChange}
                        className="p-3 border border-gray-300 rounded-md w-full"
                        required
                      >
                        <option value="">Select Gender</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Other">Other</option>
                      </select>
                      <input
                        type="text"
                        name="wing"
                        placeholder="Wing"
                        value={formValues.wing}
                        onChange={handleInputChange}
                        className="p-3 border border-gray-300 rounded-md w-full"
                        required
                      />
                      <input
                        type="text"
                        name="unit"
                        placeholder="Unit"
                        value={formValues.unit}
                        onChange={handleInputChange}
                        className="p-3 border border-gray-300 rounded-md w-full"
                        required
                      />
                      <input
                        type="text"
                        name="relation"
                        placeholder="Relation"
                        value={formValues.relation}
                        onChange={handleInputChange}
                        className="p-3 border border-gray-300 rounded-md w-full"
                        required
                      />
                    </div>
                  </div>
                </div>

                <div className="bg-white mb-6 rounded-lg shadow">
                  <div className="flex justify-between items-center px-5 py-2">
                    <p>Member Counting : <span className="text-[#a7a7a7]">(Other Members)</span></p>
                    <select
                      value={memberCount}
                      onChange={handleMemberCountChange}
                      className="p-1 border rounded"
                    >
                      {[1, 2, 3, 4, 5, 6, 7].map(count => (
                        <option key={count} value={count}>{count}</option>
                      ))}
                    </select>
                  </div>
                  {members.map((member, index) => (
                    <div key={index} className="grid grid-cols-6 md:grid-cols-9 gap-4 mb-4 px-5 pb-5">
                      <input
                        type="text"
                        placeholder="Full Name"
                        value={member.fullName}
                        onChange={(e) => handleMemberInputChange(index, "fullName", e.target.value)}
                        className="p-2 border col-span-2 border-gray-300 rounded-md w-full"
                      />
                      <input
                        type="tel"
                        placeholder="Phone"
                        value={member.phone}
                        onChange={(e) => handleMemberInputChange(index, "phone", e.target.value)}
                        className="p-2 border col-span-2 border-gray-300 rounded-md w-full"
                      />
                      <input
                        type="email"
                        placeholder="Email"
                        value={member.email}
                        onChange={(e) => handleMemberInputChange(index, "email", e.target.value)}
                        className="p-2 border col-span-2 border-gray-300 rounded-md w-full"
                      />
                      <input
                        type="number"
                        placeholder="Age"
                        value={member.age}
                        onChange={(e) => handleMemberInputChange(index, "age", e.target.value)}
                        className="p-2 border border-gray-300 rounded-md w-full"
                      />
                      <select
                        value={member.gender}
                        onChange={(e) => handleMemberInputChange(index, "gender", e.target.value)}
                        className="p-2 border border-gray-300 rounded-md w-full"
                      >
                        <option value="">Select Gender</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Other">Other</option>
                      </select>
                      <input
                        type="text"
                        placeholder="Relation"
                        value={member.relation}
                        onChange={(e) => handleMemberInputChange(index, "relation", e.target.value)}
                        className="p-2 border border-gray-300 rounded-md w-full"
                      />
                    </div>
                  ))}
                </div>

                <div className="bg-white rounded-lg shadow mt-4">
                  <div className="flex justify-between items-center px-5 py-2">
                    <p>Vehicle Counting :</p>
                    <select
                      value={vehicleCount}
                      onChange={handleVehicleCountChange}
                      className="p-1 border rounded"
                    >
                      {[1, 2, 3, 4, 5, 6, 7].map(count => (
                        <option key={count} value={count}>{count}</option>
                      ))}
                    </select>
                  </div>
                  {vehicles.map((vehicle, index) => (
                    <div key={index} className="grid grid-cols-3 gap-4 mb-4 px-5 pb-5">
                      <select
                        value={vehicle.type}
                        onChange={(e) => handleVehicleInputChange(index, "type", e.target.value)}
                        className="p-2 border border-gray-300 rounded-md w-full"
                      >
                        <option value="Two Wheeler">Two Wheeler</option>
                        <option value="Four Wheeler">Four Wheeler</option>
                      </select>
                      <input
                        type="text"
                        placeholder="Vehicle Name"
                        value={vehicle.name}
                        onChange={(e) => handleVehicleInputChange(index, "name", e.target.value)}
                        className="p-2 border border-gray-300 rounded-md w-full"
                      />
                      <input
                        type="text"
                        placeholder="Vehicle Number"
                        value={vehicle.number}
                        onChange={(e) => handleVehicleInputChange(index, "number", e.target.value)}
                        className="p-2 border border-gray-300 rounded-md w-full"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}


            <div className="mt-4 flex justify-end">
              <Link to={"/resident_management"} className="px-4 py-2 rounded-lg border-2 bg-white mr-3">cancel</Link>
              <button onClick={handleCreate} className="px-4 py-2 bg-gradient-to-r from-orange-500 to-yellow-500 text-white rounded-lg font-semibold shadow-lg hover:from-orange-600 hover:to-yellow-600 transition duration-200 ">create</button>
            </div>

          </div>
        </main>
      </div>
    </div>
  );
};

export default Resident_Owner;
