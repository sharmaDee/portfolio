import React from "react";
import Skills from "../../icons/Skills";
import Wehire from "../../assets/images/wehire.jpg";

import { Introduction } from "./Introduction";
import { About } from "./About";
import { Resume } from "./Resume";
import { Services } from "./Services";
import { Myskills } from "./Myskills";
import { Portfolio } from "./Portfolio";
import { Prices } from "./Prices";
import { Contacts } from "./Contacts";
import AOS from "aos";
import "aos/dist/aos.css";

import { useEffect } from "react";

export const Homepage = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration in ms
      once: false, // whether animation should happen only once
    });
  }, []);
  return (
    <>
      {/* <Introduction /> */}
      {/* introduction */}
      <Introduction
        name="Deepak "
        role="Frontend Developer"
        description="I design and build interactive, performant web apps using React, JavaScript, and modern UI frameworks."
        scrollTarget="#portfolio"
      />
      <About
        sectionId="about"
        heading="Building amazing UIs starts with a solid foundation"
        highlight="solid foundation"
        description="I’m a frontend developer with 7 years of experience building fast, scalable, and accessible web interfaces. I'm a passionate Frontend Developer and Graphic Designer with a strong foundation in creating responsive, pixel-perfect websites and engaging visual content. I specialize in using HTML, CSS, Bootstrap, and basic jQuery to bring clean, modern designs to life on the web.

Alongside my development skills, I have experience in designing social media creatives using tools like Adobe Photoshop and Adobe Illustrator, combining aesthetic sense with brand consistency.

I'm continuously learning and evolving, blending design and code to craft digital experiences that are both beautiful and functional."
        badgeLabel="about me"
      />

      {/* resume start */}
      <Resume
        resumeItems={[
          {
            date: "April 2023 - Present",
            title: "Senior Frontend Developer at eSparkbiz Technology",
            description:
              "Leading React development and UI architecture for scalable enterprise solutions. Built responsive web apps with React, Redux, and Tailwind. Worked with design teams to implement pixel-perfect UIs.",
          },
          {
            date: "Feb 2022 - April 2023",
            title: "Frontend Developer at world web Technology",
            description:
              "Worked as a Frontend Developer at World Web Technology, where I specialized in creating responsive web designs using WordPress and Elementor. Gained hands-on experience in modern UI/UX design and website customization. Worked with design teams to implement pixel-perfect UIs.",
          },
          {
            date: "October 2019  - Jan 2022",
            title: "Frontend Developer at Hyperlink Infosystem",
            description:
              "Worked at Hyperlink InfoSystem on in-house projects including the Hyperlink website, HData System, and Top Mobile App Development. Contributed as a Graphics Designer, creating engaging social media posts, banners, and case studies aligned with brand strategy and digital marketing goals. Gained hands-on experience in building pixel-perfect websites using the Bootstrap framework, focusing on responsive design and clean, structured code.",
          },
          {
            date: "May 2018  - June 2019",
            title: "Frontend Developer at Lembits Technolab",
            description:
              "Started my professional journey at Lembits Technolab as a Frontend Developer and Graphic Designer, where I worked on UI development and created visual assets for web and digital platforms.",
          },
          {
            date: "Jan 2017  - November 2017",
            title: "Training institute at Tops Technologies",
            description:
              "Started my professional journey at Tops Technologies as a Frontend Developer and Graphic Designer.",
          },
          {
            date: "Jun 2016  - November 2016",
            title: "Training institute at Tops Technologies",
            description:
              "Worked at Honda Motorcycle & Scooter India (HMSI) in the Material Management department, where I was involved in managing inventory, coordinating with suppliers, and supporting procurement processes to ensure smooth material flow and operational efficiency.",
          },
          {
            date: "May 2016",
            title: "MCA Post Graduate At Ganpat University",
            description:
              "Completed Master of Computer Applications (MCA) from Ganpat University, with a focus on software development, web technologies.",
          },
        ]}
      />
      {/* resume end */}
      <Services />
      <Myskills />
      {/* portfolio-start */}
      <Portfolio
        badgeIcon={Skills}
        title="Featured Projects"
        projects={[
          {
            title:
              "Landing Page : WE ARE SKILLED IN WEB DESIGN AND DEVELOPMENT",
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
      {/* <Prices
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
      /> */}

      {/* <Prices/> */}
      {/* <Contacts/> */}
      {/* <Contacts
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
      /> */}
    </>
  );
};
