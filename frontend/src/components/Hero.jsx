import React from 'react'

const Hero = () => {
  return (
    // On small screens (sm:), the items will be in a row (flex-row). Below sm, they'll stack (flex-col is default for flex).
    <div className='flex flex-col sm:flex-row border border-gray-400'>
      
      {/* Hero Left Side (Text) */}
      {/* Takes full width on small screens, half width on medium screens and up */}
      <div className='w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-10'>
        <div className=' text-[#414141]'>
          <div className='flex items-center gap-2'>
            <p className='w-8 md:w-11 h-[2px] bg-[#414141]'></p>
            <p className='font-medium text-sm md:text-base'>OUR BESTSELLERS</p>
          </div>
          <h1 className='prata-regular text-3xl sm:py-3 lg:text-5xl leading-relaxed'>Latest Arrivals</h1>
          <div className='flex items-center gap-2'> 
            {/* Corrected typo: item-center to items-center */}
            <p className='font-semibold text-sm md:text-base'>SHOP NOW!</p>
            <p className='w-8 md:w-11 h-[2px] bg-[#414141]'></p>
          </div>
        </div>
      </div>
      
      {/* Hero Right Side (Image) */}
      {/* Takes full width on small screens, half width on medium screens and up */}
      <div className='w-full sm:w-1/2'>
        {/* The image should take the full width of its container (w-full) */}
        <img src='/src/assets/hero_img.png' alt='Hero Image' className='w-full object-cover'/> 
        {/* Changed className from 'w-full sm:w-1/2' to 'w-full object-cover' */}
      </div>
      
    </div>
  )
}

export default Hero