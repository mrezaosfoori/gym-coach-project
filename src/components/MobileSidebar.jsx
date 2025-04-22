import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

import arrowDown from "../assets/images/downArrow.svg";
import arrowUp from "../assets/images/upArrow.svg";
import { sidebar } from "../lib/constants";
import icons from "../lib/icons";

const MobileSidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeMenu, setActiveMenu] = useState(null);
  const [showNavbar, setShowNavabr] = useState(false);

  useEffect(() => {
    const matchedIndex = sidebar.findIndex((nav) =>
      location.pathname.startsWith(nav.path)
    );
    setActiveMenu(matchedIndex);
  }, [location.pathname]);

  const handleMenuClick = (index, nav) => {
    setActiveMenu(index);
    const targetPath = nav.subNav?.length
      ? nav.path + nav.subNav[0].path
      : nav.path;
    navigate(targetPath);
  };

  return (
    <>
      <div className="flex justify-between bg-black items-center bg-opacity-20">
        <div className="flex gap-6 items-center ">
          <div className="text-[28px] font-semibold text-white bg-[#6553B2] w-[56px] h-[56px] flex items-center justify-center rounded-2xl">
            <img src={icons.logo} alt="Logo" />
          </div>
          <p className="text-[28px] font-semibold text-white">Edu Era</p>
        </div>
        <img
          src={icons.hamburger}
          alt="Logo"
          className="w-8 h-8"
          onClick={() => setShowNavabr(true)}
        />
      </div>
      <div
        onMouseLeave={() => setShowNavabr(false)}
        className={`min-w-[240px] text-title-sm-regular rounded-lg flex flex-col justify-between h-full transition-all duration-700 ${showNavbar ? "fixed left-0 top-0 bg-slate-300 opacity-100" : "fixed left-[-100%] top-0"}`}
      >
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
                className={`relative flex justify-between items-center text-[20px] py-4 px-8 rounded-r-[20px] cursor-pointer hover:border-b-2 hover:border-b-primary-40 ${
                  isActive ? "bg-[#c0c0c0] " : "text-black"
                }`}
                onClick={() => handleMenuClick(index, nav)}
                aria-expanded={isActive}
                aria-controls={`submenu-${index}`}
              >
                <div
                  className={`flex items-center gap-2 ${isActive ? "text-black font-bold" : ""}`}
                >
                  {nav.icon && (
                    <img width={16} height={16} src={nav.icon} alt="icon" />
                  )}
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
    </>
  );
};

export default MobileSidebar;
