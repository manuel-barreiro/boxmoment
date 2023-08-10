import React from 'react'

import { Carousel } from 'flowbite-react';

const SlidesCarousel = () => {
  return (
    <Carousel slideInterval={5000} className='h-[20vh] md:h-[60vh] lg:h-[80vh] mt-32'>
    <img
      alt="..."
      src="/images/slides/slide1.png"
    />
    <img
      alt="..."
      src="/images/slides/slide2.png"
    />
    
  </Carousel>
  )
}

export default SlidesCarousel