import React, { use } from "react";
import { Link, Links, NavLink } from "react-router";
import { AuthContext } from "../Context/Auth/AuthContext";

import logoPng from "../assets/download.png";

const Navbar = () => {
  const { user, logOut } = use(AuthContext);
  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => {
        console.log(error.message);
      });
  };

  const links = (
    <>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive ? "border-b-2 text-[#f76305] font-bold" : ""
          }
          to={"/"}
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive ? "border-b-2 text-[#f76305] font-bold" : ""
          }
          to={"/service"}
        >
          Service
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive ? "border-b-2 text-[#f76305] font-bold" : ""
          }
          to={"/aboutUs"}
        >
          About Us
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive ? "border-b-2 text-[#f76305] font-bold" : ""
          }
          to={"/contact"}
        >
          Contact
        </NavLink>
      </li>
      {user ? (
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive ? "border-b-2 text-[#f76305] font-bold" : ""
            }
            to={"/user"}
          >
            My Profile
          </NavLink>
        </li>
      ) : (
        ""
      )}
    </>
  );
  return (
    <div className=" bg-base-100 shadow-sm sticky top-0 z-50">
      <div className="navbar w-11/12 mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <Link to={"/"}>
            <button className="flex items-center gap-2 text-xl font-bold bg-transparent p-0 hover:bg-transparent">
              <img className="w-6 h-7 md:w-7 md:h-8" src={logoPng} alt="Logo" />
              <span className="text-[#f76305]">killSwap</span>
            </button>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end">
          <div className="flex justify-between items-center gap-3">
            <Link to={"/user"}>
              {user ? (
                <img
                  className="w-10 h-10 rounded-full"
                  src={user?.photoURL}
                  alt=""
                  title={user?.displayName}
                />
              ) : (
                ""
              )}
            </Link>
            {user ? (
              <Link
                to={"/auth"}
                onClick={handleLogOut}
                className="btn bg-[#f76305] text-white"
              >
                Log Out
              </Link>
            ) : (
              <div>
                <Link to={"/auth"} className="btn mr-4 bg-[#f76305] text-white">
                  Log In
                </Link>
                <Link
                  to={"/auth/register"}
                  className="btn bg-[#f76305] text-white"
                >
                  Sign up
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
