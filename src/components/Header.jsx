import React from 'react'
import Logo from '../assets/react.svg'

export const Header = () => {
  return (
   <header>
    <div className='logo'>
      <img src={Logo} alt='logo'/>
      <span>Task Manager</span>
    </div>
    <div className='themeSelector'>
    <span className='light'></span>
    <span className='medium'></span>
    <span className='dark activeTheme'></span>
    <span className='gOne'></span>
    <span className='gTwo'></span>
    <span className='gThree'></span>

    </div>
   </header>
  )
}
