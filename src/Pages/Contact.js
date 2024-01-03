import React from 'react'

// import images 
import portfolioImage from '../Img/Contact/ContactWoman.png'

const Contact = () => {
  return (
    <section className='section bg-white'>
      
      <div className='container mx-auto h-full'>
        <div className='flex flex-col lg:flex-row h-full items-center justify-start pt-36 gap-x-8 text-center lg:text-left '>
          {/* bg */}
          <div>bg</div>

          {/* Text & Form */}
          <div className='lg:flex-1 lg:pt-32 px-4'>
            <h1 className='h1'>Contact Me</h1>
            <p className='mb-12'>I would love work with you to capture memories</p>
            {/* Form */}
            <form className='flex flex-col gap-y-4'>
              <div className='flex gap-x-10 '>
                <input className='outline-none border-b border-b-primary h-[60px] bg-transparent font-secondary w-full pl-3 placeholder:text-[#757879]' type="text" placeholder='Your Name' />
                <input className='outline-none border-b border-b-primary h-[60px] bg-transparent font-secondary w-full pl-3 placeholder:text-[#757879]' type="text" placeholder='Your Email Address' />
              </div>
              <input className='outline-none border-b border-b-primary h-[60px] bg-transparent font-secondary w-full pl-3 placeholder:text-[#757879]' type="text" placeholder='Your Message' />
              <button className='btn mb-[30px] mx-auto lg:mx-0 self-start'>Send</button>
            </form>
          </div>

          {/* Image */}
          <div>Image</div>
        </div>
      </div>

    </section>
  )
}

export default Contact