import React from 'react'

const Title = ({text1, text2}) => {
  return (
    // FIX 7: Swapped the order to place the line AFTER the text, matching the image.
    <div className='inline-flex gap-2 items-center mb-3'>
        <p className='text-gray-900 text-3xl font-medium tracking-wide'>{text1} {text2}</p>
        {/* Adjusted size and color of the line */}
        <p className='w-12 sm:w-16 h-[2px] bg-gray-700'></p>
    </div>
  )
}

export default Title