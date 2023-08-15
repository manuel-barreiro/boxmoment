import React from 'react'


const WhoAreWe = () => {
  return (
    <section name='quienesSomos' className="w-full h-full bg-[url('/images/backgrounds/quienesSomos.svg')] bg-center bg-cover py-20 md:py-28 px-8 md:px-32  font-primary">

    <div className="flex flex-col xl:flex-row justify-evenly items-center gap-4">
        <div className="xl:basis-1/2 h-auto xl:h-80 flex flex-col gap-5 items-start bg-darkNight shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px] p-6 rounded-xl">
              <h1 className="text-3xl md:text-5xl text-[#c281ff] font-bold">¿Quiénes somos?</h1>
              <p className="text-justify text-[#c281ff]">Box Moment lleva 4 años de trayectoria en el mercado, brindando la mayor comodidad y servicio a nuestros clientes en épocas festivas. </p>
              <p className="text-justify text-[#c281ff]">El respaldo de empresas de primera línea que eligen nuestros productos son el sello de garantía y confianza que nos permite llegar a más consumidores de una forma más rápida y segura sin dejar de brindar una atención personalizada a cada uno de nuestros clientes.</p>
        </div>

        <div className='xl:basis-1/2 h-full rounded-3xl xl:h-80'>
          <video controls class="object-cover object-center w-full h-full" src="/VideoCajas.mp4" alt="video" />
        </div>
      </div>



    </section>
  )
}

export default WhoAreWe