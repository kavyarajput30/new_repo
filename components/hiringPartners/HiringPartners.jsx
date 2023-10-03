import React from 'react'
import airbnb from './../../images/airbnb.svg'
import google from './../../images/google.svg'
import microsoft from './../../images/microsoft.svg'
import fedex from './../../images/fedex.svg'
import hubspot from './../../images/hubspot.svg'
import walmart from './../../images/walmart.svg'
import './hiringPartners.css'


import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Pagination } from 'swiper/modules';


const HiringPartners = () => {
  return (
    <div>
      <div id="main_hiring_partners">
        <div id="hiring_partners_display">
          <img src={airbnb} alt="" />
          <img src={hubspot} alt="" />
          <img src={google} alt="" />
          <img src={microsoft} alt="" />
          <img src={walmart} alt="" />
          <img src={fedex} alt="" />

          <img src={airbnb} alt="" />
          <img src={hubspot} alt="" />
          <img src={google} alt="" />
          <img src={microsoft} alt="" />
          <img src={walmart} alt="" />
          <img src={fedex} alt="" />
          
        </div>
      </div>
    </div>
  )
}

export default HiringPartners
