import React from 'react'
import { FaNodeJs, FaReact } from 'react-icons/fa'
import { RiHtml5Line, RiJavascriptLine, RiReactjsLine, RiTailwindCssFill, RiTailwindCssLine } from 'react-icons/ri'
import { SiFirebase, SiMongodb, SiNodedotjs } from 'react-icons/si'
import { motion } from "framer-motion";


const iconVariables = (duration) => ({
    initial: { y: -10},
    animate: {
        y: [13,-13],
        transition : {
            duration: duration,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse",
        },
    },
});

const Technologies = () => {
  return (
    <div className='border-b border-neutral-800 pb-24'>
        <motion.h1
        whileInView={{ opaacity: 1, y:0}} 
        initial={{ opacity: 0, y: -100}}
        transition={{ duration: 1.5}}
        className='my-20 text-center text-6xl tracking tight font-thin'>Technologies</motion.h1>
        <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity:0 , x: -100}} 
        transition={{ duration: 1.5}}
        className='flex flex-wrap items-center justify-center gap-8'>
            <motion.div
            variants={iconVariables(1)} 
            initial="initial"
            animate="animate"
            className='rounded-2xl border-4 border-neutral-800'>
                <RiReactjsLine className='text-8xl text-blue-400'/>
            </motion.div>
            <motion.div
            variants={iconVariables(1.5)} 
            initial="initial"
            animate="animate" 
            className='rounded-2xl border-4 border-neutral-800'>
                <SiMongodb className='text-8xl text-green-500'/>
            </motion.div>
            <motion.div
            variants={iconVariables(1.7)} 
            initial="initial"
            animate="animate" 
            className='rounded-2xl border-4 border-neutral-800'>
                <SiNodedotjs className='text-8xl text-red-500'/>
            </motion.div>
            <motion.div
            variants={iconVariables(2)} 
            initial="initial"
            animate="animate"
            className='rounded-2xl border-4 border-neutral-800'>
                <FaReact className='text-8xl text-cyan-400'/>
            </motion.div>
            <motion.div
            variants={iconVariables(1)} 
            initial="initial"
            animate="animate" 
            className='rounded-2xl border-4 border-neutral-800'>
                <SiFirebase className='text-8xl text-orange-400'/>
            </motion.div>
            <motion.div
            variants={iconVariables(1.7)} 
            initial="initial"
            animate="animate" 
            className='rounded-2xl border-4 border-neutral-800'>
                <RiJavascriptLine className='text-8xl text-red-400'/>
            </motion.div>
            <motion.div
            variants={iconVariables(2)} 
            initial="initial"
            animate="animate" 
            className='rounded-2xl border-4 border-neutral-800'>
                <RiTailwindCssLine className='text-8xl text-blue-400'/>
            </motion.div>
            <motion.div
            variants={iconVariables(1.3)} 
            initial="initial"
            animate="animate" 
            className='rounded-2xl border-4 border-neutral-800'>
                <RiHtml5Line className='text-8xl text-green-400'/>
            </motion.div>
        </motion.div>

    </div>
  )
}

export default Technologies