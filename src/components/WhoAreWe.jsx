import React from 'react'


const WhoAreWe = () => {
  return (
    <section name='quienesSomos' className="w-full h-full bg-[#ebebeb] py-20 md:py-28 px-8 md:px-32 font-primary flex flex-col gap-6">

      <div className="flex flex-col xl:flex-row justify-evenly gap-4">
          <div className="xl:basis-1/2 h-auto xl:h-80 flex flex-col gap-5 items-start p-6">
                <h3 className="text-3xl md:text-5xl font-bold text-center">¿Quiénes somos?</h3>
                <p className="text-justify font-secondary font-medium leading-relaxed">Box Moment lleva 4 años de trayectoria en el mercado, brindando la mayor <span className="font-bold">comodidad</span> y <span className="font-bold">servicio</span> a nuestros clientes en épocas festivas. </p>
                <p className="text-justify font-secondary font-medium leading-relaxed">El respaldo de <span className="font-bold">empresas de primera línea</span> que eligen nuestros productos son el sello de <span className="font-bold">garantía</span> y <span className="font-bold">confianza</span> que nos permite llegar a más consumidores de una forma más rápida y segura sin dejar de brindar una <span className="font-bold">atención personalizada</span> a cada uno de nuestros clientes.</p>
          </div>

          <div className='xl:basis-1/2 h-full rounded-3xl xl:h-80 md:mt-6'>
            <video controls poster='/poster.png' loading="lazy" className="object-cover object-center w-full h-full" src="/VideoCajas.mp4" title="Somos Box Moment, hacemos las mejores cajas navideñas" alt="Somos Box Moment" />
          </div>
      </div>

      <div>
        <p className="text-justify font-secondary font-medium p-6 -mt-4 leading-relaxed">
        Nuestras cajas navideñas son una <span className="font-bold">excelente</span> opción para los regalos de fin de año que las empresas otorgan a sus colaboradores durante la época festiva. También llegamos a todo consumidor que quiera disfrutar de una mesa dulce acompañada de los<span className="font-bold"> mejores productos</span> durante las fiestas, haciendo de ellas noches más ricas.
        </p>
      </div>

      <div className='flex flex-col gap-8 items-center'>
              
              <h3 className='text-xl md:text-3xl lg:text-4xl font-bold flex gap-4 justify-center items-center text-center'>
                <hr className='bg-[#c281ff] w-10 md:w-20 lg:w-32 h-1' />
                EMPRESAS QUE CONFÍAN EN NOSOTROS
                <hr className='bg-[#c281ff] w-10 md:w-20 lg:w-32 h-1' />
              </h3>

              <div className='grid grid-cols-2 md:grid-cols-4 gap-16 md:gap-28 items-center'>
                  <div className='w-32 md:w-36 lg:w-40 hover:scale-105 ease-in-out duration-300'>
                      <img src="/images/clientes/logo-cordis.png" title='Cliente Confianza Box Moment Cajas Navideñas' alt='Cliente Confianza Box Moment Cajas Navideñas' loading='lazy' width='auto' height='auto' />
                  </div>
                  <div className='w-32 md:w-36 lg:w-40 hover:scale-105 ease-in-out duration-300'>
                      <img src="/images/clientes/logoMaxi.png" title='Cliente Confianza Box Moment Cajas Navideñas' alt='Cliente Confianza Box Moment Cajas Navideñas' loading='lazy' width='auto' height='auto' />
                  </div>
                  <div className='w-32 md:w-36 lg:w-40 hover:scale-105 ease-in-out duration-300'>
                      <img src="/images/clientes/gaonaLogo.png" title='Cliente Confianza Box Moment Cajas Navideñas' alt='Cliente Confianza Box Moment Cajas Navideñas' loading='lazy' width='auto' height='auto' />
                  </div>
                  <div className='w-32 md:w-36 lg:w-40 hover:scale-105 ease-in-out duration-300'>
                      <img src="/images/clientes/logoRIS.png" title='Cliente Confianza Box Moment Cajas Navideñas' alt='Cliente Confianza Box Moment Cajas Navideñas' loading='lazy' width='auto' height='auto' />
                  </div>
              </div>
      </div>

    </section>
  )
}

export default WhoAreWe