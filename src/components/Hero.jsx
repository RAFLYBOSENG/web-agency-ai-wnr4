import React from 'react'
import assets from '../assets/assets'
import { motion } from 'motion/react'

const Hero = () => {
    return (
        <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        id='hero' className='flex flex-col items-center gap-6 py-20 px-4 sm:px-12 lg:px-24 xl:px-40 text-center w-full overflow-hidden text-gray-700 dark:text-white'>
            <div className='inline-flex items-center gap-2 border border-gray-300 p-1.5 pr-4 rounded-full'>
                <img className='w-20' src={assets.group_profile} alt="" />
                <p className='text-xs font-medium'>Trusted by 10k+ people</p>
            </div>
            <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className='text-4xl sm:text-5xl md:text-6xl xl:text-[84px] font-medium x1:leading-23.75 max-w-5x1'>Turning imagination into <span className='bg-linear-to-r from-primary to-[#4d8cea] bg-clip-text text-transparent'> digital </span> impact.
            </motion.div>
            <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 1.0 }}
            className='text-sm sm:text-lg font-medium text-gray-500 dark:text-white/75 max-w-4/5 sm:max-w-lg pb-3'>Creating meaningful connections and turning big ideas into interactive digital experiences.
            </motion.div>
            <div className='relative'>
                <img src={assets.hero_img} alt="" className='w-full max-w-6xl' />
                <img src={assets.bgImage1} alt="" className='absolute -top-40 -right-40 sm:-top-100 sm:-right-70 -z-1 dark:hidden' />
            </div>
        </motion.div>
    )
}

export default Hero