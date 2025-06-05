
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Slideone from "../../../assets/images/swppier-slide/slideone.jpg";
import Slidetwo from "../../../assets/images/swppier-slide/slidetwo.jpg";
import Slidethree from "../../../assets/images/swppier-slide/slidethree.jpg";
import Slidefour from "../../../assets/images/swppier-slide/slidefour.jpg";
import Slidefive from "../../../assets/images/swppier-slide/slidefive.jpg";
import Slidesix from "../../../assets/images/swppier-slide/slidesix.jpg";
import Slideseven from "../../../assets/images/swppier-slide/slideseven.jpg";
import Slideeight from "../../../assets/images/swppier-slide/slideeight.jpg";
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
// swipper

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
// import required modules
import { FreeMode, Autoplay  } from 'swiper/modules';
import 'swiper/css/free-mode';
import 'swiper/css';

export const Webtechnology = () => {
  return (
   <>
   <div className='pt-12 lg:pt-20 xl:pt-28 relative space-y-5'>
     <Swiper
        slidesPerView={2}
        grabCursor={true}
        allowTouchMove={true}
        spaceBetween={20}
        freeMode={true}
        loop={true}
        navigation={false}
        centeredSlides={true}

        pagination={{
          clickable: true,
        }}
         autoplay={{
          delay: 0,
          disableOnInteraction: false,
          reverseDirection: true, 
        }}
        speed={5000}
        
        modules={[Autoplay ,  FreeMode]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className='relative  xl:500px 2xl:h-560px group/hs overflow-hidden transition-all cursor-pointer  duration-500'>
            <img src={Slideone} alt='Slideone' className='w-full h-full'/>
            <div className='absolute top-0 group-hover/hs:opacity-100 opacity-0 transition-all  duration-500 left-0 w-full h-full bg-black/60 z-10 p-16'>
              <div className='absolute left-7 bottom-7'>
                <h4 className='text-4xl font-Teko font-semibold text-white'>Yoks Design</h4>
                <p className='text-base text-white font-Kanit font-normal'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
              </div>
              <div className='top-7 right-7 absolute w-14 h-14 rounded-4xl flex items-center justify-center border border-white'>
                <FontAwesomeIcon icon={faArrowRight} className='text-white font-normal text-2xl transition-all  duration-700 ease-in-out group-hover/hs:-rotate-45' />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='relative  xl:500px 2xl:h-560px group/hs overflow-hidden transition-all cursor-pointer  duration-500'>
            <img src={Slidetwo} alt='Slidetwo' className='w-full h-full'/>
            <div className='absolute top-0 group-hover/hs:opacity-100 opacity-0 transition-all  duration-500 left-0 w-full h-full bg-black/60 z-10 p-16'>
              <div className='absolute left-7 bottom-7'>
                <h4 className='text-4xl font-Teko font-semibold text-white'>Yoks Design</h4>
                <p className='text-base text-white font-Kanit font-normal'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
              </div>
              <div className='top-7 right-7 absolute w-14 h-14 rounded-4xl flex items-center justify-center border border-white'>
                <FontAwesomeIcon icon={faArrowRight} className='text-white font-normal text-2xl transition-all  duration-700 ease-in-out group-hover/hs:-rotate-45' />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='relative  xl:500px 2xl:h-560px group/hs overflow-hidden transition-all cursor-pointer  duration-500'>
            <img src={Slidethree} alt='Slidetwo' className='w-full h-full'/>
            <div className='absolute top-0 group-hover/hs:opacity-100 opacity-0 transition-all  duration-500 left-0 w-full h-full bg-black/60 z-10 p-16'>
              <div className='absolute left-7 bottom-7'>
                <h4 className='text-4xl font-Teko font-semibold text-white'>Yoks Design</h4>
                <p className='text-base text-white font-Kanit font-normal'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
              </div>
              <div className='top-7 right-7 absolute w-14 h-14 rounded-4xl flex items-center justify-center border border-white'>
                <FontAwesomeIcon icon={faArrowRight} className='text-white font-normal text-2xl transition-all  duration-700 ease-in-out group-hover/hs:-rotate-45' />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='relative  xl:500px 2xl:h-560px group/hs overflow-hidden transition-all cursor-pointer  duration-500'>
            <img src={Slidefour} alt='Slidethree' className='w-full h-full'/>
            <div className='absolute top-0 group-hover/hs:opacity-100 opacity-0 transition-all  duration-500 left-0 w-full h-full bg-black/60 z-10 p-16'>
              <div className='absolute left-7 bottom-7'>
                <h4 className='text-4xl font-Teko font-semibold text-white'>Yoks Design</h4>
                <p className='text-base text-white font-Kanit font-normal'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
              </div>
              <div className='top-7 right-7 absolute w-14 h-14 rounded-4xl flex items-center justify-center border border-white'>
                <FontAwesomeIcon icon={faArrowRight} className='text-white font-normal text-2xl transition-all  duration-700 ease-in-out group-hover/hs:-rotate-45' />
              </div>
            </div>
          </div>
        </SwiperSlide>
       
      </Swiper>
      {/* swipper 2 */}

        <Swiper
        slidesPerView={2}
        grabCursor={true}
        allowTouchMove={true}

        spaceBetween={20}
        freeMode={true}
        loop={true}
        navigation={false}
        centeredSlides={true}

        pagination={{
          clickable: true,
        }}
         autoplay={{
          delay: 0,
          disableOnInteraction: false,
          reverseDirection: false, 
        }}
        speed={5000}
        
        modules={[Autoplay , FreeMode]}
        className="mySwiperone"
      >
        <SwiperSlide>
          <div className='relative  xl:500px 2xl:h-560px group/hs overflow-hidden transition-all cursor-pointer  duration-500'>
            <img src={Slidefive} alt='Slidefive' className='w-full h-full'/>
            <div className='absolute top-0 group-hover/hs:opacity-100 opacity-0 transition-all  duration-500 left-0 w-full h-full bg-black/60 z-10 p-16'>
              <div className='absolute left-7 bottom-7'>
                <h4 className='text-4xl font-Teko font-semibold text-white'>Yoks Design</h4>
                <p className='text-base text-white font-Kanit font-normal'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
              </div>
              <div className='top-7 right-7 absolute w-14 h-14 rounded-4xl flex items-center justify-center border border-white'>
                <FontAwesomeIcon icon={faArrowRight} className='text-white font-normal text-2xl transition-all  duration-700 ease-in-out group-hover/hs:-rotate-45' />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='relative  xl:500px 2xl:h-560px group/hs overflow-hidden transition-all cursor-pointer  duration-500'>
            <img src={Slidesix} alt='Slidefive' className='w-full h-full'/>
            <div className='absolute top-0 group-hover/hs:opacity-100 opacity-0 transition-all  duration-500 left-0 w-full h-full bg-black/60 z-10 p-16'>
              <div className='absolute left-7 bottom-7'>
                <h4 className='text-4xl font-Teko font-semibold text-white'>Yoks Design</h4>
                <p className='text-base text-white font-Kanit font-normal'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
              </div>
              <div className='top-7 right-7 absolute w-14 h-14 rounded-4xl flex items-center justify-center border border-white'>
                <FontAwesomeIcon icon={faArrowRight} className='text-white font-normal text-2xl transition-all  duration-700 ease-in-out group-hover/hs:-rotate-45' />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='relative  xl:500px 2xl:h-560px group/hs overflow-hidden transition-all cursor-pointer  duration-500'>
            <img src={Slideseven} alt='Slideseven' className='w-full h-full'/>
            <div className='absolute top-0 group-hover/hs:opacity-100 opacity-0 transition-all  duration-500 left-0 w-full h-full bg-black/60 z-10 p-16'>
              <div className='absolute left-7 bottom-7'>
                <h4 className='text-4xl font-Teko font-semibold text-white'>Yoks Design</h4>
                <p className='text-base text-white font-Kanit font-normal'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
              </div>
              <div className='top-7 right-7 absolute w-14 h-14 rounded-4xl flex items-center justify-center border border-white'>
                <FontAwesomeIcon icon={faArrowRight} className='text-white font-normal text-2xl transition-all  duration-700 ease-in-out group-hover/hs:-rotate-45' />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='relative  xl:500px 2xl:h-560px group/hs overflow-hidden transition-all cursor-pointer  duration-500'>
            <img src={Slideeight} alt='Slideeight' className='w-full h-full'/>
            <div className='absolute top-0 group-hover/hs:opacity-100 opacity-0 transition-all  duration-500 left-0 w-full h-full bg-black/60 z-10 p-16'>
              <div className='absolute left-7 bottom-7'>
                <h4 className='text-4xl font-Teko font-semibold text-white'>Yoks Design</h4>
                <p className='text-base text-white font-Kanit font-normal'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
              </div>
              <div className='top-7 right-7 absolute w-14 h-14 rounded-4xl flex items-center justify-center border border-white'>
                <FontAwesomeIcon icon={faArrowRight} className='text-white font-normal text-2xl transition-all  duration-700 ease-in-out group-hover/hs:-rotate-45' />
              </div>
            </div>
          </div>
        </SwiperSlide>
       
      </Swiper>
   </div>
   </>
  )
}
