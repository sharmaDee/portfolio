import React from "react";
import { Introduction } from "./Introduction";
import { About } from "./About";
import { Resume } from "./Resume";
import { Services } from "./Services";
import { Myskills } from "./Myskills";
import { Portfolio } from "./Portfolio";
import { Prices } from "./Prices";
import { Contacts } from "./Contacts";
import AOS from 'aos';
import 'aos/dist/aos.css';

import { useEffect } from 'react';

export const Homepage = () => {
   useEffect(() => {
      AOS.init({
        duration: 1000, // animation duration in ms
        once: false,     // whether animation should happen only once
      });
    }, []);
  return (
    <>
      <Introduction />
      <About/>
      <Resume/>
      <Services/>
      <Myskills/>
      <Portfolio/>
      <Prices/>
      <Contacts/>
    </>
  );
};
