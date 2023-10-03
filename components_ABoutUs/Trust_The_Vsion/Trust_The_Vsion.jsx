import React from 'react'
import './trust_The_Vsion.css'
import v1 from './../../images_aboutUs/Vector1.svg'
import v2 from './../../images_aboutUs/Vector2.svg'
import v3 from './../../images_aboutUs/Vector3.svg'

const Trust_The_Vsion = () => {
  return (
    <div>
      <div className="trust_The_Vsion">
        <h1>Trust the <span>Vision</span></h1>
        
        <div className="TTV_palcement">
        <img src={v3} alt="" />
          <div>
          <h1>100%</h1>
          <h2>Placement Gaurantee</h2>

          </div>
        </div>
        <div className="TTV_programs">
        <img src={v1} alt="" />
          <div>
          <h1>50+</h1>
          <h2>Programs</h2>

          </div>
        </div>
        <div className="TTV_partners">
        <img src={v2} alt="" />
          <div>
          <h1>100+</h1>
          <h2>Hiring Partners </h2>
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default Trust_The_Vsion
