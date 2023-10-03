import React from 'react'
// import Topview from './src/components/topView/Topview'
import Topview from './src/components/topview/TopView'
import Program from './src/components/programs/Programs';
import HiringPartners from './src/components/hiring-partners/HiringPartners';
import Testimonial from './src/components/student-testimonials/Testimonials';
const Upskill = () => {
  return (
    <div>
       <Topview/>
      <Program></Program>
      <HiringPartners></HiringPartners>
      <Testimonial/>
    </div>
  )
}

export default Upskill
