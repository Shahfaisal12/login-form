import React from "react";
import { Link } from "react-router-dom";
import {useState} from 'react';

const Login = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    console.log(" On handleSubmit Result is");
    event.preventDefault(); 

    console.log("email:", email);
    console.log("passsword:", password);

    setEmail("");
    setPassword("");
  };

  return (
    <div className="login-section pt-5">
      <div className="container mw-1000">
        <div class="shadow mb-5 bg-body rounded">
          <div className="container">
            <div className="row">
              <div className="col-md-6 col-12 d-none d-md-block p-0">
                <img
                  className="img-fluid"
                  src="assests/images/login-3.jpg"
                  alt=""
                />
              </div>
              <div className="col-md-6 col-12 d-flex align-items-center justify-content-center">
                <div className="login-form  py-3">
                  <div className="form-inner">
                    <h1 className="display-3 fw-bold  text-center">
                      Login Form
                    </h1>
                    <h5 className="fw-600  text-center">WELCOME</h5>
                    <form className=" mt-5" onSubmit={handleSubmit}>
                      <div className="mb-3">
                        <label
                          htmlFor="exampleInputEmail1"
                          className="form-label"
                        >
                          Email address
                        </label>
                        <input
                          type="email"
                          className="form-control"
                          id="exampleInputEmail1"
                          aria-describedby="emailHelp"
                          name="email"
                          onChange={(event) => setEmail(event.target.value)}
                          value={email}
                        />
                      </div>
                      <div className="mb-3">
                        <label
                          htmlFor="exampleInputPassword1"
                          className="form-label"
                        >
                          Password
                        </label>
                        <input
                          type="password"
                          className="form-control"
                          id="exampleInputPassword1"
                          name="email"
                          onChange={(event) => setPassword(event.target.value)}
                          value={password}
                        />
                      </div>
                      <div className="mb-3">
                        <span className="">
                          Create Account{" "}
                          <Link to="/signup" className="mx-1">
                            Click here
                          </Link>
                        </span>
                      </div>
                      <button type="submit" className="btn btn-lg btn-dark">
                        Submit
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
