import React from 'react'
import Title from './Title'
import {teamData} from '../assets/assets'

const Teams = () => {
  return (
    <div className='flex flex-col items-center justify-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-800 dark:text-white'>
        <Title title='Our Team' desc='Meet the talented individuals behind our success.' />
        <div className='grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5'>
            {
                teamData.map((team, index) => (
                    <div key={index} className='flex max-sm:flex-col items-center gap-5 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 dark:shadow-white/5 hover:scale-103 transition-all duration-400 ' alt="">
                        <img src={team.image} className='w-12 h-12 rounded-full' alt="" />
                        <div className='flex-1'>
                            <h3 className='font-bold text-sm'>{team.name}</h3>
                            <p className='text-sm opacity-60'>{team.role}</p>
                        </div>
                    </div>
            ))}
        </div>
    </div>
  )
}

export default Teams
