import React from 'react'


const QuienesSomos = () => {
  return (
    <section class="text-gray-600 font-primary px-10 md:px-32 py-24 ">
      <div class="mx-auto flex flex-wrap">
        <div class="flex flex-wrap -mx-4 mt-auto mb-auto lg:w-1/2 sm:w-2/3 content-start sm:pr-10">
          <div class="w-full sm:p-4 px-4 mb-6">
            <h1 class="font-extrabold text-3xl md:text-4xl mb-8 text-darkNight">¿QUIÉNES SOMOS?</h1>
            <div class="leading-relaxed text-justify">Box Moment lleva 4 años de trayectoria en el mercado, brindando la mayor comodidad y servicio a nuestros clientes en épocas festivas. El respaldo de empresas de primera línea que eligen nuestros productos son el sello de garantía y confianza que nos permite llegar a más consumidores de una forma más rápida y segura sin dejar de brindar una atención personalizada a cada uno de nuestros clientes.
          </div>
          </div>
          <div class="p-4 sm:w-1/2 lg:w-1/4 w-1/2 flex flex-col justify-center items-center">
            <h2 class="font-medium text-3xl text-darkNight">2.7K</h2>
            <p class="leading-relaxed">Cajas</p>
          </div>
          <div class="p-4 sm:w-1/2 lg:w-1/4 w-1/2 flex flex-col justify-center items-center">
            <h2 class="font-medium text-3xl text-darkNight">32</h2>
            <p class="leading-relaxed">Empleados</p>
          </div>
          <div class="p-4 sm:w-1/2 lg:w-1/4 w-1/2 flex flex-col justify-center items-center">
            <h2 class="font-medium text-3xl text-darkNight">35</h2>
            <p class="leading-relaxed">Downloads</p>
          </div>
          <div class="p-4 sm:w-1/2 lg:w-1/4 w-1/2 flex flex-col justify-center items-center">
            <h2 class="font-medium text-3xl text-darkNight">4</h2>
            <p class="leading-relaxed">Products</p>
          </div>
        </div>
        <div class="lg:w-1/2 sm:w-1/3 w-full rounded-lg overflow-hidden mt-6 sm:mt-0">
          <video controls class="object-cover object-center w-full h-full" src="/VideoCajas.mp4" alt="video" />
        </div>
      </div>
    </section>
  )
}

export default QuienesSomos