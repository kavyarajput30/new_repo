import React from 'react'
import './footer.css'
import social from './../../images/social.svg'
const Footer = () => {
  return (
    <div>
       <div id="main_footer">
              <div id="logo_name">
                     <h1>Carrer <span>Corps</span></h1>
              </div>
              <div id="links_contactUs_SM">
                     <div id="links">
                            <h1>Links</h1>
                            <ul>
                                   <li>About</li>
                                   <li>Courses</li>
                                   <li>Careers</li>
                                   <li>Competitions</li>
                            </ul>
                     </div>
                     <div id="contactUs">
                            <h1>Contact Us</h1>
                            <h2>Phone: <span>123-456-7890</span></h2>
                            <h2>Address: <span>example address, India</span></h2>

                     </div>
                     <div id="SM">
                            <h1>Social</h1>
                            <img src={social} alt="" />

                     </div>

              </div>
              <div id="callback">
                     <h1>Request a call back</h1>
                     <div id="input">
                     
                     </div>
                     <input type="text" placeholder='Enter your Phone' name="" id="" />
             
                     <button>book now</button>
                  </div>
              <div id="copyright">
                     <span>© 2023 Career Corps | All Rights Reserved</span>
              </div>
       </div>
      
    </div>
  )
}

export default Footer
