import React from 'react'
import Office from '../../assets/images/office.jpg';
import Officework from '../../assets/images/officework.jpg';
import Macos from '../../assets/images/macos.jpg';
import Workfaqalt from '../../assets/images/workfaqalt.jpg';
import { Webwhowe } from '../Projects/component/Webwhowe';
import { Webfaq } from '../Projects/component/Webfaq';
import { Webteam } from '../Projects/component/Webteam';
import { Webcontactarea } from '../Projects/component/Webcontactarea';
import { Webjournal } from '../Projects/component/Webjournal';
import { Webfooter } from '../Projects/component/Webfooter';
export const Aboutcontent = () => {
  return (
   <>
   <div className='py-16 md:py-20 xl:py-24 px-5'>
    <div className='max-w-1440 2xl:max-w-1750px mx-auto'>
        <div className='relative space-y-8'>
            <h1 className='text-3xl md:text-5xl xl:text-8xl 2xl:text-9xl text-Webblack text-center !font-Karla'>We are ”Yoks” - product and branding and creative agency based in India</h1>
            <div className='grid md:max-w-600px md:auto-cols-auto md:grid-flow-col mx-auto gap-5 md:gap-10'>
                <span className='font-Kanit text-Webblack text-base font-normal uppercase relative before:content-[""] before:w-20 pr-24 before:h-0.5 before:bg-Webblack before:top-3 before:right-0 before:absolute'>01. about us</span>
                <p className='font-base text-Webblack font-medium '>Unlocking creative horizons: the story behind “Arolax” a global digital agency crafting experiences, building dreams, and shaping success</p>
            </div>
        </div>
    </div>
   </div>
   {/* clients */}
   <div className='overflow-hidden'>
    <div className='flex flex-col xl:flex-row  xl:-mx-2'>
        <div className='relative w-full xl:w-60% xl:px-2'>
            <img src={Office} alt='office' className='w-full h-full'/>
        </div>
        <div className='relative w-full xl:w-40% xl:px-2'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                <div className='relative h-80 md:h-368px'>
                    <img src={Officework} alt='officework' className='w-full h-full object-cover'/>
                </div>
                <div className='relative h-80 md:h-368px overflow-hidden bg-linear-to-r justify-between flex flex-col from-Webblack to-Davy p-10'>
                    <div className='w-56 absolute -top-10 -left-10 h-56 bg-white/10 rounded-full'></div>
                    <h3 className='text-white text-4xl font-Teko capitalize md:leading-10'>We have 100+ <br/>satisfied clients</h3>
                    <p className='text-white text-5xl md:text-8xl font-Kanit font-normal'>100+</p>
                </div>
                <div className='relative h-80 md:h-368px overflow-hidden bg-linear-to-r justify-between flex flex-col from-amber-500 to-amber-300 p-10'>
                    <div className='w-56 absolute -top-10 -left-10 h-56 bg-white/10 rounded-full'></div>
                    <h3 className='text-white text-4xl font-Teko capitalize md:leading-10'>We helped to get companies with  <br/>$25M+ funding</h3>
                    <p className='text-white text-5xl md:text-8xl font-Kanit font-normal'>25M+</p>
                </div>
                <div className='relative h-80 md:h-368px'>
                    <img src={Macos} alt='Macos' className='w-full h-full object-cover'/>
                </div>
            </div>
        </div>
    </div>
    
   </div>
   {/* Who we are */}
   <Webwhowe/>
   <Webfaq/>
   <Webteam/>
   <Webcontactarea/>
   <Webjournal/>
   <Webfooter/>
   </>
  )
}
