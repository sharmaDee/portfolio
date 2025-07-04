import React from 'react';

export const About = ({
  icon: Icon = null,
  sectionId = "about",
  heading = "Every great design begins with an even better story",
  highlight = "better story",
  description = "Since beginning my journey as a freelance designer nearly 8 years ago, I've done remote work for agencies, consulted for startups, and collaborated with talented people to create digital products for both business and consumer use. I'm quietly confident, naturally curious, and perpetually working on improving my chops—one design problem at a time.",
  aosType = "zoom-in",
  aosDelay = "300"
}) => {
  const highlightedText = heading.includes(highlight)
    ? heading.replace(highlight, `<span class='font-medium text-Primary'>${highlight}</span>`)
    : heading;

  return (
    <div className='scroll-container py-10 xl:py-20 2xl:py-24' id={sectionId} name="section2" data-aos={aosType} data-aos-duration="1000" data-aos-delay={aosDelay}>
      <div className="max-w-full squaretwo px-5 md:px-10 md:max-w-4xl xl:px-0 xl:max-w-5xl 2xl:max-w-6xl mx-auto">
        <div className="xl:ms-72">
          <div className="space-y-4 md:space-y-6 2xl:space-y-10 max-w-2xl">
            <div className="rounded-4xl py-2 px-5 border border-white/20 inline-flex items-center gap-2">
              {Icon && <Icon className="stroke-white/80 w-3 h-3 stroke-2 hover:stroke-Primary transition-all ease-in-out duration-300" />}
              <p className="uppercase text-xs text-gray-500 font-normal">About</p>
            </div>
            <h2
              className="text-3xl md:text-4xl 2xl:text-5xl md:leading-14 font-poppins font-thin text-white"
              dangerouslySetInnerHTML={{ __html: highlightedText }}
            />
            <p className="text-base font-normal md:mt-10 text-gray-500">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
