import React from "react";
import PropTypes from "prop-types";

export const Resume = ({
  sectionId = "resume",
  badgeLabel = "Resume",
  title = "Education & Experience",
  highlight = "Experience",
  aosType = "fade",
  aosDelay = "300",
  aosDuration = "1200",
  resumeItems = [],
}) => {
  const highlightedTitle = title.includes(highlight)
    ? title.replace(
        highlight,
        `<span class='font-medium text-Primary'>${highlight}</span>`
      )
    : title;

  return (
    <div
      className="py-10 xl:py-20 2xl:py-24"
      id={sectionId}
      name="section3"
      data-aos={aosType}
      data-aos-duration={aosDuration}
      data-aos-delay={aosDelay}
      data-aos-offset="200"
    >
      <div className="max-w-full px-5 md:px-10 md:max-w-4xl xl:px-0 xl:max-w-5xl 2xl:max-w-6xl mx-auto">
        <div className="xl:ms-72">
          <div className="space-y-4 md:space-y-6 2xl:space-y-10 max-w-2xl">
            {/* Badge */}
            <div className="rounded-4xl py-2 px-5 border border-white/20 inline-flex items-center gap-2">
              <p className="uppercase text-xs text-gray-500 font-normal">
                {badgeLabel}
              </p>
            </div>

            {/* Title */}
            <h2
              className="text-3xl md:text-4xl 2xl:text-5xl leading-12 md:leading-14 font-poppins font-thin text-white"
              dangerouslySetInnerHTML={{ __html: highlightedTitle }}
            />

            {/* Timeline */}
            <div className="relative start-3 mt-5 md:mt-10">
              <ol className="relative border-s border-white/50">
                {resumeItems.map((item, index) => (
                  <li className="mb-10 ms-8" key={index}>
                    <div className="absolute w-3 h-3 bg-Primary rounded-full -start-1.5 border border-Primary" />
                    <div className="gap-y-4 flex flex-col -mt-1.5">
                      <time className="text-sm font-normal leading-none text-gray-400">
                        {item.date}
                      </time>
                      <h3 className="text-lg font-semibold text-white">
                        {item.title}
                      </h3>
                      <p className="text-base font-normal text-gray-500">
                        {item.description}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
