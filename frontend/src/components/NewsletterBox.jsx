import React from 'react'

const NewsletterBox = () => {

    const onSubmitHandler = (event) => {
        event.preventDefault();
        // Action: User feels the submission via an alert
        alert("Thank you for subscribing! Check your email for your 20% discount."); 
    }

  return (
    <div className='text-center'>
        <p className='text-2xl font-medium text-gray-800'>Subscribe now & get 20% off</p>
        <p className='text-gray-400 mt-3'>
            Join our newsletter to stay updated with the latest trends and exclusive offers.
        </p>

        <form onSubmit={onSubmitHandler} className='w-full sm:w-1/2 flex items-center mx-auto my-6 border pl-3'>
            <input 
                className='w-full sm:flex-1 outline-none' 
                type='email' 
                placeholder='Enter your email' 
                required 
            />
            <button 
                type='submit' 
                className='bg-black text-white text-xs px-10 py-4 active:bg-gray-700 cursor-pointer hover:bg-gray-800 transition-all'
            >
                SUBSCRIBE
            </button>
        </form>
    </div>
  )
}

export default NewsletterBox