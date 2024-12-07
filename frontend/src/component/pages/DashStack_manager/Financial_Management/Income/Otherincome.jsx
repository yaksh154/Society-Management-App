import { useEffect, useState } from "react";
import { GetOtherIncome } from "../../../../services/Api/api";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaRupeeSign } from "react-icons/fa";
import { Link } from "react-router-dom";
import CreateOincome from "../../../../Modals/CreateOincome";
import EditOIncome from "../../../../Modals/EditOIncome";
import DeleteImportantNumbersModal from "../../../../Modals/DeleteImportantNumbersModal";

const Otherincome = () => {
  const [incomeData, setIncomeData] = useState([]);
  const [selectedIncome, setSelectedIncome] = useState(null);
  const [dropdownOpenIndex, setDropdownOpenIndex] = useState(null);
  const [DeleteBox, setDeleteBox] = useState(false);
  const [DeleteId, setDeleteId] = useState(null);
  const [CreateIncome, setCreateIncome] = useState(false);
  const [EditIncome, setEditIncome] = useState(false);

  const toggleDropdown = (index) => {
    setDropdownOpenIndex(dropdownOpenIndex === index ? null : index);
  };

  const fetchData = () => {
    GetOtherIncome((data) => {
      if (data && Array.isArray(data)) {
        setIncomeData(data);
      } else {
        console.error("Failed to load data or data is invalid.");
      }
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleCreate = () => {
    setCreateIncome(true);
  };

  const closeCreateForm = () => {
    setCreateIncome(false);
  };

  const handleEditForm = (income) => {
    setSelectedIncome(income);
    setEditIncome(true);
    setDropdownOpenIndex(null);
  };

  const closeEditForm = () => {
    setEditIncome(false);
    setSelectedIncome(null);
  };

  const handleDelete = (id) => {
    setDeleteId(id);
    setDeleteBox(true);
    setDropdownOpenIndex(null);
  };

  const closeDeleteBox = () => {
    setDeleteBox(false);
    setDeleteId(null);
  };

  return (
    <div>
      <div className="p-6 bg-white rounded-lg">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-semibold">Other Income</h1>
          <button
            className="bg-gradient-to-r from-orange-600 to-yellow-500 text-white px-4 py-2 rounded-md hover:bg-orange-600"
            onClick={handleCreate}
          >
            Create Other Income
          </button>
          {CreateIncome && (
            <CreateOincome Fdata={fetchData} setCreateIncome={closeCreateForm} />
          )}
        </div>
        <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {incomeData.length > 0 ? (
            incomeData.map((item) => (
              <div key={item._id} className="bg-white shadow-md rounded-md relative">
                <div className="flex justify-between items-center mb-3 rounded-t-lg p-2 bg-blue-600">
                  <h2 className="text-lg font-semibold text-white">{item.Title}</h2>
                  <div className="relative">
                    <button
                      onClick={() => toggleDropdown(item._id)}
                      className="text-blue-500 bg-white rounded-md pb-1 focus:outline-none"
                    >
                      <BsThreeDotsVertical className="h-5 w-5 mt-1" />
                    </button>
                    {dropdownOpenIndex === item._id && (
                      <div className="absolute right-0 mt-2 w-32 bg-white rounded-md shadow-lg z-10">
                        <ul className="py-1 text-gray-700">
                          <li
                            className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                            onClick={() => handleEditForm(item)}
                          >
                            Edit
                          </li>
                          <Link
                            className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                            to="/manager/financial_management/participant_table"
                          >
                            View
                          </Link>
                          <li
                            className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                            onClick={() => handleDelete(item._id)}
                          >
                            Delete
                          </li>
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
                <div className="flex flex-col gap-2 mb-4 p-2">
                  <div className="text-sm text-gray-500 flex items-center">
                    Amount Per Member:
                    <span className="ml-2 flex items-center text-lg font-semibold text-blue-500 bg-blue-100 px-2 py-1 rounded-md">
                      <FaRupeeSign className="mr-1" />
                      {item.Amount}
                    </span>
                  </div>
                  <div className="text-sm text-gray-500">
                    Total Member:
                    <span className="ml-2 text-base font-semibold text-gray-700">{item.TotalMember}</span>
                  </div>
                  <div className="text-sm text-gray-500">
                    Date:
                    <span className="ml-2 text-base font-semibold text-gray-700">{item.Date}</span>
                  </div>
                  <div className="text-sm text-gray-500">
                    Due Date:
                    <span className="ml-2 text-base font-semibold text-gray-700">{item.Due_Date}</span>
                  </div>
                  <p className="text-gray-500 text-sm font-bold">{item.Description}</p>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-4 text-gray-500">No data available.</div>
          )}
        </div>
      </div>
      {EditIncome && (
        <EditOIncome
          setEditIncome={closeEditForm}
          initialData={selectedIncome}
          onUpdate={fetchData}
        />
      )}
     
{DeleteBox && (
  <DeleteImportantNumbersModal
    setDeleteBox={closeDeleteBox}
    deleteId={DeleteId}
  />
)}
</div>
);
};

export default Otherincome;
