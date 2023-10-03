import React from 'react'
import './mentors_bio.css'
import google from './../../../images_WTP/google.svg'
import spidy from './../../../images_WTP/spidy.jpeg'
const Mentors_bio = () => {
  return (
    <div className="container_mentor_bio">
       <div className="main_mentor_bio">
              <h1>Vaibhav Sharma</h1>
       </div>
       <div className="back_mentor_bio">
              <h1>Vaibhav Sharma</h1>
              <p>an experienced person who advises and helps somebody with</p>
              <h2>Ex</h2>
              <img src={google} alt="" />
       </div>
      
    </div>
  )
}

export default Mentors_bio
