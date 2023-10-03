import React from 'react'
import './welcome_to_programs.css'
import Header_WTP from '../../components_welcome_to_programs/Header_WTP/Header_WTP'
import Course_Details from '../../components_welcome_to_programs/Course_Details/Course_Details'
import Details_WTP from '../../components_welcome_to_programs/Details_WTP/Details_WTP'
const Welcome_to_programs = () => {
  return (
    <div>
       <Header_WTP/>
      <Course_Details/>
      <Details_WTP/>
    </div>
  )
}

export default Welcome_to_programs
