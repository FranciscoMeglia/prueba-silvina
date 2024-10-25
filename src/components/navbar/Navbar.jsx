import React, { useState } from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import navIconWhite from '../../assets/navIconWhite.png'
import logo from '../../assets/Iso-3.png'

export const Navbar = () => {

  const [nav , setNav] = useState("nav")

  const changeNav = () => {
    if (nav === "nav") {
      setNav("navMobile")
      document.body.style.overflow= "hidden"
    } else {
      setNav("nav")
      document.body.style.overflowY= "auto"
    }
  }

  const links = document.querySelectorAll(".link")

  links.forEach((link) => {
    link.addEventListener("click" , () => {
      document.body.style.overflowY= "auto"
      setNav("nav")    
    })
  })


  return (
    <nav className={nav}>
      <div className="nav-container">
        <div className="nav-container-1">
            <Link to={"/"}><img src={logo} alt="logo" /></Link> 
        </div>

        <div className="nav-container-2">
          <ul>
            <li className='link'><Link to={"/"}>INICIO</Link></li>
            <li className='link'><a href="#work">PROCEDIMIENTOS</a></li>
            <li className='link'><Link to={"/Opiniones"}>OPINIONES</Link></li>
            <li className='link'><Link to={"/Contacto"}>CONTACTO</Link></li>
          </ul>
          <img className='navIcon' src={navIconWhite} alt="navIcon" onClick={() => {changeNav()}}/>
        </div>

      </div>    
    </nav>
  )
}
