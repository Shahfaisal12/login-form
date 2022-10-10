// import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

const Signup = () => {

  const [userRegistration, setUserRegistration] = useState({
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    rePassword: ''
  });



  const handleInput = (event) => {

    const name = event.target.name;
    const value = event.target.value;
    // console.log(name, value);

    setUserRegistration({ ...userRegistration, [name]: value })

  }


  const handleSubmit = (event) => {
    console.log(" On handleSubmit Result is");
    event.preventDefault();

    const newRecord = { ...userRegistration, id: new Date().getTime().toString() }

    console.log(newRecord);
    localStorage.setItem('keys', JSON.stringify(newRecord))
    // sessionStorage.setItem('items', JSON.stringify(newRecord))

    .setUserRegistration({first_name:'', last_name:'', email:'', password:'', rePassword:''})

  };

  console.log(localStorage.getItem("keys"))
  // console.log(sessionStorage.getItem("items"))


  return (
    <div className="signup-section pt-5">
      <div className="container mw-1000">
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
                          autoComplete="off"
                          className="form-control"
                          name="first_name"
                          onChange={handleInput}
                          value={userRegistration.first_name}
                        />
                      </div>
                      <div className="mb-3">
                        <label className="form-label">Last Name</label>
                        <input
                          type="text"
                          autoComplete="off"
                          className="form-control"
                          name="last_name"
                          onChange={handleInput}
                          value={userRegistration.last_name}
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
                          autoComplete="off"
                          className="form-control"
                          id="exampleInputEmail1"
                          aria-describedby="emailHelp"
                          name="email"
                          onChange={handleInput}
                          value={userRegistration.email}
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
                          autoComplete="off"
                          className="form-control"
                          id="exampleInputPassword1"
                          name="password"
                          onChange={handleInput}
                          value={userRegistration.password}
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
                          autoComplete="off"
                          className="form-control"
                          id="exampleInputPassword2"
                          name="rePassword"
                          onChange={handleInput}
                          value={userRegistration.rePassword}
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
