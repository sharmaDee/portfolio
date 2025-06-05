import React from 'react'
import Whoweare from '../../../assets/images/who-weare.png'
import Peoples from '../../../assets/images/thumb.png'
import Dicussion from '../../../assets/images/dicussion.jpg'
import Cybersecurity from '../../../assets/images/cybersecurity.jpg'
import Doubleshape from '../../../assets/images/double-shape.png'
export const Webwhowe = () => {
  return (
    <>
    <div className='relative py-24 px-5'>
        <div className='xl:max-w-1220px 2xl:max-w-1440 mx-auto'>
            <div className='relative'>
              <div className='absolute hidden lg:block right-0 top-40'>
                <img src={Whoweare} alt='Whoweare'/>
              </div>
              <div className='mb-4 lg:-mb-10'><p className='font-Kanit text-base font-semibold text-Webblack'>01. Who we are</p></div>
                <h2 className='text-4xl lg:text-80px lg:leading-20 uppercase font-Teko font-bold text-Webblack lg:indent-96 max-w-5xl'>Have a brilliant idea boost the <span className='text-gray-400'>growth development</span> agency <br/> your branding!</h2>
            </div>
            <div className='relative flex flex-col md:flex-row items-start mt-20 gap-14 lg:gap-56'>
              <div className='relative space-y-10'>
                <img src={Peoples} alt='Peoples'/>
                <div className='flex gap-4 items-start'>
                  <h3 className='text-2xl font-semibold font-Teko rotate-180 writing-vertical'>32k+</h3>
                  <p className='text-base font-Kanit max-w-24 leading-5 text-Davy -mt-4'>happy clients of our Services</p>
                </div>
              </div>
              <div className='md:border-l border-gray-200 md:pl-14 lg:pl-20 space-y-10'>
                <p className='text-Davy text-lg font-medium max-w-400px'>Consumers today rely heavily on digital means to research products. We research a brand of bldend engaging with it, according to the meanwhile, 51% of consumers</p>
                <div className='relative'>
                  <a href='/' className='w-44 h-44 transition-all duration-700 ease-in-out rounded-full border border-gray-300 flex items-center justify-center text-base font-normal font-Kanit z-10 overflow-hidden relative hover:text-white text-center group/card'>Explore Us<br/>More <span className='absolute rounded-full left-1/2 group-hover/card:w-400px group-hover/card:h-400px group-hover/card:top-5 group-hover/card:left-48 -translate-x-1/2 -translate-y-1/2 bg-black top-1/2 w-0 h-0 transition-all duration-700 -z-[1] ease-in-out'></span></a>
                </div>
              </div>
            </div>
            <div className='flex flex-col md:flex-row md:justify-between gap-x-14 gap-y-8 md:pl-10 lg:pl-24 mt-10 md:mt-28 lg:mt-10'>
              <div className='md:mt-40'><img src={Dicussion} alt='dicussion' className='w-full'/></div>
              <div className='relative space-y-5 md:space-y-0 md:pr-32'>
                <img src={Cybersecurity} alt='Cybersecurity' className='w-full'/>
                <div className='md:absolute md:-top-20 md:right-0 space-y-5 lg:space-y-8 bg-gray-100 p-8 lg:p-12 w-full md:w-80'>
                  <img src={Doubleshape} alt='Doubleshape' className='w-7'/>
                  <p className='text-base lg:text-lg text-gray-950 font-medium leading-6'>Make your business prosper with our great team of experts. We’ll make your.</p>
                <div className='flex flex-col   font-Teko'>
                  <div className='flex items-baseline gap-1'>
                    <span className='text-7xl lg:text-9xl text-black  block font-bold '>1.8</span>
                    <span className='text-3xl lg:text-4xl text-black font-bold'>x</span>
                    
                  </div>
                  <span className='text-xl -mt-4 uppercase block font-semibold text-black'>Faster Service</span>
                </div>
                </div>
                
              </div>
            </div>
        </div>
    </div>
    </>
  )
}
