
import React from 'react'
import Portfolio from '../../icons/Portfolio'
import Figma from '../../assets/images/figma.png'
import Html from '../../assets/images/html.png'
import Css from '../../assets/images/css.png'
import Reactjs from '../../assets/images/reactjs.png'
import Wordpress from '../../assets/images/wordpress.png'
import Tailwindcs from '../../assets/images/tailwind.svg'
import Bootsrap from '../../assets/images/bootstrap.svg'
import Elementor from '../../assets/images/elementor.svg'
import Jquery from '../../assets/images/jquery-icon.svg'
export const Myskills = () => {
  return (
    <>
    <div className='py-10 xl:py-20 2xl:py-24' id="myskill" name="section5" data-aos="fade-up" data-aos-duration="1000" data-aos-offset="100" data-aos-delay="460">
    <div className="max-w-full px-5 md:px-10 md:max-w-4xl xl:px-0 xl:max-w-5xl 2xl:max-w-6xl mx-auto">
          <div className="xl:ms-72">
            <div className="space-y-6 2xl:space-y-10 max-w-2xl">
              <div className="rounded-4xl py-2 px-5 border border-white/20 inline-flex items-center gap-2">
                
                <Portfolio className="stroke-white/80 w-3 h-3 stroke-2 hover:stroke-Primary transition-all ease-in-out duration-300"/>
               
                <p className="uppercase text-xs text-gray-500 font-normal">
                  My Skills
                </p>
              </div>
              <h2 className="text-3xl md:text-4xl 2xl:text-5xl md:leading-14 font-poppins font-thin poppins-thin text-white">
              My <span className=" text-Primary font-medium">Advantages</span>
              </h2>
            </div>
            <div className='mt-8 md:mt-12 grid grid-cols-2 md:grid-cols-3 2xl:grid-cols-4 gap-4 md:gap-8'>
              <div className='relative text-center space-y-3 group/hs'>
                  <div className='flex w-32 h-32 md:w-48 md:h-48 items-center justify-center rounded-full border  border-gray-500 p-10 cursor-pointer transition-all ease-in-out duration-300 hover:border-Primary space-y-7'>
                    <div className='relative space-y-5 text-center'>
                      <img src={Figma} className='w-8 h-8 md:w-16 md:h-16 mx-auto' alt='figma'/>
                      <h3 className='text-gray-500 text-xl md:text-3xl font-normal group-hover/hs:text-Primary transition-all ease-in-out duration-300'>92%</h3>
                    </div>
                  </div>
                  <h4 className='text-sm md:text-base text-gray-400 group-hover/hs:text-Primary transition-all ease-in-out duration-300'>Figma</h4>
              </div>
              {/* 02 */}
              <div className='relative text-center space-y-3 group/hs'>
                  <div className='flex w-32 h-32 md:w-48 md:h-48 items-center justify-center rounded-full border  border-gray-500 p-10 cursor-pointer transition-all ease-in-out duration-300 hover:border-Primary space-y-7'>
                    <div className='relative space-y-5 text-center'>
                      <img src={Html} className='w-8 h-8 md:w-16 md:h-16 mx-auto' alt='html'/>
                      <h3 className='text-gray-500 text-xl md:text-3xl font-normal group-hover/hs:text-Primary transition-all ease-in-out duration-300'>92%</h3>
                    </div>
                  </div>
                  <h4 className='text-sm md:text-base text-gray-400 group-hover/hs:text-Primary transition-all ease-in-out duration-300'>Html 5</h4>
              </div>
              <div className='relative text-center space-y-3 group/hs'>
                  <div className='flex w-32 h-32 md:w-48 md:h-48 items-center justify-center rounded-full border  border-gray-500 p-10 cursor-pointer transition-all ease-in-out duration-300 hover:border-Primary space-y-7'>
                    <div className='relative space-y-5 text-center'>
                      <img src={Css} className='w-8 h-8 md:w-16 md:h-16 mx-auto' alt='css'/>
                      <h3 className='text-gray-500 text-xl md:text-3xl font-normal group-hover/hs:text-Primary transition-all ease-in-out duration-300'>92%</h3>
                    </div>
                  </div>
                  <h4 className='text-sm md:text-base text-gray-400 group-hover/hs:text-Primary transition-all ease-in-out duration-300'>Css 3</h4>
              </div>
              <div className='relative text-center space-y-3 group/hs'>
                  <div className='flex w-32 h-32 md:w-48 md:h-48 items-center justify-center rounded-full border  border-gray-500 p-10 cursor-pointer transition-all ease-in-out duration-300 hover:border-Primary space-y-7'>
                    <div className='relative space-y-5 text-center'>
                      <img src={Reactjs} className='w-8 h-8 md:w-16 md:h-16 mx-auto' alt='react'/>
                      <h3 className='text-gray-500 text-xl md:text-3xl font-normal group-hover/hs:text-Primary transition-all ease-in-out duration-300'>92%</h3>
                    </div>
                  </div>
                  <h4 className='text-sm md:text-base text-gray-400 group-hover/hs:text-Primary transition-all ease-in-out duration-300'>React</h4>
              </div>
              <div className='relative text-center space-y-3 group/hs'>
                  <div className='flex w-32 h-32 md:w-48 md:h-48 items-center justify-center rounded-full border  border-gray-500 p-10 cursor-pointer transition-all ease-in-out duration-300 hover:border-Primary space-y-7'>
                    <div className='relative space-y-5 text-center'>
                      <img src={Reactjs} className='w-8 h-8 md:w-16 md:h-16 mx-auto' alt='react'/>
                      <h3 className='text-gray-500 text-xl md:text-3xl font-normal group-hover/hs:text-Primary transition-all ease-in-out duration-300'>92%</h3>
                    </div>
                  </div>
                  <h4 className='text-sm md:text-base text-gray-400 group-hover/hs:text-Primary transition-all ease-in-out duration-300'>React</h4>
              </div>
              <div className='relative text-center space-y-3 group/hs'>
                  <div className='flex items-center w-32 h-32 md:w-48 md:h-48 justify-center rounded-full border  border-gray-500 p-10 cursor-pointer transition-all ease-in-out duration-300 hover:border-Primary space-y-7'>
                    <div className='relative space-y-5 text-center'>
                      <img src={Wordpress} className='w-8 h-8 md:w-16 md:h-16 mx-auto' alt='Wordpress'/>
                      <h3 className='text-gray-500 text-xl md:text-3xl font-normal group-hover/hs:text-Primary transition-all ease-in-out duration-300'>92%</h3>
                    </div>
                  </div>
                  <h4 className='text-sm md:text-base text-gray-400 group-hover/hs:text-Primary transition-all ease-in-out duration-300'>Wordpress</h4>
              </div>
             
              <div className='relative text-center space-y-3 group/hs'>
                  <div className='flex items-center w-32 h-32 md:w-48 md:h-48 justify-center rounded-full border  border-gray-500 p-10 cursor-pointer transition-all ease-in-out duration-300 hover:border-Primary space-y-7'>
                    <div className='relative space-y-5 text-center'>
                      <img src={Tailwindcs} className='w-8 h-8 md:w-16 md:h-16 mx-auto' alt='Tailwindcs'/>
                      <h3 className='text-gray-500 text-xl md:text-3xl font-normal group-hover/hs:text-Primary transition-all ease-in-out duration-300'>92%</h3>
                    </div>
                  </div>
                  <h4 className='text-sm md:text-base text-gray-400 group-hover/hs:text-Primary transition-all ease-in-out duration-300'>Tailwind</h4>
              </div>
              <div className='relative text-center space-y-3 group/hs'>
                  <div className='flex items-center w-32 h-32 md:w-48 md:h-48 justify-center rounded-full border  border-gray-500 p-10 cursor-pointer transition-all ease-in-out duration-300 hover:border-Primary space-y-7'>
                    <div className='relative space-y-5 text-center'>
                      <img src={Bootsrap} className='w-8 h-8 md:w-16 md:h-16 mx-auto' alt='Bootsrap'/>
                      <h3 className='text-gray-500 text-xl md:text-3xl font-normal group-hover/hs:text-Primary transition-all ease-in-out duration-300'>92%</h3>
                    </div>
                  </div>
                  <h4 className='text-sm md:text-base text-gray-400 group-hover/hs:text-Primary transition-all ease-in-out duration-300'>Bootsrap</h4>
              </div>
              <div className='relative text-center space-y-3 group/hs'>
                  <div className='flex items-center w-32 h-32 md:w-48 md:h-48 justify-center rounded-full border  border-gray-500 p-10 cursor-pointer transition-all ease-in-out duration-300 hover:border-Primary space-y-7'>
                    <div className='relative space-y-5 text-center'>
                      <img src={Elementor} className='w-8 h-8 md:w-16 md:h-16 mx-auto' alt='elementor'/>
                      <h3 className='text-gray-500 text-xl md:text-3xl font-normal group-hover/hs:text-Primary transition-all ease-in-out duration-300'>92%</h3>
                    </div>
                  </div>
                  <h4 className='text-sm md:text-base text-gray-400 group-hover/hs:text-Primary transition-all ease-in-out duration-300'>Wordpress Elementor</h4>
              </div>
              <div className='relative text-center space-y-3 group/hs'>
                  <div className='flex items-center w-32 h-32 md:w-48 md:h-48 justify-center rounded-full border  border-gray-500 p-10 cursor-pointer transition-all ease-in-out duration-300 hover:border-Primary space-y-7'>
                    <div className='relative space-y-5 text-center'>
                      <img src={Jquery} className='w-8 h-8 md:w-16 md:h-16 mx-auto' alt='elementor'/>
                      <h3 className='text-gray-500 text-xl md:text-3xl font-normal group-hover/hs:text-Primary transition-all ease-in-out duration-300'>92%</h3>
                    </div>
                  </div>
                  <h4 className='text-sm md:text-base text-gray-400 group-hover/hs:text-Primary transition-all ease-in-out duration-300'>Jquery</h4>
              </div>
              </div>
            
          </div>
        </div>
    </div>
    </>
  )
}
