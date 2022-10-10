import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Base from '../layout/Base';
import Home from '../pages/Home';
import PageNotFound from '../pages/PageNotFound';
import Login from '../pages/Login';
import Signup from '../pages/Signup';
import Create from '../pages/Create';
import Increment from '../pages/Increment';


const Routs = () => {
  return (
    <>
      <BrowserRouter>
        <Base>
          <Routes>
            <Route index path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='/create' element={<Create />} />
            <Route path='/increment' element={<Increment />} />
            <Route path='/*' element={<PageNotFound />} />
          </Routes>
        </Base>
      </BrowserRouter>
    </>
  )
}

export default Routs