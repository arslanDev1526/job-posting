import React from 'react'

const Contact = () => {
  return (
 <div className='bg-green-900 flex flex-col items-center justify-center gap-2 my-16 py-5'> 
    <span className='bg-green-100 px-4 py-1 text-sm  rounded-sm mt-5'>Contact Us</span>
    <h1 className='text-3xl md:text-4xl font-bold py-5 text-white text-center'>Got a question?</h1>
    <p className='text-white text-center px-5 text-base md:text-lg md:max-w-[34rem]'>We're here to help. Check out our <span className='font-medium underline cursor-pointer'>FAQs</span>, send us an <span className='font-medium underline cursor-pointer'>email</span> or call us at <span className='font-medium underline cursor-pointer'>0320-2416230</span></p>
 </div>
  )
}

export default Contact