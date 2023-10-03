import React from 'react'
import './whyChooseCareerCorps.css'
import ProgramsDetails from './Programs_details/ProgramsDetails'
import rectangle from './../../images/Rectangle.png'
import BestsellerCareerDevelopmentPrograms_grid from './bestsellerCareerDevelopmentPrograms_grid/BestsellerCareerDevelopmentPrograms_grid'

import rec1 from './../../images/Rectangle3.png'
import rec2 from './../../images/Rectangle2.png'
import rec3 from './../../images/Rectangle1.png'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import './styles.css';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';



const WhyChooseCareerCorps = () => {
       return (
              <div>
                     <div id="main_whyChooseCareerCorps">
                            <div id="bestsellerCareerDevelopmentPrograms">
                                   <h1><span>Bestseller</span> Career Development Programs</h1>


                                   {/* <Swiper
                                          slidesPerView={3}
                                          spaceBetween={30}
                                          pagination={{
                                                 clickable: true,
                                          }}
                                          modules={[Pagination]}
                                          className="mySwiper"
                                   >
                                           <SwiperSlide><ProgramsDetails img={rectangle} name="Full Stack" /></SwiperSlide>
                                           <SwiperSlide><ProgramsDetails img={rectangle} name="Full Stack" /></SwiperSlide>
                                            <SwiperSlide><ProgramsDetails img={rectangle} name="Full Stack" /></SwiperSlide>
                                          <SwiperSlide><ProgramsDetails img={rectangle} name="Full Stack" /></SwiperSlide>
                                   </Swiper> */}
<div id="bestsellerCareerDevelopmentPrograms_Programs">
                                   <Swiper
                                          slidesPerView={3}
                                          spaceBetween={0}
                                          pagination={{
                                                 type: 'none',
                                          }}
                                          navigation={true}
                                          modules={[Pagination, Navigation]}
                                          className="mySwiper"

                                   >
                                          <SwiperSlide className="PD">  <ProgramsDetails img={rectangle} name="Full Stack" /></SwiperSlide>
                                          <SwiperSlide className="PD">  <ProgramsDetails img={rectangle} name="Blockchain" /></SwiperSlide>
                                          <SwiperSlide className="PD">  <ProgramsDetails img={rectangle} name="Human Resources" /></SwiperSlide>
                                          <SwiperSlide className="PD">  <ProgramsDetails img={rectangle} name="Full Stack" /></SwiperSlide>
                                          <SwiperSlide className="PD">  <ProgramsDetails img={rectangle} name="Blockchain" /></SwiperSlide>
                                          <SwiperSlide className="PD">  <ProgramsDetails img={rectangle} name="Human Resources" /></SwiperSlide>

                                   </Swiper>

                                   </div>

                                   {/* <div id="bestsellerCareerDevelopmentPrograms_Programs">
                                          <ProgramsDetails img={rectangle} name="Full Stack" />
                                          <ProgramsDetails img={rectangle} name="Blockchain" />
                                          <ProgramsDetails img={rectangle} name="Human Resources" />
                                   </div> */}
                                   <div id="bestsellerCareerDevelopmentPrograms_grid">
                                          <h1>Why choose <br /> <span>Career Corps?</span> </h1>
                                          <BestsellerCareerDevelopmentPrograms_grid img={rec1} name="Placement Guarentee" />
                                          <BestsellerCareerDevelopmentPrograms_grid img={rec2} name="Way of learning" />
                                          <BestsellerCareerDevelopmentPrograms_grid img={rec3} name="Alumni support" />
                                   </div>
                            </div>
                     </div>

              </div>
       )
}

export default WhyChooseCareerCorps
