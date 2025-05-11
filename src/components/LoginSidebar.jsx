import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

import arrowDown from "../assets/images/downArrow.svg";

import { loginSidebarMenu } from "../lib/constants";
import icons from "../lib/icons";
import SemiCircleGauge from "./shared/SemiCircleGauge";
import { useSignOutUser } from "../lib/queries/queriesAndMutations";
import { AuthContext } from "../lib/context/AuthProvider";
import Cookies from "js-cookie"

const LoginSidebar = () => {
    const { user, isPending } = useContext(AuthContext);
  const navigate = useNavigate();
  const { mutateAsync: signOut } = useSignOutUser();
  const handleSignOut = async () => {
    const response = await signOut();
   
    console.log({ response });
    console.log(!!response);
    if(!!response){
      console.log("sign out")
      navigate("/sign-in")
       Cookies.remove('a_session_console')
       Cookies.remove('a_session_console_legacy')
    }
    
  };

  const [activeMenu, setActiveMenu] = useState(null);

  const handleMenuClick = (index, nav) => {
    setActiveMenu(index);
    const targetPath = nav.path;
    navigate(targetPath);
  };

  return (
    <div className="flex flex-col justify-between h-full py-[20px] px-4 bg-white shadow-xl ">
      {/* Brand */}
      <div className="flex gap-2 justify-between items-center">
        <div className="flex gap-2 items-center">
          <img
            src={icons.avatar}
            alt="Logo"
            className="rounded-full w-12 h-12 bg-white border-2 border-purple-400 p-1"
            onClick={()=>navigate("/profile")}
          />

          <div>
            <p className="text-[16px] font-semibold  line-clamp-1 min-w-fit">
            {user?.name}
            </p>
            <p className="text-[13px] text-slate-500">4 سال پیش</p>
          </div>
        </div>
        <button
          onClick={() => handleSignOut()}
          className="w-fit  mx-4 flex justify-center"
        >
          <img src={icons.logout} alt="Logo" className="rounded-md  " />
        </button>
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
                <div className="bg-blue-900 bg-opacity-15 w-[54px] h-[54px] rounded-full p-3  ">
                  <img
                    width={28}
                    height={28}
                    src={nav.icon}
                    alt="icon"
                    className=" rotate-90 rounded-full "
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
      <div className="flex flex-col justify-center items-center gap-4 w-[300px] h-[300px] ">
        <p className="text-[22px]">هدف کاهش وزن</p>
        <p className="text-[22px]">
          کاهش وزن:<span className="font-bold font ">5 kg</span> درماه{" "}
        </p>
        <SemiCircleGauge value={"20"} max={"100"} />
      </div>
    </div>
  );
};

export default LoginSidebar;
