import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("role") && localStorage.getItem("email"))
      navigate("/adminDashBoard");
  }, [localStorage.getItem("role")]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const loginData = {
      email: email,
      password: password,
    };
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API}user/login`,
        loginData
      );
      if (response.status === 200) {
        localStorage.setItem("role",response.data.role);
        localStorage.setItem("email",response.data.email);
        localStorage.setItem("token",response.data.token)
        navigate("/adminDashBoard");
      }
    } catch (error) {
      alert("Bad Request");
    }
  };

  return (
    <div className="container mt-5  ">
      <div className="col-md-6 m-auto shadow  py-5 rounded  px-3 ">
        <h2 className="text-center">Satta King Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="d-flex justify-content-center ">
            <button type="submit" className="btn btn-primary col-md-3 ">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
