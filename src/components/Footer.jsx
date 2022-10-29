import React from 'react'

function Footer() {
  return (
    <div>
        <div className='py-[100px] px-10 flex align-middle'>
            <div className='grid md:grid-cols-4 gap-[140px] md-gap-[50px] mx-auto'>
                <div className='flex flex-col '>
                    <h2 className='font-bold py-2 text-white'>SOLUTIONS</h2>
                    <p className='text-white'>Marketing</p>
                    <p className='text-white'>Analytics</p>
                    <p className='text-white'>Commerce</p>
                    <p className='text-white'>Data</p>
                    <p className='text-white'>Cloud</p>
                </div>
                <div className='flex flex-col '>
                    <h2 className='font-bold py-2 text-white'>SUPPORT</h2>
                    <p className='text-white'>Pricing</p>
                    <p className='text-white'>Documentation</p>
                    <p className='text-white'>Guides</p>
                    <p className='text-white'>API Status</p>
                </div>
                <div className='flex flex-col '>
                    <h2 className='font-bold py-2 text-white'>COMPANY</h2>
                    <p className='text-white'>About</p>
                    <p className='text-white'>Blog</p>
                    <p className='text-white'>Job</p>
                    <p className='text-white'>Press</p>
                    <p className='text-white'>Partners</p>
                </div>
                <div className='flex flex-col '>
                    <h2 className='font-bold py-2 text-white'>LEGAL</h2>
                    <p className='text-white'>Clain</p>
                    <p className='text-white'>Privact</p>
                    <p className='text-white'>Polices</p>
                    <p className='text-white'>Terms</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer