import React from 'react'
import Testimonialpeople from '../../../assets/images/testimonial-people.jpg'
import Selinagomaze from '../../../assets/images/selina-gomaze.jpg'
import Pedrikvadra from '../../../assets/images/pedrik-vadra.jpg'
import Thomasribbon from '../../../assets/images/thomas-ribbon.jpg'
export const Webteam = () => {
  return (
   <>
   <div className='py-16 md:py-24 xl:py-32 px-5 bg-Webblack'>
    <div className='xl:max-w-1220px 2xl:max-w-1440 mx-auto space-y-16 xl:space-y-20'>
        <div className='relative max-w-730px mx-auto space-y-6 '>
            <h2 className='text-4xl lg:text-5xl xl:text-80px font-Teko xl:leading-20 font-bold text-white uppercase'>Introducing Yoks skilled team!</h2>
            <p className='text-gray-100 text-lg xl:max-w-80 xl:ml-auto font-normal font-Kanit'>Our ability to combine expertise and systems thinking is what fuels us as a team.</p>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
            <div className='relative text-white space-y-8 lg:pt-10 xl:pt-20'>
                <div className='h-350px xl:h-480px'>
                    <img src={Testimonialpeople} className='w-full h-full object-cover' alt='testimonialpeople'/>
                </div>
                <div className='space-y-0'>
                    <h4 className='text-3xl text-white font-semibold font-Teko'>Kamal Abraham</h4>
                    <p className='text-base text-white/70 font-Kanit font-normal'>CEO, Wealcoder</p>
                </div>
            </div>
            <div className='relative text-white space-y-8'>
                <div className='h-350px xl:h-480px'>
                    <img src={Selinagomaze} className='w-full h-full object-cover' alt='Selinagomaze'/>
                </div>
                <div className='space-y-0'>
                    <h4 className='text-3xl text-white font-semibold font-Teko'>Selina Gomaze</h4>
                    <p className='text-base text-white/70 font-Kanit font-normal'>Junior Executive</p>
                </div>
            </div>
            <div className='relative text-white space-y-8 lg:pt-10 xl:pt-20'>
                <div className='h-350px xl:h-480px'>
                    <img src={Pedrikvadra} className='w-full h-full object-cover' alt='Pedrikvadra'/>
                </div>
                <div className='space-y-0'>
                    <h4 className='text-3xl text-white font-semibold font-Teko'>Pedrik Vadra</h4>
                    <p className='text-base text-white/70 font-Kanit font-normal'>Sr. Developer</p>
                </div>
            </div>
            <div className='relative text-white space-y-8'>
                <div className='h-350px xl:h-480px'>
                    <img src={Thomasribbon} className='w-full h-full object-cover' alt='Thomasribbon'/>
                </div>
                <div className='space-y-0'>
                    <h4 className='text-3xl text-white font-semibold font-Teko'>Thomas Ribbon</h4>
                    <p className='text-base text-white/70 font-Kanit font-normal'>UX Designer</p>
                </div>
            </div>
        </div>
    </div>
   </div>
   </>
  )
}
