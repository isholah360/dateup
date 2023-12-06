import "./blog.css";
import BlogCard from "./blogCard";
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger);

function Blog() {
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
      { opacity: 0, x: -300,  }, // Initial state
      { opacity: 1, x: 0, duration: 3, } // Final state
      );
  }, []);
  return (
    <div  ref={parallaxRef}>
        <div className="making-headig">
          <div>Discover Our</div>
          <p> Awesome Blog Stories</p>
        </div>
      <div className="lists-of-blogs"  ref={parallaxa} >
        <BlogCard
          blogImg="asset/travel5.jpg"
          blogTopic="Fun and Unique Date Ideas to Spice Up Your Relationship"
          lifestyle="Dating"
          blogzContent="Encourage readers to step out of their comfort zones 
          and try something new with their partners."
        />
        <BlogCard 
            blogImg="asset/com@.jpg"
          blogTopic=" Building
           & Attracting Healthy Relationships online"
          lifestyle="Lifestyle"
          blogzContent="Offer guidance on attracting positive and healthy 
          relationships by first cultivating a positive relationship with oneself."/>
        <BlogCard 
        blogImg="asset/com@@.jpg"
          blogTopic="Navigating the Modern Dating for Dating Success"
         lifestyle="Dating"
         blogzContent="Explore effective communication strategies for online interactions.
         Offer advice on staying safe while dating online."/>
      </div>
        <div className="all-blogs">
            <button>All Blog Stories</button>
        </div>
    </div>
  );
}

export default Blog;
