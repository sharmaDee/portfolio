import React from 'react'
import Whoweare from '../../../assets/images/who-weare.png'
import Peoples from '../../../assets/images/thumb.png'
import Dicussion from '../../../assets/images/dicussion.jpg'
import Cybersecurity from '../../../assets/images/cybersecurity.jpg'
import Doubleshape from '../../../assets/images/double-shape.png'
export const Webwhowe = () => {
  return (
    <>
    <div className='relative py-24'>
        <div className='max-w-1440 mx-auto'>
            <div className='relative'>
              <div className='absolute right-0 top-40'>
                <img src={Whoweare} alt='Whoweare'/>
              </div>
              <div className='-mb-10'><p className='font-Kanit text-base font-semibold text-Webblack'>01. Who we are</p></div>
                <h2 className='text-80px leading-20 uppercase font-Teko font-bold text-Webblack indent-96 max-w-5xl'>Have a brilliant idea boost the <span className='text-gray-400'>growth development</span> agency <br/> your branding!</h2>
            </div>
            <div className='relative flex items-start mt-20 gap-56'>
              <div className='relative space-y-10'>
                <img src={Peoples} alt='Peoples'/>
                <div className='flex gap-4 items-start'>
                  <h3 className='text-2xl font-semibold font-Teko rotate-180 writing-vertical'>32k+</h3>
                  <p className='text-base font-Kanit max-w-24 leading-5 text-Davy -mt-4'>happy clients of our Services</p>
                </div>
              </div>
              <div className='border-l border-gray-200 pl-20 space-y-10'>
                <p className='text-Davy text-lg font-medium max-w-400px'>Consumers today rely heavily on digital means to research products. We research a brand of bldend engaging with it, according to the meanwhile, 51% of consumers</p>
                <div className='relative'>
                  <a href='/' className='w-44 h-44 transition-all duration-700 ease-in-out rounded-full border border-gray-300 flex items-center justify-center text-base font-normal font-Kanit z-10 overflow-hidden relative hover:text-white text-center group/card'>Explore Us<br/>More <span className='absolute rounded-full left-1/2 group-hover/card:w-400px group-hover/card:h-400px group-hover/card:top-5 group-hover/card:left-48 -translate-x-1/2 -translate-y-1/2 bg-black top-1/2 w-0 h-0 transition-all duration-700 -z-[1] ease-in-out'></span></a>
                </div>
              </div>
            </div>
            <div className='flex justify-between gap-x-14 gap-y-8 pl-24'>
              <div className='mt-40'><img src={Dicussion} alt='dicussion'/></div>
              <div className='relative pr-32'>
                <img src={Cybersecurity} alt='Cybersecurity'/>
                <div className='absolute -top-20 right-0 space-y-8 bg-gray-100 p-12 w-80'>
                  <img src={Doubleshape} alt='Doubleshape' className='w-7'/>
                  <p className='text-lg text-gray-950 font-medium leading-6'>Make your business prosper with our great team of experts. We’ll make your.</p>
                <div className='flex flex-col   font-Teko'>
                  <div className='flex items-baseline gap-1'>
                    <span className='text-9xl text-black  block font-bold '>1.8</span>
                    <span className='text-4xl text-black font-bold'>x</span>
                    
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
