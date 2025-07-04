import React from 'react';
import Roundtext from "../../assets/images/round-text.png";
import Downicon from "../../icons/Downicon";

export const Introduction = ({
  icon: Icon = null,
  name = "Drake",
  role = "Webflow Designer and Developer",
  description = "I design and code beautifully simple things and I love what I do. Just simple like that!",
  experienceYears = "10+",
  projectsCompleted = "182+",
  countries = "15",
  sectionId = "introduce",
  scrollTarget = "#portfolio"
}) => {
  return (
    <div className="scroll-container py-10 xl:py-14" id={sectionId} name="section1">
      <div className="square max-w-full md:max-w-4xl px-5 md:px-10 xl:px-0 xl:max-w-5xl 2xl:max-w-6xl mx-auto">
        <div className="xl:ms-72">
          <div className="space-y-4 md:space-y-6 2xl:space-y-10">
            <div className="rounded-4xl py-2 px-5 border border-white/20 inline-flex items-center gap-2">
              {Icon && <Icon className="stroke-white/80 w-3 h-3 stroke-2 hover:stroke-Primary transition-all ease-in-out duration-300" />}
              <p className="uppercase text-xs text-gray-500 font-normal">INTRODUCE</p>
            </div>
            <h1 className="text-3xl md:text-6xl 2xl:text-8xl leading-12 md:leading-20 2xl:leading-28 font-poppins font-thin text-white">
              Say Hi from{" "}
              <span className="font-medium text-Primary">{name}</span>, {role}
            </h1>
            <p className="text-base font-normal mt-5 md:mt-10 text-gray-500">{description}</p>

            <a
              href={scrollTarget}
              className="border border-white/60 rounded-full relative flex items-center justify-center p-3 md:p-4 ms-auto w-24 h-24 md:w-40 md:h-40 2xl:w-48 2xl:h-48"
            >
              <img src={Roundtext} alt="round-text" className="w-full h-full animate-spin ease-in-out" />
              <Downicon className="stroke-1 stroke-white w-5 h-5 md:w-10 md:h-10 2xl:w-14 2xl:h-14 absolute" />
            </a>

            <div className="flex max-w-full md:max-w-2xl gap-10 md:gap-40">
              <div className="space-y-3">
                <h4 className="text-Primary text-4xl md:text-6xl 2xl:text-7xl">{experienceYears}</h4>
                <p className="text-gray-500 text-sm leading-6 uppercase">
                  Years of <span className="block">Experience</span>
                </p>
              </div>
              <div className="space-y-3">
                <h4 className="text-Primary text-4xl md:text-6xl 2xl:text-7xl">{projectsCompleted}</h4>
                <p className="text-gray-500 text-sm leading-6 uppercase">
                  projects completed on <span className="block">{countries} countries</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
