import React from 'react'
import './topview.css'
import learner from './../../images/learner.svg'
import star from './../../images/star.svg'
import play from './../../images/play.svg'

import vector from './../../images/Vector.svg'
import vector1 from './../../images/Vector1.svg'
import vector2 from './../../images/Vector2.svg'
import vector3 from './../../images/Vector3.svg'

const Topview = () => {
  return (
    <div>
      <div id="top_main">
        <div id="center">

        
        <div id="learners">
          <img src={learner} alt="" />
          <div id="learner_text">
            <h1>2k+</h1>
            <span>Learners</span>
          </div>
        </div>
        <img src={vector1} alt="" id="vector1" />

        <div id="placements">
          <img src={star} alt="" />
          <div id="placements_text">
            <h1>100%</h1>
            <span>Placement Guarantee</span>

          </div>

        </div>
        <img src={vector2} alt="" id="vector2" />



        <div id="programs_KS">
          <img src={play} alt="" />
          <div id="programs_text">
            <h1>30+</h1>
            <span>Programs</span>
          </div>

        </div>
        <img src={vector3} alt="" id="vector3" />




        <div id="topview_content">
          <h1>Kick Start your <span>Carrer</span></h1>
          
          <h2>What's holding you back? Kick your career into high gear!<br></br>
            The corps are here to thrive your career!</h2>
          <div id="topview_btn">
            <button id='topview_started'>Get Started</button>
            <button id='topview_explore'>Explore  <img src={vector} alt="" /></button>
          </div>
        </div>

        <div id="hiring_partners">
          <h1>100+Hiring Partners</h1>
        </div>


      </div>

    </div>
    </div>
  )
}

export default Topview
