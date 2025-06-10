import React from 'react'
import { Webheader } from '../Projects/component/Webheader'
import { Aboutcontent } from './Aboutcontent'

export const Aboutus = () => {
  return (
    <>
    <Webheader/>
    <main className='mt-20'>
        <Aboutcontent/>
    </main>
    </>
  )
}
