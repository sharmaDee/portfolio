import React from 'react'
import Abouticon from '../../icons/Abouticon';

export const About = () => {
  return (
    <>
    <div className='scroll-container py-10 xl:py-20 2xl:py-24' id="about" name="section2" data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="300">
    <div className="max-w-full squaretwo px-5 md:px-10 md:max-w-4xl xl:px-0 xl:max-w-5xl 2xl:max-w-6xl mx-auto">
          <div className="xl:ms-72 ">
            <div className="space-y-4 md:space-y-6 2xl:space-y-10 max-w-2xl">
              <div className="rounded-4xl py-2 px-5 border border-white/20 inline-flex items-center gap-2">
               <Abouticon className="stroke-white/80 w-3 h-3 stroke-2 hover:stroke-Primary transition-all ease-in-out duration-300"/>
                <p className="uppercase text-xs text-gray-500 font-normal">
                  About
                </p>
              </div>
              <h2 className="text-3xl md:text-4xl 2xl:text-5xl md:leading-14 font-poppins font-thin poppins-thin text-white">
              Every great design begin with an even <span className="font-medium text-Primary">better story</span>

                
              </h2>
              <p className="text-base font-normal md:mt-10 text-gray-500">
              Since beginning my journey as a freelance designer nearly 8 years ago, I've done remote work for agencies, consulted for startups, and collaborated with talented people to create digital products for both business and consumer use. I'm quietly confident, naturally curious, and perpetually working on improving my chopsone design problem at a time.

              </p>
              
              
            </div>
          </div>
        </div>
    </div>
    
    </>
  )
}
