import React from 'react'

const Contact = () => {
  return (
 <div className='bg-green-800 flex flex-col items-center justify-center gap-2 mt-5 py-5'> 
    <span className='bg-green-300 p-2 rounded-sm mt-5'>Contact Us</span>
    <h1 className='text-5xl font-bold py-7 text-white'>Got a question?</h1>
    <p className='text-white text-center'>We're here to help. Check out our <span className='font-medium underline cursor-pointer'>FAQs</span>, send us an <span className='font-medium underline cursor-pointer'>email</span> or call us at <span className='font-medium underline cursor-pointer'>0320-2416230</span></p>
 </div>
  )
}

export default Contact