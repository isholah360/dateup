import "./make.css";
import Makes from "./makes";

export default function MakeDating() {
  return (
    <div>
      <div className="the-making-width">
        <div className="making-headig">
          <div>Let’s Make Dating</div>
          <p> More Human & More Simple</p>
        </div>
        <div className="the-three-blubs">
          <Makes
            Inspired="Get Inspired"
            motivate="Members profile are checked everyday. Thus, DateUp only contains
            motivated members who are keenly and  really want to be part of the community."
            colored={{
              backgroundColor: "brown",
              height: "6rem",
              width: "6rem",
              borderRadius: "50%",
              opacity: 0.4,
            }}
            highlight="asset/light-bulb.png"
          />
          <Makes
            Inspired="Smooth & Simple Features"
            motivate=" DateUp is designed the seamless feature that will 
            not help you find what you want, but also make feel at home."
            colored={{
              backgroundColor: "rgb(61, 189, 182)",
              height: "6rem",
              width: "6rem",
              borderRadius: "50%",
              opacity: 0.4,
            }}
            circ_two={{
              backgroundColor: "rgb(61, 189, 182)",
              height: "6rem",
              width: "6rem",
              zIndex: 10,
              borderRadius: "50%",
            }}
            circ_tree={{
              backgroundColor: "rgb(61, 189, 182)",
              height: "6rem",
              width: "6rem",
              borderRadius: "50%",
              opacity: 0.4,
              
            }}
            highlight="asset/new-features.png"
          />
          <Makes
            Inspired="Your Data are Safe"
            motivate=" Your data are safe and will never be offered to 
            third parties company. At DateUp, we take pride in securing your profile."
            highlight="asset/verified.png"
            colored={{
              backgroundColor: "#0D98BA",
              height: "6rem",
              width: "6rem",
              borderRadius: "50%",
              opacity: 0.4,
            }}
            circ_two={{
              backgroundColor: "#0D98BA",
              height: "6rem",
              width: "6rem",
              borderRadius: "50%",
              zIndex: 10
            }}
            circ_tree={{
              backgroundColor: "#0D98BA",
              height: "6rem",
              width: "6rem",
              borderRadius: "50%",
              opacity: 0.4,
            }}
          />
        </div>
      </div>
    </div>
  );
}
