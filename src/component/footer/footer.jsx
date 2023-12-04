import "./footer.css";

export default function Footer() {
  return (
    <div>
      <div className="the-footer-path">
        <div className="date-up-comm">
          <p>DATEUP COMMUNITY</p>
          <div className="date-com-list">Social Wall</div>
          <div className="date-com-list">Only Men Swap</div>
          <div className="date-com-list">Only Women Swap</div>
          <div className="date-com-list">Community Groups</div>
          <div className="date-com-list">Forums</div>
        </div>
        <div className="date-up-pages">
          <p>DATEUP PAGES</p>
          <div className="date-com-list">Home</div>
          <div className="date-com-list">AboutUs</div>
          <div className="date-com-list">Blog</div>
          <div className="date-com-list">Contact</div>
          <div className="date-com-list">Coming Soon</div>
        </div>
        <div className="date-up-social">
          <p>FOLLOW US</p>
          <div className="media-logo">
            <img src="asset/instagram.png" alt="" />
            <div className="smedia">dateup_community</div>
          </div>
          <div className="media-logo">
            <img src="asset/fbcirc.png" alt="" />
            <div className="smedia">dateup</div>
          </div>
          <div className="media-logo">
            <img src="asset/linkedin.png" alt="" />
            <div className="smedia">dateup</div>
          </div>
          <div className="media-logo">
            <img src="asset/twitter.png" alt="" />
            <div className="smedia">dateup</div>
          </div>
          <div className="media-logo">
            <img src="asset/you1.png" alt="" />
            <div className="smedia">dateup_tv</div>
          </div>
      
        </div>
        <div className="date-up-register">
          <p>SUBSCRIBE TO DATEUP</p>
          <div className="subscribeto-dateup"></div>
          <div className="little-content">
          DateUp offers you the opportunity to simply accelerate 
          this process by finding out which is your life partner.
          </div>
          <div className="button">
            <button>Register Now</button>
          </div>
        </div>
      </div>
    </div>
  );
}
