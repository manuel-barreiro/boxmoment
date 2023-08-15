import React from "react"
import { FaWhatsapp, FaRegEnvelope, FaPhone } from "react-icons/fa6";

const Contact = () => {
  return (
    <section name='contacto' class="text-gray-600 body-font flex flex-col items-center pt-20 font-primary">
      <h2 className="font-primary text-5xl font-black text-black">Contactanos.</h2>


      <div class="container px-5 py-24 mx-auto">
       
        <div class="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
          <div class="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
            <FaWhatsapp size={60} />
          </div>
          <div class="flex-grow sm:text-left text-center mt-6 sm:mt-0">
            <h2 class="text-gray-900 text-lg title-font font-medium mb-2">Whatsapp</h2>
            <p class="leading-relaxed text-base">+54 9 11 6280-1006</p>
            
          </div>
        </div>
        <div class="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
          <div class="flex-grow sm:text-left text-center mt-6 sm:mt-0">
            <h2 class="text-gray-900 text-lg title-font font-medium mb-2">Teléfono</h2>
            <p class="leading-relaxed text-base">+54 9 11 6280-1006</p>
            
          </div>
          <div class="sm:w-32 sm:order-none order-first sm:h-32 h-20 w-20 sm:ml-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
            <FaPhone size={60} />
          </div>
        </div>
        <div class="flex items-center lg:w-3/5 mx-auto sm:flex-row flex-col">
          <div class="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
            <FaRegEnvelope size={60} />
          </div>
          <div class="flex-grow sm:text-left text-center mt-6 sm:mt-0">
            <h2 class="text-gray-900 text-lg title-font font-medium mb-2">Correo Electrónico</h2>
            <p class="leading-relaxed text-base">contacto@boxmoment.com.ar</p>
            
          </div>
        </div>
      </div>
    </section>  
  )
}

export default Contact