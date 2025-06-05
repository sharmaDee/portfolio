import React from 'react'
import { Link } from 'react-router-dom'
import Weblogo from '../../../assets/images/yoks.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
export const Webheader = () => {
  return (
    <div className='px-5 py-5 border-b border-gray-200 fixed top-0 left-0 w-full zindex-999 bg-gray-100'>
        <div className='xl:max-w-1220px 2xl:max-w-1440 mx-auto'>
            <div className='flex items-center justify-between'>
            <Link to="/">
                <img src={Weblogo} className='w-12' alt='Weblogo'/>
            </Link>
            <button type="button" className='space-y-2 block xl:hidden group/width text-center'>
                <span className='bg-black w-8 h-0.5 block rounded-2xl'></span>
                <span className='bg-black w-6 h-0.5 block ml-auto group-hover/width:w-8 transition-all ease-in-out duration-300 rounded-2xl'></span>
                <span className='bg-black w-8 h-0.5 block rounded-2xl'></span>
            </button>
            <ul className='xl:flex items-center hidden gap-10 font-Teko'>
                <li>
                    <Link to="/" className=' text-xl uppercase text-black'>Home</Link>
                </li>
                <li>
                    <Link to="/" className=' text-xl uppercase text-black'>About</Link>
                </li>
                <li>
                    <Link to="/" className=' text-xl uppercase text-black'>Portfolio</Link>
                </li>
                <li className='flex items-center gap-2.5'>
                    <Link to="/" className=' text-xl uppercase text-black'>Pages</Link>
                    <FontAwesomeIcon icon={faChevronDown} className='text-xs' />
                </li>
                <li>
                    <Link to="/" className=' text-xl uppercase text-black'>Blog</Link>
                </li>
                <li>
                    <Link to="/" className=' text-xl uppercase text-black'>Contact</Link>
                </li>
            </ul>
            
            </div>
        </div>
    </div>
  )
}
