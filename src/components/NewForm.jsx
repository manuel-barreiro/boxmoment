/*-------------------------------------------------------------------
|  🐼 React FC Form
|
|  🦝 Todo: CREATE AN AWESOME AND MAINTAINABLE FORM COMPONENT 
|
|  🐸 Returns:  JSX
*-------------------------------------------------------------------*/

import { Input } from './Input'
import { FormProvider, useForm } from 'react-hook-form'
import {
  name_validation,
  consulta_validation,
  email_validation,
  empresa_validation,
  cell_validation,
} from '../utils/inputValidations'
import { useState, useRef } from 'react'
import { GrMail } from 'react-icons/gr'
import { BsFillPatchCheckFill, BsFillPatchExclamationFill } from 'react-icons/bs'
import emailjs from '@emailjs/browser';

export const NewForm = () => {
  
  const methods = useForm()
  const [success, setSuccess] = useState(false)
  const [failed, setFailed] = useState(false)

  const form = useRef();

  const onSubmit = methods.handleSubmit(data => {
    console.log(data)
    emailjs.sendForm('service_5c1a51u', 'template_pdgdg8b', form.current, 'Xl00r8D3G-NwN09jC')
        .then((result) => {
            console.log(result.text);
            setSuccess(true)
            methods.reset()
            setTimeout(() => {
                setSuccess(false);
              }, "20000");
        }, (error) => {
            console.log(error.text);
            setFailed(true)
            methods.reset()
            setTimeout(() => {
                setFailed(false);
              }, "20000");
        });
  })

  return (
    <section className='container px-8 md:px-32 mx-auto font-primary h-auto pb-20 w-full'>


        <div className="flex flex-col text-center w-full mb-10">
                    <h3 className="sm:text-5xl text-4xl font-bold text-pineGreen mb-2">Solicitá tu presupuesto</h3>
                    <p className="lg:w-2/3 mx-auto leading-relaxed text-sm uppercase text-gray-500">Un asesor se comunicará a la brevedad para responder su consulta.</p>
        </div>

            <FormProvider {...methods}>
                <form
                    onSubmit={e => e.preventDefault()}
                    ref={form}
                    noValidate
                    autoComplete="off"
                    className="container"
                >
                    <div className="lg:w-1/2 md:w-2/3 mx-auto">
                        <div className='flex flex-wrap -m-2'>
                            <Input {...name_validation} />
                            <Input {...email_validation} />
                            <Input {...empresa_validation} />
                            <Input {...cell_validation} />
                            <Input {...consulta_validation} className="p-2 w-full" />
                        </div>
                        <div className="mt-5">
                                {success && (
                                    <p className="flex items-center justify-center gap-1 mb-5 font-semibold text-sm md:text-lg text-pineGreen">
                                    <BsFillPatchCheckFill size={25} /> Tu consulta fue enviada correctamente
                                    </p>
                                )}
                                {failed && (
                                    <p className="flex items-center justify-center gap-1 mb-5 font-semibold text-md md:text-lg text-xmasRed">
                                    <BsFillPatchExclamationFill size={25} /> Error al enviar el formulario
                                    </p>
                                )}
                                <button
                                    onClick={onSubmit}
                                    className="flex justify-center items-center gap-2 px-4 py-2 rounded-md bg-darkNight text-white border hover:bg-white hover:text-pineGreen hover:border-darkNight duration-300 w-full cursor-pointer"
                                >
                                    <GrMail size={20} />
                                    <p className='mt-1'>Enviar</p> 
                                </button>
                            </div>
                    </div>
                    
                </form>
            </FormProvider>
    </section>
  )
}