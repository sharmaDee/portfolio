import React, { useState} from 'react'
import { Link } from 'react-router-dom'
import Weblogo from '../../../assets/images/yoks.svg'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
export const Webheader = () => {
    const [isOpen, setIsOpen] = useState(false);
    
      const handleToggle = () => setIsOpen(prev => !prev);
      const handleClose = () => setIsOpen(false);
     const [openMenu, setOpenMenu] = useState(null);

  const toggleSubMenu = (menu) => {
    setOpenMenu(openMenu === menu ? null : menu);
  };
  return (
    <div className='px-5 py-5 border-b border-gray-200 fixed top-0 left-0 w-full zindex-999 bg-gray-100'>
        <div className='xl:max-w-1220px 2xl:max-w-1440 mx-auto'>
            <div className='flex items-center justify-between'>
            <Link to="/">
                <img src={Weblogo} className='w-12' alt='Weblogo'/>
            </Link>
            <button type="button" onClick={handleToggle} className='space-y-2 block xl:hidden group/width text-center'>
                <span className='bg-black w-8 h-0.5 block rounded-2xl'></span>
                <span className='bg-black w-6 h-0.5 block ml-auto group-hover/width:w-8 transition-all ease-in-out duration-300 rounded-2xl'></span>
                <span className='bg-black w-8 h-0.5 block rounded-2xl'></span>
            </button>
            <ul className={`xl:flex items-center transition-all ease-in-out duration-700 shadow-2xl xl:shadow-none block fixed top-0 space-y-0 px-8 py-10 xl:!p-0 xl:space-y-0 right-0 w-80 xl:relative xl:w-unset xl:h-unset xl:bg-transparent h-screen bg-white gap-10 font-Kanit ${isOpen ? 'translate-x-0' : 'translate-x-96 md:translate-x-440px xl:translate-x-0'}`}  >
                 <li
                 onClick={handleClose}
                    className='absolute top-10 md:top-10 right-10 md:right-10  text-white text-base cursor-pointer xl:hidden  transition '
                    >
                    <svg className='w-6 h-6 fill-Webblack' viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path opacity="0.5" d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20Z" />
                        <path d="M13.7099 12.2899C13.8037 12.3829 13.8781 12.4935 13.9288 12.6154C13.9796 12.7372 14.0057 12.8679 14.0057 12.9999C14.0057 13.132 13.9796 13.2627 13.9288 13.3845C13.8781 13.5064 13.8037 13.617 13.7099 13.7099C13.6165 13.8026 13.5057 13.8759 13.3838 13.9257C13.262 13.9755 13.1315 14.0007 12.9999 13.9999C12.8683 14.0007 12.7379 13.9755 12.616 13.9257C12.4942 13.8759 12.3834 13.8026 12.2899 13.7099L9.99994 11.4199L7.70994 13.7099C7.6165 13.8026 7.50568 13.8759 7.38385 13.9257C7.26201 13.9755 7.13155 14.0007 6.99994 13.9999C6.86833 14.0007 6.73787 13.9755 6.61603 13.9257C6.49419 13.8759 6.38338 13.8026 6.28994 13.7099C6.19621 13.617 6.12182 13.5064 6.07105 13.3845C6.02028 13.2627 5.99414 13.132 5.99414 12.9999C5.99414 12.8679 6.02028 12.7372 6.07105 12.6154C6.12182 12.4935 6.19621 12.3829 6.28994 12.2899L8.57994 9.99994L6.28994 7.70994C6.10164 7.52164 5.99585 7.26624 5.99585 6.99994C5.99585 6.73364 6.10164 6.47824 6.28994 6.28994C6.47824 6.10164 6.73364 5.99585 6.99994 5.99585C7.26624 5.99585 7.52163 6.10164 7.70994 6.28994L9.99994 8.57994L12.2899 6.28994C12.4782 6.10164 12.7336 5.99585 12.9999 5.99585C13.2662 5.99585 13.5216 6.10164 13.7099 6.28994C13.8982 6.47824 14.004 6.73364 14.004 6.99994C14.004 7.26624 13.8982 7.52164 13.7099 7.70994L11.4199 9.99994L13.7099 12.2899Z" fill="white"/>
                        </svg>
                    </li>
                <li className='py-2.5 cursor-pointer'>
                    <Link to="/Webagency" className=' text-sm uppercase text-black'>Home</Link>
                </li>
                <li className='py-2.5 cursor-pointer'>
                    <Link to="/Aboutus" className=' text-sm uppercase text-black'>About</Link>
                </li>
               
             
                 {/* <li
                    className="relative py-2.5 flex items-center gap-2.5 group/menu transition-all ease-in-out duration-500 cursor-pointer"
                    onMouseEnter={() => toggleSubMenu("pages")}
            onMouseLeave={() => toggleSubMenu(null)}
                >
                    <button type='button' className=' text-sm uppercase text-black'>Pages</button>
                    <FontAwesomeIcon icon={faChevronDown} className='text-xs' />
                    {openMenu === "pages" && (
                     <div className="absolute top-full left-1/2 p-5 group-hover/menu:opacity-100  opacity-0 transition-all duration-300 ease-in-out -translate-x-1/2 z-10  bg-linear-to-r from-Webblack to-neutral-600 shadow-md min-w-80 ">
                        <div className='grid grid-cols-2 gap-2'>
                            <ul className='space-y-2 '>
                                <li><Link to="/" className=' text-sm font-Kanit font-normal hover:text-amber-300 transition-all duration-300 ease-in-out text-white'>Service Pages</Link></li>
                                <li><Link to="/" className=' text-sm font-Kanit font-normal hover:text-amber-300 transition-all duration-300 ease-in-out text-white'>Service</Link></li>
                                <li><Link to="/" className=' text-sm font-Kanit font-normal hover:text-amber-300 transition-all duration-300 ease-in-out text-white'>Service Details</Link></li>
                                <li><Link to="/" className=' text-sm font-Kanit font-normal hover:text-amber-300 transition-all duration-300 ease-in-out text-white'>Project</Link></li>
                                <li><Link to="/" className=' text-sm font-Kanit font-normal hover:text-amber-300 transition-all duration-300 ease-in-out text-white'>Project Details</Link></li>
                                
                            </ul>
                            <ul className='space-y-2 border-l border-white/15 pl-6'>
                                
                                <li><Link to="/" className=' text-sm font-Kanit font-normal hover:text-amber-300 transition-all duration-300 ease-in-out text-white'>Team</Link></li>
                                <li><Link to="/" className=' text-sm font-Kanit font-normal hover:text-amber-300 transition-all duration-300 ease-in-out text-white'>Team Details</Link></li>
                                <li><Link to="/" className=' text-sm font-Kanit font-normal hover:text-amber-300 transition-all duration-300 ease-in-out text-white'>Career</Link></li>
                                <li><Link to="/" className=' text-sm font-Kanit font-normal hover:text-amber-300 transition-all duration-300 ease-in-out text-white'>Career Details</Link></li>
                                <li><Link to="/" className=' text-sm font-Kanit font-normal hover:text-amber-300 transition-all duration-300 ease-in-out text-white'>Faq</Link></li>
                                <li><Link to="/" className=' text-sm font-Kanit font-normal hover:text-amber-300 transition-all duration-300 ease-in-out text-white'>404 Pages</Link></li>
                            </ul>
                        </div>
                        
                    </div>
                    )}
                </li> */}
                <li className='py-2.5 group/menu transition-all ease-in-out duration-500 relative cursor-pointer' onMouseEnter={() => toggleSubMenu("blog")} onMouseLeave={() => toggleSubMenu(null)}>
                    <button type='button' className=' text-sm uppercase text-black'>Blog <FontAwesomeIcon icon={faChevronDown} className='text-xs' /></button>
                     {openMenu === "blog" && (
                        <div className="absolute top-full left-0 p-5 group-hover/menu:opacity-100  opacity-0 transition-all duration-300 ease-in-out z-10  bg-linear-to-r from-Webblack to-neutral-600 shadow-md min-w-56 ">
                        <div className='grid grid-cols-2 gap-2'>
                            <ul className='space-y-2 '>
                                <li><Link to="/Blogcontent" className=' text-sm font-Kanit font-normal hover:text-amber-300 transition-all duration-300 ease-in-out text-white'>Blog</Link></li>
                                <li><Link to="/Blogdetail" className=' text-sm font-Kanit font-normal hover:text-amber-300 transition-all duration-300 ease-in-out text-white'>Blog Details</Link></li>
                                
                            </ul>
                         
                        </div>
                        
                    </div>
                     )}
                </li>
                {/* <li className='py-2.5 cursor-pointer'>
                    <Link to="/" className=' text-sm uppercase text-black'>Contact</Link>
                </li> */}
                <li className='py-2.5 xl:hidden'>
                    <button type='button' className=' text-sm uppercase text-white py-2.5 px-6 rounded-tr-2xl rounded-bl-2xl bg-Webblack'>Get Started</button>
                </li>
            </ul>
            <button type='button' className=' text-sm hidden xl:block uppercase text-white font-Kanit py-2.5 px-6 rounded-tr-2xl rounded-bl-2xl bg-Webblack'>Get Started</button>
            
            </div>
        </div>
    </div>
  )
}
