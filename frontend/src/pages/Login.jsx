import React, { useContext, useState } from 'react'
import { toast } from 'react-toastify'
import { ShopContext } from '../context/ShopContext'

const Login = () => {
  const { setUser, navigate } = useContext(ShopContext)
  const [mode, setMode] = useState('Login')
  const [form, setForm] = useState({ name: '', email: '', password: '' })

  const onChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }))

  const onSubmit = (e) => {
    e.preventDefault()
    if (!form.email || !form.password || (mode === 'Sign Up' && !form.name)) {
      toast.error('Please fill in all fields.')
      return
    }
    const name = mode === 'Sign Up' ? form.name : form.email.split('@')[0]
    setUser({ name, email: form.email })
    toast.success(mode === 'Sign Up' ? 'Account created!' : 'Welcome back!')
    navigate('/')
  }

  return (
    <form onSubmit={onSubmit} className='flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-20 gap-4 text-gray-800'>
      <div className='inline-flex items-center gap-2 mb-2 mt-10'>
        <p className='prata-regular text-3xl'>{mode}</p>
        <hr className='border-none h-[1.5px] w-8 bg-[#7a0f1e]' />
      </div>

      {mode === 'Sign Up' && (
        <input name='name' value={form.name} onChange={onChange} type='text' placeholder='Name' className='w-full px-3 py-2 border border-gray-800 rounded' />
      )}
      <input name='email' value={form.email} onChange={onChange} type='email' placeholder='Email' className='w-full px-3 py-2 border border-gray-800 rounded' />
      <input name='password' value={form.password} onChange={onChange} type='password' placeholder='Password' className='w-full px-3 py-2 border border-gray-800 rounded' />

      <div className='w-full flex justify-between text-sm mt-[-8px] text-gray-600'>
        <p className='cursor-pointer'>Forgot password?</p>
        {mode === 'Login'
          ? <p onClick={() => setMode('Sign Up')} className='cursor-pointer text-[#7a0f1e]'>Create account</p>
          : <p onClick={() => setMode('Login')} className='cursor-pointer text-[#7a0f1e]'>Login here</p>}
      </div>

      <button className='bg-[#7a0f1e] text-white font-light px-8 py-2 mt-4 rounded w-full hover:bg-[#5e0f24]'>
        {mode === 'Login' ? 'Sign In' : 'Sign Up'}
      </button>
    </form>
  )
}

export default Login
