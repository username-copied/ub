import React from "react";
import Logo from "../assests/logo.jpg";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex justify-between m-2 sm:m-4">
      <div className="flex items-center ">
        <img className="h-[50px] " src={Logo} alt="Logo" />
        <p className=" font-bold">Utkrista Bharath</p>
      </div>
      <div className=" flex items-center gap-4 sm:gap-12">
        <Link to="/">
          <button className="bg-[#ca83499d] p-2 m-2 hover:scale-110 ease-in-out duration-150 rounded-lg">
            Home
          </button>
        </Link>
        <Link to="/initiatives">
          <button className="bg-[#ca83499d] hover:scale-110 ease-in-out duration-150 p-2 m-2 rounded-lg">
            Initiatives
          </button>
        </Link>
        <Link to="/about">
          {" "}
          <button className="bg-[#ca83499d] hover:scale-110 ease-in-out duration-150 p-2 m-2 rounded-lg">
            About{" "}
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
