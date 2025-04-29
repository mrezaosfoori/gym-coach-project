import React, { useState } from "react";
import LineChart from "./LineChart";

import { lastWeekData } from "../lib/constants";

const Statistics = ({ type, id }) => {
  const [timeFrame, setTimeFrame] = useState("week");

  return (
    <div className="flex flex-col  gap-4  shadow-xl p-4    ">
      <div className="  flex-center bg-main p-8 rounded-tr-[80px]  rounded-bl-[80px] ">
        <div className="flex justify-between p-4 min-h-[120px]">
          <p className="text-white text-[18px] font-semibold">فعالیت‌ها</p>
          <select name="" id="" className="h-fit bg-transparent text-white py-4 px-7 text-[14px] rounded-xl border border-white ">
            <option value="">هفتگی</option>
            <option value="">ماهانه</option> 
          </select>
        </div>
        <LineChart chartData={lastWeekData} timeFrame={timeFrame} />
      </div>
    </div>
  );
};

export default Statistics;
