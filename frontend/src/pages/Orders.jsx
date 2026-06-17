import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import { onImgError } from '../assets/assets'
import Title from '../components/Title'

const peso = (n) => Number(n).toLocaleString('en-PH')

const Orders = () => {
  const { orders, currency, navigate } = useContext(ShopContext)

  return (
    <div className='border-t pt-16 min-h-[60vh]'>
      <div className='text-2xl'>
        <Title text1={'MY'} text2={'ORDERS'} />
      </div>

      {orders.length === 0 ? (
        <div className='text-center py-20'>
          <p className='text-gray-500 text-lg'>You have no orders yet.</p>
          <button onClick={() => navigate('/collection')} className='mt-6 bg-[#7a0f1e] text-white px-8 py-3 text-sm rounded hover:bg-[#5e0f24]'>
            START SHOPPING
          </button>
        </div>
      ) : (
        <div className='flex flex-col gap-6 mt-4'>
          {orders.map((order) => (
            <div key={order.id} className='border rounded-lg p-5'>
              <div className='flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b pb-3 mb-3'>
                <div>
                  <p className='font-medium'>Order #{order.id}</p>
                  <p className='text-xs text-gray-500'>{order.date}</p>
                </div>
                <div className='flex items-center gap-3'>
                  <span className='text-xs px-3 py-1 rounded-full bg-slate-100 text-gray-600'>{order.paymentMethod}</span>
                  <span className='flex items-center gap-2 text-sm'>
                    <span className='w-2 h-2 rounded-full bg-green-500'></span>
                    {order.status}
                  </span>
                </div>
              </div>

              {order.items.map((it) => (
                <div key={it.id + it.size} className='flex items-start gap-4 py-2'>
                  <img src={it.image} onError={onImgError} alt={it.name} className='w-14 aspect-[3/4] object-cover object-top rounded' />
                  <div className='flex-1 text-sm'>
                    <p className='font-medium'>{it.name}</p>
                    <p className='text-gray-500 text-xs mt-1'>
                      {currency}{peso(it.price)} · Size {it.size} · Qty {it.quantity}
                    </p>
                  </div>
                  <p className='text-sm font-medium'>{currency}{peso(it.price * it.quantity)}</p>
                </div>
              ))}

              <div className='flex justify-between border-t pt-3 mt-2 text-sm'>
                <p className='text-gray-500'>Shipping to {order.address?.city || '—'} · +{currency}{peso(order.deliveryFee)} shipping</p>
                <p className='font-semibold'>Total: {currency}{peso(order.total)}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default Orders
