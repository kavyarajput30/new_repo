import React from 'react'
import './cariculam.css'
const Cariculam = (props) => {
  return (
    <div>
       <div className="main_cariculam">
              <img src={props.img} alt="" />
              <div className="content_cariculam">
                     <h1>{props.title}</h1>
                     <p>{props.details}</p>
              </div>
       </div>
      
    </div>
  )
}

export default Cariculam
