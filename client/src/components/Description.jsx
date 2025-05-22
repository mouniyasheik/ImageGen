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

import React from 'react'
import { assets } from '../assets/assets'
import { motion } from 'framer-motion'

const Description = () => {
  return (
    <motion.div 
    initial={{opacity:0.2, y:100}}
    transition={{duration:1}}
    whileInView={{opacity:1, y:0}}
    viewport={{once:true}}
    className='flex flex-col items-center justify-center my-24 p-6 md:px-28'>
      <h1 className='text-3xl sm:text-4xl font-semibold text-center'>AI-Powered Image Generation</h1>
      <p className='text-gray-500 mb-8 text-center'>Transforming Text into Stunning Visuals Instantly</p>
      
      <div className='flex flex-col gap-5 md:gap-14 md:flex-row items-center'>
        <img src={assets.sample_img_1} alt='AI generated sample' className='w-80 xl:w-100 rounded-lg' />
        
        <div>
          <h2 className='text-3xl font-medium max-w-lg mb-4'>Turn Ideas Into Visual Reality</h2>
          <p className='text-gray-600 mb-4'>
            Experience the future of creativity with our AI image generator. Simply enter a text prompt, and our cutting-edge technology will craft a high-quality image tailored to your description.
          </p>
          <p className='text-gray-600 mb-4'>
            Whether you’re designing characters, visualizing concepts, or prototyping products, our tool helps you generate unique visuals with zero design skills required. Create, iterate, and innovate—faster than ever before.
          </p>
              </div>
      </div>
    </motion.div>
  )
}

export default Description
