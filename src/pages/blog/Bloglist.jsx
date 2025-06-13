import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import teamwork from '../../assets/images/teamwork.jpg';
import Marketresearch from '../../assets/images/marketresearch.jpg';
import Buildingquality from '../../assets/images/buildingquality.jpg';
import businessresilience from '../../assets/images/businessresilience.jpg';
import entrepreneurial from '../../assets/images/entrepreneurial.jpg';
import businessgrowth from '../../assets/images/businessgrowth.jpg';
export const Bloglist = (props) => {
  return (
    <>
    <div className={`grid grid-cols-1 md:grid-cols-2 gap-10 ${props.blockStyle}`}>
                        <div className='relative  border-b-2 space-y-5 border-black/15 pb-6 group/blog hover:border-black transition-all ease-in-out duration-500 cursor-pointer'>
                            <div className='h-80 md:h-500px overflow-hidden'>
                                <img src={teamwork} className='w-full h-full object-cover' alt='teamwork'/>
                            </div>
                            <div className='grid grid-cols-3 justify-between'>
                                <div className="flex items-start col-span-2 gap-12">
                                    <span className='font-Kanit text-xl font-normal text-Davy'>01</span>
                                    <h3 className={`font-Noto text-Webblack font-medium text-xl md:text-2xl ${props.cardTitle}`}>Business <br/> consultation</h3>
                                </div>
                                <div className='relative text-right group-hover/blog:opacity-100 transition-all duration-300 ease-in-out opacity-0'><FontAwesomeIcon className='-rotate-45' icon={faArrowRight} /></div>
                            </div>
                            
                        </div>
                        {/* 02 */}
                        <div className='relative  border-b-2 space-y-5 border-black/15 pb-6 group/blog hover:border-black transition-all ease-in-out duration-500 cursor-pointer'>
                            <div className='h-80 md:h-500px overflow-hidden'>
                                <img src={Marketresearch} className='w-full h-full object-cover' alt='marketresearch'/>
                            </div>
                            <div className='grid grid-cols-3 justify-between'>
                                <div className="flex items-start col-span-2 gap-12">
                                    <span className='font-Kanit text-xl font-normal text-Davy'>02</span>
                                    <h3 className='font-Noto text-Webblack font-medium text-xl md:text-2xl'>Market research  <br/> & strategy</h3>
                                </div>
                                <div className='relative text-right group-hover/blog:opacity-100 transition-all duration-300 ease-in-out opacity-0'><FontAwesomeIcon className='-rotate-45' icon={faArrowRight} /></div>
                            </div>                            
                        </div>
                        {/* 03 */}
                        <div className='relative  border-b-2 space-y-5 border-black/15 pb-6 group/blog hover:border-black transition-all ease-in-out duration-500 cursor-pointer'>
                            <div className='h-80 md:h-500px overflow-hidden'>
                                <img src={Buildingquality} className='w-full h-full object-cover' alt='buildingquality'/>
                            </div>
                            <div className='grid grid-cols-3 justify-between'>
                                <div className="flex items-start col-span-2 gap-12">
                                    <span className='font-Kanit text-xl font-normal text-Davy'>03</span>
                                    <h3 className='font-Noto text-Webblack font-medium text-xl md:text-2xl'>Building quality   <br/> & sustainable</h3>
                                </div>
                                <div className='relative text-right group-hover/blog:opacity-100 transition-all duration-300 ease-in-out opacity-0'><FontAwesomeIcon className='-rotate-45' icon={faArrowRight} /></div>
                            </div>
                        </div>
                        {/* 04 */}
                        <div className='relative  border-b-2 space-y-5 border-black/15 pb-6 group/blog hover:border-black transition-all ease-in-out duration-500 cursor-pointer'>
                            <div className='h-80 md:h-500px overflow-hidden'>
                                <img src={businessresilience} className='w-full h-full object-cover' alt='businessresilience'/>
                            </div>
                            <div className='grid grid-cols-3 justify-between'>
                                <div className="flex items-start col-span-2 gap-12">
                                    <span className='font-Kanit text-xl font-normal text-Davy'>04</span>
                                    <h3 className='font-Noto text-Webblack font-medium text-xl md:text-2xl'>Business <br/> resilience tips</h3>
                                </div>
                                <div className='relative text-right group-hover/blog:opacity-100 transition-all duration-300 ease-in-out opacity-0'><FontAwesomeIcon className='-rotate-45' icon={faArrowRight} /></div>
                            </div>
                        </div>
                        {/* 05 */}
                        <div className='relative  border-b-2 space-y-5 border-black/15 pb-6 group/blog hover:border-black transition-all ease-in-out duration-500 cursor-pointer'>
                            <div className='h-80 md:h-500px overflow-hidden'>
                                <img src={entrepreneurial} className='w-full h-full object-cover' alt='entrepreneurial'/>
                            </div>
                            <div className='grid grid-cols-3 justify-between'>
                                <div className="flex items-start col-span-2 gap-12">
                                    <span className='font-Kanit text-xl font-normal text-Davy'>05</span>
                                    <h3 className='font-Noto text-Webblack font-medium text-xl md:text-2xl'>Entrepreneurial <br/> journeys</h3>
                                </div>
                                <div className='relative text-right group-hover/blog:opacity-100 transition-all duration-300 ease-in-out opacity-0'><FontAwesomeIcon className='-rotate-45' icon={faArrowRight} /></div>
                            </div>
                        </div>
                        {/* 06 */}
                        <div className='relative  border-b-2 space-y-5 border-black/15 pb-6 group/blog hover:border-black transition-all ease-in-out duration-500 cursor-pointer'>
                            <div className='h-80 md:h-500px overflow-hidden'>
                                <img src={businessgrowth} className='w-full h-full object-cover' alt='businessgrowth'/>
                            </div>
                            <div className='grid grid-cols-3 justify-between'>
                                <div className="flex items-start col-span-2 gap-12">
                                    <span className='font-Kanit text-xl font-normal text-Davy'>06</span>
                                    <h3 className='font-Noto text-Webblack font-medium text-xl md:text-2xl'>Business growth  <br/> strategies</h3>
                                </div>
                                <div className='relative text-right group-hover/blog:opacity-100 transition-all duration-300 ease-in-out opacity-0'><FontAwesomeIcon className='-rotate-45' icon={faArrowRight} /></div>
                            </div>
                        </div>
                    </div>
      
    </>
  );
};
