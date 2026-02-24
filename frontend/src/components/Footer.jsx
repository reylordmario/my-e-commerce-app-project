import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
        
        {/* Left Section: Logo & Description */}
        <div>
            <img src={assets.logo} className='mb-5 w-32' alt="logo" />
            <p className='w-full md:w-2/3 text-gray-600'>
                Elevate your style with TrendyThreads - where fashion meets affordability. Discover the latest trends and timeless classics, all in one place.
            </p>
        </div>

        {/* Center Section: Company Links */}
        <div>
            <p className='text-xl font-medium mb-5'>COMPANY</p>
            <ul className='flex flex-col gap-1 text-gray-600'>
                <li>Home</li>
                <li>About us</li>
                <li>Delivery</li>
                <li>Privacy policy</li>
            </ul>
        </div>

        {/* Right Section: Contact Info */}
        <div>
            <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
            <ul className='flex flex-col gap-1 text-gray-600'>
                <li>+1-212-456-7890</li>
                <li>contact@foreveryou.com</li>
            </ul>
        </div>

      </div>

      {/* Bottom Copyright Section */}
      <div className='w-full'>
          {/* This line uses negative margins to break out of the parent padding */}
          <hr className='border-none h-[0.75px] bg-gray-700 mx-[-10vw] sm:mx-[-5vw]' />
          
          <p className='py-5 text-sm text-center'>
            Copyright 2026 @ foreveryou.com - All Right Reserved.
          </p>
      </div>

    </div>
  )
}

export default Footer