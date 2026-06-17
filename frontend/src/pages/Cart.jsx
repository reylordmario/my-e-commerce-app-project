import React, { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import { assets, onImgError } from '../assets/assets';
import Title from '../components/Title';
import CartTotal from '../components/CartTotal';

const peso = (n) => Number(n).toLocaleString('en-PH');

const Cart = () => {
  const { currency, getCartLines, updateQuantity, navigate } = useContext(ShopContext);
  const lines = getCartLines();

  return (
    <div className='border-t pt-14 min-h-[60vh]'>
      <div className='text-2xl mb-3'>
        <Title text1={'YOUR'} text2={'CART'} />
      </div>

      {lines.length === 0 ? (
        <div className='text-center py-20'>
          <p className='text-gray-500 text-lg'>Your cart is empty.</p>
          <button onClick={() => navigate('/collection')} className='mt-6 bg-[#7a0f1e] text-white px-8 py-3 text-sm rounded hover:bg-[#5e0f24]'>
            BROWSE THE COLLECTION
          </button>
        </div>
      ) : (
        <>
          <div>
            {lines.map((line) => (
              <div key={line.product._id + line.size} className='py-4 border-t border-b text-gray-700 grid grid-cols-[4fr_0.5fr_0.5fr] sm:grid-cols-[4fr_2fr_0.5fr] items-center gap-4'>
                <div className='flex items-start gap-6'>
                  <img src={line.product.image[0]} onError={onImgError} alt={line.product.name} className='w-16 sm:w-20 aspect-[3/4] object-cover object-top rounded' />
                  <div>
                    <p className='text-xs sm:text-lg font-medium'>{line.product.name}</p>
                    <div className='flex items-center gap-5 mt-2'>
                      <p className='text-[#7a0f1e] font-medium'>{currency}{peso(line.product.price)}</p>
                      <p className='px-2 sm:px-3 sm:py-1 border bg-slate-50 rounded text-xs'>{line.size}</p>
                    </div>
                  </div>
                </div>
                <div className='flex items-center'>
                  <button onClick={() => updateQuantity(line.product._id, line.size, line.quantity - 1)} className='border w-7 h-8 rounded hover:bg-gray-100'>−</button>
                  <span className='w-10 text-center'>{line.quantity}</span>
                  <button onClick={() => updateQuantity(line.product._id, line.size, line.quantity + 1)} className='border w-7 h-8 rounded hover:bg-gray-100'>+</button>
                </div>
                <img onClick={() => updateQuantity(line.product._id, line.size, 0)} src={assets.bin_icon} alt='remove' className='w-4 sm:w-5 cursor-pointer mr-4' />
              </div>
            ))}
          </div>

          <div className='flex justify-end my-20'>
            <div className='w-full sm:w-[450px]'>
              <CartTotal />
              <div className='w-full text-end'>
                <button onClick={() => navigate('/order')} className='bg-[#7a0f1e] text-white text-sm my-8 px-8 py-3 rounded hover:bg-[#5e0f24] active:scale-95 transition-all'>
                  PROCEED TO CHECKOUT
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
