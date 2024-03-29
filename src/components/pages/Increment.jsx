import React from 'react'
import { useState } from "react";

const Increment = () => {

  const [num, setNum] = useState('0');

  const incNum = () => {
    setNum(Number(num) + 1);
  }

  const decNum = () => {
    setNum(num - 1);
  }

  const reset = () => {
    setNum(0);
  }

  const handleChange = (event) => {
    setNum(event.target.value);
  }

  return (
    <div className="hero-section h-100vh d-flex align-items-center">
      <div className="container mw-600">
        <div class="shadow p-5 bg-body rounded">
          <div className="login text-center">
            <h4 className="fw-bold mb-5">
              Click buttton to Increment Value, Decrement Value Or Reset
            </h4>
            <div className="inpute-val mb-5">
              <input type="text" class="form-control" value={num} onChange={handleChange} />
            </div>
            <div className="d-flex justify-content-center">
              <div className="btn-increment">
                <button className='btn btn-primary' type="button" onClick={incNum} >Increment</button>
              </div>
              <div className="btn-decrement mx-3">
                <button className='btn btn-warning' type="button" onClick={decNum}>Decrement</button>
              </div>
              <div className="btn-reste">
                <button className='btn btn-danger' type="button" onClick={reset}>Reste</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Increment