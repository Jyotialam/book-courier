import React from "react";

import { Outlet } from "react-router";
import authImage from "../assets/banner-bg-1.png";
import NavBar from "../Components/NavBar";

const AuthLayout = () => {
  return (
    <div className="max-w-7xl mx-auto">
     <NavBar/>
      <div className="flex mt-10 items-center border">
        <div className="flex-1">
          <Outlet />
        </div>
        <div className="flex-1">
          <img src={authImage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
