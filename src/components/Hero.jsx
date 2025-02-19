import React from "react";

import profile from "../assets/profile.png";
import HeroText from "./HeroText";
const Hero = () => {
  return (
    <div className="border-b border-neutral-900 -pt-50 lg:mb-20 flex items-center justify-center h-screen bg-black">
      <div className="w-full max-w-7xl px-6 flex justify-between items-center gap-x-[30rem]">
        {/* Left Section - Text Content */}
        <div className="w-4/6 flex flex-col justify-center text-white text-left">
          <h1 className="pb-10 text-7xl font-thin tracking-tight lg:text-8xl">
            Kristin Alex
          </h1>
          <p className="w-[26rem] bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-5xl tracking-tight text-transparent">
            Full Stack Developer
          </p>
          <div className="max-w-[100%] py-6 text-gray-400 text-3xl font-light tracking-tighter">
            <HeroText/>
          </div>
        </div>

        {/* Right Section - Image (Moved Up) */}
        <div className="w-10% flex justify-center">
          <img
            className="h-[60rem] w-[50rem] object-cover rounded-lg shadow-lg -mt-70" // Moved Up
            src={profile}
            alt="Profile"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
