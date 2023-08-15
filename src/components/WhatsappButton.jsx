import React from 'react'
import { FaWhatsapp } from "react-icons/fa";

const WhatsappButton = () => {
  return (
    <div className='fixed z-[10000] bottom-7 right-8 md:bottom-7 md:right-7 bg-[#25D366] rounded-full p-3 hover:scale-125 ease-in-out duration-300 cursor-pointer'>
      <a href="https://wa.me/+5491162801006" target='_blank'>
        <FaWhatsapp size={40} className='text-white' />
      </a>
    </div>
  )
}

export default WhatsappButton