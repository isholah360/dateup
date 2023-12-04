import "./find.css"
import FirstCard from "./firstCard"
import SecCard from "./secCard"

export default function FindPeople() {
  return (
    <div>
        <div className="find-people">
          <p className="find-match">   Find People <span> Matching You </span></p>
           <p className="find-theright">And if the right person was right here…</p>
        </div>
        <FirstCard/>
        <div className="the-second-line">
          <div className="each-comp">
            <SecCard picOne="asset/cook.jpg" picTwo="asset/cooking.jpg" picActivity="COOKING MASTERS"/>
          </div>
          <div className="each-comp ">
            <SecCard picOne="asset/travel5.jpg" picTwo="asset/theme.jpg" picActivity="TRAVEL & HICKING"/>
          </div>
          <div className="each-comp">
            <SecCard picOne="asset/tech.jpg" picTwo="asset/theme.jpg" picActivity="GAMING"/>
          </div>
        </div>
    </div>
  )
}
