import React, { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';

const Collections = () => {
  // Accessing the 'products' array from the context
  const { products } = useContext(ShopContext);

  return (
    <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t'>
      
      {/* Filter Options Sidebar */}
      <div className='min-w-60'>
        <p className='my-2 text-xl flex items-center cursor-pointer gap-2'>FILTERS</p>
        {/* You can add Category/Type filters here later */}
      </div>

      {/* Right Side: Product Display */}
      <div className='flex-1'>
        <div className='flex justify-between text-base sm:text-2xl mb-4'>
           <h2 className='text-gray-700'>ALL <span className='text-gray-500 font-medium'>COLLECTIONS</span></h2>
        </div>

        {/* Map Products */}
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6'>
          {
            products.map((item, index) => (
              <div key={index} className='text-gray-700 cursor-pointer'>
                <div className='overflow-hidden'>
                  <img className='hover:scale-110 transition ease-in-out' src={item.image[0]} alt={item.name} />
                </div>
                <p className='pt-3 pb-1 text-sm'>{item.name}</p>
                <p className='text-sm font-medium'>{item.price}</p>
              </div>
            ))
          }
        </div>
      </div>

    </div>
  );
};

export default Collections;