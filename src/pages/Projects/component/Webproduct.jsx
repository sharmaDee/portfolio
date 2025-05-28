import React from 'react'
import Dedicatedteam from '../../../assets/images/dedicated-team.webp';
import Producteam from '../../../assets/images/product-team.webp';
import Endtoend from '../../../assets/images/endtoend.webp';
import Emoje from '../../../assets/images/emoje.webp';
export const Webproduct = () => {
  return (
    <>
        <div className='py-28 pb-0 bg-orange-200'>
          <div className='max-w-1440 mx-auto space-y-24'>
            <div className="max-w-730px mx-auto space-y-7 relative">
              <div className='absolute left-1/2 -top-16 -translate-x-1/2'>
                <img src={Emoje} alt='Emoje'/>
              </div>
              <h2 className='text-80px leading-20 font-bold font-Teko uppercase'>take charge steering your product</h2>
              <p className='text-Webblack text-lg max-w-80 ml-auto font-normal font-Kanit'>Our ability to combine expertise and systems thinking is what fuels us as a team.</p>
            </div>
            <div className='grid grid-cols-3 gap-3  font-Teko -mx-24'>
              <div className='relative space-y-10 border-e-[1px] border-black/15  px-24 pb-20'>
                <img src={Dedicatedteam} alt='Dedicatedteam'/>
                <div className='space-y-4'>
                  <h3 className='text-4xl text-Webblack uppercase font-semibold leading-8'>Dedicated <br/>Team</h3>
                  <p className='font-Kanit text-lg text-Webblack font-normal'>Find the best fit engineers led by senior, seasoned, and skilled our tech- lead.</p>
                </div>
              </div>
              <div className='relative space-y-10 border-e-[1px] border-black/15  px-24 pb-20'>
                <img src={Producteam} alt='Producteam'/>
                <div className='space-y-4'>
                  <h3 className='text-4xl text-Webblack uppercase font-semibold leading-8'>Product <br/>Team</h3>
                  <p className='font-Kanit text-lg text-Webblack font-normal'>Get top-notch service from an experienced Product Designer Manager team.</p>
                </div>
              </div>
              <div className='relative space-y-10  px-24 pb-20'>
                <img src={Endtoend} alt='Dedicatedteam'/>
                <div className='space-y-4'>
                  <h3 className='text-4xl text-Webblack uppercase font-semibold leading-8'>End-to-End <br/>Team</h3>
                  <p className='font-Kanit text-lg text-Webblack font-normal'>Hire an elite squad of leading have professionals to turn idea into an
                          ready-to-market product.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
    </>
  )
}
