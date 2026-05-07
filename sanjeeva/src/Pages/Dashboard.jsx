import React from 'react'
import '../index.css'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'

const Dashboard = () => {
  return (
    <>
      <Navbar />
      <div className="p-8 min-h-[85vh]">
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <p className="mt-4 text-gray-600">Welcome to your dashboard.</p>
      </div>
      <Footer />
    </>
  )
}

export default Dashboard

