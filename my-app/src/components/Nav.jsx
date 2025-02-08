import React from 'react'
import headerLogo from "../assets/images/header-logo.svg"
import menu from "../assets/icons/hamburger.svg"
import { navLinks } from '../constants'
const Nav = () => {
  return (
    <header className='sm:px-16 px-8 py-8 absolute z-10 w-full'>
        <nav className='flex justify-between items-center max-w-screen-xl mx-auto'>
            <a href="#">
                <img src={headerLogo} alt="nike-logo" width={130} height={29} />
            </a>
            <ul className='flex-1 flex justify-center items-center gap-16 max-lg:hidden'>
                {navLinks.map((items) => (
                    <li key={items.label}>
                        <a href={items.href} 
                        className='text-slate-gray font-montserrat leading-normal text-lg'
                        >
                            {items.label}
                        </a>
                    </li>
                ))}
            </ul>
            <div className='hidden max-lg:block'>
                <a href="#">
                    <img src={menu} alt="menu-logo" width={25} height={25} />
                </a>
            </div>
        </nav>
    </header>
  )
}

export default Nav;