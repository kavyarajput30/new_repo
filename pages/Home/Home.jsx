import React from 'react'
import './home.css'

import Topview from '../../components/TopView/Topview.jsx';
import HiringPartners from '../../components/hiringPartners/HiringPartners.jsx';
import ExploreThePrograms from '../../components/exploreThePrograms/ExploreThePrograms.jsx';
import WhyChooseCareerCorps from '../../components/whyChooseCareerCorps/WhyChooseCareerCorps.jsx';
import MAST from '../../components/mentorAndStudentTestimonials/MAST.jsx';
import Footer from '../../components/footer/Footer.jsx';
import Navbar from '../../components/navbar/Navbar.jsx';

const Home = () => {
       return (
              <div>
                     
                     <Topview />
                     <HiringPartners />
                     <ExploreThePrograms />
                     <WhyChooseCareerCorps />
                     <MAST />
                     {/* <Footer /> */}

              </div>
       )
}

export default Home
