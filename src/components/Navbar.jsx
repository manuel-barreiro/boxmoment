import React from 'react'
import { useState } from 'react'

import { RiMenu3Fill, RiCloseFill } from "react-icons/ri";



export default function Navbar() {

  const links =[
        {name:"¿Quiénes Somos?",link:"/"},
        {name:"Productos",link:"/"},
        {name:"Contacto",link:"/"},
      ];

  let [open, setOpen] = useState(false);

  function handleMenu() {
    setOpen((prevState) => !prevState)
  }

  return (
        <nav className='fixed top-0 right-0 w-full h-32 z-[1000] bg-white flex justify-between items-center py-5 px-10 shadow-xl font-primary text-lg md:text-xl font-semibold text-darkNight '>
            
            <div className='hidden md:block basis-5/12'>
                <ul className='flex justify-evenly items-center'>
                    <li className='hover:scale-105 hover:underline underline-offset-8 decoration-pineGreen ease-in-out duration-300'><a href="">¿Quiénes Somos?</a></li>
                    <li className='hover:scale-105 hover:underline underline-offset-8 decoration-pineGreen ease-in-out duration-300'><a href="">Productos</a></li>
                </ul>
            </div>
            

            <div className='w-28 flex justify-center'>
                <img src="/images/bmLogo.png" alt="logo" className='cursor-pointer hover:scale-105 ease-in-out duration-300' />
            </div>
            
            {/* Menu Icon & Close Icon */}
            <div onClick={handleMenu} className='cursor-pointer md:hidden'>
                {
                    open ? <RiCloseFill size={40}/> : <RiMenu3Fill size={40} />
                }
            </div>

            {/* link items */}
            <ul className={`md:hidden pb-8 absolute bg-white z-[-10] left-0 w-full pl-10 transition-all duration-500 ease-in-out ${open ? 'top-32' : 'top-[-690px]'} shadow-lg`}>
                {
                    links.map((link) => (
                    <li className='my-7 font-semibold'>
                        <a href={link.link} onClick={handleMenu} className='hover:text-pinedecoration-pineGreen hover:scale-105 hover:underline underline-offset-8 decoration-pineGreen ease-in-out duration-300 '>{link.name}</a>
                    </li>))
                }
                <li className='w-56 shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] rounded-full bg-[#ffc51a] px-4 py-1 font-black  hover:scale-105 hover:shadow-[6.0px_10.0px_10.0px_rgba(0,0,0,0.38)] ease-in-out duration-300'><a href="https://wa.me/+5491162801006" target='_blank'>Solicitar presupuesto</a></li>
            </ul>

            <div className='hidden md:block basis-5/12'>
                <ul className='flex justify-evenly items-center'>
                    <li className='hover:scale-105 hover:underline underline-offset-8 decoration-pineGreen ease-in-out duration-300'><a href="">Contacto</a></li>
                    <li className='shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] text-center rounded-full bg-[#ffc51a] px-4 py-1 font-black  hover:scale-105 hover:shadow-[6.0px_10.0px_10.0px_rgba(0,0,0,0.38)] ease-in-out duration-300'><a href="https://wa.me/+5491162801006" target='_blank'>Solicitar presupuesto</a></li>
                </ul>
            </div>
        </nav>
  )
}