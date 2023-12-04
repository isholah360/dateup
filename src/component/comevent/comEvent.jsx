import "./comevent.css";

function ComEvent() {
  return (
    <div>
      <div className="com-events">
        <div className="letmeet com-letmeet">
          <p> Be part of our next</p>
          <div> Community Events. </div>
          <div className="event-content">
            Be part of ou next Community Events & meet other people like you.
            <span>Share, discuss & maybe find your Life Partner!</span>
          </div>
          <button>Discover Community Events</button>
        </div>
        <div className="left-pixels">
              <div className="imgone">
                    <img className="img-one" src="asset/come@@.jpg" alt="" />
              </div>
              <div className="imgone">
                    <img className="img-one img-second" src="asset/com@@.jpg" alt="" />
              </div>
              <div className="imgone">
                    <img className="img-one img-third" src="asset/coms.jpg" alt="" />
              </div>
        </div>
      </div>
    </div>
  );
}

export default ComEvent;
