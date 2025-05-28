import React from 'react'
import Darkeimg from "../../src/assets/images/darke.jpg";
import Messageicon from '../icons/Messageicon';
import Dribbleicon from '../icons/Dribbleicon';
import Linkedinicon from '../icons/Linkedinicon';
export const Sidebar = () => {
  return (
    <>
    <div className='relative pt-20  py-10 xl:py-0 px-5 md:px-10 xl:px-0 max-w-4xl mx-auto'>
    <div className='xl:fixed top-14 left-8 rounded-2xl border border-gray-500 px-5 md:px-8 py-8 md:py-10 max-w-80 min-w-full xl:min-w-80 space-y-6 2xl:min-w-96'>
        <div className='flex items-start justify-between gap-2'>
            <h2 className='text-3xl font-bold text-white max-w-72 w-full'>Darke</h2>
            <p className='break-all text-sm text-white font-light text-right'>Framer Designer & Developer</p>
        </div>
        <div className='relative rounded-3xl overflow-hidden'>
            <img src={Darkeimg} alt='Darkeimg' className='w-full'/>
        </div>
        <div className='space-y-1.5'>
            <h4 className='text-2xl text-center text-white font-normal'>hello@drake.design</h4>
            <p className='text-base text-center text-white font-normal'>Based in Los Angeles, CA</p>
        </div>
        <p className='text-sm text-white/60 text-center font-light'>© 2022 Drake. All Rights Reserved</p>
        <div className='mt-8 space-y-6'>
            {/* <div className='flex justify-center gap-3 '>
                <a href='#' className='w-14 h-14 rounded-full border border-gray-500 flex items-center justify-center'>
                    <Dribbleicon className="fill-gray-500 w-8 h-8"/>
                </a>
                <a href='#' className='w-14 h-14 rounded-full border border-gray-500 flex items-center justify-center'>
                 
                    <Linkedinicon className="fill-gray-500 w-8 h-8"/>
                </a>
            </div> */}
        <button className="bg-linear-to-bl from-Primary hover:shadow-card transition-all ease-in-out duration-300 to-green-700 rounded-full flex items-center gap-3 justify-center px-8 py-3.5 text-white text-base cursor-pointer font-medium w-full">
            <Messageicon className="stroke-white w-4 h-4 stroke-2 hover:stroke-Primary transition-all ease-in-out duration-300"/> Hire Me!</button>
            </div>
    </div>
    </div>
   </>
  )
}
