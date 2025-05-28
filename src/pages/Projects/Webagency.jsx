import React from 'react'
import { Webheader } from './component/Webheader'
import { Webcontent } from './component/Webcontent'
import { Webclientslider } from './component/Webclientslider'
import { Webwhowe } from './component/Webwhowe'
import { Webproduct } from './component/Webproduct'
import { Webskill } from './component/Webskill'
import { Webtechnology } from './component/Webtechnology'
import { Webservices } from './component/Webservices'
import { Webtestimonials } from './component/Webtestimonials'
import { Webteam } from './component/Webteam'
import { Webfaq } from './component/Webfaq'
import { Webcontactarea } from './component/Webcontactarea'
import { Webjournal } from './component/Webjournal'
import { Webfooter } from './component/Webfooter'

export const Webagency = () => {
  return (
    <>
        <Webheader/>
        <main className='mt-20'>
          <Webcontent/>
          <Webclientslider/>
          <Webwhowe/>
          <Webproduct/>
          <Webskill/>
          <Webtechnology/>
          <Webservices/>
          <Webtestimonials/>
          <Webteam/>
          <Webfaq/>
          <Webcontactarea/>
          <Webjournal/>
          <Webfooter/>
        </main>
    </>
  )
}
