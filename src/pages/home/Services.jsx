import React from 'react'
import Serviceicon from '../../icons/Serviceicon'
import Codeicon from '../../icons/Codeicon'

export const Services = () => {
  return (
   <>
    <div className='py-10 xl:py-20 2xl:py-24' id="services" name="section4" data-aos="fade-right" data-aos-duration="1000" data-aos-offset="200" data-aos-delay="450">
    <div className="max-w-full px-5 md:px-10 md:max-w-4xl xl:px-0 xl:max-w-5xl 2xl:max-w-6xl mx-auto">
          <div className="xl:ms-72 ">
            <div className="space-y-4 md:space-y-6 2xl:space-y-10 max-w-2xl">
              <div className="rounded-4xl py-2 px-5 border border-white/20 inline-flex items-center gap-2">
                <Serviceicon className="stroke-white/80 w-3 h-3 stroke-2 hover:stroke-Primary transition-all ease-in-out duration-300"/>
               
                <p className="uppercase text-xs text-gray-500 font-normal">
                  Services
                </p>
              </div>
              <h2 className="text-3xl md:text-4xl 2xl:text-5xl leading-14 font-poppins font-thin poppins-thin text-white">
              My <span className=" text-Primary font-medium">Specializations</span>
              </h2>
            </div>
            <div className='mt-5 md:mt-12 flex flex-col gap-6'>
              <div className='rounded-2xl group/hs overflow-hidden p-0.5  bg-gradient-to-r from-Primary via-green-400 to-green-600  cursor-pointer transition-all ease-in-out duration-300  space-y-7'>
                  <div className='flex rounded-2xl flex-col gap-y-3.5 bg-gradient-to-r bg-gray-900  p-5 md:p-8'>
                  <div className='flex items-start justify-between'>
                    <div className='relative space-y-3'>
                      <h3 className='text-white text-2xl font-normal'>Website Design</h3>
                      <p className='text-gray-500 text-base'>I created digital products with unique ideas use Figma & Framer</p>
                    </div>
                    <Codeicon className="fill-Primary w-10 h-10   transition-all ease-in-out duration-300"/>
                  </div>
                  <p className='text-base text-gray-500 group-hover/hs:underline '>42 Projects</p>
                  </div>
                  
              </div>
              <div className='rounded-2xl group/hs overflow-hidden p-0.5  bg-gradient-to-r from-Primary via-green-400 to-green-600  cursor-pointer transition-all ease-in-out duration-300  space-y-7'>
                  <div className='flex rounded-2xl flex-col gap-y-3.5 bg-gradient-to-r bg-gray-900  p-5 md:p-8'>
                  <div className='flex items-start justify-between'>
                    <div className='relative space-y-3'>
                      <h3 className='text-white text-2xl font-normal'>Website Design</h3>
                      <p className='text-gray-500 text-base'>I created digital products with unique ideas use Figma & Framer</p>
                    </div>
                    <Codeicon className="fill-Primary w-10 h-10   transition-all ease-in-out duration-300"/>
                  </div>
                  <p className='text-base text-gray-500 group-hover/hs:underline'>42 Projects</p>
                  </div>
                  
              </div>
              </div>
            
          </div>
        </div>
    </div>
   </>
  )
}
