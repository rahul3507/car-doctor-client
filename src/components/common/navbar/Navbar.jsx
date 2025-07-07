/** @format */

import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../../ui/button";

const Navbar = () => {
  const navItems = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/services">Services</Link>
      </li>
      <li>
        <Link to="/blog">Blog</Link>
      </li>
      <li>
        <Link to="/contact">Contact</Link>
      </li>
    </>
  );

  return (
    <div className="navbar bg-base-100 shadow-sm">
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
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2  shadow"
          >
            {navItems}
          </ul>
        </div>
        <div>
          <Link
            to="/"
            className="btn btn-ghost text-xl rounded-xl hover:bg-transparent hover:border-0"
          >
            <img
              src="/Car-Doctor-Logo.png"
              alt="Car Doctor"
              className="h-10 w-16 "
            />
          </Link>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-6">{navItems}</ul>
      </div>
      <div className="navbar-end">
        <Button className="py-2 border border-amber-500 text-amber-500 bg-transparent hover:bg-gray-700">
          Appointment
        </Button>
      </div>
    </div>
  );
};

export default Navbar;
