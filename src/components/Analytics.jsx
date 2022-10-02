import React from 'react'
import LAPTOP from '../Assets/LAPTOP.jpg'

function Analytics() {
  return (
    <div className='bg-white py-16 px-4'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
            <img className='w-[500px] mx-auto my-4' src={LAPTOP} alt="/" />
            <div className='flex flex-col justify-center'>
                <p className='text-[#00df9a] font-bold '>DATA ANALYTICS DASHBOARD</p>
                <h1 className='md:text-3xl sm:text-2xl text-xl'>Manage Data Analytics Central</h1>
                <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem amet optio dolor ea harum itaque quam neque sequi odio molestiae, numquam ducimus nulla, repudiandae assumenda cupiditate voluptates blanditiis, ex maxime.
                </p>
                <button className='bg-black w-[200px] rounded-md font-medium my-6 py-3 px-6 mx-auto md:mx-0 text-[#00df9a]'>Get Started</button>
            </div>
        </div>

    </div>
  )
}

export default Analytics