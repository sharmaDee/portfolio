import React from 'react'
import entrepreneurial from '../../assets/images/marketresearch.jpg';
import businessgrowth from '../../assets/images/businessgrowth.jpg';
import quote from '../../assets/images/quote-10.webp';
export const Blogdetailcont = () => {
  return (
    <>
    <div className='py-20 px-5'>
        <div className='xl:max-w-1220px  mx-auto space-y-16'>
            <div className='flex flex-col justify-between space-y-10'>
                <h1 className='font-Noto text-4xl lg:text-5xl xl:text-100px  xl:leading-28 font-normal text-Webblack'>Donate your design for newest designer to try better</h1>
                 <div className='grid grid-cols-3 gap-4 max-w-400px min-w-500px'>
                        <div className='space-y-1 border-r border-black/15 pr-3'>
                            <h4 className='text-4xl  text-Webblack font-Kanit'>320<span className='font-thin ml-1.5'>+</span></h4>
                            <span className='text-base font-normal text-Davy font-Kanit'>Comments</span>
                        </div>
                        <div className='space-y-1 pl-3 border-r border-black/15 pr-3'>
                            <h4 className='text-4xl  text-Webblack font-Kanit'>20,511<span className='font-thin ml-1.5'>+</span></h4>
                            <span className='text-base font-normal text-Davy font-Kanit'>Likes</span>
                        </div>
                        <div className='space-y-1 pl-3 pr-3'>
                            <h4 className='text-4xl  text-Webblack font-Kanit'>01<span className='font-thin ml-1.5'>+</span></h4>
                            <span className='text-base font-normal text-Davy font-Kanit'>November</span>
                        </div>
                    </div>
            </div>
            <div className='relative space-y-10'>
                <div className='max-h-500px  overflow-hidden'>
                    <img src={entrepreneurial} className='w-full h-full object-cover object-center ' alt='entrepreneurial'/>
                </div>
                <div className='max-w-4xl mx-auto space-y-10'>
                    <div className='bg-linear-to-r relative from-Webblack to-neutral-600 p-12 grid grid-flow-col gap-10'>
                        <img src={quote} alt='quote' className='w-12 h-12'/>
                        <div className='space-y-3'>
                            <h4 className='text-5xl font-Teko font-normal text-white'>Comfortable full leather lining eye-catching unique detail to the toe low
                              ‘cut-away’ sides clean and sleek harmony.</h4>
                              <p className='text-Davy text-xl font-Kanit'>John kera</p>
                        </div>
                              <div className='mt-auto'>
                              <img src={quote} alt='quote' className='w-12 h-12 opacity-30'/>
                              </div>
                    </div>
                    <div className='space-y-4'>
                        <p className='text-base font-Kanit text-Davy'>We love to bring designs to life as a developer, and I aim to do this using whatever front end tools aren't necessary. my preferred tools are more moderns JavaScript libraries like React.js but I like use whatever best for the websites needs. There are several reasons why a business would consider a rebrand and it doesn’t necessarily mean the business has been unsuccessful.</p>
                        <p className='text-base font-Kanit text-Davy'>We love to bring designs to life as a developer, and I aim to do this using whatever front end tools aren't necessary. my preferred tools are more moderns JavaScript libraries like React.js but I like use whatever best for the websites needs. There are several reasons why a business would consider a rebrand and it doesn’t necessarily mean the business has been unsuccessful.</p>
                    </div>
                    <div className='h-368px overflow-hidden'>
                        <img src={businessgrowth} alt='businessgrowth' className='w-full h-full  object-fill'/>
                    </div>
                    <div className='space-y-5'>
                        <h4 className='font-Noto text-4xl text-Webblack font-semibold'>Research & strategy</h4>
                        <p className='text-base font-Kanit text-Davy'>We love to bring designs to life as a developer, and I aim to do this using whatever front end tools aren't necessary. my preferred tools are more moderns JavaScript libraries like React.js but I like use whatever best for the websites needs. There are several reasons why a business would consider a rebrand and it doesn’t necessarily mean the business has been unsuccessful.</p>
                        <p className='text-base font-Kanit text-Davy'>We love to bring designs to life as a developer, and I aim to do this using whatever front end tools aren't necessary. my preferred tools are more moderns JavaScript libraries like React.js but I like use whatever best for the websites needs. There are several reasons why a business would consider a rebrand and it doesn’t necessarily mean the business has been unsuccessful.</p>
                    </div>
                     <div className='space-y-5'>
                        <h4 className='font-Noto text-4xl text-Webblack font-semibold'>WorkFlow</h4>
                        <p className='text-base font-Kanit text-Davy'>Always ready to push the boundaries, especially when it comes to our own platform, Our analytical eye create a site that was visually engaging and also optimised for maximum performance. It also perfectly reflects the journey to help it tell a story to increase its understanding and drive action. To create a site that was visually engaging for maximum performance.</p>
                        <p className='text-base font-Kanit text-Davy'>We love to bring designs to life as a developer, and I aim to do this using whatever front end tools aren't necessary. my preferred tools are more moderns JavaScript libraries like React.js but I like use whatever best for the websites needs. There are several reasons why a business would consider a rebrand and it doesn’t necessarily mean the business has been unsuccessful.</p>
                        <ul>
                            <li className='space-x-2 text-base flex gap-3 items-center text-Webblack font-Kanit'><span className='block text-2xl font-normal text-Webblack'>+</span>Brand Development</li>
                            <li className='space-x-2 text-base flex gap-3 items-center text-Webblack font-Kanit'><span className='block text-2xl font-normal text-Webblack'>+</span>UX/UI Design</li>
                            <li className='space-x-2 text-base flex gap-3 items-center text-Webblack font-Kanit'><span className='block text-2xl font-normal text-Webblack'>+</span>Front-end Development</li>
                            <li className='space-x-2 text-base flex gap-3 items-center text-Webblack font-Kanit'><span className='block text-2xl font-normal text-Webblack'>+</span>Copywriting</li>
                            <li className='space-x-2 text-base flex gap-3 items-center text-Webblack font-Kanit'><span className='block text-2xl font-normal text-Webblack'>+</span>Shopify Development</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    </>
  )
}
