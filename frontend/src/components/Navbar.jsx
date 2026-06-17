// frontend/src/components/Navbar.jsx
import React, { useContext, useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { assets } from '../assets/assets.js';
import { ShopContext } from '../context/ShopContext';

const Navbar = () => {
    const [visible, setVisible] = useState(false);
    const { getCartCount, user, setUser, navigate, setShowSearch } = useContext(ShopContext);

    const logout = () => {
        setUser(null);
        navigate('/login');
    };

    return (
        <div className='flex items-center justify-between py-5 font-medium'>

            <Link to='/' className='flex items-center gap-2'>
                <span className='text-2xl font-bold tracking-tight text-[#7a0f1e]'>Habi</span>
                <span className='text-2xl font-bold tracking-tight text-[#c8902a]'>Pinas</span>
            </Link>

            {/* Desktop Navigation Links */}
            <ul className='hidden sm:flex gap-5 text-sm text-gray-700'>
                {['/', '/collection', '/about', '/contact'].map((path, i) => (
                    <NavLink key={path} to={path} className='flex flex-col items-center gap-1'>
                        <p>{['HOME', 'COLLECTION', 'ABOUT', 'CONTACT'][i]}</p>
                        <hr className='w-2/4 border-none h-[1.5px] bg-[#7a0f1e] hidden' />
                    </NavLink>
                ))}
            </ul>

            <div className='flex items-center gap-6'>
                <img onClick={() => { setShowSearch(true); navigate('/collection'); }} src={assets.search_icon} className='w-5 cursor-pointer' alt='Search' />

                <div className='group relative'>
                    <img className='w-5 cursor-pointer' onClick={() => navigate(user ? '/orders' : '/login')} src={assets.profile_icon} alt='Profile' />

                    <div className='group-hover:block hidden absolute dropdown-menu right-0 pt-4 z-20'>
                        <div className='flex flex-col gap-2 w-40 py-3 px-5 bg-slate-100 text-gray-600 rounded-md shadow-lg'>
                            <p className='text-xs text-gray-400'>{user ? `Hi, ${user.name}` : 'Welcome'}</p>
                            <p onClick={() => navigate('/orders')} className='cursor-pointer hover:text-black'>My Orders</p>
                            {user
                                ? <p onClick={logout} className='cursor-pointer hover:text-black'>Logout</p>
                                : <p onClick={() => navigate('/login')} className='cursor-pointer hover:text-black'>Login</p>}
                        </div>
                    </div>
                </div>

                <Link to='/cart' className='relative'>
                    <img src={assets.cart_icon} className='w-5 min-w-5' alt='Cart' />
                    <p className='absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-[#7a0f1e] text-white aspect-square rounded-full text-[8px]'>{getCartCount()}</p>
                </Link>
                <img onClick={() => setVisible(true)} src={assets.menu_icon} className='w-5 sm:hidden cursor-pointer' alt='Menu' />
            </div>

            {/* Side bar menu for small screens */}
            <div className={`fixed top-0 right-0 w-full h-full bg-white shadow-lg z-50 transform transition-transform duration-300 ${visible ? 'translate-x-0' : 'translate-x-full'}`}>
                <div onClick={() => setVisible(false)} className='flex items-center gap-4 p-5 text-gray-600 border-b cursor-pointer'>
                    <img src={assets.dropdown_icon} className='h-4 rotate-180' alt='Back' />
                    <p className='font-bold'>Back</p>
                </div>
                <div className='flex flex-col text-gray-700'>
                    <NavLink onClick={() => setVisible(false)} className='block py-4 pl-5 border-b hover:bg-slate-50' to='/'>HOME</NavLink>
                    <NavLink onClick={() => setVisible(false)} className='block py-4 pl-5 border-b hover:bg-slate-50' to='/collection'>COLLECTION</NavLink>
                    <NavLink onClick={() => setVisible(false)} className='block py-4 pl-5 border-b hover:bg-slate-50' to='/about'>ABOUT</NavLink>
                    <NavLink onClick={() => setVisible(false)} className='block py-4 pl-5 border-b hover:bg-slate-50' to='/contact'>CONTACT</NavLink>
                    <NavLink onClick={() => setVisible(false)} className='block py-4 pl-5 border-b hover:bg-slate-50' to='/orders'>MY ORDERS</NavLink>
                </div>
            </div>

        </div>
    );
};

export default Navbar;
