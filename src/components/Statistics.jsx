import React, {  useState } from "react";
import LineChart from "./LineChart";

import { lastWeekData } from "../lib/constants";

const Statistics = ({ type, id }) => {
  const [timeFrame, setTimeFrame] = useState("week");



;

  return (
    <div className="flex flex-col  gap-4  shadow-xl p-4    ">
    
      <div className=" max-h-[50vh] flex-center ">
        <LineChart chartData={lastWeekData} timeFrame={timeFrame} />
      </div>
    </div>
  );
};

export default Statistics;
