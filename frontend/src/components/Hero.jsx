import React from 'react'
import { Link } from 'react-router-dom'
import { assets, onImgError } from '../assets/assets'

const Hero = () => {
  return (
    // Full-bleed: breaks out of the page padding to span the entire viewport width
    <section className='mx-[calc(50%-50vw)] w-screen'>
      <div className='grid md:grid-cols-2 md:min-h-[88vh]'>

        {/* Left — text */}
        <div className='order-2 md:order-1 flex items-center bg-[#fdf8f0] px-6 sm:px-12 lg:px-24 py-16 md:py-0'>
          <div className='text-[#3a322b] max-w-xl'>
            <div className='flex items-center gap-3 mb-5'>
              <span className='w-10 h-[2px] bg-[#c8902a]' />
              <span className='font-medium text-sm tracking-[0.25em] text-[#9c7b3f] uppercase'>Heritage Woven in Elegance</span>
            </div>
            <h1 className='prata-regular text-5xl lg:text-7xl leading-[1.05] mb-6'>Filipiniana <br /> &amp; Barong</h1>
            <p className='text-gray-600 leading-relaxed mb-8 max-w-md'>
              Handcrafted terno gowns, Maria Clara dresses, and piña Barong Tagalog for weddings, fiestas, and every proud Filipino celebration.
            </p>
            <Link to='/collection' className='group inline-flex items-center gap-3'>
              <span className='font-semibold text-sm tracking-[0.15em] text-[#3a322b]'>SHOP THE COLLECTION</span>
              <span className='w-10 h-[2px] bg-[#3a322b] group-hover:w-16 transition-all duration-300' />
            </Link>

            {/* Two action buttons */}
            <div className='flex flex-wrap gap-4 mt-8'>
              <Link
                to='/collection'
                className='bg-[#3a322b] text-white px-8 py-3.5 rounded-full text-sm font-semibold tracking-wide hover:bg-[#26211d] active:scale-95 transition-all'
              >
                Shop Filipiniana
              </Link>
              <Link
                to='/contact'
                className='border border-[#c8902a] text-[#3a322b] px-8 py-3.5 rounded-full text-sm font-semibold tracking-wide hover:bg-[#c8902a] hover:text-white active:scale-95 transition-all'
              >
                Book a Fitting
              </Link>
            </div>
          </div>
        </div>

        {/* Right — image */}
        <div className='order-1 md:order-2 relative min-h-[48vh] md:min-h-full bg-[#26211d]'>
          <img
            src={assets.heroPhoto}
            onError={onImgError}
            alt='Filipiniana terno'
            className='absolute inset-0 w-full h-full object-cover object-top'
            loading='eager'
          />
        </div>

      </div>
    </section>
  )
}

export default Hero
