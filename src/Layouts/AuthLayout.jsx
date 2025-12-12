import React from "react";

import { Link, Outlet } from "react-router";
import authImage from "../assets/banner-bg-1.png";
import logoImg from "../assets/logo.png";

const AuthLayout = () => {
  return (
    <div className="bg-white text-black">
      <Link to={"/"} className="flex items-center font-bold px-4">
        <img src={logoImg} alt="" className="md:w-50 w-30" />
      </Link>
      <div className="flex mt-10 items-center max-w-7xl mx-auto">
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
