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
    <header className='bg-pink-200 fixed w-full px-[30px] lg:px-[100px] z-30 h-[100px]'>Header</header>
  )
}

export default Header