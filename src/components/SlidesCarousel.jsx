import React from 'react'

import { Carousel } from 'flowbite-react';

const SlidesCarousel = () => {
  return (
    <Carousel className='h-[20vh] md:h-[60vh] lg:h-[80vh] mt-32'>
      <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
        <img src="/images/slides/slide1.png" className='object-cover' alt="" />
      </div>
      <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
        Slide 2
      </div>
      <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
        Slide 3
      </div>
    </Carousel>
  )
}

export default SlidesCarousel