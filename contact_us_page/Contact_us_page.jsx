import React from 'react'
import Topview from './src/components/topview/Topview';
import GetInTouch from './src/components/get-in-touch/GetInTouch';
import CourseFindingSection from './src/components/course-finding-section/CourseFindingSection';
import Testimonial from './src/components/student-testimonials/Testimonials';
const Contact_us_page = () => {
  return (
    <div>
         <Topview/>
         <GetInTouch/>
         <CourseFindingSection/>
         <Testimonial/>
         
    </div>
  )
}

export default Contact_us_page
