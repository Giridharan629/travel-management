import React, { useState } from "react";
import Navbar from "./Navbar";

const Header = () => {

  const [toggle,setToggle] = useState(false)

  return (
    <div className="fixed   w-full top-0 z-10 bg-white/60 backdrop-blur-2xl p-3">
      <div className="container mx-auto flex justify-between items-center relative">


        <div className="logo">
          <img 
          src="/logo.png" 
          className="w-25 max-sm:w-20" 
          alt="logo" />
        </div>


        <div className=" flex items-center justify-center gap-5 ">

          <Navbar toggle={toggle} />

          <button className="btn-primary text-sm max-sm:text-xs cursor-pointer hover:scale-102 transition-transform">
            Book Now
          </button>

          <button
            onClick={()=>setToggle(!toggle)} 
            className="flex items-center lg:hidden cursor-pointer"
          >
            <span 
            className="material-symbols-rounded text-zinc-800">
              {
                toggle ? <i className="fa-solid fa-xmark"></i> : <i className="fa-solid fa-bars"></i>
              }
            </span>
          </button>

        </div>
      </div>
    </div>
  );
};

export default Header;
