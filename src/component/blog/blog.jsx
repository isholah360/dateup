import "./blog.css";
import BlogCard from "./blogCard";

function Blog() {
  return (
    <div>
        <div className="making-headig">
          <div>Discover Our</div>
          <p> Awesome Blog Stories</p>
        </div>
      <div className="lists-of-blogs">
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
