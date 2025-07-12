import React, { useState } from "react";
import { assets } from "../assets/assets";
import { NavLink, useNavigate } from "react-router-dom";
const Navbar = () => {
  const navigate = useNavigate();
  const [showMenu, setMenu] = useState(false);
  const [token, setToken] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false)  
  return (
    <div className="flex items-center justify-between text-sm py-4 mb-5 border-b border-b-gray-400">
      <img onClick={() => navigate("/")} src={assets.logo} alt="" className="w-44 cursor-pointer" />
      <ul className="hidden md:flex items-start gap-5 font-medium">
        <NavLink to="/" className="hover:translate-y-[-4px] translation-all duration-500">
          <li className="py-1">HOME</li>
          <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden" />
        </NavLink>
        <NavLink to="/doctors" className="hover:translate-y-[-4px] translation-all duration-500">
          <li className="py-1">ALL DOCTORS</li>
          <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden" />
        </NavLink>
        <NavLink to="/about" className="hover:translate-y-[-4px] translation-all duration-500">
          <li className="py-1">ABOUT</li>
          <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden" />
        </NavLink>
        <NavLink to="/contact" className="hover:translate-y-[-4px] translation-all duration-500">
          <li className="py-1">CONTACT</li>
          <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden" />
        </NavLink>
      </ul>
      <div className="flex items-center gap-4">
        {token ? (
          <>
          <div className="flex items-center gap-2 cursor-pointer group relative z-22" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <img className="w-8 rounded-full" src={assets.profile_pic} alt="" />
            <img className="w-2.5" src={assets.dropdown_icon} alt="" />
          </div>
          {isMenuOpen && <div className="absolute top-0 right-0 pt-14 text-base font-medium text-gray-600 z-20">
              <div className="min-w-48 bg-stone-100 rounded flex flex-col gap-4 p-4">
                <p onClick={() => {navigate("/my-profile"); setIsMenuOpen(false)}} className="hover:text-black cursor-pointer">My Profile</p>
                <p onClick={() => {navigate("/my-appointmemnts"); setIsMenuOpen(false)}} className="hover:text-black cursor-pointer">
                  My Appointmets
                </p>
                <p onClick={() => {setToken(false); navigate("/login"); setIsMenuOpen(false)}} className="hover:text-black cursor-pointer">Logout</p>
              </div>
            </div>}
            </>
        ) : (
          <button
            onClick={() => navigate("/login")}
            className="bg-primary text-white px-8 py-3 rounded-full font-light hidden md:block hover:scale-105 transition-all cursor-pointer"
          >
            Create account
          </button>
        )}
        <img className="w-6 md:hidden" onClick={() => setMenu(true)} src={assets.menu_icon} alt="" />
        {/* ------------- Mobile  Menu -------------*/}
        <div className={`${showMenu? "fixed w-full": "h-0 w-0"} md:hidden right-0 top-0 bottom-0 z-20 overflow-hidden bg-white transition-all`}>
          <div className="flex items-center justify-between px-5 py-6">
            <img className="w-36" src={assets.logo} alt="" />
            <img className="w-7 h-7 rounded-full hover:scale-155  transition-all duration-500" onClick={() => setMenu(false)} src={assets.cross_icon} alt="" />
          </div>
          {token? <ul className="flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium">
            <NavLink className="w-full"  to='/' onClick={() => setMenu(false)}><p className="px-4 py-2  h-14 rounded w-full flex items-center justify-center hover:bg-indigo-200 text-xl hover:text-2xl">HOME</p></NavLink>
            <NavLink className="w-full" to='/doctors' onClick={() => setMenu(false)}><p className="px-4 py-2 h-14 rounded w-full flex items-center justify-center hover:bg-indigo-200 text-xl hover:text-2xl">ALL DOCTORS</p></NavLink>
            <NavLink className="w-full" to='/about' onClick={() => setMenu(false)}><p className="px-4 py-2 h-14 rounded w-full flex items-center justify-center hover:bg-indigo-200 text-xl hover:text-2xl">ABOUT</p></NavLink>
            <NavLink className="w-full" to='/contact' onClick={() => setMenu(false)}><p className="px-4 py-2 h-14 rounded w-full flex items-center justify-center hover:bg-indigo-200 text-xl hover:text-2xl">CONTACT</p></NavLink>
          </ul>: <ul className="flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium">
            <NavLink className="w-full"  to='/login' onClick={() => setMenu(false)}><p className="px-4 py-2  h-14 rounded w-full flex items-center justify-center hover:bg-indigo-200 text-xl hover:text-2xl">LOGIN</p></NavLink>
          </ul>
            }
        </div>
      </div>
    </div>
  );
};

export default Navbar;
