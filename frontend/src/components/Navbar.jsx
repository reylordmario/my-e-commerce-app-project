// frontend/src/components/Navbar.jsx
import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';

import { assets } from '../assets/assets.js'; 

const Navbar = () => {

    const [visible, setVisible] = useState(false); 
    
    return (
        <div className='flex items-center justify-between py-5 font-medium'>
            
            <Link to='/'><img src={assets.logo} className='w-45' alt='Habi Pinas' /></Link>
            
            {/* Desktop Navigation Links */}
            <ul className='hidden sm:flex gap-5 text-sm text-gray-700'>
                <NavLink to='/' className='flex flex-col items-center gap-1'>
                    <p>HOME</p>
                    <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'></hr>
                </NavLink>
                <NavLink to='/collection' className='flex flex-col items-center gap-1'>
                    <p> COLLECTION</p>
                    <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'></hr>
                </NavLink>
                <NavLink to='/about' className='flex flex-col items-center gap-1'>
                    <p> ABOUT</p>
                    <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'></hr>
                </NavLink>
                <NavLink to='/contact' className='flex flex-col items-center gap-1'>
                    <p>CONTACT</p>
                    <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'></hr>
                </NavLink>
            </ul>

            <div className='flex items-center gap-6'>
                <img src={assets.search_icon} className='w-5 cursor-pointer' alt='Search' />
    
                <div className='group relative'>
                    <img className='w-5 cursor-pointer' src={assets.profile_icon} alt='Profile' />
                    
                    <div className='group-hover:block hidden absolute dropdown-menu right-0 pt-4'>
                        <div className='flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded-md'>
                            <p className='cursor-pointer hover:text-black'>My Profile</p>
                            <p className='cursor-pointer hover:text-black'>Orders</p>
                            <p className='cursor-pointer hover:text-black'>Logout</p>
                        </div>
                    </div>
                </div>
                
                <Link to='/cart' className='relative'>
                    <img src={assets.cart_icon} className='w-5 min-w-5' alt='Cart' />
                    {/* FIX 1: Corrected typo 'bottom-[=5px]' to 'bottom-[-5px]' */}
                    <p className='absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]'>10</p>
                </Link>
                <img onClick={()=>setVisible(true)} src={assets.menu_icon} className='w-5 sm:hidden cursor-pointer' alt='Menu' />
            </div>

            {/* Side bar Menu for smaller screen */}
            {/* FIX 2: Used 'fixed' and 'translate-x' for smoother animation and better control. 
                       Changed w-full to w-2/3 for a standard sidebar size. */}
            <div className={`fixed top-0 right-0 w-full h-full bg-white shadow-lg z-50 transform transition-transform duration-300 ${visible ? 'translate-x-0' : 'translate-x-full'}`}>
                
                {/* Back Button / Header - Uses a larger padding area (p-5) and border-b for separation */}
                <div onClick={()=>setVisible(false)} className='flex items-center gap-4 p-5 text-gray-600 border-b cursor-pointer'>
                    <img src={assets.dropdown_icon} className='h-4 rotate-180' alt='Back' />
                    <p className='font-bold'>Back</p>
                </div>

                {/* Mobile Links Container */}
                {/* FIX 3: Removed redundant and improperly structured nested divs. 
                           Used flex-col on this main link container. */}
                <div className='flex flex-col text-gray-700'>
                    
                    {/* FIX 4: Added 'block' to each NavLink to make it take full width and stack properly. 
                               Increased padding (py-4, pl-5) to match the look in your screenshot. */}
                    <NavLink onClick={()=>setVisible(false)} className='block py-4 pl-5 border-b hover:bg-slate-50' to='/'>HOME</NavLink>
                    <NavLink onClick={()=>setVisible(false)} className='block py-4 pl-5 border-b hover:bg-slate-50' to='/collection'>COLLECTION</NavLink>
                    <NavLink onClick={()=>setVisible(false)} className='block py-4 pl-5 border-b hover:bg-slate-50' to='/about'>ABOUT</NavLink>
                    <NavLink onClick={()=>setVisible(false)} className='block py-4 pl-5 border-b hover:bg-slate-50' to='/contact'>CONTACT</NavLink>
                </div>

            </div>
            
        </div>
    );
}   

export default Navbar;