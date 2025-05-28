
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
  return (
    <>
    <div className='relative bg-gray-950 gap-6 overflow-hidden flex items-center'>
      <div className='relative shrink-0'>
        <img className='w-full h-full object-cover' src={Bgshape} alt="Bgshape"/>
      </div>
      <div className='relative w-full mt-4 pl-20'>
<Swiper direction={'horizontal'} slidesPerView={6} loop={true} autoplay={{delay: 2000, disableOnInteraction: false,}} navigation={false} spaceBetween={30} mousewheel={true} modules={[Autoplay, Mousewheel]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={Lightone} alt='Lightone'/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={Lighttwo} alt='Lighttwo'/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={Lightthree} alt='Lightthree'/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={Lightfour} alt='Lightfour'/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={Lightfive} alt='Lightfive'/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={Lightsix} alt='Lightsix'/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={Lightseven} alt='Lightseven'/>
        </SwiperSlide>
       
      </Swiper>
      </div>
       
    </div>
    </>
  )
}
