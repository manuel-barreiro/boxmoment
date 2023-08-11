import React from 'react'


const WhoAreWe = () => {
  return (
    <section className='w-full h-full container px-8 md:px-32 mx-auto mb-10 flex flex-col md:flex-row justify-evenly items-center gap-4'>
      <div className="md:basis-1/2 flex flex-col gap-5 items-start bg-darkNight shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px] p-6 rounded-xl">
            <h1 className="text-3xl md:text-5xl text-[#85e396] font-bold">¿Quiénes somos?</h1>
            <p className="text-justify text-[#85e396]">Box Moment lleva 4 años de trayectoria en el mercado, brindando la mayor comodidad y servicio a nuestros clientes en épocas festivas. </p>
            <p className="text-justify text-[#85e396]">El respaldo de empresas de primera línea que eligen nuestros productos son el sello de garantía y confianza que nos permite llegar a más consumidores de una forma más rápida y segura sin dejar de brindar una atención personalizada a cada uno de nuestros clientes.</p>
      </div>

      <div className='md:basis-1/2 h-full rounded-3xl'>
        <video controls class="object-cover object-center w-full h-full" src="/VideoCajas.mp4" alt="video" />
      </div>


    </section>
  )
}

export default WhoAreWe