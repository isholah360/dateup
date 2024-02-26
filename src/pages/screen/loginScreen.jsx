import { Link, useNavigate } from "react-router-dom";
import "./log.css";
import { useState, useEffect} from "react";
import { handleLogin, getAuthError, getAuthStatus, setCred} from "../../redux/authSlice";
import { useSelector, useDispatch } from "react-redux";

function LoginScreen() {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [err, setErr] = useState(null); 
  const dispatch = useDispatch();
  const status = useSelector(getAuthStatus);
  const error = useSelector(getAuthError);

  const navigate = useNavigate();
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setErr(null); // Reset error state to null
    try {
      if (password && email) {
        const result = await dispatch(handleLogin({ password, email })).unwrap();
        console.log((result))
        dispatch(setCred(result))
          navigate("/profile");
          setEmail("");
          setPassword("");
      }
    } 
    catch (error) {
        setErr(error.message); // Set error message if registration fails
    }
    
  };
  
  useEffect(() => {
    
    setEmail("");
    setPassword("");

  }, [err]);

    
  return (
    <>
      <div className="sign-form">
        <div className="login">Login</div>
        <form onSubmit={handleSubmit} className="theform">
          <div htmlFor="">email</div>
          <input
            type="text"
            placeholder="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <div htmlFor="">password</div>
          <input
            type="text"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <br />
          <button>{status === "loading"? "loading...." : "Login" }</button>
          <button className="google">{status === "loading"? "loading...." : "Continue With Goggle" }</button>
          <p >{err && <div>{error}</div>}</p>
        </form>
        <div className="login-submit">
          Don't have an account?{" "}
          <Link to="/register">
            <span>Register</span>
          </Link>
        </div>
      </div>
    </>
  );
}

export default LoginScreen;
