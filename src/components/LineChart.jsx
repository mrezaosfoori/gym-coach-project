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
  Legend
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
        borderColor: "orange",

        tension: 0.5,
        pointBackgroundColor: "orange",
        pointBorderColor: "white",
        pointHoverBackgroundColor: "white",
        pointHoverBorderColor: "orange",
      },
    ],
  };

  const options = {
    responsive: true,
    backgroundColor: "red",
    plugins: {
      tooltip: {
        bodyFont: {
          family: "Estedad",
        },
        titleFont: {
          family: "Estedad",
        },
      },
    },
    scales: {
      y: {
        grid: {
          display: false,
        },
        ticks: {
          display: false, // ❌ Hide Y-axis numbers
          font: {
            family: "Estedad",
          },
        },
      },
      x: {
        ticks: {
          font: {
            family: "Estedad",
          },
        },
      },
    },
  };

  return <Line data={data} options={options} />;
};

export default LineChart;
