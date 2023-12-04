import "./make.css";

function Makes({colored, Inspired, motivate, circ_two, circ_tree, highlight}) {
  return (
    <div>
      <div className="themake-card">
        <div className="three-circle">
          <div style={colored} className="circle-one" ></div>
          <div style={circ_two} className="circle-two "> 
            <img className="highlight" src={highlight} alt="" />
          </div>
          <div style={circ_tree} className="circle-one circ-three"></div>
        </div>
        <div className="makes-content-blub">
          <div className="blub-title">{Inspired}</div>
          <div className="blub-body">
            {motivate}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Makes;
