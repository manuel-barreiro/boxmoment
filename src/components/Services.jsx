import { AiOutlineShoppingCart } from "react-icons/ai";
import { TbTruckDelivery } from "react-icons/tb";
import { FaBoxOpen } from "react-icons/fa6";
import { motion } from "framer-motion";

const Services = () => {
  
  const stepAnimationVariants = {
    initial: { y: 15, opacity: 0 },
    animate:{ y: 0, opacity: 1 },      
  }

  const h2AnimationVariants = {
    initial: { x: -50, opacity: 0 },
    animate:{ x: 0, opacity: 1 },      
  }

  const h4AnimationVariants = {
    initial: { x: 50, opacity: 0 },
    animate:{ x: 0, opacity: 1 },      
  }


  return (
    <section className="text-gray-600 body-font font-primary pt-20 pb-36">

        <div className="flex flex-col max-w-3xl  justify-center items-center mx-auto">
            <motion.h2
                variants={h2AnimationVariants}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                transition= {{ duration: 0.5, delay: 0.4 }} 
                className="text-pineGreen text-3xl md:text-5xl leading-normal font-primary self-start font-bold text-center mb-4">
                ¡En <span className="text-darkNight">BOX MOMENT</span> nos encargamos de armar tus cajas!
            </motion.h2>

            <motion.h3
                variants={h4AnimationVariants}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                transition= {{ duration: 0.5, delay: 0.5 }} 
                className="text-md  md:text-xl leading-normal text-darkNight font-secondary font-bold text-center">
                    En 3 simples pasos tenés tus cajas listas:
            </motion.h3>
        </div>

        <div className="container px-5 pt-10 mx-auto flex flex-wrap">
            
            <div className="flex relative pt-10 pb-20 sm:items-center md:w-2/3 mx-auto">

                <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
                    <div className="h-full w-1 bg-pineGreen/30 pointer-events-none"></div>
                </div>

                <motion.div
                variants={stepAnimationVariants}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                transition= {{ duration: 0.3, delay: 0.7 }}
                className="flex sm:items-center">

                    <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-pineGreen text-white relative z-10 font-medium text-sm">1</div>

                    <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
                        <div className="flex-shrink-0 w-24 h-24 bg-pineGreen/10  text-pineGreen rounded-full inline-flex items-center justify-center">
                            <AiOutlineShoppingCart size={50} />
                        </div>
                        <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                            <h5 className="font-extrabold text-gray-900  mb-1 text-xl md:text-2xl lg:text-3xl">Recepción de mercadería</h5>
                            <p className="leading-relaxed font-secondary font-bold">Recibimos los distintos productos que quieras utilizar en tus cajas.</p>
                        </div>
                    </div>

                </motion.div>

            </div>

            <div className="flex relative pt-10 pb-20 sm:items-center md:w-2/3 mx-auto">

                <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
                    <div className="h-full w-1 bg-pineGreen/30 pointer-events-none"></div>
                </div>

                <motion.div
                variants={stepAnimationVariants}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                transition= {{ duration: 0.3, delay: 0.7 }}
                className="flex sm:items-center">

                    <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-pineGreen text-white relative z-10 font-medium text-sm">2</div>

                    <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
                        <div className="flex-shrink-0 w-24 h-24 bg-pineGreen/10  text-pineGreen rounded-full inline-flex items-center justify-center">
                            <FaBoxOpen size={50} />
                        </div>
                        <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                            <h5 className="font-extrabold text-gray-900  mb-1 text-xl md:text-2xl lg:text-3xl">Armado de box</h5>
                            <p className="leading-relaxed font-secondary font-bold">Nos encargamos de armar las cajas con tu selección personalizada de productos.</p>
                        </div>
                    </div>

                </motion.div>

            </div>


           <div className="flex relative pt-10 pb-20 sm:items-center md:w-2/3 mx-auto">

                <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
                    <div className="h-full w-1 bg-pineGreen/30 pointer-events-none"></div>
                </div>

                <motion.div
                variants={stepAnimationVariants}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                transition= {{ duration: 0.3, delay: 0.7 }}
                className="flex sm:items-center">

                    <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-pineGreen text-white relative z-10 font-medium text-sm">3</div>

                    <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
                        <div className="flex-shrink-0 w-24 h-24 bg-pineGreen/10  text-pineGreen rounded-full inline-flex items-center justify-center">
                            <TbTruckDelivery size={50} />
                        </div>
                        <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                            <h5 className="font-extrabold text-gray-900  mb-1 text-xl md:text-2xl lg:text-3xl">Entrega o Pick-up</h5>
                            <p className="leading-relaxed font-secondary font-bold">Acordamos un método de entrega, o podés retirar vos mismo las cajas.</p>
                        </div>
                    </div>

                </motion.div>

            </div>


        </div>

    </section>
  )
}

export default Services