import React from 'react'
import './aboutUs.css'
import Header_aboutus from '../../components_ABoutUs/Header_aboutus/Header_aboutus'
import Background_aboutUs from '../../components_ABoutUs/Background_aboutUs/Background_aboutUs'
import What_is from '../../components_ABoutUs/What_is/What_is'
import Orange_line from '../../components_ABoutUs/orange_line/Orange_line'
import Trust_The_Vsion from '../../components_ABoutUs/Trust_The_Vsion/Trust_The_Vsion'
import In_The_Media from '../../components_ABoutUs/In_The_Media/In_The_Media'


const AboutUs = () => {
  return (
    <div>
      <Header_aboutus/>
      <Orange_line/>
      <Background_aboutUs/>
      <What_is/>
      <Trust_The_Vsion/>
      <Orange_line/>
      <In_The_Media/>
    </div>
  )
}

export default AboutUs
