import React from 'react'
import './programsDetails.css'
const ProgramsDetails = (props) => {
  return (
    <div>
       <div id="main_programsDetails">
              <img src={props.img} alt="" />
              <h1>{props.name}</h1>
              <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum provident corrupti cumque?</h2>
              <button>Explore</button>
       </div>
      
    </div>
  )
}

export default ProgramsDetails
