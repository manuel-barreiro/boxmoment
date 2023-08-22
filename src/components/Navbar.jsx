import React from 'react'
import { useState } from 'react'
import { Link, animateScroll as scroll, } from 'react-scroll'
import { RiMenu3Fill, RiCloseFill } from "react-icons/ri";
import { motion } from 'framer-motion'

export default function Navbar() {

  const links =[
        {name:"Productos",link:"productos", off:-80},
        {name:"¿Quiénes somos?",link:"quienesSomos", off:-70},
        {name:"Contacto",link:"contacto", off:-80},
      ];

  let [open, setOpen] = useState(false);

  function handleMenu() {
    setOpen((prevState) => !prevState)
  }

  return (
        <nav className='fixed top-0 right-0 w-full h-32 z-[1000] bg-white flex justify-between items-center py-5 px-10 shadow-xl font-primary text-lg md:text-xl font-semibold text-darkNight '>
            
            <div className='hidden lg:block basis-5/12'>
                <ul className='flex justify-evenly items-center'>

                    <motion.li 
                        initial={{ y: -10, opacity: 0 }}
                        animate={{ y: 0,  opacity: 1 }}
                        whileHover={{ scale: 1.1, 
                                      transition: {duration: 0.1, delay: 0}
                        }}
                        transition= {{ duration: 0.1 }}
                        className='hover:underline underline-offset-8 text-2xl decoration-pineGreen ease-in-out duration-300 cursor-pointer'>
                        <Link to="productos" offset={-80} smooth={true} duration={500}>Productos</Link>
                    </motion.li>

                    <motion.li
                        initial={{ y: -10, opacity: 0 }}
                        animate={{ y: 0,  opacity: 1 }}
                        whileHover={{ scale: 1.1, 
                                      transition: {duration: 0.1, delay: 0}
                        }}
                        transition= {{ duration: 0.1, delay: 0.1}}
                        className='hover:underline underline-offset-8 text-2xl decoration-pineGreen ease-in-out duration-300 cursor-pointer'>
                        <Link to="quienesSomos" offset={-70} smooth={true} duration={500}>¿Quiénes somos?</Link>
                    </motion.li>
                    
                </ul>
            </div>
            

            <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition= {{ duration: 1 }}
                className='w-28 flex justify-center'>
                <Link to="home" offset={-200} smooth={true} duration={500}>
                    <img src="/images/bmLogo.png" title='Logo Cajas Navideñas' alt='Logo Cajas Navideñas' width='auto' height='auto' className='cursor-pointer hover:scale-105 ease-in-out duration-300' />
                </Link>
            </motion.div>
            
            {/* Menu Icon & Close Icon */}
            <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition= {{ duration: 1 }}
            onClick={handleMenu} className='cursor-pointer lg:hidden'>
                {
                    open ? <RiCloseFill size={40}/> : <RiMenu3Fill size={40} />
                }
            </motion.div>

            {/* link items */}
            <ul className={`lg:hidden pb-8 absolute bg-white z-[-10] left-0 w-full pl-10 transition-all duration-500 ease-in-out ${open ? 'top-32' : 'top-[-690px]'} shadow-lg`}>
                {
                    links.map((link) => (
                    <li key={link.link} className='my-7 font-semibold text-md'>
                        <Link to={link.link} onClick={handleMenu} offset={link.off} smooth={true} duration={500} className='hover:text-pinedecoration-pineGreen hover:scale-105 hover:underline underline-offset-8 decoration-pineGreen ease-in-out duration-300 '>{link.name}</Link>
                    </li>))
                }
                    <li className=' text-md w-64 shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] rounded-full bg-[#ffc51a] px-4 py-1 font-black  hover:scale-105 hover:shadow-[6.0px_10.0px_10.0px_rgba(0,0,0,0.38)] ease-in-out duration-300'>
                        <Link onClick={handleMenu} to="contactForm" offset={-170} smooth={true} duration={500}>Solicitar presupuesto</Link>
                    </li>
            </ul>

            <div className='hidden lg:block basis-5/12'>
                <ul className='flex justify-evenly items-center'>
                    <motion.li
                    initial={{ y: -10, opacity: 0 }}
                    animate={{ y: 0,  opacity: 1 }}
                    whileHover={{ scale: 1.1, 
                        transition: {duration: 0.1, delay: 0}
                    }}
                    transition= {{ duration: 0.1, delay: 0.2}} 
                    className='hover:underline underline-offset-8 decoration-pineGreen ease-in-out duration-300 cursor-pointer text-2xl'>
                        <Link to="contacto" offset={-80} smooth={true} duration={500}>Contacto</Link>
                    </motion.li>
                    <motion.li 
                    initial={{ y: -10, opacity: 0 }}
                    animate={{ y: 0,  opacity: 1 }}
                    whileHover={{ scale: 1.1, 
                        transition: {duration: 0.1, delay: 0}
                    }}
                    transition= {{ duration: 0.1, delay: 0.3}}
                    className='shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] text-center rounded-full bg-[#ffc51a] px-4 py-1 font-black hover:shadow-[6.0px_10.0px_10.0px_rgba(0,0,0,0.38)] ease-in-out duration-300 cursor-pointer text-2xl'>
                        <Link to="contactForm" offset={-170} smooth={true} duration={500}>Solicitar presupuesto</Link>
                    </motion.li>
                </ul>
            </div>
        </nav>
  )
}