import React, { useState } from 'react'
import '../index.css'
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'
const Search = ({ data = [] }) => {
    const [bloodGroup, setBloodGroup] = useState('A+')
    const [location, setLocation] = useState('')
    const [distance, setDistance] = useState(100)
    const [filteredResults, setFilteredResults] = useState([])
    const [hasSearched, setHasSearched] = useState(false)

    const handleSearch = (e) => {
        e.preventDefault()

        const results = data.filter(item => {
            const matchBlood = item.blood_group === bloodGroup
            const matchLocation = location === '' || item.city.toLowerCase().includes(location.toLowerCase())
            const matchDistance = item.distance_km <= distance
            return matchBlood && matchLocation && matchDistance
        })

        setFilteredResults(results)
        setHasSearched(true)
    }

    return (
        <>
        <Navbar />
        <div className='max-w-full mx-auto px-10 py-8 min-h-[85vh]'>
            <h1 className='text-4xl font-sans mb-1 font-bold'>
                <span className='text-red-600'>Find blood</span> near you
            </h1>
            <p className='text-[#666666] font-normal pb-6'>Filter by blood group, city and distance</p>

            <form onSubmit={handleSearch} className='border-2 border-gray-200 rounded-lg p-6 shadow-lg flex flex-wrap gap-6 items-end w-full bg-white'>
                <div className='flex flex-col gap-1'>
                    <label className='text-[#666666] font-medium'>Blood Group</label>
                    <select
                        value={bloodGroup}
                        onChange={(e) => setBloodGroup(e.target.value)}
                        className='border-2 border-gray-200 rounded-lg p-2 shadow-sm w-48 outline-none focus:border-red-500 transition-colors cursor-pointer'
>
                        <option>A+</option>
                        <option>A-</option>
                        <option>B+</option>
                        <option>B-</option>
                        <option>O+</option>
                        <option>O-</option>
                        <option>AB+</option>
                        <option>AB-</option>
                    </select>
                </div>

                <div className='flex flex-col gap-1 flex-1'>
                    <label className='text-[#666666] font-medium'>Location</label>
                    <input
                        type='text'
                        placeholder='City eg. Mumbai - Leave blank for all cities'
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        className='border-2 border-gray-200 rounded-lg p-2 shadow-sm w-full outline-none focus:border-red-500 transition-colors'
                    />
                </div>

                <div className='flex flex-col gap-1'>
                    <label className='text-[#666666] font-medium'>Max Distance ({distance} km)</label>
                    <select
                        value={distance}
                        onChange={(e) => setDistance(Number(e.target.value))}
                        className='border-2 border-gray-200 rounded-lg p-2 shadow-sm w-44 outline-none focus:border-red-500 transition-colors cursor-pointer'
                    >
                        <option value={5}>5 km</option>
                        <option value={10}>10 km</option>
                        <option value={20}>20 km</option>
                        <option value={50}>50 km</option>
                        <option value={100}>100 km</option>
                    </select>
                </div>

                <button type="submit" className='bg-red-600 text-white font-semibold rounded-lg p-2.5 px-10 shadow-md hover:bg-red-700 transition-all hover:scale-105 active:scale-95 h-[46px]'>
                    Search
                </button>
            </form>

            <div className='mt-12'>
                {hasSearched ? (
                    <>
                        <h2 className='text-2xl font-bold mb-6'>
                            {filteredResults.length} {filteredResults.length === 1 ? 'result' : 'results'} found
                        </h2>
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                            {filteredResults.map((item, index) => (
                                <div key={index} className='border border-gray-200 rounded-xl p-5 shadow-md hover:shadow-lg transition-shadow bg-white'>
                                    <div className='flex justify-between items-start mb-4'>
                                        <div>
                                            <h3 className='text-xl font-bold text-gray-900'>{item.hospital}</h3>
                                            <p className='text-gray-500 flex items-center gap-1'>
                                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                                                {item.city} ({item.distance_km} km)
                                            </p>
                                        </div>
                                        <span className={`px-3 py-1 rounded-full text-sm font-bold ${item.available ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                                            {item.available ? 'Available' : 'Unavailable'}
                                        </span>
                                    </div>

                                    <div className='flex items-center gap-4 mb-6'>
                                        <div className='bg-red-50 text-red-600 px-4 py-2 rounded-lg border border-red-100'>
                                            <span className='text-xs uppercase font-bold block'>Group</span>
                                            <span className='text-xl font-black'>{item.blood_group}</span>
                                        </div>
                                        <div className='text-gray-400 text-sm'>
                                            Last updated: {item.last_updated_min} mins ago
                                        </div>
                                    </div>

                                    <div className='flex gap-2 mt-auto'>
                                        <a href={`tel:${item.contact}`} className='flex-1 text-center py-2 border-2 border-gray-100 rounded-lg font-semibold hover:bg-gray-50 transition-colors'>
                                            Call
                                        </a>
                                        <a href={item.directions_url} target="_blank" rel="noopener noreferrer" className='flex-1 text-center py-2 bg-gray-900 text-white rounded-lg font-semibold hover:bg-black transition-colors'>
                                            Directions
                                        </a>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </>
                ) : (
                    <div className='text-center py-20 bg-gray-50 rounded-2xl border-2 border-dashed border-gray-200 '>
                        <p className='text-gray-400 text-lg'>Enter filters above and click search to find blood donors near you.</p>
                    </div>
                )}
            </div>
        </div>
        <Footer/>
        </>
    )
}

export default Search