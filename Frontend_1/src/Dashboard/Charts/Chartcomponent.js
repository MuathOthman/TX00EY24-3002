import { ResponsiveLine } from '@nivo/line'
import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import React from 'react';

const data2 = [
    {
        "id": "revenue",
        "data": [
            {
                "x": "january",
                "y": 10
            },
            {
                "x": "february",
                "y": 20
            },
            {
                "x": "march",
                "y": 30
            },
            {
                "x": "april",
                "y": 40
            },
            {
                "x": "may",
                "y": 50
            },
            {
                "x": "june",
                "y": 60
            },
            {
                "x": "july",
                "y": 70
            },
            {
                "x": "august",
                "y": 80
            },
            {
                "x": "september",
                "y": 90
            },
            {
                "x": "october",
                "y": 100
            },
            {
                "x": "november",
                "y": 10
            },
            {
                "x": "december",
                "y": 30
            }
        ]
    }
]

const Chartcomponent = () => {
    const [chart1, setChart1] = useState([]);
    const { id } = useParams();
    const token = localStorage.getItem('token');

    const fetchData = async () => {
        try {
            // Replace this with your actual fetch call
            const response = await fetch('YOUR_API_ENDPOINT');
            const data = await response.json();

            // Manipulate and structure the fetched data as per your required format
            const structuredData = [
                {
                    id: 'revenue',
                    data: data.map((item, index) => ({
                        x: item.month, // Assuming the fetched data has a 'month' property
                        y: item.value, // Assuming the fetched data has a 'value' property
                    })),
                },
            ];

            setFetchedData(structuredData);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    fetchData();

    return (
        <div style={{ width: '1200px', height: '56vh' }}>
            <ResponsiveLine
                data={data2}
                colors={"#00507A"}
                enableSlices={false}
                enableCrosshair={false}
                enablePointLabel={false}
                enableArea={false}
                margin={{ right: 110, top: 50, bottom: 60, left: 50 }}
                xScale={{ type: 'point' }}
                yScale={{
                    type: 'linear',
                    min: 'auto',
                    max: 'auto',
                    stacked: true,
                    reverse: false
                }}
                yFormat=" >-.2f"
                axisTop={null}
                axisRight={null}
                axisBottom={{
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: 0,
                    legend: 'Month',
                    legendOffset: 36,
                    legendPosition: 'middle'
                }}
                axisLeft={{
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: 0,
                    legend: 'count',
                    legendOffset: -40,
                    legendPosition: 'middle'
                }}
                pointSize={10}
                pointBorderWidth={2}
                pointLabelYOffset={-12}
                useMesh={true}

            />
        </div>
    );
};

export default Chartcomponent;
