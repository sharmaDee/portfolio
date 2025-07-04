import React from "react";
import Skills from '../../icons/Skills'
import Wehire from '../../assets/images/wehire.jpg'

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
     {/* portfolio-start */}
      <Portfolio
  badgeIcon={Skills}
  title="Featured Projects"
  projects={[
    {
      title: "Landing Page : WE ARE SKILLED IN WEB DESIGN AND DEVELOPMENT",
      tech: ["Figma", "React", "Tailwind"],
      image: Wehire,
      link: "/Webagency",
      internal: true,
    },
    
  ]}
  onSeeMoreClick={() => alert("See more clicked")}
/>
{/* portfolio-end */}
      {/* prices-start */}
      <Prices
  title="Choose Your Plan"
  subtitle="Pricing"
  wrapperClass=""
  cardWapperClass="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10"
  cardClass="shadow-lg"
  onPick={(planName) => alert(`You picked ${planName}`)}
  plans={[
    {
      name: "Premium",
      description: "Best for large teams",
      price: "$50",
      unit: "Hour",
      features: [
        { label: "5 Team Members", available: true },
        { label: "Priority Support", available: true },
        { label: "Unlimited Projects", available: false },
        { label: "Custom Reports", available: false },
      ],
    },
    {
      name: "Basic",
      description: "Great for starters",
      price: "$20",
      unit: "Hour",
      features: [
        { label: "2 Team Members", available: true },
        { label: "Email Support", available: true },
        { label: "Limited Projects", available: false },
        { label: "Basic Analytics", available: false },
      ],
    },
  ]}
/>

      {/* <Prices/> */}
      {/* <Contacts/> */}
      <Contacts
      title="Let's Connect Now!"
      subtitle="inquiry"
      buttonText="Send Message"
      wrapperClass="bg-dark"
      inputClass="custom-input"
      buttonClass="custom-btn"
      formClass="custom-form"
      onSubmit={(e) => {
        e.preventDefault();
        console.log("Form submitted");
      }}
      fields={[
        { name: "first_name", label: "First Name", required: true, grid: 2 },
         { name: "last_name", label: "Last Name", required: true, grid: 2 },
        { name: "email", label: "Email", type: "email", required: true },
        { name: "message", label: "Message", type: "textarea", rows: 4 },
      ]}
    />

    </>
  );
};
