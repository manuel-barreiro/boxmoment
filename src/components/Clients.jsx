import React from 'react'

const Clients = () => {
  return (
    <section className="h-auto py-16 md:py-20 w-full bg-[url('/images/backgrounds/products.svg')] bg-center bg-cover font-primary">

        <div className='flex flex-col gap-16 items-center'>
            <h2 className='text-4xl font-bold'>Confían en nosotros</h2>

            <div className='grid grid-cols-2 md:grid-cols-4 gap-20 items-center'>
                
                <div className='w-40 hover:scale-105 ease-in-out duration-300'>
                    <img src="/images/clientes/logo-cordis.png" alt="" />
                </div>
                <div className='w-40 hover:scale-105 ease-in-out duration-300'>
                    <img src="/images/clientes/logoMaxi.png" alt="" />
                </div>
                <div className='w-40 hover:scale-105 ease-in-out duration-300'>
                    <img src="/images/clientes/logoPilares.png" alt="" />
                </div>
                <div className='w-40 hover:scale-105 ease-in-out duration-300'>
                    <img src="/images/clientes/logoRIS.png" alt="" />
                </div>
                

            </div>
        </div>

    </section>
  )
}

export default Clients