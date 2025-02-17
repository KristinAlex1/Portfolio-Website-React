import React from 'react'
import { FaGithub, FaInstagram, FaLinkedin,  } from 'react-icons/fa'
import { FaSquareXTwitter } from 'react-icons/fa6'
import logo from '../assets/logo.png';

const Navbar = () => {
  return (
    <>
     <div className="flex justify-between items-center px-10 py-5">
      {/* Logo Section */}
      <div>
        <img className="h-[10rem] w-[12rem]" src={logo} alt="logo" />
      </div>

      {/* Social Icons */}
      <div className="flex justify-center items-center gap-5 text-4xl px-10 py-5">
        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/kristin-alex-740a72153"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin className="text-gray-500 hover:text-blue-700 transition duration-300" />
        </a>

        {/* GitHub */}
        <a
          href="https://github.com/KristinAlex1"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub className="text-gray-500 hover:text-gray-100 transition duration-300" />
        </a>

        {/* Instagram */}
        <a
          href="https://www.instagram.com/kristin_alex1/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram className="text-gray-500 hover:text-purple-700 transition duration-300" />
        </a>

        {/* Twitter */}
        <a
          href="https://x.com/KristinAlex5"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaSquareXTwitter className="text-gray-500 hover:text-gray-900 transition duration-300" />
        </a>
      </div>
    </div>
    </>
  )
}

export default Navbar