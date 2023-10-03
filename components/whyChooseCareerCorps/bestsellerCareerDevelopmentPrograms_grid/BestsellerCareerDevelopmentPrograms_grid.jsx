import React from 'react'
import './bestsellerCareerDevelopmentPrograms_grid.css'
const BestsellerCareerDevelopmentPrograms_grid = (props) => {
  return (
    <div>
      <div id="bCDP_grid">
        <img src={props.img} alt="" />
        <div id="bCDP_context">

          <h1>{props.name}</h1>
          <h2>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h2>

        </div>
      </div>
    </div>
  )
}

export default BestsellerCareerDevelopmentPrograms_grid
