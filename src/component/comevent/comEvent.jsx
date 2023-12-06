import "./comevent.css";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);


function ComEvent() {
  const parallaxRef = useRef(null);
  const parallaxa = useRef(null);
  useEffect(() => {
    // Set up a GSAP timeline for the parallax animation
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: parallaxRef.current,
        start: 'top center', // Adjust the start point as needed
        end: 'bottom center',
        once: true, // Enables scrubbing for a smoother effect
      },
    });

    // Define your parallax animation
    tl.fromTo(parallaxa.current, 
      { opacity: 0, y: 50,  }, // Initial state
      { opacity: 1, y: 0, duration: 2, } // Final state
      );
  }, []);
  return (
    <div ref={parallaxRef}>
      <div className="com-events" ref={parallaxa}>
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
