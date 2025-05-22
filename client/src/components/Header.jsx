// Copyright 2025 PREM
// 
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
// 
//     https://www.apache.org/licenses/LICENSE-2.0
// 
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import React, { useContext } from 'react'
import { assets } from '../assets/assets'
import { delay, motion } from "motion/react"
import { AppContext } from '../context/AppContext'
import { useNavigate } from 'react-router-dom'

const Header = () => {

  const {user, setShowLogin} = useContext(AppContext)
  const navigate = useNavigate()

  const onClickHandler =() => {
    if (user) {
      navigate('/result')
    }else{
      setShowLogin(true)
    }
  }
  return (
    <motion.div className='flex flex-col items-center text-center my-20'
   initial={{opacity:0.2, y:100}}
   transition={{duration:1}}
   whileInView={{opacity:1, y:0}}
   viewport={{once:true}}>
    <motion.div className='text-stone-600 inline-flex text-center gap-2 px-6 py-1 rounded-full border hover:scale-105 border-neutral-500 transition-all duration-500'
      initial={{opacity:0, y:-20}}
      animate={{opacity:1, y:0}}
      viewport={{delay:0.2, duration:0.8}}>
      <p>Design Art with Every Sentence</p> </motion.div>
     <motion.h1 className='text-4xl max-w-[300px] sm:text-6xl sm:max-w-[590px] mx-auto mt-10 text-center'
      initial={{opacity:0}}
      animate={{opacity:1}}
      transition={{delay:0.4,duration:2}}>
        Turn Words into <span className=' text-blue-500'>Art</span> Instantly</motion.h1>
     <motion.p className='text-center max-w-xl mx-auto mt-5'
     initial={{opacity:0, y:20}}
     animate={{opacity:1, y:0}}
     transition={{delay:0.6,duration:0.8}}>Unlock limitless imagination with AI – Type your thoughts and see them come to life as breathtaking art.</motion.p>
      <motion.button onClick={onClickHandler} className='text-white bg-blue-600 sm:text-lg w-auto mt-8 px-12 py-2.5 flex items-center gap-2 rounded-full'
      whileHover={{scale:1.05}}
      whileTap={{scale:0.95}}
      initial={{opacity:0}}
      animate={{opacity:1}}
      transition={{default: {duration:0.5}, opacity: {delay:0.8, duration: 1}}}>Generate Images

      </motion.button>
      <motion.div
      initial={{opacity:0}}
      animate={{opacity:1}}
      transition={{delay:1,duration:1}}
      className='flex flex-wrap justify-center mt-16 gap-3'>
       
        <motion.img whileHover={{scale:1.05, duration:0.1}}
            className='rounded hover:scale-105 transition-all duration-300 cursor-pointer max-sm:w-10' src={assets.sample_img1} width={80} />
        <motion.img whileHover={{scale:1.05, duration:0.1}}
            className='rounded hover:scale-105 transition-all duration-300 cursor-pointer max-sm:w-10' src={assets.sample_img2} width={80} />
        <motion.img  whileHover={{scale:1.05, duration:0.1}}
            className='rounded hover:scale-105 transition-all duration-300 cursor-pointer max-sm:w-10' src={assets.sample_img3} width={80} />

      </motion.div>
      <motion.p 
      initial={{opacity:0}}
      animate={{opacity:1}}
      transition={{delay:1.2,duration:0.8}}
      className='mt-2 text-neutral-600'>Generated images from ImageGen</motion.p>
   </motion.div>
  )
}

export default Header
