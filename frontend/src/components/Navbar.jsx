// frontend/src/components/Navbar.jsx
import React, { useContext, useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Home, Shirt, Info, Phone, Package, X, LogOut, LogIn } from 'lucide-react';
import { assets } from '../assets/assets.js';
import { ShopContext } from '../context/ShopContext';

const MOBILE_LINKS = [
  { to: '/', label: 'Home', Icon: Home },
  { to: '/collection', label: 'Collection', Icon: Shirt },
  { to: '/about', label: 'About', Icon: Info },
  { to: '/contact', label: 'Contact', Icon: Phone },
  { to: '/orders', label: 'My Orders', Icon: Package },
];

const Navbar = () => {
    const [visible, setVisible] = useState(false);
    const { getCartCount, user, setUser, navigate, setShowSearch } = useContext(ShopContext);

    const close = () => setVisible(false);
    const logout = () => { setUser(null); close(); navigate('/login'); };

    return (
        <header className='sticky top-0 z-50 mx-[calc(50%-50vw)] w-screen bg-white/85 backdrop-blur-md border-b border-[#efe2cd]'>
            <div className='flex items-center justify-between py-4 font-medium px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>

                <Link to='/' className='flex items-center gap-2'>
                    <span className='text-2xl font-bold tracking-tight text-[#7a0f1e]'>Habi</span>
                    <span className='text-2xl font-bold tracking-tight text-[#c8902a]'>Pinas</span>
                </Link>

                {/* Desktop links */}
                <ul className='hidden sm:flex gap-6 text-sm text-gray-700'>
                    {['/', '/collection', '/about', '/contact'].map((path, i) => (
                        <NavLink key={path} to={path} className={({ isActive }) => `flex flex-col items-center gap-1 ${isActive ? 'text-[#7a0f1e]' : ''}`}>
                            {({ isActive }) => (
                                <>
                                    <p>{['HOME', 'COLLECTION', 'ABOUT', 'CONTACT'][i]}</p>
                                    <hr className={`w-2/4 border-none h-[1.5px] bg-[#7a0f1e] ${isActive ? '' : 'hidden'}`} />
                                </>
                            )}
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
            </div>

            {/* ---------- Floating mobile menu ---------- */}
            {/* Dim + blur backdrop */}
            <div
                onClick={close}
                className={`sm:hidden fixed inset-0 z-40 bg-black/40 backdrop-blur-sm transition-opacity duration-300 ${visible ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
            />

            {/* Floating card */}
            <div
                className={`sm:hidden fixed z-50 top-4 bottom-4 right-4 w-72 max-w-[80vw] bg-[#fdfaf4] rounded-3xl shadow-2xl border border-[#efe2cd] flex flex-col overflow-hidden transition-all duration-300 ease-out ${visible ? 'translate-x-0 opacity-100' : 'translate-x-[120%] opacity-0'}`}
            >
                {/* header */}
                <div className='flex items-center justify-between px-6 py-5 bg-gradient-to-r from-[#7a0f1e] to-[#3a0d18]'>
                    <span className='text-xl font-bold tracking-tight'>
                        <span className='text-white'>Habi</span> <span className='text-[#f2c14e]'>Pinas</span>
                    </span>
                    <button onClick={close} aria-label='Close menu' className='w-9 h-9 flex items-center justify-center rounded-full bg-white/15 text-white hover:bg-white/25 transition-colors'>
                        <X size={18} />
                    </button>
                </div>

                {/* links */}
                <nav className='flex-1 flex flex-col gap-1 p-4'>
                    {MOBILE_LINKS.map(({ to, label, Icon }) => (
                        <NavLink
                            key={to}
                            to={to}
                            onClick={close}
                            className={({ isActive }) =>
                                `flex items-center gap-4 px-4 py-3.5 rounded-2xl transition-all ${isActive ? 'bg-[#7a0f1e] text-white shadow-md' : 'text-gray-700 hover:bg-[#f3e9d8]'}`
                            }
                        >
                            <Icon size={20} strokeWidth={1.6} />
                            <span className='text-sm font-medium tracking-wide'>{label}</span>
                        </NavLink>
                    ))}
                </nav>

                {/* footer / account */}
                <div className='p-4 border-t border-[#efe2cd]'>
                    {user ? (
                        <button onClick={logout} className='w-full flex items-center justify-center gap-2 py-3 rounded-2xl border border-[#7a0f1e] text-[#7a0f1e] text-sm font-medium hover:bg-[#7a0f1e] hover:text-white transition-colors'>
                            <LogOut size={18} /> Logout
                        </button>
                    ) : (
                        <button onClick={() => { close(); navigate('/login'); }} className='w-full flex items-center justify-center gap-2 py-3 rounded-2xl bg-[#7a0f1e] text-white text-sm font-medium hover:bg-[#5e0f24] transition-colors'>
                            <LogIn size={18} /> Login
                        </button>
                    )}
                </div>
            </div>
        </header>
    );
};

export default Navbar;
