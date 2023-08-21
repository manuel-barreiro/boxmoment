import React from "react"
import { FaWhatsapp, FaRegEnvelope, FaPhone } from "react-icons/fa6";
import { motion } from 'framer-motion'

const Contact = () => {

  const cardAnimationVariants = {
    initial: { opacity: 0, y: 15 },
    animate:{ opacity: 1 , y: 0},       
  }

  return (
    <section name="contacto" className="text-gray-600 font-primary">
      <div className="container px-6 md:px-20 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-14">
          <h3 className="sm:text-5xl text-4xl font-bold text-pineGreen mb-2">Contactanos</h3>
          <h4 className="lg:w-2/3 mx-auto leading-relaxed text-sm uppercase text-gray-500">TU CONSULTA NO ES MOLESTIA, ESTAMOS PARA AYUDARTE.</h4>
        </div>

        <div className="flex flex-wrap -m-4">

          <motion.div
          variants={cardAnimationVariants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          transition= {{ duration: 0.5, delay: 0.5 }} 
          className="p-4 w-full xl:w-1/3">
            <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
              <div className="flex items-center mb-3">
                <div className="w-8 h-8 p-2 mr-3 inline-flex items-center justify-center rounded-full bg-pineGreen/80 text-white flex-shrink-0">
                  <FaWhatsapp size={60} />
                </div>
                <h2 className="text-gray-900 text-lg title-font font-medium">Whatsapp</h2>
              </div>
              <div className="flex-grow">
                <p className="leading-relaxed text-md md:text-lg lg:text-xl text-black">11 6280 1006</p>
                <p className='font-secondary mt-4'>Contactanos a nuestro Whatsapp y un asesor responderá tu consulta a la brevedad.</p>
              </div>
            </div>
          </motion.div>

          <motion.div
          variants={cardAnimationVariants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          transition= {{ duration: 0.5, delay: 0.5 }} 
          className="p-4 w-full xl:w-1/3">
            <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
              <div className="flex items-center mb-3">
                <div className="w-8 h-8 p-2 mr-3 inline-flex items-center justify-center rounded-full bg-pineGreen/80 text-white flex-shrink-0">
                  <FaRegEnvelope size={60} />
                </div>
                <h2 className="text-gray-900 text-lg title-font font-medium">Correo electrónico</h2>
              </div>
              <div className="flex-grow">
                <p className="leading-relaxed text-md md:text-lg lg:text-xl text-black">contacto@boxmoment.com.ar</p>
                <p className='font-secondary mt-4'>Escribinos via e-mail y responderemos tu consulta.</p>
              </div>
            </div>
          </motion.div>

          <motion.div
          variants={cardAnimationVariants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          transition= {{ duration: 0.5, delay: 0.5 }} 
          className="p-4 w-full xl:w-1/3">
            <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
              <div className="flex items-center mb-3">
                <div className="w-8 h-8 p-2 mr-3 inline-flex items-center justify-center rounded-full bg-pineGreen/80 text-white flex-shrink-0">
                  <FaPhone size={60} />
                </div>
                <h2 className="text-gray-900 text-lg title-font font-medium">Teléfono</h2>
              </div>
              <div className="flex-grow">
                <p className="leading-relaxed text-md md:text-lg lg:text-xl text-black">11 6280 1006</p>
                <p className='font-secondary mt-4'>Comunicate con nosotros al número en pantalla.</p>
              </div>
            </div>
          </motion.div>

        </div>

      </div>
</section> 
  )
}

export default Contact