import React from 'react'
import Navbar from '../components/Navbar/Navbar'

const About = () => {
  return (
    <>
        <Navbar/>
        <div className='w-full h-screen bg-[#222831] flex justify-center items-center'>
            <h1 className='text-7xl font-bold text-[#9AC8CD] font-mon'>About</h1>
        </div>
    </>
  )
}

export default About