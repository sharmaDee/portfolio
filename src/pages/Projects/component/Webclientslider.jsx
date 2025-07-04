
import React from 'react'
// swiperjs
import Bgshape from '../../../assets/images/bg-shapes.png';
import Lightone from '../../../assets/images/img-light-one.webp';
import Lighttwo from '../../../assets/images/img-light-two.webp';
import Lightthree from '../../../assets/images/img-light-three.webp';
import Lightfour from '../../../assets/images/img-light-four.webp';
import Lightfive from '../../../assets/images/img-light-five.webp';
import Lightsix from '../../../assets/images/img-light-six.webp';
import Lightseven from '../../../assets/images/img-light-seven.webp';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Mousewheel, } from 'swiper/modules';

import 'swiper/css';
export const Webclientslider = () => {
  const clientImages = [
  { src: Lightone, alt: 'Light One' },
  { src: Lighttwo, alt: 'Light Two' },
  { src: Lightthree, alt: 'Light Three' },
  { src: Lightfour, alt: 'Light Four' },
  { src: Lightfive, alt: 'Light Five' },
  { src: Lightsix, alt: 'Light Six' },
  { src: Lightseven, alt: 'Light Seven' }
];
  return (
    <>
    <div className='relative bg-gray-950 gap-6 overflow-hidden flex items-center p-5 xl:p-0'>
      <div className='relative shrink-0 hidden xl:block'>
        <img className='w-full h-full object-cover' src={Bgshape} alt="Bgshape"/>
      </div>
      <div className='relative w-full xl:mt-4 xl:pl-20'>
<Swiper direction={'horizontal'} slidesPerView={6} breakpoints={{
          340: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 30,
          },
          1200: {
            slidesPerView: 6,
            spaceBetween: 30,
          },
        }} loop={true} autoplay={{delay: 0, disableOnInteraction: false,}} speed={2000} navigation={false} spaceBetween={30} mousewheel={true} modules={[Autoplay, Mousewheel]}
        className="mySwiper"
      >
         {clientImages.map((image, index) => (
            <SwiperSlide key={index}>
              <img src={image.src} alt={image.alt} />
            </SwiperSlide>
          ))}
       
       
      </Swiper>
      </div>
       
    </div>
    </>
  )
}
