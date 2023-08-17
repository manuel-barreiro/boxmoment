import React from 'react'
import Products from './Products'
import Services from './Services'

const ProductosYServicios = () => {
  return (
    <section className="bg-[url('/images/backgrounds/products.svg')] bg-center bg-cover">
        <Products />
        <Services />
    </section>
  )
}

export default ProductosYServicios