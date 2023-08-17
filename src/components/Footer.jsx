import React from 'react'

const Footer = () => {
  return (
    <footer class="text-white body-font">
        <div class="w-full px-10 py-8 mx-auto flex justify-center bg-darkNight items-center sm:flex-row flex-col">
            <img src="images/logoHorizontal.png" loading='lazy' className='w-52' title='Logo Cajas Navideñas' alt='Logo Cajas Navideñas' width='auto' height='auto' />
            <p class="text-sm text-white sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4 text-center"> ® Box Moment - Todos los Derechos Reservados </p>
        </div>
    </footer>
  )
}

export default Footer