import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <main className="navbar flex justify-between items-center p-[2rem] border-b-4 border-gray-200 mb-[2rem]">
      <section className="logoDiv">
        <Link to="/">
          <h1 className="logo text-[25px] text-blueColor">
            <strong>Job</strong>Search
          </h1>
        </Link>
      </section>

      <section className="menu flex gap-8">
        <li className="menuList text-[#6f6f6f] hover:text-blueColor ">Job</li>
        <li className="menuList text-[#6f6f6f] hover:text-blueColor ">Companies</li>
        <li className="menuList text-[#6f6f6f] hover:text-blueColor ">About</li>
        <li className="menuList text-[#6f6f6f] hover:text-blueColor ">Contact</li>
        <li className="menuList text-[#6f6f6f] hover:text-blueColor ">Blog</li>
        <Link to="/signin">
          <li className="menuList text-[#6f6f6f] hover:text-blueColor ">Login</li>
        </Link>
      </section>
    </main>
  );
};

export default Navbar;
