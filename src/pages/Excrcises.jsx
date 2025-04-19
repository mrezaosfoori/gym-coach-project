import { useNavigate } from "react-router-dom";
import { exercises } from "../lib/constants";

import icons from "../lib/icons";
import ExerciseCard from "../components/ExerciseCard ";
import { useState } from "react";

const Excrcises = () => {
  const navigate = useNavigate();
  const [current, setCurrent] = useState(1)

  return (
    <>
      <div className="w-full p-2 h-full flex flex-col gap-4">
        <div className="flex flex-col md:flex-row justify-between w-full gap-2">
          <div className="flex flex-col gap-1">
            <p className="text-[20px] font-bold">حرکت های ورزشی</p>
            <p className="text-[16px] font-semibold text-slate-800 ">
              ​برای تمرین‌های موجود جستجو کنید و تمرین‌های سفارشی خود را ایجاد
              کنید.
            </p>
          </div>
          <div className="flex gap-4  max-h-[60px]">
            <div className="bg-red-900 text-white px-1 md:px-4 rounded-lg py-1 md:py-2 flex gap-2 items-center cursor-pointer">
              <img src={icons.plus} alt="" className="w-4 h-4 invert" />
              <button>افزودن حرکت</button>
            </div>
          </div>
        </div>

        <div className="flex gap-1 h-full overflow-hidden ">
          <div className="flex-1 p-1 border flex flex-col gap-4">
            <div className="relative w-full bg-black">
              <img
                src={icons.search}
                alt=""
                className="w-4 h-4 absolute top-1/2 -translate-y-1/2 left-3"
              />
              <input
                type="text"
                placeholder="..."
                className="bg-slate-100 rounded-md  h-full px-8 py-2 w-full"
              />
            </div>
            <div className="border-t-2 border-slate-400 h-full overflow-y-scroll">
              {exercises.map((client, index) => (
                <div key={index} className="border bg-white  hover:bg-slate-50" onClick={()=>setCurrent(index)}>
                  <td className="px-4 py-2">
                    <div className="flex gap-1 items-center">
                      <img src={icons.avatar} alt="" className="w-8 h-8 " />
                     <div className="flex flex-col ">
                       <p> {client.name}</p>
                       <p className="text-slate-500"> {client.muscle}</p>
                     </div>
                    </div>
                  </td>
                 
                </div>
              ))}
            </div>
          </div>
          <div className="bg-white flex-[3] h-full">
          <ExerciseCard exercise={exercises[current]} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Excrcises;
