import { useEffect } from 'react';
import './App.css'
import { Footer } from './components/footer/Footer'
import { Navbar } from './components/navbar/Navbar'
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import textIcon from './assets/textIcon.webp'
import arrowIcon from './assets/arrowIcon.webp'
import instagramIcon from './assets/instagramIcon.webp'
import whatsappIcon from './assets/whastappIcon.webp'

function App() {

  useEffect(() => {
    AOS.init()
  }, [])

  document.body.style.overflowX = "hidden"

  return (
    <div className="app">
      <div className="socials-fixed">
        <a href="https://www.instagram.com/drasilvinaaranda/" target='blank'><img src={instagramIcon} alt="instagram icon" /></a>
        <a href="https://www.instagram.com/drasilvinaaranda/" target='blank'><img src={whatsappIcon} alt="whastapp icon" /></a>
      </div>
      {/* MAIN SECTION */}
      <div className="banner">
        <Navbar></Navbar>
        <div className="banner-main">
          <h1>DRA SILVINA ARANDA</h1>
          <a href="">AGENDÁ TU CITA</a>
        </div>
      </div>
      {/* ABOUT SECTION */}
      <section className="about">
        <div className="about-container">
          <div className="dra-info">
            <div className="title-icon">
              <img src="https://cdn-icons-png.flaticon.com/512/6858/6858504.png" alt="dra silvina aranda picture" />
              <h2>DRA SILVINA ARANDA</h2>
            </div>
            <p>Cirugía plástica estética & reparadora</p>
          </div>
          <div className="about-cards-container">
            <div className="about-card">
              <div className="img">
                <img src={textIcon} alt="text icon" />
              </div>
              <div className="info">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, corrupti necessitatibus magni illum expedita reprehenderit provident nobis. Dolorum, facere sunt! Ab impedit aut sed consequuntur dicta totam dolor explicabo quae.</p>
              </div>
            </div>
            <div className="about-card">
              <div className="img">
                <img src={textIcon} alt="text icon" />
              </div>
              <div className="info">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, corrupti necessitatibus magni illum expedita reprehenderit provident nobis. Dolorum, facere sunt! Ab impedit aut sed consequuntur dicta totam dolor explicabo quae.</p>
              </div>
            </div>
            <div className="about-card">
              <div className="img">
                <img src={textIcon} alt="text icon" />
              </div>
              <div className="info">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, corrupti necessitatibus magni illum expedita reprehenderit provident nobis. Dolorum, facere sunt! Ab impedit aut sed consequuntur dicta totam dolor explicabo quae.</p>
              </div>
            </div>
          </div>
        </div>

      </section>
      {/* WORKS SECTION */}
      <article className="works" id='work'>
        <div className="works-container">
          <h2>PROCEDIMIENTOS</h2>
          <p>MELA , Corporales y Faciales</p>
          <div className="cards-container">
            <Link to={"./Mela"}>
              <div className="works-card" data-aos="fade-up">
                <div className="card-info">
                  <p>MELA</p>
                  <img src={arrowIcon} alt="arrow icon" />
                </div>
              </div>
            </Link>
            <Link to={"./Corporales"}>
              <div className="works-card" data-aos="fade-up">
                <div className="card-info">
                  <p>CORPORALES</p>
                  <img src={arrowIcon} alt="arrow icon" />
                </div>
              </div>
            </Link>
            <Link to={"./Faciales"}>
              <div className="works-card" data-aos="fade-up">
                <div className="card-info">
                  <p>FACIALES</p>
                  <img src={arrowIcon} alt="arrow icon" />
                </div>
              </div>
            </Link>
          </div>
        </div>

      </article>
      {/* WHY SECTION */}
      <section className="why">
        <div className="why-container">
          <h2>¿POR QUÉ ELEGIRNOS?</h2>
          <div className="why-cards-container">
            <div className="why-card" data-aos="zoom-in-up" data-aos-duration="1000">
              <h3 className="number">01</h3>
              <div className="info">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam aliquid ut sed alias non est animi sunt reiciendis ipsa voluptate, exercitationem aspernatur culpa, at sit nobis, fugit quis expedita quia? s saepe. Quis aut at dolor ullam ea! s saepe. Quis aut at dolor ullam</p>
              </div>
            </div>
            <div className="why-card" data-aos="zoom-in-up" data-aos-duration="1000">
              <h3 className="number">02</h3>
              <div className="info">
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel nobis suscipit modi id facilis! Voluptatem molestiae obcaecati, voluptates debitis sit possimus enim at eaque autem architecto. Voluptate provident quas est. s saepe. Quis aut at dolor ullam ea! s saepe. Quis aut at dolor ullam</p>

              </div>

            </div>
            <div className="why-card" data-aos="zoom-in-up" data-aos-duration="1000">
              <h3 className="number">03</h3>
              <div className="info">
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe labore mollitia optio voluptates deserunt dolor iure odit eaque accusamus! Atque expedita voluptas eius saepe. Quis aut at dolor ullam ea! s saepe. Quis aut at dolor ullam ea! s saepe. Quis aut at dolor ullam</p>

              </div>

            </div>

          </div>

        </div>

      </section>
      {/* RESERVATION SECTION */}
      <div className="reservation">
        <div className="reservation-info">
          <h2>AGENDÁ TU CITA</h2>
          <p>¡Encontrá el cambio que buscás con nosotros!</p>
          <a href="">AGENDÁ TU CITA</a>
        </div>

      </div>
      <Footer></Footer>
    </div>
  )
}

export default App
