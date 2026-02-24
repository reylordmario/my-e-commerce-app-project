import React, { useContext, useEffect, useState } from 'react' // <--- 1. Added useState
import { ShopContext } from '../context/ShopContext'
import Title from './Title';
// Assuming ProductItem uses a default export based on your previous error resolution.
// LatestCollection.jsx (Line 5)

import ProductItem from './ProductItem'; // <--- MUST NOT have curly braces {}


const LatestCollection = () => {
    // 2. Removed 'use' from the import list - it's not needed here.
    
    const { products } = useContext(ShopContext);
    // 3. useState must be imported and then used.
    const [latestProducts, setLatestProducts] = useState([]);
    
    useEffect(() => {
        // This will run once after the initial render.
        // It slices the first 10 products from your context data.
        if (products && products.length > 0) {
            setLatestProducts(products.slice(0, 10));
        }
    }, [products]) // 4. Added 'products' to the dependency array.

    return (
        <div className='my-10'>
            <div className='text-center py-8 text-3xl'>
                <Title text1={'LATEST'} text2={'COLLECTIONS'}/>
                <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
                    Discover our latest collections featuring unique and world-class original Filipino clothing. 
                </p>
            </div>
            {/* Products Rendering */}
            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
                {
                    latestProducts.map((item, index) => (
                        // It's better to use a unique ID from the data as the key, not the index.
                        <ProductItem 
                            key={index} 
                            id={item._id} 
                            image={item.image} 
                            name={item.name} 
                            price={item.price}
                        />
                    ))
                }
            </div>
        </div>
    )
}

export default LatestCollection