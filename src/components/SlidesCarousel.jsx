import React from 'react'

import { Carousel } from 'flowbite-react';
import { Flowbite } from 'flowbite-react';

const customTheme = {
  carousel: {
    scrollContainer: {
      "base": "flex h-full snap-mandatory overflow-y-hidden overflow-x-scroll scroll-smooth",
      "snap": "snap-x"
    },
    item: {
      "base": "absolute top-1/2 left-1/2 block w-full -translate-x-1/2 -translate-y-1/2",
      "wrapper": "w-full flex-shrink-0 transform snap-center"
    },
  },
};

const SlidesCarousel = () => {
  return (
    <Flowbite theme={{ theme: customTheme }}>
      <Carousel slideInterval={5000} className='h-[20vh] md:h-[60vh] lg:h-[80vh] mt-32'>
        <div className="flex h-full items-center justify-center bg-pineGreen">
          <img src="/images/slides/slide1.png" className='object-cover' alt="" />
        </div>
        <div className="flex h-full items-center justify-center bg-pineGreen">
          <img src="/images/slides/slide2.png" className='object-cover' alt="" />
        </div>
      </Carousel>
      </Flowbite>
  )
}

export default SlidesCarousel