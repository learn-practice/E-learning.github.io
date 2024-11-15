import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="w-full h-auto md:h-[100px] flex flex-col md:flex-row justify-between items-center text-primary text-lg px-5 font-libreBaskerville bg-white ">
        <div className="flex items-center justify-between w-full md:w-auto">
          <img
            className="w-[120px]"
            src="/image/E-learningLogo.png"
            alt="Logo"
          />
          {/* Hamburger Icon for Mobile */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden focus:outline-none"
          >
            <svg
              className="w-8 h-8 text-primary"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>

        {/* Links Section */}
        <div
          className={`${
            isOpen ? "block" : "hidden"
          } md:flex md:items-center w-full md:w-auto mt-5 md:mt-0 text-center`}
        >
          <Link
            className="p-5 block md:inline-block hover:underline transition-transform"
            to="/"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link
            className="p-5 block md:inline-block hover:underline transition-transform"
            to="/About"
            onClick={() => setIsOpen(false)}
          >
            About
          </Link>
          <Link
            className="p-5 block md:inline-block hover:underline transition-transform"
            to="/Course"
            onClick={() => setIsOpen(false)}
          >
            Course
          </Link>
          <Link
            className="p-5 block md:inline-block hover:underline transition-transform"
            to="/ContactUs"
            onClick={() => setIsOpen(false)}
          >
            Contact Us
          </Link>
          <Link
            className="p-5 block md:inline-block hover:underline transition-transform"
            to="/Blogs"
            onClick={() => setIsOpen(false)}
          >
            Blogs
          </Link>
          <Link
            className="p-5 block md:inline-block hover:underline transition-transform"
            to="/privacy"
            onClick={() => setIsOpen(false)}
          >
            Privacy Polivcy
          </Link>
          <Link
            className="p-5 block md:inline-block hover:underline transition-transform"
            to="/Profile"
            onClick={() => setIsOpen(false)}
          >
            Profile
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
