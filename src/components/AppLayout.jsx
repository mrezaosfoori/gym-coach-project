
import { Outlet } from "react-router-dom";
import SideBar from './SideBar'
import MobileSidebar from "./MobileSidebar";

const AppLayout = () => {
  return (
    <div className='flex flex-col lg:flex-row p-6 h-screen gap-2 lg:gap-0 '>
      <div className='w-1/4 h-full hidden lg:block'>
          <SideBar/>
      </div>

      {/* mobile navabr */}
      <div className='lg:hidden'>
          <MobileSidebar/>
      </div>
      <div className='lg:w-3/4 bg-[#C0C0C0] rounded-[48px] p-4'>
      <Outlet />
      </div>
       
    </div>
  )
}

export default AppLayout

