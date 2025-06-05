import React from 'react'
import { Link } from 'react-router-dom'
import Rightarrow from '../../../assets/images/arrow-right-half-light.webp';
import Webcontactare from '../../../assets/images/webcontactarea.png';
export const Webcontactarea = () => {
  return (
    <>
     <div className='pt-0 py-20 2xl:py-24 px-5'>
        <div className='xl:max-w-1220px 2xl:max-w-1440 mx-auto'>
            <div className='bg-linear-to-r from-Webblack to-gray-800 px-8 py-24 2xl:py-36 text-center space-y-4 relative overflow-hidden'>
                <div className='absolute -right-6 opacity-50 xl:opacity-100 -top-16 z-0'>
                    <img src={Webcontactare} alt='webcontactare'/>
                </div>
                <h2 className='text-4xl lg:text-5xl xl:text-80px font-Teko font-bold relative z-10 uppercase text-white text-center xl:leading-20'>Let’s start your <br/>experience with Yoks</h2>
                <Link to="/" className='font-medium text-white z-10 font-Kanit text-base no-underline relative before:contact-[""] before:left-0 before:bottom-0 before:w-full before:h-0.5 before:bg-transparent before:transition-all before:ease-in-out before:duration-300 hover:before:bg-white before:absolute before:inline-flex  inline-flex items-center gap-3 '>Get Started Now <img src={Rightarrow} alt="Rightarrow"/> </Link>
            </div>
        </div>
   </div>
    </>
  )
}
