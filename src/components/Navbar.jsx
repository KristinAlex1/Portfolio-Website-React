import React from 'react'
import { FaGithub, FaInstagram, FaLinkedin,  } from 'react-icons/fa'
import { FaSquareXTwitter } from 'react-icons/fa6'
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
    <div className='bg-gray flex justify-between item-center bg-blend-multiply'>
        <div>
            <img className='h-[15rem]' src='src\assets\logo.png' alt='logo'/>
            
        </div>
        <div className='flex justify-center items-center gap-5 text-4xl'>
            <Link to = ''><FaLinkedin className='text-purple-900'/></Link>
            <FaGithub className='text-purple-900'/>
            <FaInstagram className='text-purple-900'/>
            <FaSquareXTwitter className='text-purple-900'/>
        </div>
        

    </div>

    </>
  )
}

export default Navbar