// ActivePercentageBar.js
import React from "react";
import { Bar } from "react-chartjs-2";

const ActivePercentageBar = ({ totalApartments, occupiedApartments }) => {
  const vacantApartments = totalApartments - occupiedApartments;
  const occupancyPercentage = ((occupiedApartments / totalApartments) * 100).toFixed(2);

  const data = {
    labels: ["Occupied", "Vacant"],
    datasets: [
      {
        data: [occupiedApartments, vacantApartments],
        backgroundColor: ["#36A2EB", "#FFCE56"],
        hoverBackgroundColor: ["#36A2EB", "#FFCE56"],
      },
    ],
  };

  const options = {
    indexAxis: "y", // Set the chart to be horizontal
    scales: {
      x: {
        beginAtZero: true,
        max: totalApartments,
      },
      y: {
        display: false,
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        callbacks: {
          label: function (context) {
            const labelIndex = context.dataIndex;
            const values = context.dataset.data;
            const label = context.label;
            const value = values[labelIndex];
            return `${label}: ${value} apartments`;
          },
        },
      },
    },
  };

  return (
    <div>
      <h3>Active Percentage</h3>
      <p>Total Apartments: {totalApartments}</p>
      <Bar data={data} options={options} />
      <p>Occupancy: {occupancyPercentage}%</p>
    </div>
  );
};

export default ActivePercentageBar;
