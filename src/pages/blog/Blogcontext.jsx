import React from 'react'
import { Link } from 'react-router-dom';
import Portfoliomenu from '../../assets/images/portfolioservices.jpg';
import portfolioc from '../../assets/images/portfoliomenu.jpg';
import cybersecurity from '../../assets/images/cybersecurity.jpg';

import { Webfooter } from '../Projects/component/Webfooter';
import { Bloglist } from './Bloglist';

export const Blogcontext = () => {
  return (
    <>
    <div className='py-20 xl:py-24 px-5'>
        <div className='xl:max-w-1220px 2xl:max-w-1440 mx-auto space-y-12 md:space-y-20'>
            <div className='flex flex-col sm:flex-row justify-between'>
                <h1 className='font-Noto text-4xl lg:text-5xl xl:text-100px max-w-500px xl:leading-24 font-normal text-Webblack'>We always think</h1>
                <div className='flex flex-col gap-8 max-w-72'>
                    <p className='font-Kanit text-base font-normal text-Webblack'>Add the best talent on the market, an agile skilled management & seamless involvement</p>
                    <div className='grid grid-cols-2 gap-4'>
                        <div className='space-y-1 border-r border-black/15 pr-3'>
                            <h4 className='text-4xl  text-Webblack font-Kanit'>400<span className='font-thin ml-1.5'>+</span></h4>
                            <span className='text-base font-normal text-Davy font-Kanit'>Total post</span>
                        </div>
                        <div className='space-y-1 pl-3'>
                            <h4 className='text-4xl  text-Webblack font-Kanit'>99<span className='font-thin ml-1.5'>+</span></h4>
                            <span className='text-base font-normal text-Davy font-Kanit'>Blog writer</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-y-4 lg:gap-4 lg:max-h-600px overflow-hidden'>
                <div className='col-span-2'>
                    <img src={Portfoliomenu} className='w-full h-full' alt='portfoliomenu'/>
                </div>
                <div className='gap-y-4 grid grid-cols-2 gap-4 lg:flex lg:flex-col'>
                    <div className='relative  md:h-80 overflow-hidden'>
                        <img src={portfolioc} className='w-full h-full object-cover object-center' alt='portfolioc'/>
                    </div>
                    <div className='relative md:h-80 overflow-hidden'>
                        <img src={cybersecurity} className='w-full h-full object-cover' alt='cybersecurity'/>
                    </div>
                </div>
            </div>
            <div className="py-20 xl:py-24 px-5">
       
            <div className='grid grid-cols-1 xl:grid-cols-3 gap-y-7 md:gap-10 xl:gap-4'>
                <div className='space-y-3 xl:space-y-4 xl:max-w-400px'>
                    <h2 className='text-3xl lg:text-5xl xl:text-7xl  text-Webblack font-Noto xl:leading-20'>Latest insight the Yoks!</h2>
                    <p className='text-sm md:text-base text-Davy font-Kanit'>Add the best talent on the market, an agile skilled management & seamless involvement</p>
                </div>
                <div className='col-span-2 space-y-8'>
                    <Bloglist/>
                    <ul className='flex gap-6'>
                        <li>
                            <Link to="/" className='border transition-all duration-500 ease-in-out hover:border-Eerieblack rounded-full w-14 flex items-center justify-center h-14 font-medium  border-Eerieblack/15 text-base text-Davy'>01</Link>
                        </li>
                        <li>
                            <Link to="/" className='border transition-all duration-500 ease-in-out hover:border-Eerieblack rounded-full w-14 flex items-center justify-center h-14 font-medium  border-Eerieblack/15 text-base text-Davy'>02</Link>
                        </li>
                        <li>
                            <Link to="/" className='border transition-all duration-500 ease-in-out hover:border-Eerieblack rounded-full w-14 flex items-center justify-center h-14 font-medium  border-Eerieblack/15 text-base text-Davy'>03</Link>
                        </li>
                        <li>
                            <Link to="/" className='border transition-all duration-500 ease-in-out hover:border-Eerieblack rounded-full w-14 flex items-center justify-center h-14 font-medium  border-Eerieblack/15 text-base text-Davy'>04</Link>
                        </li>
                    </ul>
                </div>
            </div>
      </div>
            
        </div>
    </div>
    
    <Webfooter/>
    </>
  )
}
