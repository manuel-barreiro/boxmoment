import React from 'react'
import { FaWhatsapp } from "react-icons/fa";
import { GrMail } from 'react-icons/gr'
import { Link, animateScroll as scroll, } from 'react-scroll'

const Buttons = () => {
  return (
    <>
      <div className='fixed z-[10000] bottom-24 right-7 bg-[#ffc51a] rounded-full p-3 hover:scale-125 ease-in-out duration-300 cursor-pointer'>
        <Link to="contactForm" offset={-170} smooth={true} duration={500}>
          <GrMail size={40} className='text-white' />
        </Link>
      </div>

      <div className='fixed z-[10000] bottom-5 right-7 bg-[#25D366] rounded-full p-3 hover:scale-125 ease-in-out duration-300 cursor-pointer'>
        <a href="https://wa.me/+5491162801006" target='_blank' rel='noopener noreferrer'>
          <FaWhatsapp size={40} className='text-white' />
        </a>
      </div>
    </>
  )
}

export default Buttons