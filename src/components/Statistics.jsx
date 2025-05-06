import React, { useState } from "react";
import LineChart from "./LineChart";

import { lastWeekData } from "../lib/constants";

const Statistics = ({ type, id }) => {
  const [timeFrame, setTimeFrame] = useState("week");

  return (
    <div className="  flex-center   min-h-[390px] bg-main p-1 ">
      <div className="flex justify-between p-3 ">
        <p className="text-white text-[18px] font-semibold">فعالیت‌ها</p>
        <select
          name=""
          id=""
          className="h-fit bg-transparent text-white py-4 px-7 text-[14px] rounded-xl border border-white "
        >
          <option value="">هفتگی</option>
          <option value="">ماهانه</option>
        </select>
      </div>
      <LineChart chartData={lastWeekData} timeFrame={timeFrame} />
    </div>
  );
};

export default Statistics;
