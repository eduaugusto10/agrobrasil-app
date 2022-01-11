import React, { useContext } from "react";
import AuthContext from "../context/auth";
import Login from "../pages/Login";
import Register from '../pages/Register'
import NewPassword from '../pages/NewPassword'
import ForgotPassword from '../pages/ForgotPassword'
import SendPassword from '../pages/SendPassword'
import { Route, BrowserRouter, Routes } from "react-router-dom";
import  Home  from "../pages/Home";
import Product from "../pages/Product";
import Description from "../pages/Description";
import DataClient from "../pages/Product/DataClient";

const PrivateRoute = () => {
  const { signed } = useContext(AuthContext);
};

const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/register" element={<Register/>}/>
      <Route path="/newpass" element={<NewPassword/>}/>
      <Route path="/forgotpass" element={<ForgotPassword/>}/>
      <Route path="/sendpass" element={<SendPassword/>}/>
      <Route path="/login" element={<Login />} />
      <Route exact path="/" element={<Login />} />
      <Route path="/home" element={<Home/>}/>
      <Route path="/product" element={<Product/>}/>
      <Route path="/description" element={<Description/>}/>
      <Route path='/data' element={<DataClient/>}/>
    </Routes>
  </BrowserRouter>
);

export default Router;
