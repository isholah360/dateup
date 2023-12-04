import './meet.css'

export default function MeetCard({image, newname, age, gender}) {
  return (
    <div>
       <div className="meet-card-bg">
          <div className="meetcard-img-contaviner">
            <img className="meetcard-img" src={image} alt="" />
          </div>
          <div className="member-name-pass">
            <div className="memname">{newname}</div>
            <div className="memmark"></div>
          </div>
          <div className="gender-age">
            <p>{age}</p>
            <p>.</p>
            <p>{gender}</p>
          </div>
       </div>
    </div>
  )
}
