import React from 'react'
import './mentors.css'
import back from './../../../images/back.svg'
const Mentors = (props) => {
  return (
    <div>
       <div id="main_mentors">

       
       <div id="mentors">
              <img src={props.img} alt="" />
       </div>
       <h1>{props.name}</h1>
       <h2>Unschool</h2>
       </div>
      
    </div>
  )
}

export default Mentors
