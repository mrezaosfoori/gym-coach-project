import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

import arrowDown from "../assets/images/downArrow.svg";
import arrowUp from "../assets/images/upArrow.svg";
import { sidebar } from "../lib/constants";
import icons from "../lib/icons";

const SideBar = () => {
  const navigate = useNavigate();

  const [activeMenu, setActiveMenu] = useState(null);



  const handleMenuClick = (index, nav) => {
    setActiveMenu(index);
    const targetPath = nav.path
    navigate(targetPath);
  };

  return (
    <div className="min-w-[240px] text-title-sm-regular rounded-lg flex flex-col justify-between h-full bg-red-500 p-3">
      {/* Brand */}
      <div className="flex gap-6 items-center px-4 pt-4">
        <div className="text-[28px] font-semibold text-white bg-[#6553B2] w-[56px] h-[56px] flex items-center justify-center rounded-2xl">
          <img src={icons.logo} alt="Logo" />
        </div>
        <p className="text-[28px] font-semibold text-white">Edu Era</p>
      </div>

      {/* Menu Items */}
      <div className="flex flex-col ">
        {sidebar.map((nav, index) => {
          const isActive = activeMenu === index;

          return (
            <div
              key={index}
              className={`relative flex justify-between items-center text-[20px] text-white py-4 px-8 rounded-r-[20px] cursor-pointer hover:border-b-2 hover:border-b-primary-40 ${
                isActive ? "bg-[#c0c0c0]" : "bg-[#660000]"
              }`}
              onClick={() => handleMenuClick(index, nav)}
              aria-expanded={isActive}
              aria-controls={`submenu-${index}`}
            >
              {/* Decorative shapes for active item */}
              {isActive && (
                <>
                  <div className="w-10 h-10 bg-[#c0c0c0] absolute top-0 left-0 -translate-y-[100%] z-10" />
                  <div className="w-10 h-10 bg-[#660000] absolute top-0 left-0 -translate-y-full rounded-bl-[40px] z-10" />
                  <div className="w-10 h-10 bg-[#660000] absolute bottom-0  translate-y-full left-0 z-20 rounded-tl-[40px] " />
                  <div className="w-10 h-10 bg-[#c0c0c0] absolute bottom-0 left-0 translate-y-full z-10  " />
                </>
              )}

              <div className={`flex items-center gap-2 ${isActive ? "text-black font-bold" : ""}`}>
                {nav.icon && <img width={16} height={16} src={nav.icon} alt="icon" />}
                <p>{nav.title}</p>
              </div>

              {nav.subNav?.length > 0 && (
                <img
                  src={isActive ? arrowUp : arrowDown}
                  alt="Toggle"
                  className="w-4 h-4"
                />
              )}
            </div>
          );
        })}
      </div>

      {/* Bottom Section */}
      <div className="bg-white w-[236px] h-[300px] mx-auto">asda</div>
    </div>
  );
};

export default SideBar;
