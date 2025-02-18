import React from 'react'
import { FaNodeJs, FaReact } from 'react-icons/fa'
import { RiHtml5Line, RiJavascriptLine, RiReactjsLine, RiTailwindCssFill, RiTailwindCssLine } from 'react-icons/ri'
import { SiFirebase, SiMongodb, SiNodedotjs } from 'react-icons/si'

const Technologies = () => {
  return (
    <div className='border-b border-neutral-800 pb-24'>
        <h1 className='my-20 text-center text-6xl tracking tight font-thin'>Technologies</h1>
        <div className='flex flex-wrap items-center justify-center gap-4'>
            <div className='rounded-2xl border-4 border-neutral-800'>
                <RiReactjsLine className='text-8xl text-blue-400'/>
            </div>
            <div className='rounded-2xl border-4 border-neutral-800'>
                <SiMongodb className='text-8xl text-green-500'/>
            </div>
            <div className='rounded-2xl border-4 border-neutral-800'>
                <SiNodedotjs className='text-8xl text-red-500'/>
            </div>
            <div className='rounded-2xl border-4 border-neutral-800'>
                <FaReact className='text-8xl text-cyan-400'/>
            </div>
            <div className='rounded-2xl border-4 border-neutral-800'>
                <SiFirebase className='text-8xl text-orange-400'/>
            </div>
            <div className='rounded-2xl border-4 border-neutral-800'>
                <RiJavascriptLine className='text-8xl text-red-400'/>
            </div>
            <div className='rounded-2xl border-4 border-neutral-800'>
                <RiTailwindCssLine className='text-8xl text-blue-400'/>
            </div>
            <div className='rounded-2xl border-4 border-neutral-800'>
                <RiHtml5Line className='text-8xl text-green-400'/>
            </div>
        </div>

    </div>
  )
}

export default Technologies