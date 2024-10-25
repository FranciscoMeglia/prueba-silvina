import React from 'react'
import './Card.css'
import textIcon from '../../../assets/textIcon.png'

export const Card = ({img , text , name}) => {
  return (
    <div className="card-opiniones">
      <div className="card-opiniones-img">
        <img src={img} alt="client icon" />
      </div>
      <div className="card-opiniones-info">
        <img src={textIcon} alt="text icon" className="icon-absolute" />
        <p>La doctora Silvina es una excelente profesional. Cuenta con un equipo que la acompaña de primera línea. Una doctora atenta, que acompaña y sostiene al paciente en todo momento. A parte, un consultorio increíble que te dan ganas de quedarte a vivir en uno ...</p>
      </div>  
    </div>
  )
}
