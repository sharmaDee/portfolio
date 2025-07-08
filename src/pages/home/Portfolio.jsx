import React from "react";
import { Link } from "react-router-dom";

export const Portfolio = ({
  projects = [],
  sectionId = "portfolio",
  sectionName = "section5",
  title = "Featured Projects",
  badgeLabel = "portfolio",
  wrapperClass = "",
  cardClass = "",
  showSeeMore = true,
  onSeeMoreClick = () => {},
}) => {
  return (
    <div
      className={`py-10 xl:py-20 2xl:py-24 ${wrapperClass}`}
      id={sectionId}
      name={sectionName}
      data-aos="fade-right"
      data-aos-duration="1000"
      data-aos-offset="100"
      data-aos-delay="460"
    >
      <div className="max-w-full px-5 md:px-10 md:max-w-4xl xl:px-0 xl:max-w-5xl 2xl:max-w-6xl mx-auto">
        <div className="xl:ms-72">
          <div className="space-y-6 2xl:space-y-10 max-w-2xl">
            <div className="rounded-4xl py-2 px-5 border border-white/20 inline-flex items-center gap-2">
              <p className="uppercase text-xs text-gray-500 font-normal">
                {badgeLabel}
              </p>
            </div>
            <h2 className="text-3xl md:text-4xl 2xl:text-5xl leading-14 font-poppins font-thin text-white">
              {title.split(" ").slice(0, -1).join(" ")}{" "}
              <span className="text-Primary font-medium">
                {title.split(" ").slice(-1)}
              </span>
            </h2>
          </div>

          {/* Grid Layout */}
          <div className="mt-8 md:mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <div
                key={index}
                className={`rounded-2xl group/hs cursor-pointer transition-all ease-in-out duration-300 space-y-4 ${cardClass}`}
              >
                <div className="flex rounded-2xl overflow-hidden flex-col gap-y-3 border border-gray-500">
                  <div className="relative">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="group-hover/hs:scale-105 w-full h-full transition-all ease-in-out duration-300"
                    />
                    <div className="absolute bottom-2.5 left-1.5 flex flex-wrap items-center gap-1.5">
                      {project.tech.map((tech, i) => (
                        <p
                          key={i}
                          className="bg-white rounded-full px-3 font-medium py-1.5 text-xs inline-block"
                        >
                          {tech}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
                {project.internal ? (
                  <Link
                    to={project.link}
                    className="text-xl text-white group-hover/hs:underline group-hover/hs:text-Primary transition-all ease-in-out duration-300"
                  >
                    {project.title}
                  </Link>
                ) : (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xl text-white group-hover/hs:underline group-hover/hs:text-Primary transition-all ease-in-out duration-300"
                  >
                    {project.title}
                  </a>
                )}
              </div>
            ))}
          </div>

          {showSeeMore && projects.length > 0 && (
            <div className="mt-2 md:mt-6 2xl:mt-10">
              <button
                onClick={onSeeMoreClick}
                className="bg-linear-to-bl cursor-pointer from-Primary to-green-700 rounded-full px-8 py-2.5 transition-all ease-in-out duration-500 hover:shadow-card text-white text-base font-medium"
              >
                See More
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
