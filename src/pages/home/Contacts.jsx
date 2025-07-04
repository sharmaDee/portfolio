import React from "react";
import Messageicon from "../../icons/Messageicon";

export const Contacts = ({
  id = "contact",
  sectionName = "section8",
  title = "Let's Work Together!",
  subtitle = "contact",
  buttonText = "Submit",
  formClass = "",
  inputClass = "",
  buttonClass = "",
  wrapperClass = "",
  fields = [],
  onSubmit = (e) => e.preventDefault(),
}) => {
  return (
    <div
      className={`py-10 xl:py-20 2xl:py-24 ${wrapperClass}`}
      id={id}
      name={sectionName}
      data-aos="zoom-in"
      data-aos-duration="1000"
      data-aos-offset="100"
      data-aos-delay="460"
    >
      <div className="max-w-full px-5 md:px-10 md:max-w-4xl xl:px-0 xl:max-w-5xl 2xl:max-w-6xl mx-auto">
        <div className="xl:ms-72">
          <div className="space-y-6 2xl:space-y-10 max-w-2xl">
            <div className="rounded-4xl py-2 px-5 border border-white/20 inline-flex items-center gap-2">
              <Messageicon className="stroke-white/80 w-3 h-3 stroke-2 hover:stroke-Primary transition-all ease-in-out duration-300" />
              <p className="uppercase text-xs text-gray-500 font-normal">
                {subtitle}
              </p>
            </div>
            <h2 className="text-3xl md:text-4xl xl:text-5xl leading-14 font-poppins font-thin text-white">
              {title.split(" ").slice(0, -1).join(" ")}{" "}
              <span className="font-medium text-Primary">
                {title.split(" ").slice(-1)}
              </span>
            </h2>
          </div>

          {/* ========== FORM ========== */}
          <form className={`space-y-5 mt-5 md:mt-10 ${formClass}`} onSubmit={onSubmit}>
            <div className="grid md:grid-cols-2 md:gap-6">
              {fields
                .filter((field) => field.grid === 2)
                .map((field, index) => (
                  <Field {...field} key={index} inputClass={inputClass} />
                ))}
            </div>

            {fields
              .filter((field) => field.grid !== 2)
              .map((field, index) => (
                <Field {...field} key={index} inputClass={inputClass} />
              ))}

            <div className="mt-12">
              <button
                type="submit"
                className={`bg-linear-to-bl from-Primary to-green-700 rounded-full px-12 py-3 transition-all ease-in-out duration-500 hover:shadow-card text-white text-base font-medium cursor-pointer ${buttonClass}`}
              >
                {buttonText}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

const Field = ({
  name,
  label,
  type = "text",
  required = false,
  rows = 2,
  inputClass = "",
}) => {
  const baseClass =
    "block py-2.5 px-0 w-full text-sm transition-all ease-in-out duration-300 text-Primary bg-transparent border-0 border-b-1 border-gray-500 appearance-none focus:outline-none focus:ring-0 focus:border-Primary peer";

  return (
    <div className="relative z-0 w-full mb-5 group">
      {type === "textarea" ? (
        <textarea
          name={name}
          id={name}
          rows={rows}
          className={`${baseClass} ${inputClass}`}
          placeholder=""
          required={required}
        ></textarea>
      ) : (
        <input
          type={type}
          name={name}
          id={name}
          className={`${baseClass} ${inputClass}`}
          placeholder=""
          required={required}
        />
      )}
      <label
        htmlFor={name}
        className="peer-focus:font-medium absolute text-sm transition-all ease-in-out duration-300 text-gray-500 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-Primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 uppercase"
      >
        {label} {required && <span className="text-red-500">*</span>}
      </label>
    </div>
  );
};
