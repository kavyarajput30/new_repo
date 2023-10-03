import "./Programs.css";
import { useState } from "react";
import ProgramCard from "./ProgramCard";
import forward_icon from './../../images/forward_icon.png';
import backward_icon from './../../images/backward_icon.png';



const Programs = (props) => {
  const headingg = props.heading.main_head;
  const card_information = props.heading.card_info;

  const [count, setCurrentcard] = useState(0);

  function click_image_left (){
         setCurrentcard(count+1);
  }
  function click_image_right (){
    setCurrentcard(count-1);
}
  const arr =[ <ProgramCard head_1={card_information[0]} id="one"/> , <ProgramCard head_1={card_information[1]}  id="two"/> ,  <ProgramCard head_1={card_information[2]}  id="three"/>, <ProgramCard head_1={card_information[3]} id="one"/> , <ProgramCard head_1={card_information[4]} id="one"/>]
  
  return (
    <div id="main-programs-div">
      <h1>{headingg}</h1>
      <div id="rectangle-heading-div"></div>
      <div id="career-page-programs-cards-container">
        <img src={backward_icon} alt="" className="arrow-left"  onClick={click_image_left}/>
        
          {arr[count]}
          {arr[count+1]}
          {arr[count+2]}

       
        <img src={forward_icon} alt="" className="arrow-right" onClick={click_image_right}/>
      </div>
    </div>
  );
};

export default Programs;


 {/* >
        
        */}