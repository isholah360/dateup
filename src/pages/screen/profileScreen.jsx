import { useSelector } from "react-redux";
import { getCurrentUser } from "../../redux/authSlice";
import "./log.css";


function ProfileScreen() {
    const currentUser = useSelector(getCurrentUser)
    const user =  (currentUser.payload)
    console.log(user)
    
  return (
    <div>
       <div className="profile-screen sign-form">
            <div className="login">Profile</div>
            <br />
            <div className="profile-layout">
                <img src={user.photo} alt="" className="photo" />
            </div>
            <div className="name-user">{user.username}</div>
            <div className="name-user">{user.email}</div>

            <div className="login-delete">
                <button>Update</button>
                <button>Delete</button>
            </div>
           
       </div>
    </div>
  )
}

export default ProfileScreen
