import React, { useEffect, useState } from "react";
import { GoHomeFill } from "react-icons/go";
import { IoBookSharp, IoLogIn, IoLogOut } from "react-icons/io5";
import { Link, NavLink } from "react-router";
import logoImg from "../assets/logo.png";
import useAuth from "../hooks/useAuth";
import { FaUser } from "react-icons/fa";
import { ImBoxAdd } from "react-icons/im";
import { FaGear } from "react-icons/fa6";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { MdDashboard } from "react-icons/md";

const NavBar = () => {
  const { user, signOutUser } = useAuth();
  //
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    const html = document.documentElement;
    html.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const publicLinks = (
    <>
      <li>
        <NavLink
          to={"/"}
          className={({ isActive }) =>
            `flex items-center gap-1 text-[#1A5908] text-base font-semibold ${
              isActive ? "border-b-2 border-[#1A5908]" : ""
            }`
          }
        >
          <GoHomeFill size={20} /> Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/books"}
          className={({ isActive }) =>
            `flex items-center gap-2 text-[#1A5908] font-semibold text-base ${
              isActive ? "border-b-2 border-[#1A5908]" : ""
            }`
          }
        > <IoBookSharp size={20}/>
          Books
        </NavLink>
      </li>
   
      <li>
        <NavLink
          to={"/dashboard"}
          className={({ isActive }) =>
            `flex items-center gap-1 text-[#1A5908] text-base font-semibold ${
              isActive ? "border-b-2 border-[#1A5908]" : ""
            }`
          }
        > <MdDashboard  size={20}/>
          Dashboard
        </NavLink>
      </li>
    </>
  );
  return (
    <div className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="navbar text-white md:w-11/12 w-full mx-auto">
        {/* LEFT */}
        <div className="navbar-start">
          {/* Mobile dropdown */}
          <div className="dropdown md:hidden">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost text-[#063F2D]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </div>

            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content mt-3 p-2 shadow rounded-box z-10 bg-white w-52"
            >
              {publicLinks}
              {/* {user && privateLinks} */}
            </ul>
          </div>

          {/* LOGO */}
          <Link to={"/"} className="flex items-center font-bold">
            <img src={logoImg} alt="" className="md:w-50 w-30 border" />
          </Link>
        </div>

        {/* CENTER (Desktop menu) */}
        <div className="navbar-center hidden md:flex">
          <ul className="menu menu-horizontal px-1 gap-4">
            {publicLinks}
            {/* {user && privateLinks} */}
          </ul>
        </div>

        {/* RIGHT */}
        <div className="navbar-end gap-3 flex flex-wrap justify-end">
          {/* theme toggle */}
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="flex items-center gap-2 p-2 rounded-md
             hover:bg-gray-100  text-black cursor-pointer"
          >
            {theme === "dark" ? (
              <>
                <MdLightMode
                  size={30}
                  className="text-yellow-700 font-extrabold"
                />
              </>
            ) : (
              <>
                <MdDarkMode size={30} className="" />
              </>
            )}
          </button>
          {user ? (
            <div className="dropdown dropdown-end z-50">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-[50px] border-2 border-black rounded-full">
                  <img
                    alt="User"
                    referrerPolicy="no-referrer"
                    src={user.photoURL}
                  />
                </div>
              </div>

              <ul
                tabIndex="-1"
                className="menu menu-sm dropdown-content mt-3 p-2 shadow rounded-box z-50 bg-base-100 dark:bg-gray-800 text-gray-700 dark:text-white w-52"
              >
                <div className="pb-3 border-b border-b-gray-300 dark:border-gray-600">
                  <li className="text-sm font-bold">{user.displayName}</li>
                  <li className="text-xs">{user.email}</li>
                </div>
              </ul>

              <button
                onClick={signOutUser}
                className="btn rounded-md ml-3 text-lg bg-[#063F2D] text-white border-none hover:bg-green-900"
              >
                <IoLogOut /> Logout
              </button>
            </div>
          ) : (
            <div className="flex items-center">
              <Link
                to={"/login"}
                className="btn rounded-md ml-3 text-lg bg-[#063F2D] text-white border-none hover:bg-green-900"
              >
                <IoLogIn /> Login
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
