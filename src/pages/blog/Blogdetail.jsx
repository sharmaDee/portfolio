import React from 'react'
import { Webheader } from '../Projects/component/Webheader'
import { Blogdetailcont } from './Blogdetailcont'

export const Blogdetail = () => {
  return (
    <>
    <Webheader/>
    <div className='mt-20'>
        <Blogdetailcont/>
    </div>
    </>
  )
}
