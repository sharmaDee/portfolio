import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

import Portfoliomenu from '../../assets/images/portfolioservices.jpg';
import portfolioc from '../../assets/images/portfoliomenu.jpg';
import cybersecurity from '../../assets/images/cybersecurity.jpg';
import teamwork from '../../assets/images/teamwork.jpg';

export const Blogcontext = () => {
  return (
    <>
    <div className='py-24 px-5'>
        <div className='max-w-1440 mx-auto space-y-20'>
            <div className='flex justify-between'>
                <h1 className='font-Noto text-100px max-w-500px leading-24 font-normal text-Webblack'>We always think</h1>
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
            <div className='grid grid-cols-3 gap-4 max-h-600px overflow-hidden'>
                <div className='col-span-2'>
                    <img src={Portfoliomenu} className='w-full h-full' alt='portfoliomenu'/>
                </div>
                <div className='gap-y-4 flex flex-col'>
                    <div className='relative h-80 overflow-hidden'>
                        <img src={portfolioc} className='w-full h-full object-cover object-center' alt='portfolioc'/>
                    </div>
                    <div className='relative h-80 overflow-hidden'>
                        <img src={cybersecurity} className='w-full h-full object-cover' alt='cybersecurity'/>
                    </div>
                </div>
            </div>
            <div className='grid grid-cols-3 gap-4'>
                <div className='space-y-4 max-w-400px'>
                    <h2 className='text-7xl  text-Webblack font-Noto leading-24'>Latest insight the Yoks!</h2>
                    <p>Add the best talent on the market, an agile skilled management & seamless involvement</p>
                </div>
                <div className='col-span-2'>
                    <div className='grid grid-cols-2 gap-10'>
                        <div className='relative  border-b-2 space-y-5 border-black/15 pb-6 group/blog hover:border-black transition-all ease-in-out duration-500 cursor-pointer'>
                            <div className='h-500px overflow-hidden'>
                                <img src={teamwork} className='w-full h-full object-cover' alt='teamwork'/>
                            </div>
                            <div className='grid grid-cols-3 justify-between'>
                                <div className="flex items-start col-span-2 gap-12">
                                    <span className='font-Kanit text-xl font-normal text-Davy'>01</span>
                                    <h3 className='font-Noto text-Webblack font-medium text-2xl'>Business <br/> consultation</h3>
                                </div>
                                <div className='relative text-right group-hover/blog:opacity-100 transition-all duration-300 ease-in-out opacity-0'><FontAwesomeIcon className='-rotate-45' icon={faArrowRight} /></div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}
