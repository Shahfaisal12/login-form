import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

const Signup = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");

  const handleSubmit = (event) => {
    console.log(" On handleSubmit Result is");
    event.preventDefault();

    console.log("first_name:", firstName);
    console.log("last_name:", lastName);
    console.log("email:", email);
    console.log("password:", password);
    console.log("repassword:", rePassword);

    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword("");
    setRePassword("");
  };

  return (
    <div className="signup-section pt-5">
      <div className="container mw-600">
        <div class="shadow mb-5 bg-body rounded">
          <div className="container">
            <div className="row">
              <div className="col-md-6 col-12 d-none d-md-block p-0">
                <img
                  className="img-fluid"
                  src="assests/images/signup.jpg"
                  alt=""
                />
              </div>
              <div className="col-md-6 col-12 d-flex align-items-center justify-content-center">
                <div className="signup-form py-3">
                  <div className="form-inner">
                    <h1 className="display-3 fw-bold  text-center">
                      SignUP Form
                    </h1>
                    <h5 className="fw-600  text-center">WELCOME</h5>
                    <form className=" mt-3" onSubmit={handleSubmit}>
                      <div className="mb-3">
                        <label className="form-label">First Name</label>
                        <input
                          type="text"
                          className="form-control"
                          name="first_name"
                          onChange={(event) => setFirstName(event.target.value)}
                          value={firstName}
                        />
                      </div>
                      <div className="mb-3">
                        <label className="form-label">Last Name</label>
                        <input
                          type="text"
                          className="form-control"
                          name="last_name"
                          onChange={(event) => setLastName(event.target.value)}
                          value={lastName}
                        />
                      </div>
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
                          name="password"
                          onChange={(event) => setPassword(event.target.value)}
                          value={password}
                        />
                      </div>
                      <div className="mb-3">
                        <label
                          htmlFor="exampleInputPassword1"
                          className="form-label"
                        >
                          Re-Type Password
                        </label>
                        <input
                          type="password"
                          className="form-control"
                          id="exampleInputPassword2"
                          name="repassword"
                          onChange={(event) => setRePassword(event.target.value)}
                          value={rePassword}
                        />
                      </div>
                      <div className="mb-3">
                        <span className="">
                          Alreadt Account
                          <Link to="/login" className="mx-1">
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

export default Signup;
