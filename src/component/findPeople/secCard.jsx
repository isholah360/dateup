import {useEffect, useRef, useState} from 'react'
import gsap from 'gsap';
import {Power3} from 'gsap'
function SecCard({picActivity, picOne, picTwo}) {
    const [smart, setSmart] = useState(true);
   
    const effChange = () => {
        setSmart(false);
      };
      const revArt = () => {
        setSmart(true);
      };
    const theElement = useRef(null);
    useEffect(() => {
        if (smart === false) {
          gsap.fromTo(
            theElement.current, // Target element
            { opacity: 0, y: 0, x: -5 }, // Initial state
            { opacity: 1, y: -50, duration: 1, ease: Power3.easeOut } // Final state
          );
        }
        if (smart === true) {
          gsap.fromTo(
            theElement.current, // Target element
            { opacity: 0, y: -50 }, // Initial state
            { opacity: 1, y: 0, duration: 1, ease: Power3.easeOut } // Final state
          );
        }
      }, [smart]);
  return (
    <div>
        <div
          className="right-card right-sec-line"
          onMouseEnter={effChange }
          onMouseLeave={revArt}
        >
          {smart ? (
            <img className="mainpic" src={picOne} alt="" />
          ) : (
            <img className="mainpic" src={picTwo} alt="" />
          )}
          <div className="cover-smaller">
            <div className="larger-content"></div>
            <div className="bottom-content" ref={theElement}>
              {picActivity}
            </div>
          </div>
        </div>
    </div>
  )
}

export default SecCard
