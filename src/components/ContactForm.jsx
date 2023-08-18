import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast';

const ContactForm = () => {
    

    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
      emailjs.sendForm('service_5c1a51u', 'template_pdgdg8b', form.current, 'Xl00r8D3G-NwN09jC')
        .then((result) => {
            console.log(result.text);
            toast.success('Consulta Enviada', {
                style: {
                  padding: '16px',
                },
                iconTheme: {
                  primary: '#044e43',
                },
              });
            form.current.reset()
        }, (error) => {
            console.log(error.text);
            toast.error(`${error.text}`, {
                style: {
                  padding: '16px',
                },
                iconTheme: {
                  primary: '#F42F2F',
                },
              });
              form.current.reset()
        });
    };

    return (
        
      <form ref={form} onSubmit={sendEmail} className="h-auto pb-20 w-full relative font-primary">
          <div className="w-full h-full container px-8 md:px-32 mx-auto">
              <div className="flex flex-col text-center w-full mb-12">
                  <h3 className="sm:text-3xl text-2xl font-bold text-pineGreen mb-4">Solicitá tu presupuesto</h3>
                  <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-500">Un asesor se comunicará a la brevedad para responder su consulta.</p>
              </div>
              <div className="lg:w-1/2 md:w-2/3 mx-auto">
                  <div className="flex flex-wrap -m-2">
                      <div className="p-2 w-1/2">
                          <div className="relative">
                              <label htmlFor="name" className="leading-7 text-sm text-gray-600">Nombre</label>
                              <input required type="text" id="name" name="from_name" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-pineGreen text-pineGreen focus:bg-white focus:ring-2 focus:ring-pineGreen/50 text-pineGreen/50 text-base outline-none py-1 px-3 leading-8 transition-colors duration-200 ease-in-out h-8"/>
                          </div>
                      </div>
                      <div className="p-2 w-1/2">
                          <div className="relative">
                              <label htmlFor="email" className="leading-7 text-sm text-gray-600">Correo</label>
                              <input required type="email" id="email" name="from_email" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-pineGreen text-pineGreen focus:bg-white focus:ring-2 focus:ring-pineGreen/50 text-pineGreen/50 text-base outline-none py-1 px-3 leading-8 transition-colors duration-200 ease-in-out h-8"/>
                          </div>
                      </div>
                      <div className="p-2 w-1/2">
                          <div className="relative">
                              <label htmlFor="empresa" className="leading-7 text-sm text-gray-600">Empresa</label>
                              <input required type="text" id="empresa" name="from_empresa" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-pineGreen text-pineGreen focus:bg-white focus:ring-2 focus:ring-pineGreen/50 text-pineGreen/50 text-base outline-none py-1 px-3 leading-8 transition-colors duration-200 ease-in-out h-8"/>
                          </div>
                      </div>
                      <div className="p-2 w-1/2">
                          <div className="relative">
                              <label htmlFor="telefono" className="leading-7 text-sm text-gray-600">Teléfono</label>
                              <input required type="text" id="telefono" name="from_cell" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-pineGreen text-pineGreen focus:bg-white focus:ring-2 focus:ring-pineGreen/50 text-pineGreen/50 text-base outline-none py-1 px-3 leading-8 transition-colors duration-200 ease-in-out h-8"/>
                          </div>
                      </div>
                      <div className="p-2 w-full">
                          <div className="relative">
                              <label htmlFor="message" className="leading-7 text-sm text-gray-600">Consulta</label>
                              <textarea required id="message" name="message" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-pineGreen text-pineGreen focus:bg-white focus:ring-2 focus:ring-pineGreen/50 text-pineGreen/50 h-14 text-base outline-none py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                          </div>
                      </div>
                      <div className="p-2 w-full">
                          <input value="Enviar" type='submit' className="px-4 py-2 rounded-md bg-darkNight text-white border hover:bg-white hover:text-pineGreen duration-300 w-full cursor-pointer" />
                      </div>
                  </div>
              </div>
          </div>
      </form>
    )
  }
  
  export default ContactForm