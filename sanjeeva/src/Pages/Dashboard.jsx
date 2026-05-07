import React, { useState } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { Building2, RefreshCw } from "lucide-react";

const Dashboard = () => {
  const [selectedHospital, setSelectedHospital] = useState("Apollo Hospital");

  const hospitals = [
    { name: "Apollo Hospital", location: "Bengaluru", type: "Hospital" },
    { name: "Red Cross Blood Bank", location: "Bengaluru", type: "Blood Bank" },
    { name: "Manipal Hospital", location: "Bengaluru", type: "Hospital" },
    { name: "Lifeline Blood Centre", location: "Mumbai", type: "Blood Bank" },
    { name: "Fortis Healthcare", location: "Delhi", type: "Hospital" },
    { name: "Sanjeevani Blood Bank", location: "Hyderabad", type: "Blood Bank" },
  ];

  const bloodInventory = [
    { type: "A+", status: "Available" },
    { type: "A-", status: "Low" },
    { type: "B+", status: "Available" },
    { type: "B-", status: "Unavailable" },
    { type: "O+", status: "Available" },
    { type: "O-", status: "Low" },
    { type: "AB+", status: "Available" },
    { type: "AB-", status: "Unavailable" },
  ];

  const getStatusStyles = (status) => {
    switch (status) {
      case "Available": return "bg-green-50 text-green-600 border-green-200";
      case "Low": return "bg-orange-50 text-orange-600 border-orange-200";
      case "Unavailable": return "bg-red-50 text-red-500 border-red-200";
      default: return "bg-gray-50 text-gray-400";
    }
  };

  return (
    <>
      <Navbar />

      <div className="min-h-[85vh] bg-[#f8f9fb] px-6 py-10">
        <div className="mb-10 max-w-7xl mx-auto">
          <h1 className="text-5xl font-black text-gray-900">
            Provider Dashboard
          </h1>
          <p className="text-gray-500 mt-2">
            Manage live blood inventory across your facility.
          </p>
        </div>


        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-8">
          

          <aside className="w-full md:w-1/3 space-y-4">
            {hospitals.map((hosp) => (
              <button
                key={hosp.name}
                onClick={() => setSelectedHospital(hosp.name)}
                className={`w-full flex items-start gap-4 p-5 rounded-3xl border transition-all text-left ${
                  selectedHospital === hosp.name
                    ? "bg-[#fef2f2] border-[#ea384c] shadow-sm"
                    : "bg-white border-gray-200 hover:border-gray-300"
                }`}
              >
                <div className={`p-3 rounded-2xl ${selectedHospital === hosp.name ? "bg-white" : "bg-gray-100"}`}>
                  <Building2 
                    size={24} 
                    className={selectedHospital === hosp.name ? "text-[#ea384c]" : "text-gray-400"} 
                  />
                </div>
                <div>
                  <h3 className="font-bold text-gray-800">{hosp.name}</h3>
                  <p className="text-sm text-gray-500">
                    {hosp.location} • {hosp.type}
                  </p>
                </div>
              </button>
            ))}
          </aside>


          <section className="flex-1 bg-white rounded-[2.5rem] p-8 border shadow-sm">
            <div className="flex justify-between items-end mb-10">
              <div>
                <h2 className="text-4xl font-bold text-gray-900">{selectedHospital}</h2>
                <p className="text-gray-400 mt-1">
                  {hospitals.find(h => h.name === selectedHospital)?.location} • Last updated 4 min ago
                </p>
              </div>
              <button className="flex items-center gap-2 px-5 py-2 border border-gray-200 rounded-xl font-bold text-sm hover:bg-gray-50 transition shadow-sm">
                <RefreshCw size={18} /> Sync
              </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {bloodInventory.map((item) => (
                <div key={item.type} className="p-8 rounded-[2rem] border border-gray-100 bg-gray-50/30">
                  <div className="flex justify-between items-center mb-8">
                    <span className="text-4xl font-black text-[#ea384c]">
                      {item.type}
                    </span>
                    <span className={`px-4 py-1 rounded-full text-[10px] font-bold border uppercase tracking-wider flex items-center gap-2 ${getStatusStyles(item.status)}`}>
                      <span className="w-1.5 h-1.5 rounded-full bg-current" />
                      {item.status}
                    </span>
                  </div>

                  <div className="flex p-1 bg-gray-200/50 rounded-2xl">
                    {["Available", "Low", "Unavailable"].map((status) => (
                      <button
                        key={status}
                        className={`flex-1 py-3 rounded-xl text-[10px] font-bold uppercase transition-all ${
                          item.status === status
                            ? "bg-[#ea384c] text-white shadow-md"
                            : "text-gray-400 hover:text-gray-600"
                        }`}
                      >
                        {status}
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Dashboard;