import React from "react";

const Signup = () => {
  const getInputValue = (event) => {
    const userValue = event.target.value;
    console.log(userValue);
  };

  return (
    <div className="signup-section pt-5">
      <div className="container w-75">
        <div class="shadow mb-5 bg-body rounded">
          <div className="container">
            <div className="row">
              <div className="col-md-6 p-0">
                <img
                  className="img-fluid"
                  src="assests/images/signup.jpg"
                  alt=""
                />
              </div>
              <div className="col-md-6  d-flex align-items-center justify-content-center">
                <div className="signup-form py-3">
                  <div className="form-inner">
                    <h1 className="display-3 fw-bold  text-center">
                      User SignUP
                    </h1>
                    <h5 className="fw-600  text-center">WELCOME</h5>
                    <form className=" mt-5">
                      <div className="mb-3">
                        <label className="form-label">First Name</label>
                        <input
                          type="text"
                          className="form-control"
                          onChange={getInputValue}
                        />
                      </div>
                      <div className="mb-3">
                        <label className="form-label">Last Name</label>
                        <input type="text" className="form-control" onChange={getInputValue} />
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
                        <label
                          htmlFor="exampleInputPassword1"
                          className="form-label"
                        >
                          Re-Type Password
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
                          <a href="/signup" className="">
                            Click here
                          </a>
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

export default Signup;
