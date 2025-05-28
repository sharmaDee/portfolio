import React from 'react'
import { Link } from 'react-router-dom'
import Rightarrow from '../../../assets/images/arrow-right-half-light.webp';
import Webcontactare from '../../../assets/images/webcontactarea.png';
export const Webcontactarea = () => {
  return (
    <>
     <div className='pt-0 py-24 px-5'>
        <div className='max-w-1440 mx-auto'>
            <div className='bg-linear-to-r from-Webblack to-gray-800 px-8 py-36 text-center space-y-4 relative overflow-hidden'>
                <div className='absolute -right-6 -top-16'>
                    <img src={Webcontactare} alt='webcontactare'/>
                </div>
                <h2 className='text-80px font-Teko font-bold uppercase text-white text-center leading-20'>Let’s start your <br/>experience with Yoks</h2>
                <Link to="/" className='font-medium text-white font-Kanit text-base no-underline relative before:contact-[""] before:left-0 before:bottom-0 before:w-full before:h-0.5 before:bg-transparent before:transition-all before:ease-in-out before:duration-300 hover:before:bg-white before:absolute before:inline-flex  inline-flex items-center gap-3 '>Get Started Now <img src={Rightarrow} alt="Rightarrow"/> </Link>
            </div>
        </div>
   </div>
    </>
  )
}
