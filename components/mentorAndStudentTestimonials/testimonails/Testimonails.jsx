import React from 'react'
import './testimonails.css'
import comma from './../../../images/comma.svg'
import linkdin from './../../../images/linkdin.svg'
const Testimonails = (props) => {
       return (
              <div>
                     <div id="testimonails">
                            <div id="top_of_testi">
                                   <img src={comma} alt="" />
                                   <img src={linkdin} alt="" />

                            </div>
                            <div id="content_testi">
                                   <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>

                            </div>
                            <div id="img_name">
                                   <img src={props.img} alt="" />
                                   <div id="name_class">
                                          <h1>{props.name}</h1>
                                          <h2>{props.class}</h2>
                                   </div>

                            </div>
                     </div>
              </div>
       )
}

export default Testimonails
