import React from 'react'
import './what_is.css'


import founder from './../../images_aboutUs/founder.jpeg'
const What_is = () => {
       return (
              <div>
                     <div className="what_is">
                            <div className="what_is_content">
                                   <h1>What is <span>Carrier Corps</span></h1>
                                   <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
                                  <hr/> <hr/> <hr/> <hr/> <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
                                  <hr/> <hr/> <hr/> <hr/> <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
                                   

                            </div>
                            <div className="meet_the_founder">
                                   <img src={founder} alt="" />
                                   <div className="founder_conent">
                                          <h1>Meet the <span>Founder</span> </h1>
                                          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
                                          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
                                   
                                   </div>
                            </div>
                     </div>

              </div>
       )
}

export default What_is
