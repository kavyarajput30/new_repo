import React from 'react'
import './navbar.css'
import { NavLink } from 'react-router-dom'
import { useState } from 'react'
const Navbar = () => {
       const [click, setClick] = useState(false);
       const [click_two, setClick_two] = useState(false);
       function handleClick(){
              setClick(!click);
              setClick_two(!click_two);
              console.log("click")
       }
  return (
    <div>
       <div id="main">
              <div id="left">
                     <h1>Career <span>Corps</span></h1>
              </div>
              <div id="center_nav" className={click ? "#center_nav active": "#center_nav"}>
                     <NavLink to='/upskill'>Career Program</NavLink>
                     <NavLink to='/aboutus'>About Us</NavLink>
                     <NavLink to='/workwithus'>Why Us</NavLink>
                     <NavLink to='/contactus'>Contact</NavLink>
              </div>
              <div id="right" className={click ? "#right active_btn": "#right"}>
                     <button id='signup'>Sign Up</button>
                     <button id='registernow'>Register Now</button>
              </div>
              <p class="toggle" onClick={handleClick}><span className="bars"></span></p>
              </div>
    </div>
  )
}

export default Navbar