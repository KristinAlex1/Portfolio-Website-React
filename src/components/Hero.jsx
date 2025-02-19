import React from "react";
import { motion } from "framer-motion";
import profile from "../assets/profile.png";
import HeroText from "./HeroText";

const containerLeft = (delay) => ({
    hidden: {x: -100,opacity:0},
    visible:{
        x:0,
        opacity:1,
        transition: {duration: 0.5, delay:delay},
    }
})

const containerRight = (delay) => ({
    
    hidden: {x: 200,opacity:0},
    visible:{
        x:90,
        opacity:1,
        transition: {duration: 0.5, delay:delay},
    }
})


const Hero = () => {
  return (
    <div className="border-b border-neutral-900 -pt-50 lg:mb-20 flex items-center justify-center h-screen bg-black">
      <div className="w-full max-w-7xl px-6 flex justify-between items-center gap-x-[30rem]">
        {/* Left Section - Text Content */}
        <div className="w-4/6 flex flex-col justify-center text-white text-left">
          <motion.h1 
          
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -200 }}
          transition={{ duration: 1.5 }}
          className="pb-10 text-7xl font-thin tracking-tight lg:text-8xl">
            Kristin Alex
          </motion.h1>
          <motion.p
            whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -200 }}
          transition={{ duration: 1.5 }}
           className="w-[26rem] bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-5xl tracking-tight text-transparent">
            Full Stack Developer
          </motion.p>
          <motion.div 
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -200 }}
          transition={{ duration: 1.5 }}
          className="max-w-[100%] py-6 text-gray-400 text-3xl font-light tracking-tighter">
            <HeroText/>
          </motion.div>
        </div>

        {/* Right Section - Image (Moved Up) */}
        <motion.div 
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: 200 }}
        transition={{ duration: 2 }}
        className="w-10% flex justify-center">
          <img
            className="h-[60rem] w-[50rem] object-cover rounded-lg shadow-lg -mt-70" // Moved Up
            src={profile}
            alt="Profile"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
