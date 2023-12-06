import "./find.css";
import FirstCard from "./firstCard";
import SecCard from "./secCard";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function FindPeople() {
  const parallaxRef = useRef(null);
  const parallaxa = useRef(null);
  const parallaxy = useRef(null);

  useEffect(() => {
    // Set up a GSAP timeline for the parallax animation
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: parallaxRef.current,
        start: "top center", // Adjust the start point as needed
        end: "bottom center",
        once: true, // Enables scrubbing for a smoother effect
      },
    });

    // Define your parallax animation
    tl.fromTo(
      parallaxa.current,
      { opacity: 0, x: -200 }, // Initial state
      { opacity: 1, x: 0, duration: 1 } // Final state
    );
    tl.fromTo(
      parallaxy.current,
      { opacity: 0, x: 180 }, // Initial state
      { opacity: 1, x: 0, duration: 1 } // Final state
    );
  }, []);
  return (
    <div ref={parallaxRef}>
      <div className="find-people">
        <p className="find-match">
          {" "}
          Find People <span> Matching You </span>
        </p>
        <p className="find-theright">And if the right person was right here…</p>
      </div>
      <div className="the-firstcard" ref={parallaxa}>
        <FirstCard  />
      </div>

      <div className="the-second-line" ref={parallaxy}>
        <div className="each-comp">
          <SecCard
            picOne="asset/cook.jpg"
            picTwo="asset/cooking.jpg"
            picActivity="COOKING MASTERS"
          />
        </div>
        <div className="each-comp ">
          <SecCard
            picOne="asset/travel5.jpg"
            picTwo="asset/theme.jpg"
            picActivity="TRAVEL & HICKING"
          />
        </div>
        <div className="each-comp">
          <SecCard
            picOne="asset/tech.jpg"
            picTwo="asset/theme.jpg"
            picActivity="GAMING"
          />
        </div>
      </div>
    </div>
  );
}
