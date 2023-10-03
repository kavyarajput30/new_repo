import React from 'react'
import './exploreThePrograms.css'
import SeePrograms from './seePrograms/SeePrograms'
import transform from './../../images/transform.png'
import personalGrowth from './../../images/personal-growth.png'
import socialMedialMarketing from './../../images/social-media-marketing.png'
import cssCode from './../../images/css-code.png'


const ExploreThePrograms = () => {
  return (
    <div>
       <div id="exploreThePrograms">
              <div id="heading_exploreThePrograms">
                     <h1>Explore The <span>Programs</span></h1>
              </div>
              <div id="programs_exploreThePrograms">
                     <SeePrograms img={transform} name="Design"/>
                     <SeePrograms img={cssCode} name="Technology"/>
                     <SeePrograms img={socialMedialMarketing} name="Marketing"/>
                     <SeePrograms img={personalGrowth} name="Growth"/>
                     
              </div>
       </div>
      
    </div>
  )
}

export default ExploreThePrograms
