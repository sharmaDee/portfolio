import React from 'react'
import { Webheader } from '../Projects/component/Webheader'
import { Blogcontext } from './Blogcontext'

export const Blogcontent = () => {
  return (
    <>
    <Webheader/>
    <main className='mt-20'>
        <Blogcontext/>
    </main>
    </>
  )
}
