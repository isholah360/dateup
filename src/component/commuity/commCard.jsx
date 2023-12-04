import "./comm.css";

function CommCard({comimg, actname, members}) {
  return (
    <div>
      <div className="the-com-card">
        
        <div className="the-fit-pix">
            <div className="top-round"></div>
            <img src={comimg} alt="" />
            <div className="bottom-round"></div>
        </div>
        <div className="activity-name-member">
              <div className="activity-name">{actname}</div>
              <div className="active-member">{members}</div>
        </div>
      </div>
    </div>
  );
}

export default CommCard;
