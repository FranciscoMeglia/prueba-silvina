import React from 'react'
import './Footer.css'
import logo from '../../assets/Iso-3.png'
import whatsappIcon from '../../assets/whastappIcon.png'
import instagramIcon from '../../assets/instagramIcon.png'

export const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer-container">
            {/* FOOTER CONTAINER 1 */}
            <div className="footer-container-1">
                <div className="links-container">
                  <h3>MENU</h3>
                    <ul>
                        <li><a href="">INICIO</a></li>
                        <li><a href="">PROCEDIMIENTOS</a></li>
                        <li><a href="">OPINIONES</a></li>
                        <li><a href="">CONTACTO</a></li>
                    </ul>
                </div>
            </div>
            {/* FOOTER CONTAINER 2 */}
            <div className="footer-container-2">
                <img src={logo} alt="logo" />

            </div>
            {/* FOOTER CONTAINER 3 */}
            <div className="footer-container-3">
                <h3>SEGUINOS EN LAS REDES</h3>
                <div className="socials">
                    <img src={instagramIcon} alt="instagram logo" />
                    <img src={whatsappIcon} alt="whastapp logo" />
                </div>
                <h3>ENCONTRANOS EN</h3>
                <ul>
                    <li>AV Federico Lacroze 2252 CABA</li>
                    <li>silvinaaranda@gmail.com</li>
                    <li>+54 9 011 565656</li>
                </ul>

            </div>

        </div>
        <p className='copyright'>Copyright © 2024. Todos los derechos reservados</p>

    </footer>
  )
}
