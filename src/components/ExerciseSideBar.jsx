import React from "react";
import { exercises } from "../lib/constants";
import icons from "../lib/icons";

const ExerciseSideBar = ({ setCurrent,className,close }) => {
  return (
    <div className={className}>
      <div className="relative w-full ">
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
          <div
            key={index}
            className="border bg-white  hover:bg-slate-50"
            onClick={() => {setCurrent(index);close(    )}}
          >
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
  );
};

export default ExerciseSideBar;
