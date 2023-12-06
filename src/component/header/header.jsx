import Navigate from "../navigate/navigate";
import "./header.css";
import Slider from "react-slick";
import "./header-slick.css";
import "./header-theme.css";
import gsap from "gsap";
import { Power3 } from "gsap";
import { useEffect, useRef } from "react";
import Search from "../search/search";
function Header() {
  const title = useRef(null);
  const subTitle = useRef(null);
  const suButton = useRef(null);
  useEffect(() => {
    gsap.fromTo(
      title.current, // Target element
      { opacity: 0, y: -100, x: -5 }, // Initial state
      { opacity: 1, y: 0, duration: 3, ease: Power3.easeOut } // Final state
    );

    gsap.fromTo(
      subTitle.current, // Target element
      { opacity: 0, x: -510 }, // Initial state
      { opacity: 1, x: 0, duration: 3, ease: Power3.easeOut } // Final state
    );

    gsap.fromTo(
      suButton.current, // Target element
      { opacity: 0 }, // Initial state
      { opacity: 1, duration: 10, ease: Power3.easeOut } // Final state
    );
  }, []);
  const settings = {
    infinite: true,
    fade: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear"
  };
  return (
    <div>
      <div className="header-img-container">
        <Navigate />
        <Slider {...settings}>
          <div>
            <div className="header-img-content">
              <div className="head-content">
                <div className="head-title" ref={title}>
                  Find your Life partner.
                </div>
                <div className="head-subtitle" ref={subTitle}>
                  Researching the soul mate is something difficult. DateUp
                  offers you the opportunity to simply accelerate the process by
                  finding your life partner.
                  <button>Find More</button>
                </div>
                <div className="the-heading-button">
                  <div>Sign Up</div>
                </div>
              </div>
              <div className="head-imgs">
                <img src="asset/hec.png" alt="" />
              </div>
            </div>
          </div>
          <div>
            <div className="header-img-content">
              <div className="head-content">
                <div className="head-title" ref={title}>
                  Find your Life partner.{" "}
                </div>
                <div className="head-subtitle" ref={subTitle}>
                  Still looking for your significant other? DateUp is right 
                  place for your! Join now to meet single and women around the world.
                </div>
                <div className="the-heading-button">
                  <div>Sign In</div>
                </div>
              </div>
              <div className="head-imgs">
                <img src="asset/hea.png" alt="" />
              </div>
            </div>
          </div>
          
          <div>
            <div className="header-img-content">
              <div className="head-content">
                <div className="head-title" ref={title}>
                  Find your Life Soulmate With Our Dating App.{" "}
                </div>
                <div className="head-subtitle" ref={subTitle}>
                  Download and Research your perfect Soulmate on DateUp
                  powerful App.
                </div>
                <div className="the-heading-button" ref={suButton}>
                  <img src="asset/gogu.png" alt="" />
                  <img src="asset/apu.jpg" alt="" />
                </div>
              </div>
              <div className="head-imgs">
                <img src="asset/app2.png" alt="" />
              </div>
            </div>
          </div>
        </Slider>
        {/* <div className="header-img-content">
          <div className="head-content">
            <div className="head-title" ref={title}>Find your Life partner. </div>
            <div className="head-subtitle"  ref={subTitle}>
              Researching the soul mate is something difficult. DateUp offers
              you the opportunity to simply accelerate the process by finding
              your life partner.
            </div>
            <div className="the-heading-button"  ref={suButton}>
              <button>Find More</button>
            </div>
          </div>
          <div className="head-imgs">
            <img src="asset/heb.png" alt="" />
          </div>
        </div> */}
        <Search/>
      </div>
    </div>
  );
}

export default Header;
