import React, { useState } from "react";
import Header from "../../../layout/Header";
import Sidebar from "../../../layout/Sidebar";
import Resident_Owner from "../Resident_Owner/Resident_Owner_component/Resident_Owner";
import Resident_Tenant from "../Resident_Owner/Resident_Owner_component/Resident_Tenant";

const Resident_Owner_Form = () => {
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
              <Resident_Owner/>
            )}
            {activeTab === "Tenant" && (
              <Resident_Tenant/>
            )}

          </div>
        </main>
      </div>
    </div>
  );
};

export default Resident_Owner_Form;