import React from 'react'
import { FaWhatsapp } from "react-icons/fa";

const WhatsappButton = () => {
  return (
    <div className='fixed z-[10000] bottom-16 right-8 md:bottom-10 md:right-28 bg-[#25D366] rounded-full p-4 hover:scale-125 ease-in-out duration-300 cursor-pointer '>
      <a href="https://wa.me/+5491162801006" target='_blank'>
        <FaWhatsapp size={50} className='text-white' />
      </a>
    </div>
  )
}

export default WhatsappButton