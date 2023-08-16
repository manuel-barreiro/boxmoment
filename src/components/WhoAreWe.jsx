import React from 'react'


const WhoAreWe = () => {
  return (
    <section name='quienesSomos' className="w-full h-full bg-[#ebebeb] py-20 md:py-28 px-8 md:px-32 font-primary flex flex-col gap-12">

      <div className="flex flex-col xl:flex-row justify-evenly items-center gap-4">
          <div className="xl:basis-1/2 h-auto xl:h-80 flex flex-col gap-5 items-start p-6">
                <h1 className="text-3xl md:text-5xl font-bold">¿Quiénes somos?</h1>
                <p className="text-justify font-secondary font-medium leading-relaxed">Box Moment lleva 4 años de trayectoria en el mercado, brindando la mayor comodidad y servicio a nuestros clientes en épocas festivas. </p>
                <p className="text-justify font-secondary font-medium leading-relaxed">El respaldo de empresas de primera línea que eligen nuestros productos son el sello de garantía y confianza que nos permite llegar a más consumidores de una forma más rápida y segura sin dejar de brindar una atención personalizada a cada uno de nuestros clientes.</p>
          </div>

          <div className='xl:basis-1/2 h-full rounded-3xl xl:h-80'>
            <video controls class="object-cover object-center w-full h-full" src="/VideoCajas.mp4" alt="video" />
          </div>
      </div>

      <div>
        <p className="text-justify font-secondary font-medium p-6 -mt-4 leading-relaxed">
        Nuestras cajas navideñas son una excelente opción para los regalos de fin de año que las EMPRESAS otorgan a sus colaboradores durante la época festiva. También llegamos a todo consumidor que quiera disfrutar de una mesa dulce acompañada de excelentes productos durante las fiestas, haciendo de ellas noches más ricas.
        </p>
      </div>

      <div className='flex flex-col gap-8 items-center'>
              
              <h2 className='text-xl md:text-3xl lg:text-4xl font-bold flex gap-4 items-center'>
                <hr className='bg-[#c281ff] w-10 md:w-20 lg:w-32 h-1' />
                Confían en nosotros
                <hr className='bg-[#c281ff] w-10 md:w-20 lg:w-32 h-1' />
              </h2>

              <div className='grid grid-cols-2 md:grid-cols-4 gap-20 items-center'>
                  <div className='w-28 md:w-32 lg:w-40 hover:scale-105 ease-in-out duration-300'>
                      <img src="/images/clientes/logo-cordis.png" alt="" />
                  </div>
                  <div className='w-28 md:w-32 lg:w-40 hover:scale-105 ease-in-out duration-300'>
                      <img src="/images/clientes/logoMaxi.png" alt="" />
                  </div>
                  <div className='w-28 md:w-32 lg:w-40 hover:scale-105 ease-in-out duration-300'>
                      <img src="/images/clientes/logoPilares.png" alt="" />
                  </div>
                  <div className='w-28 md:w-32 lg:w-40 hover:scale-105 ease-in-out duration-300'>
                      <img src="/images/clientes/logoRIS.png" alt="" />
                  </div>
              </div>
      </div>

    </section>
  )
}

export default WhoAreWe