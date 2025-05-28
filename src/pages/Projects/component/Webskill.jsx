import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import Creativity from "../../../assets/images/Creativity.webp";
import Responsibility from "../../../assets/images/responsibility.webp";
import Costeffective from "../../../assets/images/costeffective.webp";
import Weekly from "../../../assets/images/weekly.png";
import Indianwoman from "../../../assets/images/indianwoman.jpg";
import Relationships from "../../../assets/images/relationships.webp";
import Creativityalt from "../../../assets/images/creativity-alt.jpg";
import Relationshipsalt from "../../../assets/images/relationshipsalt.jpg";
import Teamwork from "../../../assets/images/teamwork.jpg";
import Costeffectivealt from "../../../assets/images/costeffectivealt.jpg";
export const Webskill = () => {
  return (
    <>
      <div className="py-28 relative">
        <div className="max-w-1440 mx-auto space-y-16">
          <div className="flex items-start justify-between">
            <h2 className="text-80px font-bold text-Webblack font-Teko max-w-730px leading-20 uppercase">
              Empowering skills to help you!
            </h2>
            <p className="text-Davy font-normal max-w-80 font-Kanit text-lg">
              Add the best talent on the market, an agile skilled management &
              seamless involvement
            </p>
          </div>

          {/*  */}

          <div className="flex items-start justify-between gap-28">
            <Tabs className="flex items-start justify-between gap-28 w-full">
             <div className="border-l space-y-16 shrink-0 relative overflow-unset max-w-440px border-black/10 !pl-5 pb-6">
                <TabList className="space-y-14 relative">
                   
                  <Tab className="webtabs p-0 cursor-pointer relative focus:outline-0 before:content-[''] before:absolute before:top-0 before:-left-23px before:w-1 before:rounded-2xl before:h-full before:bg-transparent">
                      <div className="flex items-start gap-7  relative">
                        <div className="w-20 h-20 shrink-0 flex items-center justify-center bg-black/10 bg-active rounded-full">
                          <img src={Creativity} alt="creativity" />
                        </div>
                        <div className="flex flex-col gap-2">
                          <h3 className="text-4xl font-Teko font-bold uppercase">
                            Creativity
                          </h3>
                          <p className="text-lg font-normal text-Davy font-Kanit">
                            Add the best talent on the market, an agile skilled
                            management & seamless involvement
                          </p>
                        </div>
                      </div>
                  </Tab>
                  <Tab className="webtabs p-0 cursor-pointer focus:outline-0 relative before:content-[''] before:absolute before:top-0 before:-left-23px before:w-1 before:rounded-2xl before:h-full before:bg-transparent ">
                   
                      <div className="flex items-start gap-7  relative ">
                        <div className="w-20 h-20 shrink-0 flex items-center justify-center bg-black/10 bg-active rounded-full">
                          <img src={Relationships} alt="creativity" />
                        </div>
                        <div className="flex flex-col gap-2">
                          <h3 className="text-4xl font-Teko font-bold uppercase">
                            Relationships
                          </h3>
                          <p className="text-lg font-normal text-Davy font-Kanit">
                            Add the best talent on the market, an agile skilled
                            management & seamless involvement
                          </p>
                        </div>
                      </div>
                  </Tab>
                  <Tab className="webtabs p-0 cursor-pointer focus:outline-0 relative before:content-[''] before:absolute before:top-0 before:-left-23px before:w-1 before:rounded-2xl before:h-full before:bg-transparent">
                    
                      <div className="flex items-start gap-7  relative">
                        <div className="w-20 h-20 shrink-0 flex items-center justify-center bg-black/10 bg-active rounded-full">
                          <img src={Responsibility} alt="creativity" />
                        </div>
                        <div className="flex flex-col gap-2">
                          <h3 className="text-4xl font-Teko font-bold uppercase">
                            Responsibility
                          </h3>
                          <p className="text-lg font-normal text-Davy font-Kanit">
                            Add the best talent on the market, an agile skilled
                            management & seamless involvement
                          </p>
                        </div>
                      </div>
                  </Tab>
                  <Tab className="webtabs p-0 cursor-pointer focus:outline-0 relative before:content-[''] before:absolute before:top-0 before:-left-23px before:w-1 before:rounded-2xl before:h-full before:bg-transparent">
                      <div className="flex items-start gap-7  relative">
                        <div className="w-20 h-20 shrink-0 flex items-center justify-center bg-black/10 bg-active rounded-full">
                          <img src={Costeffective} alt="creativity" />
                        </div>
                        <div className="flex flex-col gap-2">
                          <h3 className="text-4xl font-Teko font-bold uppercase">
                            Cost effective
                          </h3>
                          <p className="text-lg font-normal text-Davy font-Kanit">
                            Add the best talent on the market, an agile skilled
                            management & seamless involvement
                          </p>
                        </div>
                      </div>
                  </Tab>
                  
                </TabList>
                </div>
                <div className="w-full">
                  <TabPanel>
                    <div className="relative pl-14 pt-20">
                      <div className="absolute top-0 left-0 z-10">
                        <img src={Weekly} alt="Weekly" className="w-80" />
                      </div>
                      <div className="relative w-660px h-480px overflow-hidden ml-auto mt-auto">
                        <img
                          src={Creativityalt}
                          alt="Creativityalt"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  </TabPanel>
                  <TabPanel>
                    <div className="relative pl-14 pt-20">
                      <div className="absolute top-0 left-0 z-10">
                        <img src={Weekly} alt="Weekly" className="w-80" />
                      </div>
                      <div className="relative w-660px h-480px overflow-hidden ml-auto mt-auto">
                        <img
                          src={Relationshipsalt}
                          alt="relationships"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  </TabPanel>

                  <TabPanel>
                    <div className="relative pl-14 pt-20">
                      <div className="absolute top-0 left-0 z-10">
                        <img src={Weekly} alt="Weekly" className="w-80" />
                      </div>
                      <div className="relative w-660px h-480px overflow-hidden ml-auto mt-auto">
                        <img
                          src={Teamwork}
                          alt="teamwork"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  </TabPanel>
                  <TabPanel>
                    <div className="relative pl-14 pt-20">
                      <div className="absolute top-0 left-0 z-10">
                        <img src={Weekly} alt="Weekly" className="w-80" />
                      </div>
                      <div className="relative w-660px h-480px overflow-hidden ml-auto mt-auto">
                        <img
                          src={Costeffectivealt}
                          alt="costeffectivealt"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  </TabPanel>
                </div>

                {/*  */}
            

              
            </Tabs>
          </div>
        </div>
      </div>
    </>
  );
};
