import "./ProgramCard.css";

const ProgramCard = (props) => {
  const h1=props.head_1.head;
  return (
    <div id="main-card-div-abt-us">
      <div id="first-box-1">
        <div className="info-buttons-place-abt-us">Full Time</div>
        <div className="info-buttons-place-abt-us">Onsite</div>
      </div>
      <div id="second-box-1">
        <h1>{h1}</h1>
        <p>Lorem epsum Loorem ipsum </p>
        <button>Apply Now</button>
      </div>
    </div>
  );
};

export default ProgramCard;
