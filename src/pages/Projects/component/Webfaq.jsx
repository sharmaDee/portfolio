import React from 'react'
import Accordion from './Webaccordion'
export const Webfaq = () => {
    const accordionData = [
    { title: 'How does the Agile Manifesto address planning?', content: 'People know what an FAQ is, so make that your page title. don’t overcomplicate thing heve calling it’s good to know or more info. sometimes people put the frequently asked question section on their contact page but you can create your own page and put it right in your on website navigation menu or website footer so it’s easy to find.' },
    { title: 'Reflects your audience’s need?', content: 'People know what an FAQ is, so make that your page title. don’t overcomplicate thing heve calling it’s good to know or more info. sometimes people put the frequently asked question section on their contact page but you can create your own page and put it right in your on website navigation menu or website footer so it’s easy to find.' },
    { title: 'What Is a Statement of Work in Project Management?', content: 'People know what an FAQ is, so make that your page title. don’t overcomplicate thing heve calling it’s good to know or more info. sometimes people put the frequently asked question section on their contact page but you can create your own page and put it right in your on website navigation menu or website footer so it’s easy to find.' },
    { title: 'When is an FAQ page appropriate? ', content: 'People know what an FAQ is, so make that your page title. don’t overcomplicate thing heve calling it’s good to know or more info. sometimes people put the frequently asked question section on their contact page but you can create your own page and put it right in your on website navigation menu or website footer so it’s easy to find.' },
    { title: 'What questions belong on an FAQ page? ', content: 'People know what an FAQ is, so make that your page title. don’t overcomplicate thing heve calling it’s good to know or more info. sometimes people put the frequently asked question section on their contact page but you can create your own page and put it right in your on website navigation menu or website footer so it’s easy to find.' },
    { title: 'Align with your brand look and feel? ', content: 'People know what an FAQ is, so make that your page title. don’t overcomplicate thing heve calling it’s good to know or more info. sometimes people put the frequently asked question section on their contact page but you can create your own page and put it right in your on website navigation menu or website footer so it’s easy to find.' }
  ];
  return (
   <>
   <div className='py-28 px-5'>
    <div className='max-w-1440 mx-auto'>
        <div className='grid-cols-2 grid gap-10'>
            <div className='relative space-y-4 '>
                <h2 className='text-80px font-Teko font-bold text-Webblack leading-20 uppercase'>frequently <br/>asked <br/>questions</h2>
                <p className='text-Davy max-w-80 font-normal font-Kanit text-base'>Frequently asked question (FAQ) pages to find answars.</p>
            </div>
            <div className="app">
                <Accordion items={accordionData} />
            </div>
        </div>
    </div>
   </div>
   </>
  )
}
