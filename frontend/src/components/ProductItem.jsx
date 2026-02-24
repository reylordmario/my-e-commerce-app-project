import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
// import {Link} from 'react-router-dom' <-- Removed duplicate import
import { ShopContext } from '../context/ShopContext'; // <--- Added missing ShopContext import
// /src/components/ProductItem.jsx
// ... component code ...



const ProductItem = ({id, image, name, price}) => {
    const {currency} = useContext(ShopContext);
    
    return (
    // Corrected template literal syntax from single quotes to backticks (`)
    <Link to={`/product/${id}`} className='text-gray-700 cursor-pointer'> 
        <div className='overflow-hidden'>
            {/* Added check for image array being present */}
            <img src={image && image[0]} alt={name} className='hover:scale-110 transition ease-in-out'/>
            <p className='pt-3 pb-1 text-sm'>{name}</p>
            <p className='text-sm font-medium'>{currency}{price}</p>
        </div>
    </Link>
    )
}

export default ProductItem;