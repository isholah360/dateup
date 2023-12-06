import "./comm.css";
import CommCard from "./commCard";

export default function Community() {
  return (
    <>
      <div className="community-container">
        <div className="the-community">
          <div className="letmeet">
            <p> Be Part of a</p>
            <div> Real Community </div>
          </div>
          <div className="the-meet-community">
            DateUp is made up of many different communities. These allow you to
            meet people with the same tastes and desires!
          </div>
        </div>
        <div className="comm-buttons">
          <button>Popular</button>
          <button>Newest</button>
          <button>Active</button>
          <button>Alphabetical</button>
        </div>
        <div className="type-of-activities">
          <CommCard
            members="8 MEMBERS"
            actname="Manga & Anime"
            comimg="asset/anime.jpg"
          />
          <CommCard
            members="10 MEMBERS"
            actname="Running"
            comimg="asset/run.jpg"
          />
          <CommCard
            members="6 MEMBERS"
            actname="Cooking"
            comimg="asset/cooking.jpg"
          />
          <CommCard
            members="12 MEMBERS"
            actname="Tattoo"
            comimg="asset/tatto.jpg"
          />
        </div>
        <div className="all-group">
          <button>Discover All Groups</button>
        </div>
      </div>
    </>
  );
}
