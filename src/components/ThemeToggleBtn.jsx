import React, { useEffect } from 'react'
import assets from '../assets/assets'

const ThemeToggleBtn = ({theme, setTheme}) => {
    useEffect(()=>{
        if (theme === 'dark') {
            document.documentElement.classList.add('dark')
        }else{
            document.documentElement.classList.remove('dark')
        }
        localStorage.setItem('theme', theme)
    }, [theme])
    const toggleTheme = () => setTheme(theme === 'dark' ? 'light' : 'dark')

    return (
      <button type='button' onClick={toggleTheme} aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}>
          {theme === 'dark' ? (
              <img src={assets.sun_icon} className='size-8.5 p-1.5 border border-gray-500 rounded-full' alt="" />) : (<img src={assets.moon_icon} className='size-8.5 p-1.5 border border-gray-500 rounded-full' alt="" />)}
      </button>
  )
}

export default ThemeToggleBtn
