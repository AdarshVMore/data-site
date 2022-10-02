import React from 'react'

function Newsletter() {
  return (
    <div className='w-full py-16 px-10 text-white'>
        <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3 md:justify-between' >
            <h1 className='md:text-3xl sm:text-2xl text-xl font-bold py-2'>Want tips & tricks to optimise your flow?</h1>
            <div className='my-4 md:mr-4'>
                <p className='mb-4'>Sign up to our newsletter and stay up to date.</p>
                <input className='p-3 flex w-full rounded-md text-black' type="text"  placeholder='enter email..'/>
                <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 py-3 px-6 mx-auto text-black'>Notify me</button>
            </div>
        </div>
    </div>
  )
}

export default Newsletter