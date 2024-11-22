
import React, { useState, useEffect } from 'react';
import Sidebar from '../../../../layout/Sidebar';
import Header from '../../../../layout/Header';
import { FaEdit, FaEye, FaFileImage, FaFilePdf, FaPen, FaTrashAlt } from 'react-icons/fa';
import { FaSquarePlus } from 'react-icons/fa6';
import AddExpenseForm from '../../../../Modals/AddExpenseForm';
import EditExpensesForm from '../../../../Modals/EditExpensesForm';
import ViewExpense from '../../../../Modals/ViewExpense';
import DeleteExpence from '../../../../Modals/DeleteExpence';
import { GetExpanse } from '../../../../services/Api/api';
import { GrFormView } from 'react-icons/gr';

const Expanse = () => {
  const [sidebarWidth, setSidebarWidth] = useState(280);
  const [expenses, setExpenses] = useState([]);
  const [error, setError] = useState(null);

  const openNav = () => {
    setSidebarWidth(280);
  };

  const closeNav = () => {
    setSidebarWidth(0);
  };

  // Add
  const [AddExpense, setAddExpense] = useState(false);
  const [EditData, setEditData] = useState(false);
  const [View, setView] = useState(false);
  const [Remove, setRemove] = useState(false);

  const Open = () => setAddExpense(true);
  const Close = () => setAddExpense(false);
  const EditOpen = () => setEditData(true);
  const CloseForm = () => setEditData(false);
  const ViewOpen = () => setView(true);
  const CloseView = () => setView(false);
  const RemoveOpen = () => setRemove(true);
  const RemoveView = () => setRemove(false);


  const Fdata = async () => {
    setError(null);
    GetExpanse((data) => {
      if (data && Array.isArray(data)) {
        setExpenses(data);
      } else {
        setError('Failed to load data or data is invalid.');
      }
      ;
    });
  };
  useEffect(() => {
    Fdata();
  }, []);



  return (
    <div className="flex">
      <Sidebar closeNav={closeNav} data={sidebarWidth} />
      <div id="main" className="flex-1 transition-all duration-300" style={{ marginLeft: sidebarWidth }}>
        <Header openNav={openNav} />
        <div className="p-4 md:p-8 bg-slate-100">
          <div className="bg-white rounded-lg shadow-md">
            <div className="flex justify-between items-center mb-4 md:mb-6 p-4">
              <h1 className="text-lg md:text-2xl font-semibold">Add Expenses Details</h1>
              <button
                className="bg-orange-500 text-white px-2 md:px-4 py-1 md:py-2 rounded-lg hover:bg-orange-600 text-sm md:text-base flex items-center"
                onClick={Open}
              >
                <FaSquarePlus className="mr-2" /> Add New Expenses Details
              </button>
              {AddExpense && <AddExpenseForm Fdata={Fdata} setAddExpense={Close} />}
            </div>
            <div className="p-4 bg-white rounded-lg shadow-lg">
              <table className="min-w-full bg-white rounded-lg">
                <thead className="bg-slate-100 font-extrabold rounded-t-lg">
                  <tr>
                    <th className="px-2 md:px-4 py-2 md:py-3 text-left text-xs md:text-sm text-gray-600">Title</th>
                    <th className="px-2 md:px-4 py-2 md:py-3 text-left text-xs md:text-sm text-gray-600">Description</th>
                    <th className="px-2 md:px-4 py-2 md:py-3 text-left text-xs md:text-sm text-gray-600 text-center">Date</th>
                    <th className="px-2 md:px-4 py-2 md:py-3 text-left text-xs md:text-sm text-gray-600 text-center">Amount</th>
                    <th className="px-2 md:px-4 py-2 md:py-3 text-left text-xs md:text-sm text-gray-600 text-center">Bill Format</th>
                    <th className="px-2 md:px-4 py-2 md:py-3 text-left text-xs md:text-sm text-gray-600 text-center">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {expenses.map((expense, index) => (
                    <tr key={index} className="border-b hover:bg-gray-50 font-medium md:font-semibold">
                      <td className="px-2 md:px-4 py-2 md:py-3 text-xs md:text-sm text-gray-700">{expense.Title}</td>
                      <td className="px-2 md:px-4 py-2 md:py-3 text-xs md:text-sm text-gray-700 truncate">{expense.Description}</td>
                      <td className="px-2 md:px-4 py-2 md:py-3 text-xs md:text-sm text-gray-700 text-center">{new Date(expense.Date).toLocaleDateString("en-US", {
                        month: "2-digit",
                        day: "2-digit",
                        year: "numeric",
                      })}</td>
                      <td className="px-2 md:px-4 py-2 md:py-3 text-xs md:text-sm text-green-500 text-center">₹ {expense.Amount}</td>
                      <td className="px-2 md:px-4 py-2 md:py-3 text-xs md:text-sm text-gray-700">
                        {expense.format === 'PDF' ? (
                          <span className="flex items-center space-x-1 justify-center">
                            <FaFilePdf className="text-red-500 bg-slate-200 w-4 md:w-6 h-4 md:h-6 py-1 rounded-sm" />
                            <span>PDF</span>
                          </span>
                        ) : (
                          <span className="flex items-center space-x-1 justify-center">
                            <FaFileImage className="text-blue-500 bg-slate-200 w-4 md:w-6 h-4 md:h-6 py-1 rounded-sm" />
                            <span>JPG</span>
                          </span>
                        )}
                      </td>
                      <td className="px-2 md:px-4 py-2 md:py-3 text-xs md:text-sm text-gray-700 flex space-x-2 md:space-x-2 justify-center">
                        <button aria-label="Edit" onClick={EditOpen} className="text-green-500 p-1">
                          <FaEdit />
                        </button>

                        <button aria-label="View" onClick={ViewOpen} className="text-blue-500 text-2xl rounded">
                          <GrFormView />
                        </button>

                        <button aria-label="Delete" onClick={RemoveOpen} className="text-red-500 p-1">
                          <FaTrashAlt />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              {EditData && <EditExpensesForm setEditData={CloseForm} />}
              {View && <ViewExpense setView={CloseView} />}
              {Remove && <DeleteExpence setRemove={RemoveView} />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Expanse;
