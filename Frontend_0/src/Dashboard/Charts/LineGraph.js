// LineChart.js
import React from "react";
import { Line } from "react-chartjs-2";
import { Chart, registerables } from 'chart.js/auto';

const LineChart = ({ width, height }) => {
  const data = {
    labels: ["January", "February", "March", "April", "May", "June"],
    datasets: [
      {
        label: "Monthly Sales",
        data: [12, 19, 3, 5, 2, 3],
        fill: false,
        borderColor: "rgb(75, 192, 192)",
        tension: 0.1,
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div style={{ width: `${width}`, height: `${height}` }}>
      <Line data={data} options={options} />
    </div>
  );
};

export default LineChart;
