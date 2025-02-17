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
        <img className="h-[6rem]" src={logo} alt="logo" />
      </div>

      {/* Social Icons */}
      <div className="flex justify-center items-center gap-5 text-4xl">
        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/kristin-alex-740a72153"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin className="text-purple-500 hover:text-purple-700 transition duration-300" />
        </a>

        {/* GitHub */}
        <a
          href="https://github.com/YOUR_GITHUB_USERNAME"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub className="text-purple-500 hover:text-purple-700 transition duration-300" />
        </a>

        {/* Instagram */}
        <a
          href="https://instagram.com/YOUR_INSTAGRAM_USERNAME"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram className="text-purple-500 hover:text-purple-700 transition duration-300" />
        </a>

        {/* Twitter */}
        <a
          href="https://twitter.com/YOUR_TWITTER_USERNAME"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaSquareXTwitter className="text-purple-500 hover:text-purple-700 transition duration-300" />
        </a>
      </div>
    </div>
    </>
  )
}

export default Navbar