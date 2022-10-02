import React from 'react'
import Typed from 'react-typed'

function Hero() {
  return (
    <div className='text-white mt-[-100px] justify-center items-center flex flex-col mx-auto text-center  w-full h-screen max-w-[800px]'>
        <div className=' '>
            <p className='text-[#00df9a] font-bold'>
                growing with data analytics
            </p>
            <h1 className='md:text-6xl sm:text-5xl text-4xl font-bold md:py-6'>
                Grow with data.
            </h1>
            <div>
                <p className='md:text-3xl sm:text-2xl text-xl font-bold'>Fast, flexible finance for <Typed className='px-2' strings={['BTB', 'BTC' , 'SASS']} typeSpeed={120} backSpeed={140} loop/></p>
                
            </div>
            <p className='text-gray-600 font-bold sm:p-2 sm:text-1.5xl p-1 text-[10px]'>Monitor your data analytics to increase revenue for BTB, BTC & SASS platforms.</p>
            <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 py-3 px-6 mx-auto text-black'>Get Started</button>
        </div>
    </div>
  )
}

export default Hero
