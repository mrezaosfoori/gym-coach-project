import { Outlet } from "react-router-dom";
import SideBar from "./SideBar";
import MobileSidebar from "./MobileSidebar";

const AppLayout = () => {
  return (
    <div className="flex flex-col lg:flex-row lg:p-6 h-screen md:gap-2 lg:gap-0 ">
      <div className="w-1/4 h-full hidden lg:block">
        <SideBar />
      </div>

      {/* mobile navabr */}
      <div className="z-[9999] bg-main p-4">
        <MobileSidebar />
      </div>
      <div className="lg:w-3/4 bg-[#e9e9f1] lg:rounded-[48px] lg:p-4 h-full overflow-y-scroll dark-scrollbar">
        <Outlet />
      </div>
    </div>
  );
};

export default AppLayout;
