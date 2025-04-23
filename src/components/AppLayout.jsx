import { Outlet } from "react-router-dom";
import SideBar from "./SideBar";
import MobileSidebar from "./MobileSidebar";

const AppLayout = () => {
  return (
    <div className="flex flex-col lg:flex-row lg:p-6 h-screen gap-2 lg:gap-0 ">
      <div className="w-1/4 h-full hidden lg:block">
        <SideBar />
      </div>

      {/* mobile navabr */}
      <div className="z-[9999]">
        <MobileSidebar />
      </div>
      <div className="lg:w-3/4 bg-[#faf4f4] lg:rounded-[48px] lg:p-4 h-full overflow-y-scroll">
        <Outlet />
      </div>
    </div>
  );
};

export default AppLayout;
