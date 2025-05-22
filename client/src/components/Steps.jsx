
import React from 'react'
import { stepsData } from '../assets/assets'
import { motion } from 'framer-motion'

const Steps = () => {
  return (
    <motion.div
    initial={{opacity:0.2, y:100}}
    transition={{duration:1}}
    whileInView={{opacity:1, y:0}}
    viewport={{once:true}}
    className='flex flex-col items-center justify-center my-32'>
      <h1 className='text-black-700 inline-flex text-3xl sm:text-0xl font-bold text-center gap-2 bg-white px-28 py-4 rounded-full border hover:scale-105 border-neutral-500 transition-all duration-700'>How AI Brings Your Imagination to Life</h1>
      <p className='text-lg text-gray-600 mb-8'>Transform Texts Into Stunning Images</p>

      <div className='space-y-4 w-full max-w-3xl text-sm'>
        {stepsData.map((item,index)=>(
            <div key={index} className='flex items-center gap-4 p-5 px-8 bg-white shadow-md border cursor-pointer hover:scale-[1.02] transition-all duration-300 rounded-lg'>
                <img width={40} src={item.icon} alt=''/>
                <div>
                    <h2 className='text-xl font-medium'>{item.title}</h2>
                    <p className='text-zinc-600'>{item.description}</p>
                </div>
            </div>
        ))}
      </div>
    </motion.div>
  )
}

export default Steps
