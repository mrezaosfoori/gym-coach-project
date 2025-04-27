import { Outlet } from "react-router-dom";
import SideBar from "./SideBar";
import MobileSidebar from "./MobileSidebar";
import LoginSidebar from "./LoginSidebar";

const AppLayout = () => {
  return (
 <div className="flex">
     <div className="flex-1 flex flex-col lg:flex-row lg:px-8 lg:p-4 h-screen md:gap-8 lg:gap-8 ">
       <div className=" ">
         <SideBar />
       </div>
     
       {/* mobile navabr */}
       <div className="z-[9999] block lg:hidden bg-main p-4">
         <MobileSidebar />
       </div>
       <div className="lg:w-full  lg:rounded-[0px] lg:p-0 h-full overflow-y-scroll dark-scrollbar ">
         <Outlet />
       </div>
      
     </div>
     <div className=" ">
         <LoginSidebar />
       </div>
  
 </div>
  );
};

export default AppLayout;
