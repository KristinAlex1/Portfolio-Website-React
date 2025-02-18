import React from 'react'
import { CONTACT } from '../constants'

const Contact = () => {
  return (
    <div className='border-b border-newtral-900 pb-20'>
        <h1 className='my-20 text-center font-thin text-6xl'>Get in touch</h1>
        <div className='text-center text-2xl tracking-tighter'>
            <p className='my-4'>{CONTACT.address}</p>
            <p className='my-4' >{CONTACT.phoneNo}</p>
            <a href="#" className='border-b' >{CONTACT.email}</a>
        </div>
    </div>
  )
}

export default Contact