import React from 'react'

//Import Pages
import Home from '../Pages/Home';
import About from '../Pages/About';
import Portfolio from '../Pages/Portfolio';
import Contact from '../Pages/Contact';

// Import Routes route & UseLocation hook
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';


const AnimRoutes = () => {  

  const location = useLocation();

  return (
    <AnimatePresence initial={true} mode='wait' >
      <Routes key={location.pathname} Location={location} >
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/portfolio' element={<Portfolio />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </AnimatePresence>
  );
}

export default AnimRoutes