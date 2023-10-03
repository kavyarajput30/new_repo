import React from 'react'
import './background_aboutUs.css'
import vector from './../../images_aboutUs/vector.svg'

const Background_aboutUs = () => {
       return (
              <div>
                     <div className="background_aboutUs">
                            <div className="aboutus_img_top">
                                   <div></div>
                                   <div className="aboutus_img">
                                   <img src={vector} alt="" />
                                   </div>
                                   <div></div>
                            </div>

                     </div>
              </div>
       )
}

export default Background_aboutUs
