import React from "react";

import Logo from "./Logo";
import Container from "./Container";
import { RiSearch2Line } from "react-icons/ri";
import { AiOutlineUser } from "react-icons/ai";
import { IoMdCart } from "react-icons/io";
import { FiLogOut } from "react-icons/fi";

const Header = () => {
  return (
    <div className="bg-bodyColor h-20 top-0 sticky z-50">
      <Container className="h-full flex items-center md:gap-x-5 justify-between md:justify-start">
        <Logo />
        {/* Search Field */}
        <div className="w-full bg-white hidden md:flex items-center gap-x-1 border-[1px] border-lightText/50 rounded-full px-4 py-1.5 focud-within:border-orange-600 group">
          <RiSearch2Line className="text-gray-500 group-focus-within:text-darkText duratiom-200" />
          <input
            type="text"
            placeholder="search for products"
            className="placeholder:text-sm flex-1 outline:none"
          />
        </div>
        {/* Login/register */}
        <div className="headerDiv">
          <AiOutlineUser className="text-2xl" />
          <p className="text-sm font-semibold">Login/Register</p>
        </div>
        {/* Cart button */}
        <div className="bg-black hover:bg-slate-950 rounded-full text-slate-100 hover:text-white flex items-center justify-center gap-x-1 px-3 py-1.5 border-[1px] border-black hover:border-orange-600 duration-200 relative">
          <IoMdCart className="text-xl" />
          <p className="text-sm font-semibold">$0.00 </p>
          <span className="bg-white text-orange-600 rounded-full text-xs font-semibold absolute -right-2 -top-1 w-5 h-5 flex items-center justify-center shadow-xl shadow-black">
            0
          </span>
        </div>
        {/* Logout Button */}
        <div className="headerDiv">
          <FiLogOut className="text-2xl" />
          <p className="text-sm font-semibold">Logout</p>
        </div>
      </Container>
    </div>
  );
};

export default Header;
