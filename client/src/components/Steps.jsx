import React from 'react'
import { stepsData } from '../assets/assets'
import { motion } from 'framer-motion'

const Steps = () => {
  return (
    <motion.div
      initial={{ opacity: 0.2, y: 100 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="flex flex-col items-center justify-center my-12 sm:my-20"
    >
      <h1 className="text-black inline-flex text-2xl sm:text-3xl font-bold gap-2 bg-white px-6 sm:px-10 py-2 sm:py-3 rounded-xl border border-neutral-400 hover:scale-105 transition-all duration-700">
        How AI Brings Your Imagination to Life
      </h1>
      <p className="text-base text-gray-600 mt-2 mb-6 sm:mb-8">
        Transform Texts Into Stunning Images
      </p>

      <div className="space-y-2 w-full max-w-3xl text-sm">
        {stepsData.map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-3 p-3 px-5 bg-white shadow-md border cursor-pointer hover:scale-[1.02] transition-all duration-300 rounded-md"
          >
            <img width={32} src={item.icon} alt="" />
            <div>
              <h2 className="text-lg font-medium">{item.title}</h2>
              <p className="text-zinc-600">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  )
}

export default Steps
