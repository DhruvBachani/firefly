import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [firstName, setfirstName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [userType, setUserType] = useState("");

  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();
    const newUserAccount = {
      firstName: firstName,
      username: username,
      password: password,
      confirmPassword: confirmPassword,
      userType: userType,
    };
    axios.post("http://localhost:8080/register", newUserAccount).then((res) => {
      navigate("/login")
    }).catch((err) => {
      alert(err.response.data.error)
    });
  };

  return (
    <div className="register">
      <div className="container">
        <div className="row">
          <div className="col-md-8 m-auto">
            <h1 className="display-4 text-center">Sign Up</h1>
            <p className="lead text-center">Create an account</p>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  required={true}
                  type="text"
                  className="form-control form-control-lg"
                  placeholder="Full Name"
                  name="firstName"
                  value={firstName}
                  onChange={(e) => setfirstName(e.target.value)}
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control form-control-lg"
                  placeholder="Email Address"
                  name="username"
                  type="email"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div className="form-group">
                <input
                  type="password"
                  className="form-control form-control-lg"
                  placeholder="Password"
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="form-group">
                <input
                  required={true}
                  type="password"
                  className="form-control form-control-lg"
                  placeholder="Confirm Password"
                  name="confirmPassword"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </div>
              <br/>
              <div className="form-group">
                <label> &nbsp;Volunteer &nbsp; </label>
                <input
                  type="radio"
                  name="userType"
                  value="Volunteer"
                  onChange={(e) => setUserType(e.target.value)}
                />
                <label> &nbsp;Volunteer organization &nbsp; </label>
                <input
                  type="radio"
                  name="userType"
                  value="VolunteerOrg"
                  onChange={(e) => setUserType(e.target.value)}
                />
              </div>
              <input type="submit" className="btn btn-info btn-block mt-4" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
