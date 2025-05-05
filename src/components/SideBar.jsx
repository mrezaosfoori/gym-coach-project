import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { sidebar } from "../lib/constants";
import icons from "../lib/icons";

const SideBar = () => {
  const navigate = useNavigate();

  const [activeMenu, setActiveMenu] = useState(null);

  const handleMenuClick = (index, nav) => {
    setActiveMenu(index);
    const targetPath = nav.path;
    navigate(targetPath);
  };

  return (
    <div className=" text-title-sm-regular   flex-col justify-between h-full p-3 rounded-[50px]   hidden lg:block bg-main w-[140px]">
      {/* Brand */}
      <div className="flex flex-col gap-1 items-center px-1 pt-4 mb-12">
        <div className="text-[28px] font-semibold text-white bg-[#6553B2] w-[56px] h-[56px] flex items-center justify-center rounded-2xl">
          <img src={icons.logo} alt="Logo" className="rounded-md" />
        </div>
        <p className="text-[21px] font-semibold text-white min-w-[110px] text-center">
          کمک مربی 
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
                    className={` ${isActive ? " bg-white border-2" : "invert"}`}
                  />
                )}
                <p className="block lg:hidden">{nav.title}</p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Bottom Section */}
    </div>
  );
};

export default SideBar;
