import React from "react";
import Messageicon from "../../icons/Messageicon";

export const Contacts = () => {
  return (
    <>
      <div
        className="py-10 xl:py-20 2xl:py-24"
        id="contact"
        name="section8"
        data-aos="zoom-in"
        data-aos-duration="1000"
        data-aos-offset="100"
        data-aos-delay="460"
      >
        <div className="max-w-full px-5 md:px-10 md:max-w-4xl xl:px-0 xl:max-w-5xl 2xl:max-w-6xl mx-auto">
          <div className="xl:ms-72 ">
            <div className="space-y-6 2xl:space-y-10 max-w-2xl">
              <div className="rounded-4xl py-2 px-5 border border-white/20 inline-flex items-center gap-2">
                {/* <Abouticon className="stroke-white/80 w-3 h-3 stroke-2 hover:stroke-Primary transition-all ease-in-out duration-300"/> */}
                <Messageicon className="stroke-white/80 w-3 h-3 stroke-2 hover:stroke-Primary transition-all ease-in-out duration-300" />
                <p className="uppercase text-xs text-gray-500 font-normal">
                  contact
                </p>
              </div>
              <h2 className="text-3xl md:text-4xl xl:text-5xl leading-14 font-poppins font-thin poppins-thin text-white">
                Let's Work{" "}
                <span className="font-medium text-Primary">Together!</span>
              </h2>
            </div>
            {/* ============== */}

            <div className="mt-5 md:mt-10">
              <form className="space-y-5">
                <div className="grid md:grid-cols-2 md:gap-6">
                  <div className="relative z-0 w-full mb-5 group">
                    <input
                      type="text"
                      name="floating_first_name"
                      id="floating_first_name"
                      className="block py-2.5 px-0 w-full text-sm transition-all ease-in-out duration-300  text-Primary bg-transparent border-0 border-b-1 border-gray-500 appearance-none  focus:outline-none focus:ring-0 focus:border-Primary peer"
                      placeholder=" "
                      required
                    />
                    <label className="peer-focus:font-medium absolute text-sm transition-all ease-in-out duration-300 text-gray-500  transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-Primary  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 uppercase">
                      First name <span className="text-red-500">*</span>
                    </label>
                  </div>
                  <div className="relative z-0 w-full mb-5 group">
                    <input
                      type="text"
                      name="floating_last_name"
                      id="floating_last_name"
                      className="block py-2.5 px-0 w-full text-sm transition-all ease-in-out duration-300  text-Primary bg-transparent border-0 border-b-1 border-gray-500 appearance-none  focus:outline-none focus:ring-0 focus:border-Primary peer"
                      placeholder=" "
                      required
                    />
                    <label className="peer-focus:font-medium absolute text-sm transition-all ease-in-out duration-300 text-gray-500  transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-Primary  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 uppercase">
                      Last name <span className="text-red-500">*</span>
                    </label>
                  </div>
                </div>
                <div className="grid md:grid-cols-2 md:gap-6">
                  <div className="relative z-0 w-full mb-5 group">
                    <input
                      type="tel"
                      pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                      name="floating_phone"
                      id="floating_phone"
                      className="block py-2.5 px-0 w-full text-sm transition-all ease-in-out duration-300  text-Primary bg-transparent border-0 border-b-1 border-gray-500 appearance-none  focus:outline-none focus:ring-0 focus:border-Primary peer"
                      placeholder=" "
                      required
                    />
                    <label className="peer-focus:font-medium absolute text-sm transition-all ease-in-out duration-300 text-gray-500  transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-Primary  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 uppercase">
                      phone (optional)
                    </label>
                  </div>
                  <div className="relative z-0 w-full mb-5 group">
                    <input
                      type="text"
                      name="floating_company"
                      id="floating_company"
                      className="block py-2.5 px-0 w-full text-sm transition-all ease-in-out duration-300  text-Primary bg-transparent border-0 border-b-1 border-gray-500 appearance-none  focus:outline-none focus:ring-0 focus:border-Primary peer"
                      placeholder=" "
                      required
                    />
                    <label className="peer-focus:font-medium absolute text-sm transition-all ease-in-out duration-300 text-gray-500  transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-Primary  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 uppercase">
                      Subject <span className="text-red-500">*</span>
                    </label>
                  </div>
                </div>
                <div className="relative z-0 w-full mb-5 group">
                  <input
                    type="text"
                    name="floating_email"
                    id="floating_email"
                    className="block py-2.5 px-0 w-full text-sm transition-all ease-in-out duration-300  text-Primary bg-transparent border-0 border-b-1 border-gray-500 appearance-none  focus:outline-none focus:ring-0 focus:border-Primary peer"
                    placeholder=" "
                    required
                  />
                  <label className="peer-focus:font-medium absolute text-sm transition-all ease-in-out duration-300 text-gray-500  transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-Primary  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 uppercase">
                    your budget (optional)
                  </label>
                </div>

                <div className="relative z-0 w-full mb-5 group">
                  <textarea
                    id="message"
                    rows="2"
                    className="block py-2.5 px-0 w-full text-sm transition-all ease-in-out duration-300  text-Primary bg-transparent border-0 border-b-1 border-gray-500 appearance-none  focus:outline-none focus:ring-0 focus:border-Primary peer"
                    placeholder=""
                  ></textarea>
                  <label className="peer-focus:font-medium absolute text-sm transition-all ease-in-out duration-300 text-gray-500  transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-Primary  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 uppercase">
                    Write Your message
                  </label>
                </div>

                <div className="mt-12">
                  <button
                    type="submit"
                    className="bg-linear-to-bl cursor-pointer from-Primary to-green-700 rounded-full px-12 py-3 transition-all ease-in-out duration-500 hover:shadow-card text-white text-base font-medium "
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
