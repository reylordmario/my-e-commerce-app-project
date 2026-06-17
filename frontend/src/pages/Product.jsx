import React, { useContext, useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext'
import { assets, onImgError } from '../assets/assets'
import RelatedProducts from '../components/RelatedProducts'

const peso = (n) => n.toLocaleString('en-PH')

const Product = () => {
  const { productId } = useParams()
  const { products, currency, addToCart } = useContext(ShopContext)
  const [data, setData] = useState(null)
  const [image, setImage] = useState('')
  const [size, setSize] = useState('')

  useEffect(() => {
    const found = products.find((p) => p._id === productId)
    if (found) {
      setData(found)
      setImage(found.image[0])
      setSize('')
      window.scrollTo(0, 0)
    }
  }, [productId, products])

  if (!data) {
    return (
      <div className='py-20 text-center text-gray-500'>
        Product not found. <Link to='/collection' className='text-[#7a0f1e] underline'>Back to collection</Link>
      </div>
    )
  }

  return (
    <div className='border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100'>
      <div className='flex gap-12 sm:gap-12 flex-col sm:flex-row'>

        {/* Images */}
        <div className='flex-1 flex flex-col-reverse gap-3 sm:flex-row'>
          <div className='flex sm:flex-col overflow-x-auto sm:overflow-y-auto justify-between sm:justify-normal sm:w-[18.7%] w-full gap-2'>
            {data.image.map((img, i) => (
              <img
                key={i}
                onClick={() => setImage(img)}
                src={img}
                onError={onImgError}
                alt=''
                className={`w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer rounded ${image === img ? 'ring-2 ring-[#7a0f1e]' : ''}`}
              />
            ))}
          </div>
          <div className='w-full sm:w-[80%]'>
            <img src={image} onError={onImgError} alt={data.name} className='w-full h-auto rounded-lg' />
          </div>
        </div>

        {/* Info */}
        <div className='flex-1'>
          <h1 className='font-medium text-2xl mt-2'>{data.name}</h1>
          <div className='flex items-center gap-1 mt-2'>
            {[...Array(4)].map((_, i) => <img key={i} src={assets.star_icon} alt='' className='w-3.5' />)}
            <img src={assets.star_dull_icon} alt='' className='w-3.5' />
            <p className='pl-2 text-sm text-gray-500'>(122)</p>
          </div>
          <p className='mt-5 text-3xl font-semibold text-[#7a0f1e]'>{currency}{peso(data.price)}</p>
          <p className='mt-5 text-gray-500 md:w-4/5'>{data.description}</p>

          <div className='flex flex-col gap-4 my-8'>
            <p className='font-medium'>Select Size</p>
            <div className='flex gap-2 flex-wrap'>
              {data.sizes.map((s) => (
                <button
                  key={s}
                  onClick={() => setSize(s)}
                  className={`border py-2 px-4 bg-gray-100 rounded ${size === s ? 'border-[#7a0f1e] bg-[#fdeaea]' : 'border-gray-300'}`}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          <button
            onClick={() => addToCart(data._id, size)}
            className='bg-[#7a0f1e] text-white px-8 py-3 text-sm rounded hover:bg-[#5e0f24] active:scale-95 transition-all'
          >
            ADD TO CART
          </button>

          <hr className='mt-8 sm:w-4/5' />
          <div className='text-sm text-gray-500 mt-5 flex flex-col gap-1'>
            <p>✓ Authentic Filipino craftsmanship.</p>
            <p>✓ Cash on Delivery available.</p>
            <p>✓ Easy 7-day return &amp; exchange policy.</p>
          </div>
        </div>
      </div>

      <RelatedProducts category={data.category} currentId={data._id} />
    </div>
  )
}

export default Product
