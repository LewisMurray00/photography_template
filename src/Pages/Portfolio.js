import React from 'react';

// import images 
import Image1 from '../Img/Portfolio/portfolio (1).png';
import Image2 from '../Img/Portfolio/portfolio (2).png';
import Image3 from '../Img/Portfolio/portfolio (3).png';
import Image4 from '../Img/Portfolio/portfolio (4).png';
import Image5 from '../Img/Portfolio/portfolio (5).png';
import Image6 from '../Img/Portfolio/portfolio (6).png';

// import link
import { Link } from 'react-router-dom';

const Portfolio = () => {
  return (
    <section className='section'>
      
      <div className='container mx-auto h-full relative'>
        
        <div className='flex flex-col lg:flex-row h-full items-center justify-start gap-x-24 text-center lg:text-left pt-24 lg:pt-36 pb-8'>
          {/* Text */}
          <div className='flex flex-col lg:items-start'>
            <h1 className='h1'> Portfolio </h1>
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
            <Link to={'/contact'} className='btn mb-[30px] mx-auto lg:mx-0' >Book here</Link>
          </div>

          {/* Images */}
          <div>Images</div>
        </div>

      </div>

    </section>
  )
}

export default Portfolio