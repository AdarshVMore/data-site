import React from 'react'
import single from '../Assets/single.png'
import double from '../Assets/double.png'
import triple from '../Assets/triple.png'


function Cards() {
    return (
        <div className='bg-white py-[10rem] px-4'>
            <div className='max-w-[1240px]  grid md:grid-cols-3 gap-8 mx-auto'>
                <div className='w-[100%] shadow-xl flex flex-col p-4 my-4 hover:scale-105 duration-300 cursor-pointer'>
                    <img className='mx-auto mt-[-2rem] w-20 bg-white' width={20} src={single} alt="/" />
                    <p className='text-2xl font-bold text-center py-8'>Single user</p>
                    <h1 className='text-center font-bold text-4xl'>$145</h1>
                    <div className='text-center font-medium'>
                        <p className='py-2 border-b mx-8 mt-8'>500 GB Storage</p>
                        <p className='py-2 border-b mx-8 '>1 User Allowed</p>
                        <p className='py-2 border-b mx-8 '>send upto 2GB</p>
                    </div>
                    <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 py-3 px-6 mx-auto text-black'>Start Trial</button>
                </div>
                <div className='w-[100%] shadow-xl flex flex-col p-4 my-4 hover:scale-105 duration-300 cursor-pointer'>
                    <img className='mx-auto mt-[-2rem] w-20 bg-white' width={20} src={double} alt="/" />
                    <p className='text-2xl font-bold text-center py-8'>Single user</p>
                    <h1 className='text-center font-bold text-4xl'>$145</h1>
                    <div className='text-center font-medium'>
                        <p className='py-2 border-b mx-8 mt-8'>500 GB Storage</p>
                        <p className='py-2 border-b mx-8 '>1 User Allowed</p>
                        <p className='py-2 border-b mx-8 '>send upto 2GB</p>
                    </div>
                    <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 py-3 px-6 mx-auto text-black'>Start Trial</button>
                </div>
                <div className='w-[100%] shadow-xl flex flex-col p-4 my-4 hover:scale-105 duration-300 cursor-pointer'>
                    <img className='mx-auto mt-[-2rem] w-20 bg-white' width={20} src={triple} alt="/" />
                    <p className='text-2xl font-bold text-center py-8'>Single user</p>
                    <h1 className='text-center font-bold text-4xl'>$145</h1>
                    <div className='text-center font-medium'>
                        <p className='py-2 border-b mx-8 mt-8'>500 GB Storage</p>
                        <p className='py-2 border-b mx-8 '>1 User Allowed</p>
                        <p className='py-2 border-b mx-8 '>send upto 2GB</p>
                    </div>
                    <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 py-3 px-6 mx-auto text-black'>Start Trial</button>
                </div>
            </div>
        </div>
    )
}

export default Cards