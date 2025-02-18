import React from "react";
import { HERO_CONTENT } from "../constants";

const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-10 lg:mb-20 flex items-center justify-center h-screen bg-black">
      <div className="flex flex-wrap w-full max-w-5xl px-6">
        {/* Left Section - Text Content */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center items-center lg:items-start text-white">
          <h1 className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl">Kristin Alex</h1>
          <p className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent">
            Full Stack Developer
          </p>
          <p className="my-2 max-w-xl py-6 font-light tracking-tighter">{}</p>

        </div>

        
        
      </div>
    </div>
  );
};

export default Hero;
