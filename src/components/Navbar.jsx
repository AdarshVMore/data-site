import React, {useState} from 'react'
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'


function Navbar() {
    const [nav, setNav] = useState(false)

    const handelnav = () => {
        setNav(!nav)
    }
    

    
    return (
        <div className='text-white flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4'>
            <h1 className='w-full text-3xl font-bold text-[#00df9a]'>ADARSH</h1>
            <ul className='md:flex hidden'>
                <li className='p-4'>Home</li>
                <li className='p-4'>Company</li>
                <li className='p-4'>About</li>
                <li className='p-4'>Contact</li>
                <li className='p-4'>Services</li>

            </ul>
            <div onClick={handelnav} className="cursor-pointer block md:hidden"> 
                {!nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20}/>}
            </div>
            <div className={!nav ? ' ease-in-out duration-1000 fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 border-b-gray-900 bg-[#000300] md:hidden' : 'fixed left-[-100%] top-0 w-[60%] h-full border-r border-r-gray-900 border-b-gray-900 bg-[#000300] ease-in-out duration-1000 md:hidden' }>
                <h1 className='w-full text-3xl font-bold  text-[#00df9a] p-4'>ADARSH</h1>
                <ul className='uppercase p-4 '>
                    <li className='p-4 border-gray-600 border-b'>Home</li>
                    <li className='p-4 border-gray-600 border-b'>Company</li>
                    <li className='p-4 border-gray-600 border-b'>About</li>
                    <li className='p-4 border-gray-600 border-b'>Contact</li>
                    <li className='p-4'>Services</li>
                </ul>
            </div>
        </div>

     )
}

export default Navbar