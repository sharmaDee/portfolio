import React, { useState} from 'react'
import Homeicon from '../icons/Homeicon'
import Abouticon from '../icons/Abouticon'
import Briefcaseicon from '../icons/Briefcaseicon'
import Messageicon from '../icons/Messageicon'
// import Testimonialicon from '../icons/Testimonialicon'
import Portfolio from '../icons/Portfolio'
import Serviceicon from '../icons/Serviceicon'
import Skills from '../icons/Skills'
import { Link, Element } from 'react-scroll';
import Price from '../icons/Price'
import { Tooltip } from 'react-tooltip'

export const Headerside = () => {
    const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => setIsOpen(prev => !prev);
  const handleClose = () => setIsOpen(false);

  
  
  return (
        <header className='fixed right-5 md:right-6 xl:right-14 top-4 md:top-6 xl:top-14 space-y-12 zindex-999'>
            <button onClick={handleToggle} className='xl:hidden hm-menu border group/hs border-white/40 transition-all ease-in-out duration-200 hover:border-Primary cursor-pointer rounded-full p-4 w-12 h-12 flex items-center justify-center flex-col space-y-1.5' >
                <span className='w-6 h-0.5 bg-white/60 transition-all ease-in-out duration-300  rounded-4xl block group-hover/hs:bg-Primary'></span>
                <span className='w-4 h-0.5 group-hover/hs:w-6 transition-all ease-in-out duration-300 bg-white/60 group-hover/hs:bg-Primary rounded-4xl block'></span>
            </button>
        
            <div  className={`fixed top-0  right-0 bg-gradient-to-br from-Eerieblack shadow-side to-gray-800 py-10 md:py-14 px-10 md:px-20 min-w-72 max-w-72 md:max-w-96 md:min-w-96 h-screen transition-all ease-in-out duration-300 ${isOpen ? 'translate-x-0' : 'translate-x-96 md:translate-x-440px'}`}>
        <div
          onClick={handleClose}
          className='absolute top-10 md:top-14 right-10 md:right-14 text-white text-base cursor-pointer hover:text-red-400 transition'
        >
          <svg className='w-6 h-6' viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path opacity="0.5" d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20Z" fill="#989898"/>
            <path d="M13.7099 12.2899C13.8037 12.3829 13.8781 12.4935 13.9288 12.6154C13.9796 12.7372 14.0057 12.8679 14.0057 12.9999C14.0057 13.132 13.9796 13.2627 13.9288 13.3845C13.8781 13.5064 13.8037 13.617 13.7099 13.7099C13.6165 13.8026 13.5057 13.8759 13.3838 13.9257C13.262 13.9755 13.1315 14.0007 12.9999 13.9999C12.8683 14.0007 12.7379 13.9755 12.616 13.9257C12.4942 13.8759 12.3834 13.8026 12.2899 13.7099L9.99994 11.4199L7.70994 13.7099C7.6165 13.8026 7.50568 13.8759 7.38385 13.9257C7.26201 13.9755 7.13155 14.0007 6.99994 13.9999C6.86833 14.0007 6.73787 13.9755 6.61603 13.9257C6.49419 13.8759 6.38338 13.8026 6.28994 13.7099C6.19621 13.617 6.12182 13.5064 6.07105 13.3845C6.02028 13.2627 5.99414 13.132 5.99414 12.9999C5.99414 12.8679 6.02028 12.7372 6.07105 12.6154C6.12182 12.4935 6.19621 12.3829 6.28994 12.2899L8.57994 9.99994L6.28994 7.70994C6.10164 7.52164 5.99585 7.26624 5.99585 6.99994C5.99585 6.73364 6.10164 6.47824 6.28994 6.28994C6.47824 6.10164 6.73364 5.99585 6.99994 5.99585C7.26624 5.99585 7.52163 6.10164 7.70994 6.28994L9.99994 8.57994L12.2899 6.28994C12.4782 6.10164 12.7336 5.99585 12.9999 5.99585C13.2662 5.99585 13.5216 6.10164 13.7099 6.28994C13.8982 6.47824 14.004 6.73364 14.004 6.99994C14.004 7.26624 13.8982 7.52164 13.7099 7.70994L11.4199 9.99994L13.7099 12.2899Z" fill="white"/>
            </svg>

        </div>
        <h5 className='text-white text-base font-normal uppercase'>Menu</h5>
        {/* ======= */}
        <nav className='mt-6 '>
                <ul className='py-6 gap-y-8 flex flex-col  '>
                    <li>
                        <a className='intr text-white flex items-center capitalize text-sm gap-4'  href='#introduce' to="section1" smooth="true" duration={500} data-tooltip-id="my-tooltip" data-tooltip-content="introduce" place="top">
                           <Homeicon className="stroke-white/60 w-4 h-4 stroke-2 hover:stroke-Primary transition-all ease-in-out duration-300"/><span>introduce</span>
                        </a>
                       
                        <Tooltip  anchorSelect=".intr" place="left" style={{ textTransform: 'capitalize', background: '#00D970', fontWeight: '600', fontSize: '14px' }}>
                                introduce
                        </Tooltip>
                    </li>
                    <li>
                        <a href='#about' className='about text-white flex items-center capitalize text-sm gap-4' to="section2" smooth="true" duration={500} data-tooltip-id="my-tooltip" data-tooltip-content="about">
                            <Abouticon className="stroke-white/60 w-4 h-4 stroke-2 hover:stroke-Primary transition-all ease-in-out duration-300"/><span>about</span>
                        </a>
                        <Tooltip  anchorSelect=".about" place="left" style={{ textTransform: 'capitalize', background: '#00D970', fontWeight: '600', fontSize: '14px' }}>
                        about
                        </Tooltip>
                    </li>
                    <li>
                        <a href='#resume' className='resume text-white flex items-center capitalize text-sm gap-4' to="section3" smooth="true" duration={500} data-tooltip-id="my-tooltip" data-tooltip-content="resume">
                            <Briefcaseicon className="stroke-white/60 w-4 h-4 stroke-2 hover:stroke-Primary transition-all ease-in-out duration-300"/><span>Resume</span>
                        </a>
                        <Tooltip  anchorSelect=".resume" place="left" style={{ textTransform: 'capitalize', background: '#00D970', fontWeight: '600', fontSize: '14px' }}>
                        Resume
                        </Tooltip>
                    </li>
                    <li>
                        <a href='#services' className='service text-white flex items-center capitalize text-sm gap-4' to="section4" smooth="true" duration={500} data-tooltip-id="my-tooltip" data-tooltip-content="Services">
                            <Serviceicon className="stroke-white/60 w-4 h-4 stroke-2 hover:stroke-Primary transition-all ease-in-out duration-300"/><span>Services</span>
                        </a>
                        <Tooltip  anchorSelect=".service" place="left" style={{ textTransform: 'capitalize', background: '#00D970', fontWeight: '600', fontSize: '14px' }}>
                            Services
                        </Tooltip>
                    </li>
                    <li>
                        <a href='#myskill' className='skills text-white flex items-center capitalize text-sm gap-4' to="section5" smooth="true" duration={500} data-tooltip-id="my-tooltip" data-tooltip-content="My Skills">
                            <Portfolio className="stroke-white/60 w-4 h-4 stroke-2 hover:stroke-Primary transition-all ease-in-out duration-300"/><span>My Skills</span>
                        </a>
                        <Tooltip  anchorSelect=".skills" place="left" style={{ textTransform: 'capitalize', background: '#00D970', fontWeight: '600', fontSize: '14px' }}>
                            My Skills
                        </Tooltip>
                    </li>
                    <li>
                        <a href='#portfolio' className='portfolio text-white flex items-center capitalize text-sm gap-4' to="section6" smooth="true" duration={500} data-tooltip-id="my-tooltip" data-tooltip-content="Portfolio">
                            <Skills className="stroke-white/60 w-4 h-4 stroke-2 hover:stroke-Primary transition-all ease-in-out duration-300"/><span>Portfolio</span>
                        </a>
                        <Tooltip  anchorSelect=".portfolio" place="left" style={{ textTransform: 'capitalize', background: '#00D970', fontWeight: '600', fontSize: '14px' }}>
                            Portfolio
                        </Tooltip>
                    </li>
                    <li>
                        <a href='#prices' className='prices text-white flex items-center capitalize text-sm gap-4' to="section7" smooth="true" duration={500} data-tooltip-id="my-tooltip" data-tooltip-content="Prices">
                            <Price className="stroke-white/60 w-4 h-4 stroke-2 hover:stroke-Primary transition-all ease-in-out duration-300"/><span>Prices</span>
                        </a>
                        <Tooltip  anchorSelect=".prices" place="left" style={{ textTransform: 'capitalize', background: '#00D970', fontWeight: '600', fontSize: '14px' }}>
                            Prices
                        </Tooltip>
                    </li>
                    {/* <li>
                        <a href='#' to="section7" smooth="true" duration={500}>
                            <Testimonialicon className="stroke-white/60 w-4 h-4 stroke-2 hover:stroke-Primary transition-all ease-in-out duration-300"/>
                        </a>
                    </li> */}
                    
                    <li>
                        <a href='#contact' className='contact text-white flex items-center capitalize text-sm gap-4' to="section8" smooth="true" duration={500} data-tooltip-id="my-tooltip" data-tooltip-content="contact">
                            <Messageicon className="stroke-white/60 w-4 h-4  stroke-2 hover:stroke-Primary transition-all ease-in-out duration-300"/><span>Contact</span>
                        </a>
                        <Tooltip  anchorSelect=".contact" place="left" style={{ textTransform: 'capitalize', background: '#00D970', fontWeight: '600', fontSize: '14px' }}>
                            Contact
                        </Tooltip>
                    </li>
                   
                </ul>
            </nav>
        </div>
            <nav className='hidden xl:block'>
                <ul className='border border-white/40 px-3 py-6 rounded-full gap-y-8 flex flex-col  items-center text-center'>
                    <li>
                        <a className='intr'  href='#introduce' to="section1" smooth="true" duration={500} data-tooltip-id="my-tooltip" data-tooltip-content="introduce" place="top">
                           <Homeicon className="stroke-white/60 w-4 h-4 stroke-2 hover:stroke-Primary transition-all ease-in-out duration-300"/>
                        </a>
                       
                        <Tooltip  anchorSelect=".intr" place="left" style={{ textTransform: 'capitalize', background: '#00D970', fontWeight: '600', fontSize: '14px' }}>
                                introduce
                        </Tooltip>
                    </li>
                    <li>
                        <a href='#about' className='about' to="section2" smooth="true" duration={500} data-tooltip-id="my-tooltip" data-tooltip-content="about">
                            <Abouticon className="stroke-white/60 w-4 h-4 stroke-2 hover:stroke-Primary transition-all ease-in-out duration-300"/>
                        </a>
                        <Tooltip  anchorSelect=".about" place="left" style={{ textTransform: 'capitalize', background: '#00D970', fontWeight: '600', fontSize: '14px' }}>
                        about
                        </Tooltip>
                    </li>
                    <li>
                        <a href='#resume' className='resume' to="section3" smooth="true" duration={500} data-tooltip-id="my-tooltip" data-tooltip-content="resume">
                            <Briefcaseicon className="stroke-white/60 w-4 h-4 stroke-2 hover:stroke-Primary transition-all ease-in-out duration-300"/>
                        </a>
                        <Tooltip  anchorSelect=".resume" place="left" style={{ textTransform: 'capitalize', background: '#00D970', fontWeight: '600', fontSize: '14px' }}>
                        Resume
                        </Tooltip>
                    </li>
                    <li>
                        <a href='#services' className='service' to="section4" smooth="true" duration={500} data-tooltip-id="my-tooltip" data-tooltip-content="Services">
                            <Serviceicon className="stroke-white/60 w-4 h-4 stroke-2 hover:stroke-Primary transition-all ease-in-out duration-300"/>
                        </a>
                        <Tooltip  anchorSelect=".service" place="left" style={{ textTransform: 'capitalize', background: '#00D970', fontWeight: '600', fontSize: '14px' }}>
                            Services
                        </Tooltip>
                    </li>
                    <li>
                        <a href='#myskill' className='skills' to="section5" smooth="true" duration={500} data-tooltip-id="my-tooltip" data-tooltip-content="My Skills">
                            <Portfolio className="stroke-white/60 w-4 h-4 stroke-2 hover:stroke-Primary transition-all ease-in-out duration-300"/>
                        </a>
                        <Tooltip  anchorSelect=".skills" place="left" style={{ textTransform: 'capitalize', background: '#00D970', fontWeight: '600', fontSize: '14px' }}>
                            My Skills
                        </Tooltip>
                    </li>
                    <li>
                        <a href='#portfolio' className='portfolio' to="section6" smooth="true" duration={500} data-tooltip-id="my-tooltip" data-tooltip-content="Portfolio">
                            <Skills className="stroke-white/60 w-4 h-4 stroke-2 hover:stroke-Primary transition-all ease-in-out duration-300"/>
                        </a>
                        <Tooltip  anchorSelect=".portfolio" place="left" style={{ textTransform: 'capitalize', background: '#00D970', fontWeight: '600', fontSize: '14px' }}>
                            Portfolio
                        </Tooltip>
                    </li>
                    <li>
                        <a href='#prices' className='prices' to="section7" smooth="true" duration={500} data-tooltip-id="my-tooltip" data-tooltip-content="Prices">
                            <Price className="stroke-white/60 w-4 h-4 stroke-2 hover:stroke-Primary transition-all ease-in-out duration-300"/>
                        </a>
                        <Tooltip  anchorSelect=".prices" place="left" style={{ textTransform: 'capitalize', background: '#00D970', fontWeight: '600', fontSize: '14px' }}>
                            Prices
                        </Tooltip>
                    </li>
                    {/* <li>
                        <a href='#' to="section7" smooth="true" duration={500}>
                            <Testimonialicon className="stroke-white/60 w-4 h-4 stroke-2 hover:stroke-Primary transition-all ease-in-out duration-300"/>
                        </a>
                    </li> */}
                    
                    <li>
                        <a href='#contact' className='contact' to="section8" smooth="true" duration={500} data-tooltip-id="my-tooltip" data-tooltip-content="contact">
                            <Messageicon className="stroke-white/60 w-4 h-4  stroke-2 hover:stroke-Primary transition-all ease-in-out duration-300"/>
                        </a>
                        <Tooltip  anchorSelect=".contact" place="left" style={{ textTransform: 'capitalize', background: '#00D970', fontWeight: '600', fontSize: '14px' }}>
                            Contact
                        </Tooltip>
                    </li>
                   
                </ul>
            </nav>
        </header>
 
  )
}
