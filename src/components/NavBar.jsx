"use client";   
import Link from "next/link";
import React, {useState} from "react";
import NavLink from "./NavLink";
 
const navLinks = [
    {
        title: "About",
        path: "#about"
    },
    {
        title: "Projects",
        path: "#projects"
    },
    {
        title: "Contact",
        path: "#contact"
    }
]

const NavBar = () => {
    return (
        <nav className="hidden sm:block fixed top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-100">
            <div className="flex flex-wrap items-center justify-between mx-auto px-10 py-5">
                <Link href={"/"} className="text-xl md:text-3xl text-white font-semibold">THARUN BALAJI</Link>
                
                {/* Desktop Menu */}
                <div className="menu hidden md:block md:w-auto" id="navbar">
                    <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
                        {
                            navLinks.map((link, index) => (
                                <li key={index}>
                                    <NavLink href={link.path} title={link.title} />
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default NavBar;