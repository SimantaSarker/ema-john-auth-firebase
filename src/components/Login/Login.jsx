import React, { useContext } from "react";
import "./Login.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { authContext } from "../providers/AuthProvider";

const Login = () => {
  const {signIn}=useContext(authContext);
  const navigate=useNavigate();
  const location=useLocation();
 const from=location.state?.from?.pathname || '/';
 console.log(from)

 
  const handleLogin=(event)=>{
    event.preventDefault();

    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;


    signIn(email,password)
    .then((result)=>{
      const loggedUser=result.user;
      form.reset();
      navigate(from,{replace:true})
    })
    .catch((error)=>{
   console.log(error)
    })
  

  }


  return (
    <div className="form-container">
      <h4 className="form-title">Login</h4>
      <form onSubmit={handleLogin}>
        <div className="form-control">
          <label htmlFor="">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            required
            placeholder="Enter your mail"
          />
        </div>
        <div className="form-control">
          <label htmlFor="">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            required
            placeholder="Enter your password"
          />
        </div>
        <input type="submit" value="Login" className="btn-submit" />
      </form>
      <p className="have-an-account"><small>New to Ema-john? <Link to='/signup'>Create New Account</Link> </small></p>
    </div>
  );
};

export default Login;
