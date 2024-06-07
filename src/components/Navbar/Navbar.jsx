import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
        <nav className='p-3 bg-[#212529]'>
            <div className="container">
                <div className="flex justify-between items-center">
                    <div className="text-[25px] font-bold font-mon text-[#FFDD00]">Logo</div>
                    <div className="menu">
                        <ul className='flex gap-10 text-[15px] font-mon font-semibold text-[#FFFFFF]'>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/about">About</Link></li>
                            <li><Link to="/blog">Blog</Link></li>
                            <li><Link to="/help">Help</Link></li>
                            <li><Link to="/contact">Contact</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
            
        </nav>
    </>
  )
}

export default Navbar
