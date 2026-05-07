import React from 'react'
import '../index.css'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'

const EmergencyRequest = () => {
  return (
    <>
    <Navbar variant="light" />
<div className="min-h-[85vh] bg-[#f7f7f7] pb-12">
  
  <div className="flex flex-col items-center justify-center pt-12 pb-8">
    
    <span className="bg-red-100 text-red-600 font-bold tracking-wide px-4 py-1.5 rounded-2xl text-xs mb-4">
      EMERGENCY
    </span>

    <h1 className="text-6xl font-black text-black leading-none">
      Request Blood
    </h1>

    <p className="text-[#666666] text-lg mt-3">
      Fill the form to alert nearby hospitals & verified donors.
    </p>

  </div>

  
  <div className="max-w-2xl mx-auto bg-white border border-gray-200 rounded-3xl p-8 shadow-sm">
    
    <div className="mb-6">
      <label className="block text-xs font-bold tracking-wide text-gray-600 mb-2 uppercase">
        Patient Name
      </label>

      <input
        type="text"
        placeholder="Full name"
        className="w-full h-14 rounded-xl border border-gray-200 px-4 text-lg outline-none"
      />
    </div>

    <div className="grid grid-cols-2 gap-5 mb-6">
      
      <div>
        <label className="block text-xs font-bold tracking-wide text-gray-600 mb-2 uppercase">
          Blood Type
        </label>

        <select className="w-full h-14 rounded-xl border border-gray-200 px-4 text-lg outline-none">
          <option>O+</option>
          <option>A+</option>
          <option>B+</option>
          <option>AB+</option>
        </select>
      </div>

      <div>
        <label className="block text-xs font-bold tracking-wide text-gray-600 mb-2 uppercase">
          Units Required
        </label>

        <input
          type="number"
          defaultValue="1"
          className="w-full h-14 rounded-xl border border-gray-200 px-4 text-lg outline-none"
        />
      </div>

    </div>

    <div className="mb-6">
      <label className="block text-xs font-bold tracking-wide text-gray-600 mb-2 uppercase">
        Contact Number
      </label>

      <input
        type="text"
        placeholder="+91 ..."
        className="w-full h-14 rounded-xl border border-gray-200 px-4 text-lg outline-none"
      />
    </div>


    <div className="mb-6">
      <label className="block text-xs font-bold tracking-wide text-gray-600 mb-2 uppercase">
        Hospital Name
      </label>

      <input
        type="text"
        placeholder="Where the patient is admitted"
        className="w-full h-14 rounded-xl border border-gray-200 px-4 text-lg outline-none"
      />
    </div>

    <button className="w-full h-14 bg-red-600 hover:bg-red-700 transition-all rounded-xl text-white text-lg font-bold">
      Send Emergency Request
    </button>

  </div>
</div>
<Footer />
</>
  )
}
export default EmergencyRequest
