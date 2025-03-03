import React from "react";
import AboutImage from "../assets/About.jpg";
import { motion } from "framer-motion";
import AboutText from "./AboutText";

const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      {/* Heading */}
      <h1 className="flex items-center justify-center p-5 text-center text-4xl md:text-6xl tracking-tight font-thin">
        About{" "}
        <span className="text-neutral-500 pl-4 md:pl-7 tracking-tight font-thin">Me</span>
      </h1>

      {/* Content Section */}
      <div className="flex flex-wrap flex-col-reverse md:flex-row items-center my-6 md:my-[2rem]">
        
        {/* Left Side - Image */}
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -200 }}
          transition={{ duration: 1 }}
          className="w-full md:w-1/2 p-4"
        >
          <div className="flex items-center justify-center">
            <img 
              className="rounded-2xl w-full md:w-[40rem] h-auto object-cover" 
              src={AboutImage} 
              alt="about"
            />
          </div>
        </motion.div>

        {/* Right Side - Text */}
        <div className="w-full md:w-1/2 my-4">
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 0.5 }}
            className="flex justify-center md:justify-start px-4"
          >
            <div className="my-2 max-w-2xl text-xl md:text-3xl font-thin tracking-tight py-2">
              <AboutText />
            </div>
          </motion.div>
        </div>

      </div>
    </div>
  );
};

export default About;
