import React from 'react'
import Navbar from '../components/Navbar/Navbar'

const Home = () => {
  return (
    <>
        <Navbar/>
        <div className='w-full h-screen bg-[#1F2544] flex justify-center items-center'>
            <h1 className='text-7xl font-bold text-[#FFD0EC] font-mon'>Home</h1>
        </div>
    </>
  )
}

export default Home