import './App.css';
import Footer from './components/footer/Footer';
import Navbar from './components/navbar/Navbar';
import Header_aboutus from './components_ABoutUs/Header_aboutus/Header_aboutus';
import AboutUs from './pages/AboutUs/AboutUs';
import Home from './pages/Home/Home';
import Welcome_to_programs from './pages/Welcome_to_programs/Welcome_to_programs';
import Contact_us_page from './contact_us_page/Contact_us_page' ;
// import Contact_us_page from './second_assignment-main/Contact_us_page';
import Work_with_Us from './third_assignment-main/Work_with_Us';
import Upskill from './upskill/Upskill';


import { BrowserRouter, Routes, Route } from "react-router-dom"

// internship_assingment
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>

          <Route element={<Home />} path="/internship_assingment" />
          <Route element={<Welcome_to_programs />} path="/wtp" />
          <Route element={<AboutUs />} path="/aboutus" />
          <Route element={<Contact_us_page />} path="/contactus" />
          <Route element={<Work_with_Us />} path="/workwithus" />
          <Route element={<Upskill/>} path="/upskill" />
        </Routes>
        <Footer />  </BrowserRouter>
      {/* <Navbar/> */}
      {/* <Work_with_Us/> */}
      {/* <Contact_us_page/> */}
      {/* <Upskill/> */}
      {/* <Footer/> */}
    </>
  );
}

export default App;
