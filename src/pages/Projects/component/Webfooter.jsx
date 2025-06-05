import React from 'react'

export const Webfooter = () => {
  return (
    <>
    <div className='px-5 py-20 xl:py-24 !pb-0 bg-Webblack'>
        <div className='xl:max-w-1220px 2xl:max-w-1440 mx-auto '>
            <div className='text-center space-y-2 xl:space-y-4 pb-20 xl:pb-40'>
                <span className='uppercase text-2xl md:text-4xl font-bold text-white block font-Teko'>🖐️ Hello</span>
                <h2 className='text-5xl lg:text-7xl xl:text-9xl 2xl:text-200px font-Teko font-bold text-white 2xl:leading-40 uppercase'>Let’s Talk <br/>with us</h2>
                <p className='text-xl xl:text-4xl font-Kanit text-white relative before:content-[""] before:absolute before:-bottom-2 before:left-0 before:w-full before:h-0.5 before:bg-white  inline-block '>yoks@example.com</p>
            </div>
            <div className='relative text-center py-5 px-5 border-t border-white/25'>
                <p className='text-base font-Kanit font-normal text-white'>© 2024-25 Yoks Agency</p>
            </div>
            
        </div>
    </div>
    </>
  )
}
