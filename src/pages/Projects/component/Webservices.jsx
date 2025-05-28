import React from 'react'
import Emoje from '../../../assets/images/emoje.webp';
import Management from '../../../assets/images/management.webp';
import managementsecond from '../../../assets/images/managementsecond.webp';
import Webdesign from '../../../assets/images/webdesign.webp';
import Developement from '../../../assets/images/developement.webp';
import Work from '../../../assets/images/work.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
export const Webservices = () => {
  return (
    <>
    <div className='py-32'>
        <div className='max-w-1440 mx-auto space-y-16'>
            <div className='relative max-w-730px mx-auto space-y-6 '>
                <div className='absolute left-1/2 -top-16 -translate-x-1/2'>
                                <img src={Emoje} alt='Emoje'/>
                              </div>
                <h2 className='text-80px font-Teko leading-20 font-bold text-Webblack uppercase'>we <span className='text-Davy'>provide</span> premium Yoks service</h2>
                <p className='text-Webblack text-lg max-w-80 ml-auto font-normal font-Kanit'>Our ability to combine expertise and systems thinking is what fuels us as a team.</p>
            </div>
            <div className='flex flex-col'>
<div className='grid grid-cols-4 gap-5 border-y py-11 border-black/10'>
                <div className='relative'>
                    <h4 className='font-Teko font-semibold text-Webblack text-4xl'>01.</h4>
                </div>
                <div className='col-span-2 grid grid-cols-2 gap-28'>
                    <div className='relative'>
                        <h3 className='uppercase text-4xl font-Teko text-Webblack font-bold'>Project<br/>Management</h3>
                    </div>
                    <div className='relative space-y-4'>
                        <p className='text-Davy text-lg font-semibold'>Creative Design team on demand that can design, build, ship and scale your real has development agency.</p>
                        <ul>
                            <li className='flex gap-2.5 items-center'>
                                <FontAwesomeIcon icon={faPlus} className='font-bold text-xs' />
                                <p className='font-bold text-Webblack text-base'>Mobile & Web Design</p>
                            </li>
                            <li className='flex gap-2.5 items-center'>
                                <FontAwesomeIcon icon={faPlus} className='font-bold text-xs' />
                                <p className='font-bold text-Webblack text-base'>Interation Design</p>
                            </li>
                            <li className='flex gap-2.5 items-center'>
                                <FontAwesomeIcon icon={faPlus} className='font-bold text-xs' />
                                <p className='font-bold text-Webblack text-base'>UX Research & Plan</p>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className='w-24 h-32 border border-black/10 flex items-center justify-center ml-auto rounded-full'>
                <img src={Management} alt='management'/>
                </div>
            </div>
            {/* 02 */}
            <div className='grid grid-cols-4 gap-5 border-b py-11 border-black/10'>
                <div className='relative'>
                    <h4 className='font-Teko font-semibold text-Webblack text-4xl'>02.</h4>
                </div>
                <div className='col-span-2 grid grid-cols-2 gap-28'>
                    <div className='relative'>
                        <h3 className='uppercase text-4xl font-Teko text-Webblack font-bold'>Product<br/>Management</h3>
                    </div>
                    <div className='relative space-y-4'>
                        <p className='text-Davy text-lg font-semibold'>Creative Design team on demand that can design, build, ship and scale your real has development agency.</p>
                        <ul>
                            <li className='flex gap-2.5 items-center'>
                                <FontAwesomeIcon icon={faPlus} className='font-bold text-xs' />
                                <p className='font-bold text-Webblack text-base'>Mobile & Web Design</p>
                            </li>
                            <li className='flex gap-2.5 items-center'>
                                <FontAwesomeIcon icon={faPlus} className='font-bold text-xs' />
                                <p className='font-bold text-Webblack text-base'>Interation Design</p>
                            </li>
                            <li className='flex gap-2.5 items-center'>
                                <FontAwesomeIcon icon={faPlus} className='font-bold text-xs' />
                                <p className='font-bold text-Webblack text-base'>UX Research & Plan</p>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className='w-24 h-32 border border-black/10 flex items-center justify-center ml-auto rounded-full'>
                <img src={managementsecond} alt='management'/>
                </div>
            </div>
            {/* 03 */}
            <div className='grid grid-cols-4 gap-5 border-b py-11 border-black/10'>
                <div className='relative'>
                    <h4 className='font-Teko font-semibold text-Webblack text-4xl'>03.</h4>
                </div>
                <div className='col-span-2 grid grid-cols-2 gap-28'>
                    <div className='relative'>
                        <h3 className='uppercase text-4xl font-Teko text-Webblack font-bold'>Web<br/>Design</h3>
                    </div>
                    <div className='relative space-y-4'>
                        <p className='text-Davy text-lg font-semibold'>Creative Design team on demand that can design, build, ship and scale your real has development agency.</p>
                        <ul>
                            <li className='flex gap-2.5 items-center'>
                                <FontAwesomeIcon icon={faPlus} className='font-bold text-xs' />
                                <p className='font-bold text-Webblack text-base'>Mobile & Web Design</p>
                            </li>
                            <li className='flex gap-2.5 items-center'>
                                <FontAwesomeIcon icon={faPlus} className='font-bold text-xs' />
                                <p className='font-bold text-Webblack text-base'>Interation Design</p>
                            </li>
                            <li className='flex gap-2.5 items-center'>
                                <FontAwesomeIcon icon={faPlus} className='font-bold text-xs' />
                                <p className='font-bold text-Webblack text-base'>UX Research & Plan</p>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className='w-24 h-32 border border-black/10 flex items-center justify-center ml-auto rounded-full'>
                <img src={Webdesign} alt='webdesign'/>
                </div>
            </div>
            {/* 04 */}
            <div className='grid grid-cols-4 gap-5 border-b py-11 border-black/10'>
                <div className='relative'>
                    <h4 className='font-Teko font-semibold text-Webblack text-4xl'>04.</h4>
                </div>
                <div className='col-span-2 grid grid-cols-2 gap-28'>
                    <div className='relative'>
                        <h3 className='uppercase text-4xl font-Teko text-Webblack font-bold'>Backend<br/>Developement</h3>
                    </div>
                    <div className='relative space-y-4'>
                        <p className='text-Davy text-lg font-semibold'>Creative Design team on demand that can design, build, ship and scale your real has development agency.</p>
                        <ul>
                            <li className='flex gap-2.5 items-center'>
                                <FontAwesomeIcon icon={faPlus} className='font-bold text-xs' />
                                <p className='font-bold text-Webblack text-base'>Mobile & Web Design</p>
                            </li>
                            <li className='flex gap-2.5 items-center'>
                                <FontAwesomeIcon icon={faPlus} className='font-bold text-xs' />
                                <p className='font-bold text-Webblack text-base'>Interation Design</p>
                            </li>
                            <li className='flex gap-2.5 items-center'>
                                <FontAwesomeIcon icon={faPlus} className='font-bold text-xs' />
                                <p className='font-bold text-Webblack text-base'>UX Research & Plan</p>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className='w-24 h-32 border border-black/10 flex items-center justify-center ml-auto rounded-full'>
                <img src={Developement} alt='developement'/>
                </div>
            </div>
            </div>
            
        </div>
    </div>
    <div className='relative w-full h-730px before:content-[""] before:w-full before:h-full before:bg-orange-500/55 before:top-0 before:left-0 before:mix-blend-multiply before:absolute'>
        <img src={Work} alt='Work' className='w-full h-full object-cover'/>
    </div>
    </>
  )
}
