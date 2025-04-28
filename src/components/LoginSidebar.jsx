import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

import arrowDown from "../assets/images/downArrow.svg";
import arrowUp from "../assets/images/upArrow.svg";
import { loginSidebarMenu } from "../lib/constants";
import icons from "../lib/icons";
import SemiCircleGauge from "./shared/SemiCircleGauge";

const LoginSidebar = () => {
  const navigate = useNavigate();

  const [activeMenu, setActiveMenu] = useState(null);

  const handleMenuClick = (index, nav) => {
    setActiveMenu(index);
    const targetPath = nav.path;
    navigate(targetPath);
  };

  return (
    <div className="flex flex-col justify-between h-full py-[20px] px-4 bg-white shadow-xl ">
      {/* Brand */}
      <div className="flex gap-2 items-center">
        <img
          src={icons.avatar}
          alt="Logo"
          className="rounded-full w-12 h-12 bg-white border-2 border-purple-400 p-1"
        />

        <div>
          <p className="text-[16px] font-semibold  line-clamp-1 min-w-fit">
            محمدرضا عصفوری
          </p>
          <p className="text-[13px] text-slate-500">4 سال پیش</p>
        </div>
      </div>

      {/* Menu Items */}
      <div className="flex flex-col items-center   ">
        {loginSidebarMenu.map((nav, index) => {
          return (
            <div
              className="w-full flex justify-between py-4  min-w-[200px]"
              key={index}
              onClick={() => handleMenuClick(index, nav)}
            >
              <div className="flex items-center gap-2">
                <div className="bg-slate-200 rounded-full p-3 ">
                  <img
                    width={28}
                    height={28}
                    src={nav.icon}
                    alt="icon"
                    className=" rotate-90 rounded-full"
                  />
                </div>
                <p className="text-black">{nav.title}</p>
              </div>
              <div className="p-2">
                <img
                  width={28}
                  height={28}
                  src={arrowDown}
                  alt="icon"
                  className=" rotate-90 rounded-md border-2 border-slate-200 cursor-pointer"
                />
              </div>
            </div>
          );
        })}
      </div>

      {/* Bottom Section */}
      <div className="flex flex-col justify-center items-center gap-4">
        <p>هدف کاهش وزن</p>
        <SemiCircleGauge value={"55"} max={"200"}/>
      </div>
    </div>
  );
};

export default LoginSidebar;
