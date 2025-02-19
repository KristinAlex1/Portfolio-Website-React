import React from "react";
import AboutImage from "../assets/About.jpg";
import { motion } from "framer-motion";
import AboutText from "./AboutText";

const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <h1 className="flex items-center justify-center p-5 text-center text-6xl tracking-tight font-thin">
        About{" "}
        <span className="text-neutral-500 pl-7 tracking-tight font-thin">Me</span>
      </h1>
      <div className="flex flex-wrap my-[2rem]">
        <motion.div
        whileInView={{ opacity: 1, x:0}}
        initial={{ opacity : 0, x: -400}}
        transition={{ duration : 1.5}}
        className="w-full lg:w-1/2 lg:p-8">
          <div className="flex items-center justify-center">
            <img className="rounded-2xl w-[50rem] h-[35rem] object-cover" src={AboutImage} alt='about'/>
          </div>
          
        </motion.div>
        <div className="w-full my-[1rem] lg:w-1/2">
            <motion.div
            whileInView={{ opacity: 1, x: 0}} 
            initial={{ opacity: 0 , x: 100 }}
            transition={{ duration : 0.5}}
            className="flex justify-center lg:justify-start">
                <div className="my-2 max-w-2xl text-3xl font-thin tracking-tight py-2"><AboutText/></div>

            </motion.div>

        </div>
      </div>
    </div>
  );
};

export default About;
