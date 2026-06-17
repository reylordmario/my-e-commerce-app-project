import React from 'react'
import { Link } from 'react-router-dom'
import { assets, onImgError } from '../assets/assets'

const Hero = () => {
  return (
    <div className='flex flex-col sm:flex-row border border-[#e7d9c4] rounded-lg overflow-hidden'>

      {/* Hero Left Side (Text) */}
      <div className='w-full sm:w-1/2 flex items-center justify-center py-12 sm:py-10 bg-[#fdf8f0]'>
        <div className='text-[#3a0d18] px-6'>
          <div className='flex items-center gap-2'>
            <p className='w-8 md:w-11 h-[2px] bg-[#c8902a]'></p>
            <p className='font-medium text-sm md:text-base text-[#7a0f1e] tracking-wider'>HERITAGE WOVEN IN ELEGANCE</p>
          </div>
          <h1 className='prata-regular text-3xl sm:py-3 lg:text-5xl leading-relaxed font-semibold'>Filipiniana &amp; Barong</h1>
          <p className='max-w-md text-sm text-gray-600 mb-4'>Handcrafted terno gowns, Maria Clara dresses, and piña Barong Tagalog for weddings, fiestas, and every proud Filipino celebration.</p>
          <Link to='/collection' className='inline-flex items-center gap-2 group'>
            <p className='font-semibold text-sm md:text-base'>SHOP THE COLLECTION</p>
            <p className='w-8 md:w-11 h-[2px] bg-[#7a0f1e] group-hover:w-14 transition-all'></p>
          </Link>
        </div>
      </div>

      {/* Hero Right Side (Image) */}
      <div className='w-full sm:w-1/2 bg-[#2a0a10]'>
        <img src={assets.heroPhoto} onError={onImgError} alt='Filipiniana terno' className='w-full h-full max-h-[28rem] object-cover object-top' loading='eager' />
      </div>

    </div>
  )
}

export default Hero
