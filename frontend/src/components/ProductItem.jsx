import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';
import { onImgError } from '../assets/assets';

const peso = (n) => Number(n).toLocaleString('en-PH')

const ProductItem = ({ id, image, name, price }) => {
    const { currency } = useContext(ShopContext);

    return (
        <Link to={`/product/${id}`} className='text-gray-700 cursor-pointer group'>
            <div className='overflow-hidden rounded-lg bg-[#f3ece1] aspect-[3/4]'>
                <img
                    src={image && image[0]}
                    alt={name}
                    onError={onImgError}
                    loading='lazy'
                    className='w-full h-full object-cover object-top group-hover:scale-110 transition-transform ease-in-out duration-500'
                />
            </div>
            <p className='pt-3 pb-1 text-sm truncate'>{name}</p>
            <p className='text-sm font-medium text-[#7a0f1e]'>{currency}{peso(price)}</p>
        </Link>
    )
}

export default ProductItem;
