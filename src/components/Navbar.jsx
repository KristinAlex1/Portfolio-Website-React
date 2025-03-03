import React from "react";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <>
      <div
        className="absolute fixed top-0 left-0 w-full h-[35rem] z-[0]"
        style={{
          background:
            "radial-gradient(ellipse 80% 100% at 50% 0%, rgba(255, 250, 250, 0.23), rgba(0, 0, 0, 0.5), transparent)",
        }}
      ></div>

      <div className="top-0 left-0 w-full flex flex-wrap justify-between items-center px-5 md:px-10 py-5">
        {/* Logo Section */}
        <div>
          <img className="h-[6rem] w-[8rem] md:h-[10rem] md:w-[12rem]" src={logo} alt="logo" />
        </div>

        {/* Social Icons */}
        <div className="flex flex-wrap justify-center items-center z-[10] gap-4 md:gap-5 text-3xl md:text-4xl px-5 md:px-10 py-3 md:py-5">
          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/kristin-alex-740a72153"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="text-blue-700 hover:text-blue-400 transition duration-300" />
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/KristinAlex1"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="text-gray-100 hover:text-gray-500 transition duration-300" />
          </a>

          {/* Instagram */}
          <a
            href="https://www.instagram.com/kristin_alex1/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className="text-purple-800 hover:text-purple-500 transition duration-300" />
          </a>

          {/* Twitter */}
          <a
            href="https://x.com/KristinAlex5"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaSquareXTwitter className="text-gray-500 hover:text-gray-300 transition duration-300" />
          </a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
