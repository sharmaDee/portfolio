import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css/effect-cards";
import "swiper/css/navigation";
import "swiper/css";
import { EffectCards } from "swiper/modules";
import Testimonialpeople from "../../../assets/images/testimonial-people.jpg";
import Testimonialcomment from "../../../assets/images/testimonial-comment.webp";
import { Navigation } from "swiper/modules";
export const Webtestimonials = () => {
  return (
    <>
      <div className="py-14 pb-30 md:py-20 xl:py-24 px-5 overflow-hidden">
        <div className="xl:max-w-1220px 2xl:max-w-1440 mx-auto">
          <div className="grid-cols-1 md:grid-cols-3 lg:grid-cols-2 grid gap-10">
            <div className="relative space-y-4 ">
              <h2 className="text-4xl lg:text-5xl xl:text-80px font-Teko font-bold text-Webblack xl:leading-20 uppercase">
                Trusted clients testimonial
              </h2>
              <p className="text-Davy max-w-80 font-normal font-Kanit text-base">
                Consumers today rely heavily on digital means to research
                products. We research a brand of bldend
              </p>
              <div className="relative !mt-10 lg:!mt-16">
                <a
                  href="/"
                  className="md:w-44 md:h-44 w-40 h-40 transition-all duration-700 ease-in-out rounded-full border border-gray-300 flex items-center justify-center text-base font-normal font-Kanit z-10 overflow-hidden relative hover:text-white text-center group/card"
                >
                  Explore Us
                  <br />
                  More{" "}
                  <span className="absolute rounded-full left-1/2 group-hover/card:w-400px group-hover/card:h-400px group-hover/card:top-5 group-hover/card:left-48 -translate-x-1/2 -translate-y-1/2 bg-black top-1/2 w-0 h-0 transition-all duration-700 -z-[1] ease-in-out"></span>
                </a>
              </div>
            </div>
            <div className="relative md:col-span-2 lg:col-span-1 ml-10 lg:ml-0 md:max-w-400px xl:ml-auto">
              <Swiper
                effect={"cards"}
                grabCursor={true}
                navigation={true}
                modules={[EffectCards, Navigation]}
                className="mySwiper testimonial-card"
              >
                <SwiperSlide>
                  <div className="md:w-96  bg-gray-100 relative">
                    <div className="p-8 mb-20">
                      <div className="flex items-baseline gap-2">
                        <h4 className="text-5xl font-semibold font-Teko text-Webblack">
                          4.9
                        </h4>
                        <FontAwesomeIcon
                          icon={faStar}
                          className="text-yellow-400"
                        />
                      </div>
                      <p className="font-Kanit text-Davy text-base">
                        (out of 5 stars)
                      </p>
                      <p className="text-Davy text-xl font-bold mt-8">
                        We full service digital agency that build’s fascinating
                        users experiences.
                      </p>
                    </div>

                    <div className="bg-Webblack p-6 flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-white overflow-hidden">
                        <img
                          src={Testimonialpeople}
                          alt="Testimonialpeople"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="space-y-0">
                        <h4 className="text-xl font-Teko leading-5 font-semibold text-white">
                          Ceyhan Özçivit
                        </h4>
                        <p className="text-base font-Kanit font-normal text-gray-400">
                          Mid-Level Developer
                        </p>
                      </div>
                    </div>
                    <div className="absolute bottom-32 right-10">
                      <img src={Testimonialcomment} alt="testimonialcomment" />
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="md:w-96  bg-gray-100 relative">
                    <div className="p-8 mb-20">
                      <div className="flex items-baseline gap-2">
                        <h4 className="text-5xl font-semibold font-Teko text-Webblack">
                          4.9
                        </h4>
                        <FontAwesomeIcon
                          icon={faStar}
                          className="text-yellow-400"
                        />
                      </div>
                      <p className="font-Kanit text-Davy text-base">
                        (out of 5 stars)
                      </p>
                      <p className="text-Davy text-xl font-bold mt-8">
                        We full service digital agency that build’s fascinating
                        users experiences.
                      </p>
                    </div>

                    <div className="bg-Webblack p-6 flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-white overflow-hidden">
                        <img
                          src={Testimonialpeople}
                          alt="Testimonialpeople"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="space-y-0">
                        <h4 className="text-xl font-Teko leading-5 font-semibold text-white">
                          Ceyhan Özçivit
                        </h4>
                        <p className="text-base font-Kanit font-normal text-gray-400">
                          Mid-Level Developer
                        </p>
                      </div>
                    </div>
                    <div className="absolute bottom-32 right-10">
                      <img src={Testimonialcomment} alt="testimonialcomment" />
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="md:w-96  bg-gray-100 relative">
                    <div className="p-8 mb-20">
                      <div className="flex items-baseline gap-2">
                        <h4 className="text-5xl font-semibold font-Teko text-Webblack">
                          4.9
                        </h4>
                        <FontAwesomeIcon
                          icon={faStar}
                          className="text-yellow-400"
                        />
                      </div>
                      <p className="font-Kanit text-Davy text-base">
                        (out of 5 stars)
                      </p>
                      <p className="text-Davy text-xl font-bold mt-8">
                        We full service digital agency that build’s fascinating
                        users experiences.
                      </p>
                    </div>

                    <div className="bg-Webblack p-6 flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-white overflow-hidden">
                        <img
                          src={Testimonialpeople}
                          alt="Testimonialpeople"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="space-y-0">
                        <h4 className="text-xl font-Teko leading-5 font-semibold text-white">
                          Ceyhan Özçivit
                        </h4>
                        <p className="text-base font-Kanit font-normal text-gray-400">
                          Mid-Level Developer
                        </p>
                      </div>
                    </div>
                    <div className="absolute bottom-32 right-10">
                      <img src={Testimonialcomment} alt="testimonialcomment" />
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="md:w-96  bg-gray-100 relative">
                    <div className="p-8 mb-20">
                      <div className="flex items-baseline gap-2">
                        <h4 className="text-5xl font-semibold font-Teko text-Webblack">
                          4.9
                        </h4>
                        <FontAwesomeIcon
                          icon={faStar}
                          className="text-yellow-400"
                        />
                      </div>
                      <p className="font-Kanit text-Davy text-base">
                        (out of 5 stars)
                      </p>
                      <p className="text-Davy text-xl font-bold mt-8">
                        We full service digital agency that build’s fascinating
                        users experiences.
                      </p>
                    </div>

                    <div className="bg-Webblack p-6 flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-white overflow-hidden">
                        <img
                          src={Testimonialpeople}
                          alt="Testimonialpeople"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="space-y-0">
                        <h4 className="text-xl font-Teko leading-5 font-semibold text-white">
                          Ceyhan Özçivit
                        </h4>
                        <p className="text-base font-Kanit font-normal text-gray-400">
                          Mid-Level Developer
                        </p>
                      </div>
                    </div>
                    <div className="absolute bottom-32 right-10">
                      <img src={Testimonialcomment} alt="testimonialcomment" />
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="md:w-96  bg-gray-100 relative">
                    <div className="p-8 mb-20">
                      <div className="flex items-baseline gap-2">
                        <h4 className="text-5xl font-semibold font-Teko text-Webblack">
                          4.9
                        </h4>
                        <FontAwesomeIcon
                          icon={faStar}
                          className="text-yellow-400"
                        />
                      </div>
                      <p className="font-Kanit text-Davy text-base">
                        (out of 5 stars)
                      </p>
                      <p className="text-Davy text-xl font-bold mt-8">
                        We full service digital agency that build’s fascinating
                        users experiences.
                      </p>
                    </div>

                    <div className="bg-Webblack p-6 flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-white overflow-hidden">
                        <img
                          src={Testimonialpeople}
                          alt="Testimonialpeople"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="space-y-0">
                        <h4 className="text-xl font-Teko leading-5 font-semibold text-white">
                          Ceyhan Özçivit
                        </h4>
                        <p className="text-base font-Kanit font-normal text-gray-400">
                          Mid-Level Developer
                        </p>
                      </div>
                    </div>
                    <div className="absolute bottom-32 right-10">
                      <img src={Testimonialcomment} alt="testimonialcomment" />
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
