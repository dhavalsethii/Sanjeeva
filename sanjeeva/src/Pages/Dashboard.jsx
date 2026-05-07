import React, { useState } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const Dashboard = () => {
  const [requests, setRequests] = useState([
    {
      id: 1,
      name: "Rahul Sharma",
      blood: "A+",
      units: 2,
      hospital: "AIIMS Delhi",
      contact: "+91-9876543210",
      status: "Pending",
    },
    {
      id: 2,
      name: "Priya Singh",
      blood: "O+",
      units: 1,
      hospital: "Apollo Hospital",
      contact: "+91-9123456780",
      status: "Accepted",
    },
  ]);

  const updateStatus = (id, newStatus) => {
    setRequests((prev) =>
      prev.map((req) =>
        req.id === id ? { ...req, status: newStatus } : req
      )
    );
  };

  const total = requests.length;
  const pending = requests.filter((r) => r.status === "Pending").length;
  const accepted = requests.filter((r) => r.status === "Accepted").length;

  return (
    <>
      <Navbar />

      <div className="min-h-[85vh] bg-[#f7f7f7] p-8">

        {/* HEADER */}
        <h1 className="text-4xl font-black mb-8">
          Provider Dashboard
        </h1>

        {/* STATS */}
        <div className="grid grid-cols-3 gap-6 mb-10">
          
          <div className="bg-white p-6 rounded-2xl shadow-sm border">
            <p className="text-gray-500 text-sm">Total Requests</p>
            <h2 className="text-3xl font-bold">{total}</h2>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-sm border">
            <p className="text-gray-500 text-sm">Pending</p>
            <h2 className="text-3xl font-bold text-yellow-600">{pending}</h2>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-sm border">
            <p className="text-gray-500 text-sm">Accepted</p>
            <h2 className="text-3xl font-bold text-green-600">{accepted}</h2>
          </div>

        </div>

        {/* REQUESTS */}
        <div className="grid gap-6">
          {requests.map((req) => (
            <div
              key={req.id}
              className="bg-white p-6 rounded-2xl shadow-sm border hover:shadow-md transition"
            >

              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold">{req.name}</h2>

                <span
                  className={`px-3 py-1 rounded-full text-sm font-bold ${
                    req.status === "Pending"
                      ? "bg-yellow-100 text-yellow-600"
                      : "bg-green-100 text-green-600"
                  }`}
                >
                  {req.status}
                </span>
              </div>

              <div className="grid grid-cols-2 gap-4 text-gray-600">
                <p><strong>Blood:</strong> {req.blood}</p>
                <p><strong>Units:</strong> {req.units}</p>
                <p><strong>Hospital:</strong> {req.hospital}</p>
                <p><strong>Contact:</strong> {req.contact}</p>
              </div>

              <div className="mt-5 flex gap-3">
                <button
                  onClick={() => updateStatus(req.id, "Accepted")}
                  className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg"
                >
                  Accept
                </button>

                <button
                  onClick={() => updateStatus(req.id, "Rejected")}
                  className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg"
                >
                  Reject
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>

      <Footer />
    </>
  );
};

export default Dashboard;