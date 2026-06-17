import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title'
import ProductItem from './ProductItem'

const RelatedProducts = ({ category, currentId }) => {
  const { products } = useContext(ShopContext)
  const [related, setRelated] = useState([])

  useEffect(() => {
    if (products.length) {
      setRelated(products.filter((p) => p.category === category && p._id !== currentId).slice(0, 5))
    }
  }, [products, category, currentId])

  return (
    <div className='my-24'>
      <div className='text-center text-3xl py-2'>
        <Title text1={'YOU MAY'} text2={'ALSO LIKE'} />
      </div>
      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
        {related.map((item) => (
          <ProductItem key={item._id} id={item._id} image={item.image} name={item.name} price={item.price} />
        ))}
      </div>
    </div>
  )
}

export default RelatedProducts
