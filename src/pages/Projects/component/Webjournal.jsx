import React from 'react'
import { Link } from 'react-router-dom'
import Rightarrow from '../../../assets/images/arrow-right-half.webp';
import Talentalt from '../../../assets/images/talentalt.jpg';
export const Webjournal = () => {
  return (
    <>
    <div className='px-5 pt-0 py-24 px-5'>
        <div className='xl:max-w-1220px 2xl:max-w-1440 mx-auto space-y-14'>
            <div className='flex justify-between gap-4'>
                <h2 className='font-Teko text-4xl lg:text-5xl xl:text-80px font-bold text-Webblack uppercase xl:leading-20'>journal insight<br/>of Yoks</h2>
                <div className='space-y-4'>
                <p className='text-Davy font-medium text-base font-Kanit max-w-72'>Our ability to combine expertise and systems thinking is what fuels us as a team.</p>
                <Link to="/" className='font-medium text-black font-Kanit text-sm no-underline relative before:contact-[""] before:left-0 before:bottom-0 before:w-full before:h-0.5 before:bg-transparent before:transition-all before:ease-in-out before:duration-300 hover:before:bg-black before:absolute before:inline-flex  inline-flex items-center gap-3 uppercase'>All blog <img src={Rightarrow} alt="Rightarrow"/> </Link>
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                <div className='relative space-y-8 group/insight bg-Webblack p-10 transition-all ease-in-out duration-500 hover:bg-orange-300 overflow-hidden'>
                    <h2 className='uppercase text-2xl xl:text-4xl font-Teko underline font-bold text-white'>Arolax the quest exceptional talent our team</h2>
                    <div className='-mr-10'>
                        <img src={Talentalt} alt='Talentalt'/>
                    </div>
                    <div className='relative space-y-4'>
                        <p className='text-white/50 font-normal group-hover/insight:text-white font-Kanit text-lg'>We lead by the design philosophy that every deal only visually</p>
                        <div className='space-y-0'>
                            <h4 className='font-Teko text-xl xl:text-2xl font-medium text-white'>Oliver Kugar</h4>
                            <p className='font-Kanit text-base text-white/50 group-hover/insight:text-white'>jQuery, Ajax - 01 nov</p>
                        </div>
                    </div>
                </div>
                {/* 02 */}
                <div className='relative space-y-8 group/insight bg-Webblack p-10 transition-all ease-in-out duration-500 hover:bg-orange-300 overflow-hidden'>
                    <h2 className='uppercase text-2xl xl:text-4xl font-Teko underline font-bold text-white'>Arolax the quest exceptional talent our team</h2>
                    <div className='-mr-10'>
                        <img src={Talentalt} alt='Talentalt'/>
                    </div>
                    <div className='relative space-y-4'>
                        <p className='text-white/50 font-normal group-hover/insight:text-white font-Kanit text-lg'>We lead by the design philosophy that every deal only visually</p>
                        <div className='space-y-0'>
                            <h4 className='font-Teko text-xl xl:text-2xl font-medium text-white'>Oliver Kugar</h4>
                            <p className='font-Kanit text-base text-white/50 group-hover/insight:text-white'>jQuery, Ajax - 01 nov</p>
                        </div>
                    </div>
                </div>
                {/* 03 */}
                <div className='relative space-y-8 group/insight bg-Webblack p-10 transition-all ease-in-out duration-500 hover:bg-orange-300 overflow-hidden'>
                    <h2 className='uppercase text-2xl xl:text-4xl font-Teko underline font-bold text-white'>Arolax the quest exceptional talent our team</h2>
                    <div className='-mr-10'>
                        <img src={Talentalt} alt='Talentalt'/>
                    </div>
                    <div className='relative space-y-4'>
                        <p className='text-white/50 font-normal group-hover/insight:text-white font-Kanit text-lg'>We lead by the design philosophy that every deal only visually</p>
                        <div className='space-y-0'>
                            <h4 className='font-Teko text-xl xl:text-2xl font-medium text-white'>Oliver Kugar</h4>
                            <p className='font-Kanit text-base text-white/50 group-hover/insight:text-white'>jQuery, Ajax - 01 nov</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}
