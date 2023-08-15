import { TbChristmasTree } from "react-icons/tb";
import { Accordion } from 'flowbite-react';


const Products = () => {
  return (
  <section name='productos' className="w-full h-auto bg-[url('/images/backgrounds/productsMobile.svg')] md:bg-[url('/images/backgrounds/products.svg')] bg-center bg-cover flex justify-center items-center py-20 md:py-28 px-10">
    <div className="flex flex-col justify-evenly gap-10 items-center">
      <h1 className="text-darkNight text-3xl md:text-5xl leading-normal font-primary self-start font-bold">Nuestros productos</h1>

      <div className="flex justify-evenly gap-10 flex-wrap">

        <div className="h-auto relative p-6 rounded-3xl shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] bg-white flex flex-col items-center hover:scale-105 ease-in-out duration-300 w-80">

          <div className="bg-xmasRed w-28 p-1 rounded-full text-center absolute top-4 left-0">
            <p className="text-white font-extrabold font-primary mt-1">Box Roja</p>
          </div>

          <img src="/images/productos/cajaRojaNueva.png" className="w-72 mt-10 mb-2" alt="Caja Roja" />

          <h1 className="font-primary font-light underline decoration-1 decoration-wavy underline-offset-1 mb-2">8 productos</h1>

          <ul className="font-secondary font-semibold text-xs">
            <li><p className="flex items-center gap-1"><TbChristmasTree className="text-xmasRed"/> Sidra 720cc - Del Valle</p></li>
            <li><p className="flex items-center gap-1"><TbChristmasTree className="text-xmasRed"/> Pan Dulce c/frutas 400gr - Valenciano</p></li>
            <li><p className="flex items-center gap-1"><TbChristmasTree className="text-xmasRed"/> Budín Marmolado 170gr – Valenciano</p></li>
            <li><p className="flex items-center gap-1"><TbChristmasTree className="text-xmasRed"/> Budín de Vainilla c/chips 170gr –Valenciano</p></li>
            <li><p className="flex items-center gap-1"><TbChristmasTree className="text-xmasRed"/> Turrón de Maní c/miel 80gr – Lheritier</p></li>
            <li><p className="flex items-center gap-1"><TbChristmasTree className="text-xmasRed"/> Postre de Maní 75gr – Lheritier</p></li>
            <li><p className="flex items-center gap-1"><TbChristmasTree className="text-xmasRed"/> Garrapiñada 80gr – Lheritier</p></li>
           <li><p className="flex items-center gap-1"><TbChristmasTree className="text-xmasRed"/> Confites de Chocolate 40gr – Chocolart</p></li>
          </ul>


        </div>

        <div className="h-auto relative p-6 rounded-3xl shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] bg-white flex flex-col items-center hover:scale-105 ease-in-out duration-300 w-80">

          <div className="bg-pineGreen w-28 p-1 rounded-full text-center absolute top-4 left-0">
            <p className="text-white font-extrabold font-primary mt-1">Box Verde</p>
          </div>

          <img src="/images/productos/cajaVerdeNueva.png" className="w-72 mt-10 mb-2 underline underline-offset-8 decoration-wavy decoration-gray-950" alt="Caja Roja" />

          <h1 className="font-primary font-light underline decoration-1 decoration-wavy underline-offset-1 mb-2">9 productos</h1>

          <ul className="font-secondary font-semibold text-xs">
            <li><p className="flex items-center gap-1"><TbChristmasTree className="text-pineGreen"/> Sidra 720cc -<span className="font-extrabold">Del Valle</span></p></li>
            <li><p className="flex items-center gap-1"><TbChristmasTree className="text-pineGreen"/> Pan Dulce c/frutas 500gr –<span className="font-extrabold">Gaona</span></p></li>
            <li><p className="flex items-center gap-1"><TbChristmasTree className="text-pineGreen"/> Budín Coco c/DDDL 180gr –<span className="font-extrabold">Gaona</span></p></li>
            <li><p className="flex items-center gap-1"><TbChristmasTree className="text-pineGreen"/> Budín Vainilla c/Chips 180gr –<span className="font-extrabold">Gaona</span></p></li>
            <li><p className="flex items-center gap-1"><TbChristmasTree className="text-pineGreen"/> Postre de Maní 75gr –<span className="font-extrabold">Lheritier</span></p></li>
            <li><p className="flex items-center gap-1"><TbChristmasTree className="text-pineGreen"/> Garrapiñada 80gr –<span className="font-extrabold">Lheritier</span></p></li>
            <li><p className="flex items-center gap-1"><TbChristmasTree className="text-pineGreen"/> Bocaditos de DDL 80gr –<span className="font-extrabold">Chocolart</span></p></li>
           <li><p className="flex items-center gap-1"><TbChristmasTree className="text-pineGreen"/> Maní c/Chocolate 80gr –<span className="font-extrabold">Chocolart</span></p></li>
           <li><p className="flex items-center gap-1"><TbChristmasTree className="text-pineGreen"/> Confites de Chocolate 80gr –<span className="font-extrabold">Chocolart</span></p></li>
          </ul>


        </div>
        
        <div className="h-auto relative p-6 rounded-3xl shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] bg-white flex flex-col items-center hover:scale-105 ease-in-out duration-300 w-80">

          <div className="bg-[#ffc51a] w-44 p-1 rounded-full text-center absolute top-4 left-0">
            <p className="text-white font-extrabold font-primary mt-1">Box Personalizada</p>
          </div>

          <img src="/images/productos/personalizada.png" className="w-60 mt-10 mb-2" alt="Caja Roja" />

          <h1 className="font-primary font-light underline decoration-1 decoration-wavy underline-offset-2 mb-2">Armala como más te guste</h1>

          <ul className="font-secondary font-semibold text-xs">
            <li><p className="flex items-center gap-1"><TbChristmasTree className="text-[#ffc51a] w-6"/>Elegí los productos de tu preferencia para armar tu box.</p></li>
            <li><p className="flex items-center gap-1"><TbChristmasTree className="text-[#ffc51a] w-6"/>Clickeá sobre el botón debajo para conocer las distintas opciones.</p></li>
          </ul>

          <button className="mt-4 rounded-xl bg-[#ffc51a] px-3 py-1 font-primary text-white hover:shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] ease-in-out duration-300">Ver opciones</button>

            


        </div>

      </div>
    </div>
  </section>
)}

export default Products