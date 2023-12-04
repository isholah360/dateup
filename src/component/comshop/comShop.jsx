import "./comshop.css";

function ComShop() {
  return (
    <div>
      <div className="com-shop">
        <div className="right-pixels">
          <div className="imgone">
            <img className="img-one" src="asset/shop.jpg" alt="" />
          </div>
        </div>
        <div className="letmeet com-letmeet">
          <p> Visit Now the</p>
          <div>Community Store!</div>
          <div className="event-content">
            To become even more of our Community
            <span>adopt the DateUp Style or one of your group style !</span>
          </div>
          <button>Discover Community Shop</button>
        </div>
      </div>
    </div>
  );
}

export default ComShop;
