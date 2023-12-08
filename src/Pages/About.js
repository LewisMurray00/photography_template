import React from 'react'

//import images
import AboutWoman from '../Img/About/AboutWoman.png'

//import link
import { Link } from 'react-router-dom'
 
const About = () => {
  return (
    <section className='section'>
      <div className='container mx-auto h-full relative'>
        
        {/* Text and image wrapper */}
        <div className='flex flex-col lg:flex-row h-full items-center justify-center gap-x-24 text-center lg:text-left lg:pt-16'>
          {/* Image */}
          <div className='flex-1 max-h-96 lg:max-h-max order-2 lg:order-none overflow-hidden'>
            <img src={AboutWoman} alt="" />
          </div>

          {/* Text */}
          <div className='flex-1 pt-36 pb-14 lg:pt-0 lg:w-auto z-10 flex flex-col justify-center items-center lg:items-start'>
            <h1 className='h1'>About Me</h1>
            <p className='mb-12 max-w-sm' >
              Lorem ipsum dolor sit amet, 
              consectetur adipiscing elit. 
              Vivamus sapien libero, 
              lacinia vel varius et, 
              bibendum vel mauris.
              <br />
              <br /> 
              Nunc ultrices, nibh id venenatis malesuada, 
              diam justo sodales nibh, 
              vitae laoreet.
            </p>
            <Link to={'/portfolio'} className='btn' >View My Work</Link>
          </div>
        </div>

      </div>
    </section>
  )
}

export default About