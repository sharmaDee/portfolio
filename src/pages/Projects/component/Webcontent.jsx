import React from 'react'
import Shapeone from '../../../assets/images/shape.png';
import Shapeimg from '../../../assets/images/peoples.png';
import Shapetwo from '../../../assets/images/img-s-69.webp';
import Rightarrow from '../../../assets/images/arrow-right-half.webp';
import Avtar from '../../../assets/images/avtar.webp';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom'



export const Webcontent = () => {
  return (
    <>
    {/* // Hero secetion */}
    <div className='py-28 bg-gray-100 relative overflow-hidden'>
        <div className='max-w-1440 mx-auto'>
            <div className='flex'>
                <div className='w-60%'>
                <div className='relative font-Teko'>
                    <h1 className='text-190 leading-40 font-bold uppercase'>We are Skilled in <span className='text-4xl pb-5 font-medium  before:content-[""] before:absolute before:bottom-1.5 after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-orange-500 before:w-full before:h-0.5 before:bg-orange-500 mr-10 -translate-y-7 leading-8 relative  inline-block'>Web <br/>Design</span> 
 and <span className='text-3xl font-normal rotate-180 pt-7 inline-flex bg-amber-500 w-32 h-32 writing-vertical rounded-54px lowercase items-center'>Development</span><span className='shape-1 relative z-10 -top-6 -ml-3.5'><img src={Avtar} className='inline-flex' alt="Avtar"/></span></h1>
                </div>
                <div className='flex items-start gap-9 max-w-500px ml-32 mt-20'>
                  <div className='flex items-center justify-center w-12 h-24 shrink-0 border border-Eerieblack rounded-4xl'>
                    <FontAwesomeIcon icon={faArrowDown} />
                  </div>
                  <div className='space-y-5 '>
                    <p className='text-lg font-medium font-Teko text-black leading-6'>We are a full-service digital agency that builds fascinating user experiences. our team creates and exceptional UI design and functionality. </p>
                    <Link to="/" className='font-medium text-black font-Kanit text-base no-underline relative before:contact-[""] before:left-0 before:bottom-0 before:w-full before:h-0.5 before:bg-transparent before:transition-all before:ease-in-out before:duration-300 hover:before:bg-black before:absolute before:inline-flex  inline-flex items-center gap-3 '>Get Started Now <img src={Rightarrow} alt="Rightarrow"/> </Link>
                  </div>
                </div>
                </div>
                <div className='w-40%'>
                  <div className='thumb-wrapper relative'>
                    <div className='shape-1 absolute top-0 left-0'>
                      <img src={Shapeone} alt="Shapeone"/>
                    </div>
                   
                    <div className="hero-thumb flex items-start">
                      <div className="thumb-1 mt-40  relative before:content-[''] before:w-full before:h-full before:bg-orange-500 before:top-0 before:left-0 before:mix-blend-multiply before:absolute">
                        <img className='w-full h-full object-cover' src={Shapeimg} alt="Shapeimg"/>
                      </div>
                      <div className="thumb-2 relative right-0">
                        <img className='w-full h-full object-cover' src={Shapetwo} alt="Shapeimg"/>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='absolute px-10 pt-16 max-w-2xs h-full right-0 top-0 border-l border-gray-300'>
                  <p className='uppercase font-semibold text-base leading-8'>BUILDING <br/> OUTSTANDING <br/> DESIGN & <br/> DEVELOPMENT</p>
                </div>
                <div className='w-400px absolute -bottom-36 -left-48 h-400px border-[6rem] shrink-0 border-gray-400/20 rounded-full'></div>
                
            </div>
        </div>
    </div>
    </>
  )
}
