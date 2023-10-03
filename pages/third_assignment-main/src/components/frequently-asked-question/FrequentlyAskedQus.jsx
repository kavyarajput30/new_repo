import "./FrequentlyAskedQus.css";
import forward_icon from "./../../images/forward_icon.png";
import { useState } from "react";

const FrequentlyAskedQus = () => {
  const question =
    " I don't know anything about Coding, is this batch good for me?";
  const answer =
    " Yes, this course will cover all important concepts from basic till advanced. So, there is no need to know anything about codingbeforehand. there are soo many students of our who is not from IT background still they understand the concepts well and will able to crack the high paying job or company.";

  const [data, setData] = useState(question);

  function clickIconHandler() {
    console.log("clicked ");
    setData(answer);
  }

  return (
    <div id="freq-asked-qus-main-div">
      <h1>FREQUENTLY ASKED QUESTIONS</h1>
      <div id="heading-rectangle"></div>
      <div>
        <div id="question">
          <p>{question}</p>
          <img
            src={forward_icon}
            alt=""
            id="open-answer-image"
            onClick={clickIconHandler}
          />
          {/* <img src={forward_icon} alt=""  id="closed-answer-image"/> */}
        </div>
        <div className="answer">
          <p>{answer}</p>
        </div>
        <hr />
      </div>
      <div>
        <div id="question">
          <p>{question}</p>
          <img
            src={forward_icon}
            alt=""
            id="open-answer-image"
            onClick={clickIconHandler}
          />
          {/* <img src={forward_icon} alt=""  id="closed-answer-image"/> */}
        </div>
        <div className="answer">
          <p>{answer}</p>
        </div>
        <hr />
      </div>
      <div>
        <div id="question">
          <p>{question}</p>
          <img
            src={forward_icon}
            alt=""
            id="open-answer-image"
            onClick={clickIconHandler}
          />
          {/* <img src={forward_icon} alt=""  id="closed-answer-image"/> */}
        </div>
        <div className="answer">
          <p>{answer}</p>
        </div>
        <hr />
      </div>
      <div>
        <div id="question">
          <p>{question}</p>
          <img
            src={forward_icon}
            alt=""
            id="open-answer-image"
            onClick={clickIconHandler}
          />
          {/* <img src={forward_icon} alt=""  id="closed-answer-image"/> */}
        </div>
        <div className="answer">
          <p>{answer}</p>
        </div>
        <hr />
      </div>
    </div>
  );
};
export default FrequentlyAskedQus;
