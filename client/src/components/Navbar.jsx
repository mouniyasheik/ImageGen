import React, { useContext, useState } from "react";
import { assets } from "../assets/assets";
import { Link, useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";

const Navbar = () => {
  const { user, setShowLogin, logout, credit } = useContext(AppContext);
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="sticky top-0 z-50 bg-white w-full px-4 sm:px-8 py-4 shadow-md">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <Link to="/">
          <p className="text-3xl font-bold">ImageGen</p>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden sm:flex items-center gap-4">
          {user ? (
            <div className="flex items-center gap-3">
              <button
                onClick={() => navigate("/buy")}
                className="flex items-center gap-2 px-4 py-2 rounded-full hover:scale-105 transition-all duration-700"
              >
                <img className="w-5" src={assets.credit_star} alt="" />
                <p className="text-sm font-medium text-gray-600">
                  Credits left: {credit}
                </p>
              </button>
              <p className="text-gray-600">Hi, {user.name}</p>
              <div className="relative group">
                <img
                  src={assets.profile_icon}
                  className="w-10 drop-shadow"
                  alt=""
                />
                <div className="absolute hidden group-hover:block top-0 right-0 z-10 text-black rounded pt-12">
                  <ul className="bg-white border rounded-md text-sm p-2">
                    <li onClick={logout} className="py-1 px-2 cursor-pointer">
                      Logout
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          ) : (
            <div className="flex items-center gap-5">
              <p
                onClick={() => navigate("/buy")}
                className="cursor-pointer bg-blue-400 px-5 py-2 text-sm font-semibold text-white rounded-full"
              >
                Subscription
              </p>
              <button
                onClick={() => setShowLogin(true)}
                className="bg-blue-400 text-white px-7 py-2 sm:px-10 rounded-full"
              >
                Login
              </button>
            </div>
          )}
        </div>

        {/* Hamburger Icon (visible only on mobile) */}
        <div className="sm:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7 text-gray-700"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {menuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="sm:hidden mt-4 flex flex-col gap-3">
          {user ? (
            <>
              <button
                onClick={() => {
                  navigate("/buy");
                  setMenuOpen(false);
                }}
                className="flex items-center gap-2 px-4 py-2 bg-blue-100 rounded"
              >
                <img className="w-4" src={assets.credit_star} alt="" />
                <p className="text-sm text-gray-700">Credits: {credit}</p>
              </button>
              <p className="text-gray-600 pl-2">Hi, {user.name}</p>
              <button
                onClick={() => {
                  logout();
                  setMenuOpen(false);
                }}
                className="text-left text-red-600 px-4"
              >
                Logout
              </button>
            </>
          ) : (
            <div className="flex justify-start items-center gap-3 ">
  <p
    onClick={() => {
      navigate('/buy')
      setMenuOpen(false)
    }}
    className="cursor-pointer bg-blue-400 text-white px-3 py-1 sm:px-4 sm:py-1.5 text-sm rounded-full"
  >
    Subscription
  </p>
  <button
    onClick={() => {
      setShowLogin(true)
      setMenuOpen(false)
    }}
    className="bg-blue-400 text-white px-3 py-1 sm:px-4 sm:py-1.5 text-sm rounded-full"
  >
    Login
  </button>
</div>

          )}
        </div>
      )}
    </div>
  );
};

export default Navbar;
