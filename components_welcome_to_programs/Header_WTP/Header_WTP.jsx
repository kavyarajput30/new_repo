import React from 'react'
import './header_WTP.css'
import frontend from './../../images_WTP/fronted.png'
import gradient from './../../images_WTP/gradient.png';
const Header_WTP = () => {
  return (
    <div>
      <div className="main_header_WTP">
      <img src ={gradient} id="image-div" alt="image" className='im'/>
        <img src={frontend} alt="image" id="top-view-image" className='im'/>
        <h1>Web Development Program <br /> <span>Frontend</span>
        </h1>
        <p>Enrol now for the Frontend Web Dev Program from a reputed edtech company – Career Corps!</p>
        <button className="btn_one">
        Enrol Now
        </button>
        <button className="btn_two">
        Enquire now
        </button>
        {/* <img className="image" src={frontend} alt="" /> */}

      </div>

    </div>
  )
}

export default Header_WTP
