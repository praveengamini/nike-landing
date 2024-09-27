import React from 'react'
import { useState } from 'react'
import {headerLogo} from '../assets/images/'
import {hamburger} from '../assets/icons/'
import { navLinks } from '../constants'
export let truthValue = false;
const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    truthValue = isMenuOpen;
  };
  return (
        <header className="padding-x py-8 
        absolute z-10 w-full">
           <nav className=" flex justify-between item-center
           max-container">
            <a href="/">
                <img src={headerLogo} alt="Logo"
                    width={130}
                    height={29}
                 />
            </a>
            <ul className='flex-1 flex justify-center items-start-center
            gap-16 max-lg:hidden'>
                {
                    navLinks.map((item)=>{
                        return(
                            <li key={item.label}>
                            <a href={item.href}
                               className="
                               text-lg
                               text-slate-gray">
                                {item.label}
                            </a>
                        </li>
                        )
                    })
                }
            </ul>
            <div className="hidden max-lg:block">
            <button onClick={toggleMenu}>
            <img src={hamburger} alt="hamburger" width={25} height={25} />
          </button>            
            </div>
            {isMenuOpen && (
          <div className="absolute top-16 right-0 w-full bg-gray-200 shadow-lg rounded-md ">
            <ul className='flex flex-col items-center p-4 gap-4 '>
              {navLinks.map((item) => (
                <li key={item.label} className="w-full text-center">
                  <a href={item.href} className="text-lg text-slate-gray block w-full p-2 hover:bg-gray-100 rounded-md transition
                  "  onClick={() => setIsMenuOpen(false)}>
                    {item.label} 
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
            </nav> 
        </header>
  )
}

export default Nav
