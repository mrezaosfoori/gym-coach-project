import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import Loader from "./shared/Loader";

// Register the components with Chart.js
ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
  Legend,
  {
    id: "canvasBackgroundColor",
    beforeDraw: (chart) => {
      const { ctx, width, height } = chart;
      ctx.save();
      ctx.globalCompositeOperation = "destination-over";
      ctx.fillStyle = "#6D63FF"; // ← your background colour
      ctx.fillRect(0, 0, width, height);
      ctx.restore();
    },
  }
);

const LineChart = ({ chartData, timeFrame }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate data loading with a timeout
    const loadData = () => {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
      }, 500); // Adjust timeout as needed
    };

    loadData();
  }, [timeFrame]); // Reload when chartData or timeFrame changes

  if (loading) {
    return (
      <div className="w-full h-full flex-center  min-h-[300px]">
        <Loader />
      </div>
    ); // Add your loader style or component here
  }

  const data = {
    labels: chartData.map((item) => item.day),
    datasets: [
      {
        label: "تعداد فعالیت‌ها",
        data: chartData.map((item) => item.activities),
        fill: true,
        borderWidth: 10,
        borderColor: "#E95F8B",
        backgroundColor: "pink",
        tension: 0.5,
        pointBackgroundColor: "#E95F8B",
        pointborderwidth: "#E95F8B",
        pointBorderColor: "white",
        pointHoverBackgroundColor: "white",
        pointHoverBorderColor: "#E95F8B",
      },
    ],
  };

  const options = {
    responsive: true,

 
    scales: {
     
      y: {
       
        grid: {
          display: false,
        },
        ticks: {
          textStrokeColor: "orange",
          color: "#fff",
          major:{
            color: "orange",
          },
          display: true, // ❌ Hide Y-axis numbers
          font: {
            family: "Estedad",
          },
        },
      },
      x: {
        grid: {
          display: true,
          color:"#AEA8FF",
          lineWidth:3
        },
        ticks: {
          color: "#AEA8FF",
          tickColor:"green",
          font: {
            family: "Estedad",
            size: 14,
            weight:"600"
          },
        },
      },
    },
  };

  return (
    <Line
      data={data}
      options={options}
      
    />
  );
};

export default LineChart;
