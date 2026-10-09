import React from 'react'
import {company_logos} from '../assets/assets'
import { motion } from 'motion/react'

const TrustedBy = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className='flex flex-col items-center px-4 sm:px-12 lg:px-24 xl:px-40 text-gray-700 dark:text-white/80'>
      
      <motion.h3
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className='font-semibold'>Trusted by leading companies</motion.h3>

        <motion.div
        initial="hidden"
        animate="visible"
        transition={{ staggerChildren: 0.2,}}
        viewport={{ once: true }}
        className='flex flex-wrap justify-center items-center gap-6 py-6'>
          {company_logos.map((logo, index)=>(
            <img key={index} src={logo} alt={`Company Logo ${index + 1}`} className='h-10 w-auto' />
          ))}
        </motion.div>
    </motion.div>
  )
}

export default TrustedBy
