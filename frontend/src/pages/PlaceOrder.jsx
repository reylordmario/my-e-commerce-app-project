import React, { useContext, useState } from 'react'
import { toast } from 'react-toastify'
import { ShopContext } from '../context/ShopContext'
import Title from '../components/Title'
import CartTotal from '../components/CartTotal'

const PAYMENTS = [
  { id: 'GCash', label: 'GCash', tag: 'Pay via GCash', color: '#0d6efd', initials: 'G' },
  { id: 'Maya', label: 'Maya', tag: 'Pay via Maya', color: '#1aae9f', initials: 'M' },
  { id: 'COD', label: 'Cash on Delivery', tag: 'Pay when it arrives', color: '#7a0f1e', initials: '₱' },
]

const Field = ({ name, value, onChange, placeholder, type = 'text', half }) => (
  <input
    required
    name={name}
    value={value}
    onChange={onChange}
    type={type}
    placeholder={placeholder}
    className={`border border-gray-300 rounded py-2 px-3.5 outline-none focus:border-[#7a0f1e] ${half ? 'w-full' : 'w-full'}`}
  />
)

const PlaceOrder = () => {
  const { getCartLines, placeOrder, navigate, user } = useContext(ShopContext)
  const [method, setMethod] = useState('GCash')
  const [submitting, setSubmitting] = useState(false)
  const [form, setForm] = useState({
    firstName: user?.name?.split(' ')[0] || '',
    lastName: '',
    email: user?.email || '',
    phone: '',
    street: '',
    barangay: '',
    city: '',
    province: '',
    zip: '',
  })

  const onChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }))

  const onSubmit = (e) => {
    e.preventDefault()
    if (getCartLines().length === 0) {
      toast.error('Your cart is empty.')
      navigate('/collection')
      return
    }
    setSubmitting(true)
    const address = { ...form, name: `${form.firstName} ${form.lastName}`.trim() }

    const finalize = () => {
      const order = placeOrder({ address, paymentMethod: method })
      setSubmitting(false)
      if (order) {
        toast.success(method === 'COD' ? 'Order placed! Pay upon delivery.' : `Payment via ${method} confirmed!`)
        navigate('/orders')
      }
    }

    if (method === 'COD') {
      finalize()
    } else {
      toast.info(`Connecting to ${method}...`)
      setTimeout(finalize, 1400) // simulate a payment redirect/confirmation
    }
  }

  return (
    <form onSubmit={onSubmit} className='flex flex-col sm:flex-row justify-between gap-8 pt-10 sm:pt-14 min-h-[70vh] border-t'>

      {/* Delivery information */}
      <div className='flex flex-col gap-4 w-full sm:max-w-[480px]'>
        <div className='text-xl sm:text-2xl my-3'>
          <Title text1={'DELIVERY'} text2={'INFORMATION'} />
        </div>
        <div className='flex gap-3'>
          <Field name='firstName' value={form.firstName} onChange={onChange} placeholder='First name' half />
          <Field name='lastName' value={form.lastName} onChange={onChange} placeholder='Last name' half />
        </div>
        <Field name='email' value={form.email} onChange={onChange} placeholder='Email address' type='email' />
        <Field name='phone' value={form.phone} onChange={onChange} placeholder='Mobile number (09XXXXXXXXX)' />
        <Field name='street' value={form.street} onChange={onChange} placeholder='House no. & Street' />
        <Field name='barangay' value={form.barangay} onChange={onChange} placeholder='Barangay' />
        <div className='flex gap-3'>
          <Field name='city' value={form.city} onChange={onChange} placeholder='City / Municipality' half />
          <Field name='province' value={form.province} onChange={onChange} placeholder='Province' half />
        </div>
        <Field name='zip' value={form.zip} onChange={onChange} placeholder='ZIP code' />
      </div>

      {/* Order summary + payment */}
      <div className='mt-8 w-full sm:max-w-[420px]'>
        <div className='min-w-full'>
          <CartTotal />
        </div>

        <div className='mt-10'>
          <Title text1={'PAYMENT'} text2={'METHOD'} />
          <div className='flex flex-col gap-3 mt-4'>
            {PAYMENTS.map((p) => (
              <div
                key={p.id}
                onClick={() => setMethod(p.id)}
                className={`flex items-center gap-4 border rounded-lg px-4 py-3 cursor-pointer transition-all ${method === p.id ? 'border-[#7a0f1e] bg-[#fdeaea]' : 'border-gray-300 hover:border-gray-400'}`}
              >
                <span className={`w-3 h-3 rounded-full border ${method === p.id ? 'bg-[#7a0f1e] border-[#7a0f1e]' : 'border-gray-400'}`}></span>
                <span className='w-9 h-9 rounded-full flex items-center justify-center text-white font-bold' style={{ background: p.color }}>{p.initials}</span>
                <div>
                  <p className='font-medium text-sm'>{p.label}</p>
                  <p className='text-xs text-gray-500'>{p.tag}</p>
                </div>
              </div>
            ))}
          </div>

          <div className='w-full text-end mt-8'>
            <button
              type='submit'
              disabled={submitting}
              className='bg-[#7a0f1e] text-white px-16 py-3 text-sm rounded hover:bg-[#5e0f24] active:scale-95 transition-all disabled:opacity-60'
            >
              {submitting ? 'PROCESSING...' : 'PLACE ORDER'}
            </button>
          </div>
        </div>
      </div>
    </form>
  )
}

export default PlaceOrder
