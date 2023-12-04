import "./meet.css";
import MeetCard from "./meetcard";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import "./meets.css";
import "./meet-theme.css";
import Slider from "react-slick";

export default function Meet() {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div className="let-meet-container">
        <div className="letmeet">
          <p>Meet our new</p>
          <div> Lovely Members</div>
        </div>
        <div className="theslider">
          <Slider {...settings}>
            <div>
              <MeetCard
                image="asset/mem.jpg"
                newname="Sylvia Mark"
                age="46"
                gender="Female"
              />
            </div>
            <div>
              <MeetCard
                image="asset/mem9.jpg"
                newname="Jim Mike"
                age="46"
                gender="Female"
              />
            </div>
            <div>
              <MeetCard
                image="asset/mem.jpg"
                newname
                ="Sofia Lance"
                age="46"
                gender="Female"
              />
            </div>
            <div>
              <MeetCard
                image="asset/mem1.jpg"
                newname="Karl Stone"
                age="46"
                gender="Female"
              />
            </div>
            <div>
              <MeetCard
                image="asset/mem2.jpg"
                newname="Alli Brooke"
                age="46"
                gender="Female"
              />
            </div>
            <div>
              <MeetCard
                image="asset/mem3.jpg"
                newname="Kate Henze"
                age="46"
                gender="Female"
              />
            </div>
            <div>
              <MeetCard
                image="asset/mem4.jpg"
                newname="Mark Kent"
                age="46"
                gender="Female"
              />
            </div>
            <div>
              <MeetCard
                image="asset/mem5.jpg"
                newname="Sylvia Mark"
                age="46"
                gender="Female"
              />
            </div>
            <div>
              <MeetCard
                image="asset/mem6.jpg"
                newname="Jesus Stolk"
                age="46"
                gender="Female"
              />
            </div>
            <div>
              <MeetCard
                image="asset/mem7.jpg"
                newname="Audrey Soft"
                age="46"
                gender="Female"
              />
            </div>
            <div>
              <MeetCard
                image="asset/mem8.jpg"
                newname="Mike Legend"
                age="46"
                gender="Female"
              />
            </div>
          </Slider>
        </div>
      </div>
    </>
  );
}
