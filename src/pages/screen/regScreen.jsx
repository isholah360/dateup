import "./log.css";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  getAuthError,
  getAuthStatus,
  handleRegister,
} from "../../redux/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { GoogleAuthProvider, signInWithPopup, getAuth } from "firebase/auth";
import { app } from "../../../firebase";
import axios from 'axios'

function RegScreen() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [err, setErr] = useState(null); // Initialize error state to null

  const dispatch = useDispatch();
  const status = useSelector(getAuthStatus);
  const error = useSelector(getAuthError);

  const navigate = useNavigate();

  const handleReg = async (e) => {
    e.preventDefault();
    setErr(null); // Reset error state to null
    if (username && password && email) {
      const result = await dispatch(
        handleRegister({ username, password, email })
      );
      if (handleRegister.fulfilled.match(result)) {
        navigate("/login");
        setEmail("");
        setPassword("");
        setUsername("");
      } else if (handleRegister.rejected.match(result)) {
        setErr(result.error.message); // Set error message if registration fails
      }
    }
  };

  useEffect(() => {
    // Reset input fields' values whenever error changes
    setEmail("");
    setPassword("");
    setUsername("");
  }, [err]);

  const handleGoogle = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const auth = getAuth(app);
      const result = await signInWithPopup(auth, provider);
      const res = await axios.post("http://localhost:8000/api/user/google", {
        username: result.user.displayName, 
        emial: result.user.email,
        profilePhoto: result.user.photoURL
      })
     
      console.log(res)
       
      
    } catch (error) {
      console.log(error)
    }
  };

  return (
    <>
      <div className="sign-form" key={err}>
        <div className="login">Register</div>
        <form onSubmit={handleReg} className="theform">
          <div htmlFor="">username</div>
          <input
            type="text"
            placeholder="username"
            value={username} // Set input value
            onChange={(e) => setUsername(e.target.value)}
          />
          <div htmlFor="">email</div>
          <input
            type="text"
            placeholder="email"
            value={email} // Set input value
            onChange={(e) => setEmail(e.target.value)}
          />
          <div htmlFor="">password</div>
          <input
            type="text"
            placeholder="password"
            value={password} // Set input value
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <br />
          <button type="submit">
            {status === "loading" ? "Loading..." : "Register"}
          </button>
          <button className="google" type="submit" onClick={handleGoogle}>
            {status === "loading" ? "Loading..." : "Continue With Goggle"}
          </button>
          {err && <div className="error-msg">{error}</div>}
        </form>
        <br />
        <p>
          Have an account?{" "}
          <Link to="/login">
            <span>Login</span>
          </Link>
        </p>
      </div>
    </>
  );
}

export default RegScreen;
