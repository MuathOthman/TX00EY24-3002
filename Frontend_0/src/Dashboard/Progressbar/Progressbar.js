import React from 'react';
import { Doughnut } from 'react-chartjs-2';

const ProgressBar = ({ progress }) => {
    const data = {
        labels: ['Progress', 'Remaining'],
        datasets: [
            {
                data: [progress, 100 - progress],
                backgroundColor: [
                    `rgba(75, 192, 192, ${progress / 100})`,
                    'rgba(255, 255, 255, 0)', // Transparent color for the remaining portion
                ],
                borderWidth: 0,
            },
        ],
    };

    const options = {
        cutoutPercentage: 85,
        rotation: 1 * Math.PI,
        circumference: 1 * Math.PI,
        responsive: true,
        maintainAspectRatio: false,
        tooltips: { enabled: false },
    };

    return (
        <div style={{ width: '200px', height: '200px' }}>
            <Doughnut data={data} options={options} key={progress} />
        </div>
    );
};

export default ProgressBar;
