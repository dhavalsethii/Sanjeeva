import React from "react";
import { useNavigate } from "react-router-dom";

const SOS = () => {
  const navigate = useNavigate();

  const handleSOS = () => {
    const sosData = {
      blood: "O+",  
      city: "Delhi", 
    };

    console.log("SOS Triggered:", sosData);

    navigate("/search", { state: sosData });
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-red-50">

      <h1 className="text-5xl font-bold text-red-600 mb-6">
        🚨 SOS Emergency
      </h1>

      <p className="text-gray-600 mb-10 text-center">
        Tap the button to instantly alert nearby hospitals
      </p>

      <button
        onClick={handleSOS}
        className="bg-red-600 hover:bg-red-700 text-white px-10 py-5 rounded-full text-2xl font-bold shadow-lg"
      >
        SEND SOS
      </button>

    </div>
  );
};

export default SOS;