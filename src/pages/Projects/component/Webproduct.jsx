import React from 'react'
import Dedicatedteam from '../../../assets/images/dedicated-team.webp';
import Producteam from '../../../assets/images/product-team.webp';
import Endtoend from '../../../assets/images/endtoend.webp';
import Emoje from '../../../assets/images/emoje.webp';
export const Webproduct = () => {
  return (
    <>
        <div className='py-14 xl:py-28 !pb-0 px-5 bg-orange-200'>
          <div className='xl:max-w-1220px 2xl:max-w-1440 mx-auto space-y-16 xl:space-y-24'>
            <div className="max-w-730px mx-auto space-y-5 xl:space-y-7 relative">
              <div className='hidden xl:block absolute left-1/2 -top-16 -translate-x-1/2'>
                <img src={Emoje} alt='Emoje'/>
              </div>
              <h2 className='text-4xl lg:text-5xl xl:text-80px lg:leading-20 font-bold font-Teko uppercase'>take charge steering your product</h2>
              <p className='text-Webblack text-lg lg:max-w-80 ml-auto font-normal font-Kanit'>Our ability to combine expertise and systems thinking is what fuels us as a team.</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-3  font-Teko 2xl:-mx-24'>
              <div className='relative space-y-6 md:space-y-10 md:border-e-[1px] border-black/15  md:px-5 xl:px-14 2xl:px-24 pb-10 xl:pb-20'>
                <img src={Dedicatedteam} className='w-12 md:w-auto' alt='Dedicatedteam'/>
                <div className='space-y-4'>
                  <h3 className='text-3xl lg:text-4xl text-Webblack uppercase font-semibold leading-8'>Dedicated <br/>Team</h3>
                  <p className='font-Kanit text-base lg:text-lg text-Webblack font-normal'>Find the best fit engineers led by senior, seasoned, and skilled our tech- lead.</p>
                </div>
              </div>
              <div className='relative space-y-6 md:space-y-10 md:border-e-[1px] border-black/15  md:px-5 xl:px-14 2xl:px-24 pb-10 xl:pb-20'>
                <img src={Producteam} className='w-12 md:w-auto' alt='Producteam'/>
                <div className='space-y-4'>
                  <h3 className='text-3xl lg:text-4xl text-Webblack uppercase font-semibold leading-8'>Product <br/>Team</h3>
                  <p className='font-Kanit text-base lg:text-lg text-Webblack font-normal'>Get top-notch service from an experienced Product Designer Manager team.</p>
                </div>
              </div>
              <div className='relative space-y-6 md:space-y-10  md:px-5 xl:px-14 2xl:px-24 pb-10 xl:pb-20'>
                <img src={Endtoend} className='w-12 md:w-auto' alt='Dedicatedteam'/>
                <div className='space-y-4'>
                  <h3 className='text-3xl lg:text-4xl text-Webblack uppercase font-semibold leading-8'>End-to-End <br/>Team</h3>
                  <p className='font-Kanit text-base lg:text-lg text-Webblack font-normal'>Hire an elite squad of leading have professionals to turn idea into an
                          ready-to-market product.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
    </>
  )
}
