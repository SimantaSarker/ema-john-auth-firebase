import React from "react";
import "./Login.css";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="form-container">
      <h4 className="form-title">Login</h4>
      <form>
        <div className="form-control">
          <label htmlFor="">Email</label>
          <input
            type="email"
            name="email"
            id=""
            required
            placeholder="Enter your mail"
          />
        </div>
        <div className="form-control">
          <label htmlFor="">Password</label>
          <input
            type="password"
            name="password"
            id=""
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
