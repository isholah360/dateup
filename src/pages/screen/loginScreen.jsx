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
    if (password && email) {
      const result = await dispatch(handleLogin({ password, email }));
      dispatch(setCred(result))
      if (handleLogin.fulfilled.match(result)) {
        navigate("/profile");
        setEmail("");
        setPassword("");
      } else if (handleLogin.rejected.match(result)) {
        setErr(result.error.message); // Set error message if registration fails
      }
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
          <button>{status === "loading"? "loading...." : "Login" }</button>
          <button>{status === "loading"? "loading...." : "Continue With Goggle" }</button>
          <p>{err && <div>{error}</div>}</p>
        </form>
        <p>
          Don't have an account?{" "}
          <Link to="/register">
            <span>Register</span>
          </Link>
        </p>
      </div>
    </>
  );
}

export default LoginScreen;
