import React from "react";

export const Prices = ({
  sectionId = "prices",
  sectionName = "section7",
  title = "My Prices",
  subtitle = "Prices",
  plans = [],
  wrapperClass = "",
  cardClass = "",
  cardWapperClass = "",
  onPick = () => {},
}) => {
  return (
    <div
      className={`py-10 xl:py-20 2xl:py-24 ${wrapperClass}`}
      id={sectionId}
      name={sectionName}
      data-aos="fade-down"
      data-aos-duration="1000"
      data-aos-offset="100"
      data-aos-delay="460"
    >
      <div className="max-w-full px-5 md:px-10 md:max-w-4xl xl:px-0 xl:max-w-5xl 2xl:max-w-6xl mx-auto">
        <div className="xl:ms-72">
          <div className="space-y-6 2xl:space-y-10 max-w-2xl">
            <div className="rounded-4xl py-2 px-5 border border-white/20 inline-flex items-center gap-2">
              
              <p className="uppercase text-xs text-gray-500 font-normal">{subtitle}</p>
            </div>
            <h2 className="text-3xl md:text-4xl 2xl:text-5xl leading-14 font-poppins font-thin text-white">
              {title.split(" ").slice(0, -1).join(" ")}{" "}
              <span className="font-medium text-Primary">{title.split(" ").slice(-1)}</span>
            </h2>
          </div>

          <div className={`grid grid-cols-1 md:grid-cols-2 gap-10 mt-10 ${cardWapperClass}`}>
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`rounded-2xl p-1 pt-8 bg-linear-to-bl from-Primary to-green-700 space-y-6 cursor-pointer transition-all ease-in-out duration-500 hover:shadow-card ${cardClass}`}
              >
                <div className="flex items-start gap-4 justify-between px-5">
                  <h4 className="text-white text-base md:text-2xl font-semibold uppercase max-w-24 min-w-24">
                    {plan.name}
                  </h4>
                  <p className="text-white text-right text-xs font-normal">{plan.description}</p>
                </div>

                <div className="rounded-2xl bg-gradient-to-br from-Eerieblack to-gray-800 px-6 py-8">
                  <div className="flex items-baseline text-white gap-2.5 border-b border-gray-700 pb-6">
                    <span className="text-5xl font-medium">{plan.price}</span>
                    <span className="text-base">/ {plan.unit}</span>
                  </div>

                  <ul className="my-10 space-y-5">
                    {plan.features.map((feature, i) => (
                      <li className="flex items-center" key={i}>
                        <svg
                          className={`shrink-0 w-4 h-4 ${feature.available ? "text-Primary" : "text-gray-400"}`}
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                        </svg>
                        <span className="text-base font-normal leading-tight text-gray-400 ms-3">
                          {feature.label}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <button
                    className="bg-linear-to-bl from-Primary to-green-700 rounded-full px-8 py-3 text-white text-base font-medium cursor-pointer"
                    onClick={() => onPick(plan.name)}
                  >
                    Pick This Package
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
