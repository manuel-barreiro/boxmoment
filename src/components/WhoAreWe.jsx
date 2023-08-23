import React from 'react'
import { motion } from 'framer-motion'

const WhoAreWe = () => {

  const logoAnimationVariants = {
    initial: { y: 15, opacity: 0 },
    animate:{ y: 0, opacity: 1 },      
  }

  const textAnimationVariants = {
    initial: { y: 15, opacity: 0 },
    animate:{ y: 0, opacity: 1 },      
  }

  return (
    <section name='quienesSomos' className="w-full h-full bg-[url('/images/backgrounds/waves1Mobile.svg')] md:bg-[url('/images/backgrounds/waves1.svg')] bg-center bg-cover py-20 md:py-28 px-8 md:px-32 font-primary flex flex-col gap-6">

      <div className="flex flex-col justify-evenly items-center gap-5 mt-10 p-10 bg-darkNight shadow-2xl rounded-xl text-[#86e498]">

        <div className='flex flex-col xl:flex-row justify-evenly items-center gap-8 '>

            <div className="xl:basis-1/2 h-auto flex flex-col gap-5 items-start ">
                  <h3 className="text-4xl md:text-5xl font-extrabold text-start">Somos <br className='lg:hidden' /> Box Moment</h3>
                  <p className="text-justify font-secondary font-medium">Box Moment lleva 4 años de trayectoria en el mercado, brindando la mayor <span className="font-extrabold">comodidad</span> y <span className="font-extrabold">servicio</span> a nuestros clientes en épocas festivas. </p>
                  <p className="text-justify font-secondary font-medium">El respaldo de <span className="font-extrabold">empresas de primera línea</span> que eligen nuestros productos son el sello de <span className="font-extrabold">garantía</span> y <span className="font-extrabold">confianza</span> que nos permite llegar a más consumidores de una forma más rápida y segura sin dejar de brindar una <span className="font-extrabold">atención personalizada</span> a cada uno de nuestros clientes.</p>
            </div>

            <div className='xl:basis-1/2 h-auto rounded-3xl xl:h-80'>
              <video controls poster='/poster.jpg' loading="lazy" className="object-cover object-center w-full h-full rounded-lg" src="/VideoCajas.mp4" title="Somos Box Moment, hacemos las mejores cajas navideñas" alt="Somos Box Moment" />
            </div>

          </div>

          <div>
            <p className="text-justify font-secondary font-medium">
              Nuestras cajas navideñas son una <span className="font-extrabold">excelente</span> opción para los regalos de fin de año que las empresas otorgan a sus colaboradores durante la época festiva. También llegamos a todo consumidor que quiera disfrutar de una mesa dulce acompañada de los<span className="font-extrabold"> mejores productos</span> durante las fiestas, haciendo de ellas noches más ricas.
              </p>
          </div>
      </div>

      

      <div className='flex flex-col gap-8 items-center mt-10'>
              
              <h3 className='text-xl md:text-3xl lg:text-4xl font-bold flex gap-4 justify-center items-center text-center'>
                <hr className='bg-darkNight w-10 md:w-20 lg:w-32 h-1' />
                EMPRESAS QUE CONFÍAN EN NOSOTROS
                <hr className='bg-darkNight w-10 md:w-20 lg:w-32 h-1' />
              </h3>

              <div className='grid grid-cols-2 md:grid-cols-4 gap-16 md:gap-28 items-center'>
                  <motion.div 
                  variants={logoAnimationVariants}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.1, 
                                transition: {ease: "linear"}
                        }}
                  transition= {{ duration: 0.3, delay: 0.4}}
                  className='w-32 md:w-36 lg:w-40'>
                      <img src="/images/clientes/logo-cordis.png" title='Cliente Confianza Box Moment Cajas Navideñas' alt='Cliente Confianza Box Moment Cajas Navideñas' loading='lazy' width='auto' height='auto' />
                  </motion.div>
                  <motion.div 
                  variants={logoAnimationVariants}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.1, 
                                transition: {ease: "linear"}
                        }}
                  transition= {{ duration: 0.3, delay: 0.5}}
                  className='w-32 md:w-36 lg:w-40'>
                      <img src="/images/clientes/logoMaxi.png" title='Cliente Confianza Box Moment Cajas Navideñas' alt='Cliente Confianza Box Moment Cajas Navideñas' loading='lazy' width='auto' height='auto' />
                  </motion.div>
                  <motion.div 
                  variants={logoAnimationVariants}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.1, 
                                transition: {ease: "linear"}
                        }}
                  transition= {{ duration: 0.3, delay: 0.6}}
                  className='w-32 md:w-36 lg:w-40'>
                      <img src="/images/clientes/gaonaLogo.png" title='Cliente Confianza Box Moment Cajas Navideñas' alt='Cliente Confianza Box Moment Cajas Navideñas' loading='lazy' width='auto' height='auto' />
                  </motion.div>
                  <motion.div 
                  variants={logoAnimationVariants}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.1, 
                                transition: {ease: "linear"}
                        }}
                  transition= {{ duration: 0.3, delay: 0.7}}
                  className='w-32 md:w-36 lg:w-40'>
                      <img src="/images/clientes/logoRIS.png" title='Cliente Confianza Box Moment Cajas Navideñas' alt='Cliente Confianza Box Moment Cajas Navideñas' loading='lazy' width='auto' height='auto' />
                  </motion.div>
              </div>
      </div>

    </section>
  )
}

export default WhoAreWe