import React from 'react'
import './Opiniones.css'
import  { Navbar } from '../../components/navbar/Navbar'
import { Footer } from '../../components/footer/Footer'
import { Banner } from '../../components/banner/Banner'
import { Card } from './card/Card'

export const Opiniones = () => {
  return (
    <div className='opiniones'>
      <Navbar></Navbar>
      <Banner title={"OPINIONES"} subtitle={"NUESTROS PACIENTES NOS DEFINEN"}></Banner>
      <div className="cards-container">
        <div className="pink-line"></div>
        <div className="cards-container-inner">
          <Card img={"https://cdn-icons-png.flaticon.com/512/6858/6858504.png"}></Card>
          <Card img={"https://cdn-icons-png.flaticon.com/512/6858/6858504.png"}></Card>
          <Card img={"https://cdn-icons-png.flaticon.com/512/6858/6858504.png"}></Card>
          <Card img={"https://cdn-icons-png.flaticon.com/512/6858/6858504.png"}></Card>
          <Card img={"https://cdn-icons-png.flaticon.com/512/6858/6858504.png"}></Card>
          <Card img={"https://cdn-icons-png.flaticon.com/512/6858/6858504.png"}></Card>
          <Card img={"https://cdn-icons-png.flaticon.com/512/6858/6858504.png"}></Card>
          <Card img={"https://cdn-icons-png.flaticon.com/512/6858/6858504.png"}></Card>
        </div>
        <div className='reseña-container'>
        <a href="https://www.google.com/maps/place/Dra.+Silvina+Aranda/@-34.5685261,-58.4457494,17z/data=!4m8!3m7!1s0x95bcb5e759714709:0x323e094ba81c917e!8m2!3d-34.5685305!4d-58.4431745!9m1!1b1!16s%2Fg%2F11t3v5z0lv?entry=ttu&g_ep=EgoyMDI0MTAxNi4wIKXMDSoASAFQAw%3D%3D" target='blank' className='reseña'>Dejanos tu reseña</a>
        </div>
        

      </div>
      <Footer></Footer>
    </div>
  )
}
