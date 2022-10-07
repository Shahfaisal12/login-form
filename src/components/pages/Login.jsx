import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const getInputValue = (event) => {
    const userValue = event.target.value;
    console.log(userValue);
  };

  return (
    <div className="login-section pt-5">
      <div className="container w-75">
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
                      User Login
                    </h1>
                    <h5 className="fw-600  text-center">WELCOME</h5>
                    <form className=" mt-5">
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
                          onChange={getInputValue}
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
                          onChange={getInputValue}
                        />
                      </div>
                      <div className="mb-3">
                        <span className="">
                          Create Account{" "}
                          <Link to="/signup" className="">
                            Click here
                          </Link>
                        </span>
                      </div>
                      <button type="submit" className="btn btn-primary">
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
