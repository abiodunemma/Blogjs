"use client"

import React, {  useState } from 'react'
import '../styles/login.css';
import Image from 'next/image';
import Link from 'next/link';
import Button from '@/components/Button';
import { NAV_LINKS } from '@/constants/header';



const navbar = () => {
    //State to manage the visibility of the menu
    const [isMenuOpen, setIsMenuOpen] =  useState(false);

    //Toogle
    const toggleMenu = () => {
        setIsMenuOpen((prev) => !prev)
    };
  return (
 <nav className=' py-4 flexBetween max-container
 padding-container relative-z-30  '>
    <Link href="/">
    <Image src="/OIP (1).jpg" alt='logo' width={74} height={29} />
    </Link>
   
   <ul className='hidden h-full gap-12 lg:flex'>
   {NAV_LINKS.map((link) =>(
    <Link href={link.href} key={link.key}
    className='regular-16 text-gray-50 fill-current
    cursor-pointer pb-1.5 h-full transition-all hover:font-bold'>
        {link.label}
    </Link>
   ))}

   </ul>

  

  <Image
  src="menu.svg"
  alt="menu"
  width={32}
  height={32}
className='inline-block cursor-pointer lg:hidden'
onClick={toggleMenu}

/>
    {/* Mobile Menu */}
    {isMenuOpen && (
        <div className="absolute top-0 left-0 w-3/4 bg-gray-800 text-white h-full p-4">
          <ul className="flex flex-col gap-4">
            {NAV_LINKS.map((link) => (
              <Link
                href={link.href}
                key={link.key}
                className="text-white hover:font-bold"
                onClick={() => setIsMenuOpen(false)} // Close menu when a link is clicked
              >
                {link.label}
              </Link>
            ))}
          </ul>
        </div>
      )}


 </nav>
  )
}

export default navbar