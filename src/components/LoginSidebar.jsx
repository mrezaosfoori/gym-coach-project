import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

import arrowDown from "../assets/images/downArrow.svg";
import arrowUp from "../assets/images/upArrow.svg";
import { sidebar } from "../lib/constants";
import icons from "../lib/icons";

const LoginSidebar = () => {
  const navigate = useNavigate();

  const [activeMenu, setActiveMenu] = useState(null);

  const handleMenuClick = (index, nav) => {
    setActiveMenu(index);
    const targetPath = nav.path;
    navigate(targetPath);
  };

  return (
    <div className=" text-title-sm-regular   flex-col justify-between h-full p-3  hidden lg:block bg-white">
      {/* Brand */}
      <div className="flex gap-3  px-1 pt-4">
        <img src={icons.avatar} alt="Logo" className="rounded-full w-6 h-6" />

        <p className="text-[21px] font-semibold  line-clamp-1 min-w-fit">
          osfoori
        </p>
      </div>

      {/* Menu Items */}
      <div className="flex flex-col items-center ">
        {sidebar.map((nav, index) => {
          const isActive = activeMenu === index;

          return (
            <div
              key={index}
              className={`relative flex justify-between items-center text-[20px] text-white py-4 px-2 rounded-r-[20px] cursor-pointer  `}
              onClick={() => handleMenuClick(index, nav)}
              aria-expanded={isActive}
              aria-controls={`submenu-${index}`}
            >
              <div
                className={`flex justify-center items-center gap-2 ${isActive ? "text-black font-bold" : ""}`}
              >
                {nav.icon && (
                  <img
                    width={22}
                    height={22}
                    src={nav.icon}
                    alt="icon"
                    className={` ${isActive ? "invert shadow-md" : ""}`}
                  />
                )}
                <p className="">{nav.title}</p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Bottom Section */}
    </div>
  );
};

export default LoginSidebar;
