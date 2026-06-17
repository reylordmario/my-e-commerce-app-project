import React from 'react'

const Footer = () => {
  return (
    <div>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>

        {/* Left Section: Brand & Description */}
        <div>
            <p className='mb-5 text-2xl font-bold tracking-tight'><span className='text-[#7a0f1e]'>Habi</span> <span className='text-[#c8902a]'>Pinas</span></p>
            <p className='w-full md:w-2/3 text-gray-600'>
                Heritage woven in elegance. Handcrafted Filipiniana ternos, Maria Clara gowns, and piña Barong Tagalog for every proud Filipino celebration.
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
                <li>(02) 8123-4567</li>
                <li>kamusta@habipinas.ph</li>
            </ul>
        </div>

      </div>

      {/* Bottom Copyright Section */}
      <div className='w-full'>
          <hr className='border-none h-[0.75px] bg-gray-700 mx-[-10vw] sm:mx-[-5vw]' />
          <p className='py-5 text-sm text-center'>
            Copyright 2026 © habipinas.ph — All Rights Reserved.
          </p>
      </div>

    </div>
  )
}

export default Footer
