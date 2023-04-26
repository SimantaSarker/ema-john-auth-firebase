import React, { useContext, useState } from "react";
import "./SignUp.css";
import { Link } from "react-router-dom";
import { authContext } from "../providers/AuthProvider";

const SignUp = () => {
  const { createUser } = useContext(authContext);

  const [error, setError] = useState("");
  const handleSignUp = (event) => {
    setError("");
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    const confirm = form.confirm.value;
    console.log(email, password, confirm);
    if (password != confirm) 
    {
      setError("Your password did not matched..");
      return;
    } 
    else if (password.length < 6)
     {
      setError("password must be six characters");
      return;
    }
    createUser(email, password)
      .then((result) => {
        const loggedUser = result.user;
        form.reset();
      })
      .catch((error) => {
        setError(error.message)
      });
  };
  return (
    <div className="form-container">
      <h4 className="form-title">SignUp</h4>
      <form onSubmit={handleSignUp}>
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

        <div className="form-control">
          <label htmlFor="">Confirm Password</label>
          <input
            type="password"
            name="confirm"
            id="confirm"
            required
            placeholder="Enter your password"
          />
        </div>
        <input type="submit" value="SignUp" className="btn-submit" />
      </form>
      <p className="have-an-account">
        <small>
          Already have an account? <Link to="/login">Login</Link>{" "}
        </small>
      </p>
      <p className="text-error">{error}</p>
    </div>
  );
};

export default SignUp;
