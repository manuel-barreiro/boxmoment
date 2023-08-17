import { AiOutlineShoppingCart } from "react-icons/ai";
import { TbTruckDelivery } from "react-icons/tb";
import { FaBoxOpen } from "react-icons/fa6";



const Services = () => {
  return (
    <section className="text-gray-600 body-font font-primary py-24">
        <div>
            <h2 className="text-darkNight text-3xl md:text-5xl leading-normal font-primary self-start font-bold text-center mb-4">¿Vendes Cajas Festivas?</h2>
            <h3 className="text-xl md:text-4xl leading-normal text-pineGreen font-primary self-start font-bold text-center mb-4">¡En Box Moment te las armamos!</h3>
            <h4 className="text-md md:text-xl leading-normal text-darkNight font-secondary self-start font-bold text-center">En 3 simples pasos tenés tus cajas listas:</h4>
        </div>

        <div className="container px-5 pt-10 mx-auto flex flex-wrap">
            
            <div className="flex relative pt-10 pb-20 sm:items-center md:w-2/3 mx-auto">
            <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
                <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
            </div>
            <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-pineGreen text-white relative z-10 title-font font-medium text-sm">1</div>
            <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
                <div className="flex-shrink-0 w-24 h-24 bg-[#f6f6f6] text-pineGreen rounded-full inline-flex items-center justify-center">
                <AiOutlineShoppingCart size={50} />
                </div>
                <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                <h2 className="font-medium title-font text-gray-900 mb-1 text-xl md:text-2xl lg:text-3xl">Recepción de mercadería</h2>
                <p className="leading-relaxed font-secondary">Recibimos los distintos productos que quieras utilizar en tus cajas.</p>
                </div>
            </div>
            </div>
            <div className="flex relative pb-20 sm:items-center md:w-2/3 mx-auto">
            <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
                <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
            </div>
            <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-pineGreen text-white relative z-10 title-font font-medium text-sm">2</div>
            <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
                <div className="flex-shrink-0 w-24 h-24 bg-[#f6f6f6] text-pineGreen rounded-full inline-flex items-center justify-center">
                <FaBoxOpen size={50} />
                </div>
                <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                <h2 className="font-medium title-font text-gray-900 mb-1 text-xl md:text-2xl lg:text-3xl">Armado de box</h2>
                <p className="leading-relaxed font-secondary">Nos encargamos de armar las cajas con tu selección personalizada de productos.</p>
                </div>
            </div>
            </div>
            <div className="flex relative pb-20 sm:items-center md:w-2/3 mx-auto">
            <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
                <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
            </div>
            <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-pineGreen text-white relative z-10 title-font font-medium text-sm">3</div>
            <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
                <div className="flex-shrink-0 w-24 h-24 bg-[#f6f6f6] text-pineGreen rounded-full inline-flex items-center justify-center">
                <TbTruckDelivery size={50} />
                </div>
                <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                <h2 className="font-medium title-font text-gray-900 mb-1 text-xl md:text-2xl lg:text-3xl">Entrega o Pick-up</h2>
                <p className="leading-relaxed font-secondary">Acordamos un método de entrega, o podés retirar vos mismo las cajas.</p>
                </div>
            </div>
            </div>
        </div>
    </section>
  )
}

export default Services