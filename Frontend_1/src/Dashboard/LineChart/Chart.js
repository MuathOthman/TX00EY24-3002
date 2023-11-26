// DoughnutChartWithCustomCSS.jsx
import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import Chart from 'chart.js/auto'; // Import Chart from 'chart.js/auto'

const data = {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [
        {
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: ['#e74c3c', '#3498db', '#f1c40f', '#2ecc71', '#9b59b6', '#e67e22'],
            hoverBackgroundColor: ['#c0392b', '#2980b9', '#f39c12', '#27ae60', '#8e44ad', '#d35400'],
            pointStyle: ['point-style-1', 'point-style-2', 'point-style-1', 'point-style-2', 'point-style-1', 'point-style-2'],
        },
    ],
};

const options = {
    maintainAspectRatio: false,
};

const DoughnutChartWithCustomCSS = () => {
    return (
        <div>
            <Doughnut data={data} options={options} />
        </div>
    );
};

export default DoughnutChartWithCustomCSS;
