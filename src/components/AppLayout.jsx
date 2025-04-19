
import { Outlet } from "react-router-dom";
import SideBar from './SideBar'

const AppLayout = () => {
  return (
    <div className='flex p-6 h-screen '>
      <div className='w-1/4 h-full'>
          <SideBar/>
      </div>
      <div className='w-3/4 bg-[#C0C0C0] rounded-[48px] p-4'>
      <Outlet />
      </div>
       
    </div>
  )
}

export default AppLayout

