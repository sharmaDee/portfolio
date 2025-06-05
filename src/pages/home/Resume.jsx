import React from "react";
import Briefcaseicon from "../../icons/Briefcaseicon";

export const Resume = () => {
  return (
    <div className="py-10 xl:py-20 2xl:py-24" id="resume" name="section3" data-aos="fade" data-aos-duration="1200" data-aos-delay="300" data-aos-offset="200">
      <div className="max-w-full px-5 md:px-10 md:max-w-4xl xl:px-0 xl:max-w-5xl 2xl:max-w-6xl mx-auto">
        <div className="xl:ms-72 ">
          <div className="space-y-4 md:space-y-6 2xl:space-y-10 max-w-2xl">
            <div className="rounded-4xl py-2 px-5 border border-white/20 inline-flex items-center gap-2">
              <Briefcaseicon className="stroke-white/80 w-3 h-3 stroke-2 hover:stroke-Primary transition-all ease-in-out duration-300" />
              <p className="uppercase text-xs text-gray-500 font-normal">
                Resume
              </p>
            </div>
            <h2 className="text-3xl md:text-4xl 2xl:text-5xl leading-12 md:leading-14 font-poppins font-thin poppins-thin text-white">
              Education &{" "}
              <span className="font-medium text-Primary">Experience</span>
            </h2>
            <div className="relative start-3 !mt-5 md:!mt-10">
              {/*  */}

              <ol className="relative border-s border-white/50 ">
                <li className="mb-10 ms-8">
                  <div className="absolute w-3 h-3 bg-Primary rounded-full -start-1.5 border border-Primary "></div>
                  <div className="gap-y-4 flex flex-col !-mt-1.5">
                    <time className=" text-sm font-normal leading-none text-gray-400 ">
                      February 2022
                    </time>
                    <h3 className="text-lg block font-semibold text-white ">
                      Application UI code in Tailwind CSS
                    </h3>
                    <p className="mb-4 text-base font-normal text-gray-500 ">
                      Get access to over 20+ pages including a dashboard layout,
                      charts, kanban board, calendar, and pre-order E-commerce &
                      Marketing pages.
                    </p>
                    
                  </div>
                </li>
                <li className="mb-10 ms-8">
                  <div className="absolute w-3 h-3 bg-Primary rounded-full -start-1.5 border border-Primary "></div>
                  <div className="gap-y-4 flex flex-col !-mt-1.5">
                    <time className=" text-sm font-normal leading-none text-gray-400 ">
                      February 2022
                    </time>
                    <h3 className="text-lg block font-semibold text-white ">
                      Application UI code in Tailwind CSS
                    </h3>
                    <p className="mb-4 text-base font-normal text-gray-500 ">
                      Get access to over 20+ pages including a dashboard layout,
                      charts, kanban board, calendar, and pre-order E-commerce &
                      Marketing pages.
                    </p>
                    
                  </div>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
