"use client"

import Link from 'next/link'
import React, { useState } from 'react'
import NavLink from '../heroSection/NavLink'
import { FaBars, FaCross, FaXmark, } from "react-icons/fa6";
import MenuOverlay from './MenuOverlay';



const navLinks = [
    {
        title: "About",
        path: "#about",
    },
    {
        title: "Projects",
        path: "#projects",
    },
    {
        title: "Contact",
        path: "#contact",
    },

]


const Navbar = () => {
    const [navbarOpen, setNavbarOpen] = useState(true)

    return (
        <div className=' w-[100%]  fixed top-0 left-0 z-10 bg-[#121212] bg-opacity-15 '>
            <nav className='  flex flex-wrap  items-center justify-between mx-10 lg:mx-20 py-8'>
                <Link href={"/"} className=' text-2xl font-bold'>Logo</Link>
                <div className='mobile-menu block md:hidden'>
                    {
                        navbarOpen ? (

                            <button onClick={() => setNavbarOpen(true)} className=' text-slate-200 text-2xl'>
                                < FaXmark />
                            </button>

                        ) : (
                            <button onClick={() => setNavbarOpen(false)} className=' text-slate-200 text-2xl'>

                                <FaBars />
                            </button>
                        )
                    }

                </div>

                <div className='menu hidden md:block lg:block md:w-auto' id='navbar'>
                    <ul className=' flex p-4 md:p-0 md:flex-row md space-x-8'>
                        {navLinks.map((link, index) => (
                            <li key={index}>
                                <NavLink href={link.path} title={link.title} />
                            </li>
                        ))}
                    </ul>
                </div>
                {navbarOpen ? <MenuOverlay link={navLinks} /> : ""}

            </nav>
        </div>
    )
}

export default Navbar
