import "./navigate.css";
import { useRef } from "react";
import { gsap } from "gsap";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { getCurrentUser } from "../../redux/authSlice";

function Navigate() {
  const menuMove = useRef(null);
  const currentUser = useSelector(getCurrentUser);
  console.log(currentUser);

  const handleMenu = () => {
    gsap.fromTo(
      menuMove.current,
      { opacity: 0, x: "15rem" }, // Initial state
      { opacity: 1, x: "-15rem", duration: 2 } // Final state
    );
  };
  const handleClose = () => {
    gsap.fromTo(
      menuMove.current,
      { x: "-15rem", duration: 5 }, // Initial state
      { x: "15rem", duration: 5 } // Final state
    );
  };
  return (
    <div>
      <div className="naviagtion">
        <div className="logo-link">DateUp</div>
        <div className="navigate-list">
          <ul ref={menuMove}>
            <div className="close" onClick={handleClose}>
              X
            </div>
            <div className="account">
              {currentUser ? (
                <div className="mobile-profile">
                  <img
                    className="mobile-photo"
                    src={currentUser.photo}
                    alt=""
                  />
                  <div className="mobile-name">{currentUser.username} </div>
                  <div className="mobile-logout">
                    <div>Logout</div>
                  </div>
                </div>
              ) : (
                <Link to="/login">
                  <button>Login</button>
                </Link>
              )}
            </div>
            <li>Home</li>
            <li>Abou Us</li>

            <li>Blog</li>

            <li>Contact</li>
            <li>coming Soon</li>
            <div className="the-mobile">
              <button>Get the App</button>
            </div>
          </ul>
        </div>
        <div className="farbar" onClick={handleMenu}>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className="app-link">
          <div className="profilepix">
             <Link to='/profile'>
                <img className="page-photo" src={currentUser.photo} alt="" />
             </Link>
          </div>
          <button>Get the App</button>
          
        </div>
      </div>
    </div>
  );
}

export default Navigate;
