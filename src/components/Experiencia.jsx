import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger'
import { BsBoxFill } from "react-icons/bs";
import { RiRecycleFill } from "react-icons/ri";
import { MdVerified } from 'react-icons/md';
import { useState } from 'react';

const Experiencia = () => {

  //Counter
  const [counterOn, setCounterOn] = useState(false);


  return (
    <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
        <section className="h-auto py-20 md:py-28 w-full bg-[url('/images/backgrounds/pruebaExp.svg')] bg-center bg-cover font-primary">

            <div className="w-full h-full container px-8 xl:px-32 mx-auto">

                <div className="w-full h-full flex flex-col xl:flex-row justify-center items-center gap-14 ">
                
                    <div className="flex flex-col w-full xl:w-[50%]">

                        <div className="p-6 relative h-36 md:h-32 rounded shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px] w-[60%] self-start -mb-5 bg-gradient-to-tr from-slate-50 to-gray-100 hover:scale-105 ease-in-out duration-300">
                            
                            <p className='font-bold text-4xl md:text-5xl'>
                                {counterOn &&
                                    <CountUp start={0} prefix='+' end={45400} separator='.' duration={4} delay={0}/>
                                }
                            </p>
                            <p className='text-slate-500 border-l-4 border-primaryOrange pl-2 ml-4 mt-2 text-sm md:text-lg flex items-center justify-start gap-3'><BsBoxFill size={30} className='text-[#c281ff]' /> <span>Cajas producidas</span></p>
                        </div>


                        <div className="p-6 relative h-36 md:h-32 rounded shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px] w-[70%] bg-gradient-to-tr from-slate-50 to-gray-100 hover:scale-105 ease-in-out duration-300 self-end z-30">
                            <p className='font-bold text-4xl md:text-5xl'>
                                {counterOn &&
                                    <CountUp start={0} prefix='+' end={15000} separator='.' duration={4} delay={0}/>
                                }
                            </p>
                            <p className='text-slate-500 border-l-4 border-primaryOrange pl-2 ml-4 mt-2 text-sm md:text-lg flex items-center justify-start gap-3'><RiRecycleFill size={30} className='text-[#c281ff]' /> <span>Kg cartón reciclado</span></p>                        
                        </div>

                        <div className="p-6 relative h-36 md:h-32 rounded shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px] w-[60%] -mt-5 bg-gradient-to-tr from-slate-50 to-gray-100 hover:scale-105 ease-in-out duration-300 self-start">
                            <p className='font-bold text-4xl md:text-5xl'>
                                {counterOn &&
                                    <CountUp start={0} prefix='+' end={250} duration={4} delay={0}/>
                                }
                            </p>
                            <p className='text-slate-500 border-l-4 border-primaryOrange pl-2 ml-4 mt-2 text-sm md:text-lg flex items-center justify-start gap-3'><MdVerified size={30} className='text-[#c281ff]' /> <span>Clientes</span></p>                        
                        </div>

                    </div>

                    <div className="lg:w-[50%] flex flex-col gap-5 items-start bg-darkNight shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px] p-6 rounded-xl hover:scale-105 duration-300 ease-in-out">
                        <h4 className="text-3xl md:text-5xl text-[#85e396] font-bold">Nos apasiona lo que hacemos.</h4>
                        <p className="text-justify font-secondary font-medium text-[#85e396]">Es por eso que nos tomamos muy seriamente nuestro trabajo, buscando siempre alcanzar la satisfacción máxima de los clientes que confían en nosotros.</p>
                        <button className='px-4 py-2 rounded-md text-white border hover:bg-white hover:text-pineGreen duration-300 '><a href="https://wa.me/+5491162801006" target='_blank'>Contactanos</a></button>
                    </div>

                </div>

            </div>
        </section>
    </ScrollTrigger>
  )
}

export default Experiencia