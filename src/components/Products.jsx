import { TbChristmasTree } from "react-icons/tb";

const Products = () => {
  return (

    <section name='productos' className="w-full h-auto flex justify-center items-center py-20 md:py-28 px-10">
      
      <div className="flex flex-col justify-evenly gap-10 items-center">
        <h1 className="text-darkNight text-3xl md:text-5xl leading-normal font-primary font-bold">Nuestras Cajas Navideñas</h1>

        <div className="flex justify-evenly gap-10 flex-wrap">

          <div className="h-auto relative p-6 rounded-3xl shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] bg-gradient-to-r from-gray-100 to-gray-300 flex flex-col items-center hover:scale-105 ease-in-out duration-300 w-80">

            <div className="bg-xmasRed w-28 p-1 rounded-full text-center absolute top-4 left-0">
              <p className="text-white font-extrabold font-primary mt-1">Box Roja</p>
            </div>

            <img src="/images/productos/cajaRojaNueva.png" className="w-80 mt-10 mb-2" title='Caja Navideña Roja' alt='Caja Navideña Roja' width='auto' height='auto' loading="lazy"  />

            <h4 className="font-primary font-light underline decoration-1 decoration-wavy underline-offset-1 mb-2">10 productos</h4>

            <ul className="font-secondary font-semibold text-xs">
              <li><p className="flex items-center gap-1"><TbChristmasTree className="text-xmasRed"/> Sidra 720cc -<span className="font-extrabold">Del Valle</span></p></li>
              <li><p className="flex items-center gap-1"><TbChristmasTree className="text-xmasRed"/> Pan Dulce c/frutas 500gr –<span className="font-extrabold">Gaona</span></p></li>
              <li><p className="flex items-center gap-1"><TbChristmasTree className="text-xmasRed"/> Budín Coco c/DDDL 180gr –<span className="font-extrabold">Gaona</span></p></li>
              <li><p className="flex items-center gap-1"><TbChristmasTree className="text-xmasRed"/> Budín Vainilla c/Chips 180gr –<span className="font-extrabold">Gaona</span></p></li>
              <li><p className="flex items-center gap-1"><TbChristmasTree className="text-xmasRed"/> Turrón de Maní c/miel 120gr –<span className="font-extrabold">Lheritier</span></p></li>
              <li><p className="flex items-center gap-1"><TbChristmasTree className="text-xmasRed"/> Postre de Maní 75gr –<span className="font-extrabold">Lheritier</span></p></li>
              <li><p className="flex items-center gap-1"><TbChristmasTree className="text-xmasRed"/> Garrapiñada 80gr –<span className="font-extrabold">Lheritier</span></p></li>
              <li><p className="flex items-center gap-1"><TbChristmasTree className="text-xmasRed"/> Bocaditos de DDL 80gr –<span className="font-extrabold">Chocolart</span></p></li>
            <li><p className="flex items-center gap-1"><TbChristmasTree className="text-xmasRed"/> Maní c/Chocolate 80gr –<span className="font-extrabold">Chocolart</span></p></li>
            <li><p className="flex items-center gap-1"><TbChristmasTree className="text-xmasRed"/> Confites de Chocolate 80gr –<span className="font-extrabold">Chocolart</span></p></li>
              
            </ul>


          </div>

          <div className="h-auto relative p-6 rounded-3xl shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] bg-gradient-to-r from-gray-100 to-gray-300 flex flex-col items-center hover:scale-105 ease-in-out duration-300 w-80">

            <div className="bg-pineGreen w-28 p-1 rounded-full text-center absolute top-4 left-0">
              <p className="text-white font-extrabold font-primary mt-1">Box Verde</p>
            </div>

            <img src="/images/productos/cajaVerdeNueva.png" className="w-80 mt-10 mb-2 underline underline-offset-8 decoration-wavy decoration-gray-950" title='Caja Navideña Verde' alt='Caja Navideña Verde' width='auto' height='auto' loading="lazy" />

            <h4 className="font-primary font-light underline decoration-1 decoration-wavy underline-offset-1 mb-2">8 productos</h4>

            <ul className="font-secondary font-semibold text-xs">
              <li><p className="flex items-center gap-1"><TbChristmasTree className="text-pineGreen"/> Sidra 720cc -<span className="font-extrabold">Del Valle</span></p></li>
              <li><p className="flex items-center gap-1"><TbChristmasTree className="text-pineGreen"/> Pan Dulce c/frutas 400gr –<span className="font-extrabold">Valenciano</span></p></li>
              <li><p className="flex items-center gap-1"><TbChristmasTree className="text-pineGreen"/> Budín Marmolado 170gr –<span className="font-extrabold">Valenciano</span></p></li>
              <li><p className="flex items-center gap-1"><TbChristmasTree className="text-pineGreen"/> Budín Vainilla c/Chips 170gr –<span className="font-extrabold">Valenciano</span></p></li>
              <li><p className="flex items-center gap-1"><TbChristmasTree className="text-pineGreen"/> Turrón de Maní c/miel 80gr –<span className="font-extrabold">Lheritier</span></p></li>
              <li><p className="flex items-center gap-1"><TbChristmasTree className="text-pineGreen"/> Postre de Maní 75gr –<span className="font-extrabold">Lheritier</span></p></li>
              <li><p className="flex items-center gap-1"><TbChristmasTree className="text-pineGreen"/> Garrapiñada 80gr –<span className="font-extrabold">Lheritier</span></p></li>
              <li><p className="flex items-center gap-1"><TbChristmasTree className="text-pineGreen"/> Confites de Chocolate 40gr –<span className="font-extrabold">Chocolart</span></p></li>
            </ul>


          </div>
          
          <div className="h-auto relative p-6 rounded-3xl shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] bg-gradient-to-r from-gray-100 to-gray-300 flex flex-col items-center hover:scale-105 ease-in-out duration-300 w-80">

            <div className="bg-[#ffc51a] w-44 p-1 rounded-full text-center absolute top-4 left-0">
              <p className="text-white font-extrabold font-primary mt-1">Box Personalizada</p>
            </div>

            <img src="/images/productos/personalizada.png" className="w-60 mt-10 mb-2" title='Caja Navideña Personalizada' alt='Caja Navideña Personalizada' width='auto' height='auto' loading="lazy" />

            <h4 className="font-primary font-light underline decoration-1 decoration-wavy underline-offset-2 mb-2">¡Armala como más te guste!</h4>

            <ul className="font-secondary font-semibold text-xs flex flex-col items-start gap-4">
              <li><p className="flex items-center gap-2"><TbChristmasTree className="text-[#ffc51a] w-6"/>Elegí los productos de tu preferencia para armar tu box.</p></li>
              <li><p className="flex items-center gap-2"><TbChristmasTree className="text-[#ffc51a] w-6"/>Podés combinar cualquiera de los productos de las box roja y verde.</p></li>
              <li><p className="flex items-center gap-2"><TbChristmasTree className="text-[#ffc51a] w-6"/>¡Contactate con nosotros para que te ayudemos a armar tu box ideal!</p></li>
            </ul>

            {/* <button className="mt-4 rounded-xl bg-[#ffc51a] px-3 py-1 font-primary text-white hover:shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] ease-in-out duration-300">Ver opciones</button> */}

          </div>
        </div>
      </div>
    </section>
)}

export default Products