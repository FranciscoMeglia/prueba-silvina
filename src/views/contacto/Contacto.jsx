import React, { useRef } from 'react'
import './Contacto.css'
import { Navbar } from '../../components/navbar/Navbar'
import { Footer } from '../../components/footer/Footer'
import { Banner } from '../../components/banner/Banner'
import ReCAPTCHA from "react-google-recaptcha";

export const Contacto = () => {

  const captcha = useRef(null)

  const onChange = () => {
    if (captcha.current.getValue()) {
      console.log("el usuario no es un robot")
    }
  }

  const submit = (e) => {
    e.preventDefault()
    if (captcha.current.getValue()) {
      console.log("resuelto")
    } else {
      console.log("no resuelto")
    }
  }

  return (
    <div>
      <Navbar></Navbar>
      <Banner title={"CONTACTO"} subtitle={"ESPERAMOS TU MENSAJE"}></Banner>
      <div className="contact-container">
        <div className="pink-line"></div>
        <form action="" onSubmit={submit}>
          <div className="container-1">
            <input type="text" placeholder='Nombre' />
            <input type="text" placeholder='Email' />
          </div>
          <div className="container-2">
            <input type="text" placeholder='Telefono' />
            <select name="" id=""><option value="">HOLA</option></select>
          </div>
          <textarea name="" id="" placeholder='Mensaje...'></textarea>
          <div className="container-3">
            <div className="recaptcha">
              <ReCAPTCHA
                ref={captcha}
                sitekey="6LfwtmQqAAAAAKvLPmq61kD4LMV8YLrNDgY5X3Qe"
                onChange={onChange}
              />
            </div>
            <button>ENVIAR</button>
          </div>
        </form>
        <div className="pink-line"></div>
        <div className="whatsapp">
          <p>Tambien podes contactarnos via Whatsapp</p>
          <button>WHATSAPP</button>
        </div>

      </div>
      <Footer></Footer>
    </div>
  )
}
