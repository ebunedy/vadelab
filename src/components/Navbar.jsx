import React from "react";
 const Navbar = () => {
  return (
    <div className="flex pl-6 pr-6 pb-2 justify-between bg-gray-50 shadow-sm">
      <img src="logo.png" alt="" className="w-22 h-8 mt-1" />
      <div className="flex gap-5 self-end text-black font-semibold">
        <span className=" ">Skip the hassle</span>
        <span>Cruise through backend</span>
      </div>
      <button className="self-end bg-blue-600 px-3 py-1 rounded-lg text-white capitalize">
        get easy access
      </button>
    </div>
  );
};

export default Navbar;