import React from 'react'
import {company_logos} from '../assets/assets'

const TrustedBy = () => {
  return (
    <div className='flex flex-col items-center px-4 sm:px-12 lg:px-24 xl:px-40 text-gray-700 dark:text-white/80'>
      <h3 className='font-semibold'>Trusted by leading companies</h3>
        <div className='flex flex-wrap justify-center items-center gap-6 py-6'>
          {company_logos.map((logo, index)=>(
            <img key={index} src={logo} alt={`Company Logo ${index + 1}`} className='h-10 w-auto' />
          ))}
        </div>
    </div>
  )
}

export default TrustedBy
