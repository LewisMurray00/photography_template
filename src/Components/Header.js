import React from 'react'
import '../index.css'

//Import components
import Socials from './Socials';
import MobileNav from './MobileNav';
import Logo from '../Img/Header/Logo.png'

//Import Link
import {Link} from 'react-router-dom'

const Header = () => {
  return (
    <header className='fixed w-full px-[30px] lg:px-[100px] z-30 h-[100px] lg:h-[140px] flex items-center'>
      
      <div className='flex flex-col lg:flex-row-reverse lg:items-center w-full justify-between float-right'>
        
        {/* <Link to={'/'}>
          <img src={Logo} alt='Logo' className='max-w-[200px] ' />
        </Link> */}

        <nav className='hidden xl:flex gap-x-12 font-semibold '>
          <Link to={'/'} className='text-[#696c6d] hover:text-primary transition'>
            Home
          </Link>

          <Link to={'/about'} className='text-[#696c6d] hover:text-primary transition'>
            About
          </Link>

          <Link to={'/portfolio'} className='text-[#696c6d] hover:text-primary transition'>
            Portfolio
          </Link>

          <Link to={'/contact'} className='text-[#696c6d] hover:text-primary transition'>
            Contact
          </Link>
        </nav>
      </div>
        
        <Socials />

        <MobileNav />

    </header>
  )
}

export default Header