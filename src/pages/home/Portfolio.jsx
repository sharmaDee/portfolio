
import React from 'react'
import Serviceicon from '../../icons/Serviceicon'
import Codeicon from '../../icons/Codeicon'
import Skills from '../../icons/Skills'
import PortfolioImg from '../../assets/images/portfolio1.jpg'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Mousewheel, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { Link } from 'react-router-dom'


export const Portfolio = () => {

  return (
    <>
    <div className='py-10 xl:py-20 2xl:py-24' id="portfolio" name="section5" data-aos="fade-right" data-aos-duration="1000" data-aos-offset="100" data-aos-delay="460">
    <div className="max-w-full px-5 md:px-10 md:max-w-4xl xl:px-0 xl:max-w-5xl 2xl:max-w-6xl mx-auto">
          <div className="xl:ms-72 ">
            <div className="space-y-6 2xl:space-y-10 max-w-2xl">
              <div className="rounded-4xl py-2 px-5 border border-white/20 inline-flex items-center gap-2">
                
                <Skills className="stroke-white/80 w-3 h-3 stroke-2 hover:stroke-Primary transition-all ease-in-out duration-300"/>
               
                <p className="uppercase text-xs text-gray-500 font-normal">
                portfolio 
                </p>
              </div>
              <h2 className="text-3xl md:text-4xl 2xl:text-5xl leading-14 font-poppins font-thin poppins-thin text-white">
              Featured  <span className=" text-Primary font-medium">Projects</span>
              </h2>
            </div>
            <div className='mt-8 md:mt-12 '>
              
              <div className='relative'>

              <Swiper direction={'horizontal'}  mousewheel={true} loop={true} pagination={{clickable: true,}} slidesPerView={2}  spaceBetween={30} navigation={true} modules={[Navigation, Mousewheel, Pagination]} className="mySwiper">
              <SwiperSlide>
              <div className='rounded-2xl group/hs cursor-pointer transition-all ease-in-out duration-300  space-y-4'>
                  <div className='flex rounded-2xl overflow-hidden flex-col gap-y-3 border border-gray-500'>
                    <div className='relative'>
                        <img src={PortfolioImg} alt='portfolio' className='group-hover/hs:scale-105 w-full h-full transition-all ease-in-out duration-300'/>
                        <div className='absolute bottom-2.5 left-1.5 flex items-center gap-1.5'>
                        <p className='bg-white rounded-full px-3 font-medium py-1.5 text-xs inline-block  '>Figma</p>
                        <p className='bg-white rounded-full px-3 font-medium py-1.5 text-xs inline-block  '>React</p>
                        <p className='bg-white rounded-full px-3 font-medium py-1.5 text-xs inline-block  '>Tailwind</p> 
                        </div>
                    </div>
                    
                  </div>
                  
                   <Link to="/Webagency"   className='text-xl text-white  group-hover/hs:underline group-hover/hs:text-Primary transition-all ease-in-out duration-300'>Bureau - Architecture Studio Website</Link >
                 
              </div>
              </SwiperSlide>
              <SwiperSlide>
              <div className='rounded-2xl group/hs cursor-pointer transition-all ease-in-out duration-300  space-y-4'>
                  <div className='flex rounded-2xl overflow-hidden flex-col gap-y-3 border border-gray-500'>
                    <div className='relative '>
                        <img src={PortfolioImg} alt='portfolio' className='group-hover/hs:scale-105 w-full h-full transition-all ease-in-out duration-300'/>
                        <div className='absolute bottom-2.5 left-1.5 flex items-center gap-1.5'>
                        <p className='bg-white rounded-full px-3 font-medium py-1.5 text-xs inline-block  '>Figma</p>
                        <p className='bg-white rounded-full px-3 font-medium py-1.5 text-xs inline-block  '>React</p>
                        <p className='bg-white rounded-full px-3 font-medium py-1.5 text-xs inline-block  '>Tailwind</p> 
                        </div>
                    </div>
                    
                  </div>
                  <a href='#' className='text-xl text-white  group-hover/hs:underline group-hover/hs:text-Primary transition-all ease-in-out duration-300'>Bureau - Architecture Studio Website</a>
              </div>
              </SwiperSlide>
              <SwiperSlide>
              <div className='rounded-2xl group/hs cursor-pointer transition-all ease-in-out duration-300  space-y-4'>
                  <div className='flex rounded-2xl overflow-hidden flex-col gap-y-3 border border-gray-500'>
                    <div className='relative '>
                        <img src={PortfolioImg} alt='portfolio' className='group-hover/hs:scale-105 w-full h-full transition-all ease-in-out duration-300'/>
                        <div className='absolute bottom-2.5 left-1.5 flex items-center gap-1.5'>
                        <p className='bg-white rounded-full px-3 font-medium py-1.5 text-xs inline-block  '>Figma</p>
                        <p className='bg-white rounded-full px-3 font-medium py-1.5 text-xs inline-block  '>React</p>
                        <p className='bg-white rounded-full px-3 font-medium py-1.5 text-xs inline-block  '>Tailwind</p> 
                        </div>
                    </div>
                    
                  </div>
                  <a href='#' className='text-xl text-white  group-hover/hs:underline group-hover/hs:text-Primary transition-all ease-in-out duration-300'>Bureau - Architecture Studio Website</a>
              </div>
              </SwiperSlide>
             
              
              </Swiper>
              
             
          
             
              <div className='mt-2 md:mt-6 2xl:mt-10'>
                    <button type="submit" className="bg-linear-to-bl cursor-pointer from-Primary to-green-700 rounded-full px-8 py-2.5 transition-all ease-in-out duration-500 hover:shadow-card text-white text-base font-medium ">See More</button>
                </div>
              </div>
              
              </div>
            
          </div>
        </div>
    </div>
    </>
  )
}
