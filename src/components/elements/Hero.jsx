import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="hero-section h-100vh d-flex align-items-center">
      <div className="container w-50">
      <div class="shadow p-5 bg-body rounded">
        <div className="login text-center">
          <h4 className="fw-bold mb-5">
            First you have to login or sigin up
          </h4>
          <div className="">
            <Link className="btn btn-primary " to='/login'>Login</Link>
            <Link to="/signup" className="d-block mt-1" >SiginUp if you have already acount </Link>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Hero;
