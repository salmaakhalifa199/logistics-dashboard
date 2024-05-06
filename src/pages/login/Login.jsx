
import React,{ useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { FaUser, FaLock  } from "react-icons/fa";
import "./login.scss"
const Login = () => {
  const [error, setError] = useState(false);
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    
    try {
      // Make a POST request to your backend authentication endpoint
      const response = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        const { token } = await response.json();
        // Store the token in local storage
        localStorage.setItem("token", token);
        // Redirect to the home page or a protected route
        navigate("/");
      } else {
        setError(true);
      }
    } catch (error) {
      console.error("Login error:", error);
      setError(true);
    }
  };

  return (
    <div className="login">
      <form onSubmit ={handleLogin}>

       <h1>Admin Login</h1>
    

       <div className="input-container">
       <FaUser  className="icon "/>
        <input
         type="text"
         placeholder="Email" 
         value={email} 
         onChange={(e)=>setEmail(e.target.value)}
         required 
         className="form-control"/> 
        </div>


        <div className="input-container">
        <FaLock className="icon " />
        <input
         type="password" 
         placeholder="Password" 
         value={password}
         onChange={(e)=>setPassword(e.target.value)}
         required 
         className="form-control"/>
        </div>

        
        <div className="checkbox-container">
        <input type="checkbox" className="checkbox-input"/>
        <span className="checkbox-label">Remember me</span>
        </div>


        <div className="checkbox-forget-container">
        </div>
        <Link to="/forgot-password">Forgot password?</Link> 
        <button type="submit">Login</button>
        <Link to="/register">Don't have an account? Register</Link>
        {error && <span>Wrong email or password!</span>}
        {/* <Link to="/register" className="forget-password"> */}
          {/* {""}
          Do not have an account ? Register
        </Link> */}
      </form>
    </div>

  )
}

export default Login;