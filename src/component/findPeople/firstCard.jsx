import "./find.css";
import { useState, useEffect, useRef } from "react";
import { TweenMax, Power3 } from "gsap";
import gsap from "gsap";

export default function FirstCard() {
  const [smart, setSmart] = useState(true);
  const [line, setLine] = useState(true);
  const myElementRef = useRef(null);
  const myElement = useRef(null);
  const effChange = () => {
    setSmart(false);
  };
  const revArt = () => {
    setSmart(true);
  };
  const handleSecond = () => {
    setLine(false);
  };
  const handleLeave = () => {
    setLine(true);
  };

  useEffect(() => {
    if (smart === false) {
      gsap.fromTo(
        myElementRef.current, // Target element
        { opacity: 0, y: 0, x: 20 }, // Initial state
        { opacity: 1, y: -50, duration: 1, ease: Power3.easeOut } // Final state
      );
    }
    if (smart === true) {
      gsap.fromTo(
        myElementRef.current, // Target element
        { opacity: 0, y: -50 }, // Initial state
        { opacity: 1, y: 0, duration: 1, ease: Power3.easeOut } // Final state
      );
    }
  }, [smart]);
  useEffect(() => {
    if (line === false) {
      gsap.fromTo(
        myElement.current, // Target element
        { opacity: 0, y: 0, x: 20 }, // Initial state
        { opacity: 1, y: -50, duration: 1, ease: Power3.easeOut } // Final state
      );
    }
    if (line === true) {
      gsap.fromTo(
        myElement.current, // Target element
        { opacity: 0, y: -50 }, // Initial state
        { opacity: 1, y: 0, duration: 1, ease: Power3.easeOut } // Final state
      );
    }
  }, [line]);

  return (
    <div>
      <div className="line-one-card">
        <div
          className="the-left-card"
          onMouseEnter={effChange}
          onMouseLeave={revArt}
        >
          {smart ? (
            <img className="mainpic" src="asset/couple.jpg" alt="" />
          ) : (
            <img className="mainpic" src="asset/tatto.jpg" alt="" />
          )}
          {/* <img className='mainpic' src={smart ? "asset/tatto.jpg" : "asset/couple.jpg"} alt="" /> */}
          <div className="cover-larger">
            <div className="larger-content"></div>
            <div className="top-content"></div>
            <div className="bottom-content" ref={myElementRef}>
              LONG TERM DATING
            </div>
          </div>
        </div>
        <div
          className="right-card"
          onMouseEnter={handleSecond}
          onMouseLeave={handleLeave}
        >
          {line ? (
            <img className="mainpic" src="asset/gym.jpg" alt="" />
          ) : (
            <img className="mainpic" src="asset/gym2.jpg" alt="" />
          )}
          <div className="cover-smaller">
            <div className="larger-content"></div>
            <div className="bottom-content" ref={myElement}>
              SPORT ADDICTS
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
