import "./keep.css";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function Keep() {
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
      <div className="keep-sign">
        <div className="keep-cover" >
          <div ref={parallaxa}>
            <div className="keep-in-touch">
              Keep in Touch with the Community
            </div>
            <div className="keep-subscribe">
              Subscribe to DateUp now and find your Life Partner!{" "}
            </div>
            <div className="keep-button">
              <button>Register now for free</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Keep;
