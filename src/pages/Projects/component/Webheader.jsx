import React from 'react'
import { Link } from 'react-router-dom'
import Weblogo from '../../../assets/images/yoks.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
export const Webheader = () => {
  return (
    <div className='py-5 border-b border-gray-200 fixed top-0 left-0 w-full zindex-999 bg-gray-100'>
        <div className='max-w-1440 mx-auto'>
            <div className='flex items-center justify-between'>
            <Link to="/">
                <img src={Weblogo} className='w-12' alt='Weblogo'/>
            </Link>
            <ul className='flex items-center gap-10 font-Teko'>
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
