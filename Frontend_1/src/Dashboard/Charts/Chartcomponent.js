import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ResponsiveLine } from '@nivo/line';
import _ from 'lodash';
import SiteName from "../../Sitename/SiteName";

const ChartComponent = () => {
    const [chartData, setChartData] = useState([]);
    const { id } = useParams();
    const token = localStorage.getItem('token');

    useEffect(() => {
        fetch(`http://localhost:8003/api/chart1/`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        })
            .then(response => response.json())
            .then(data => {
                const modifiedData = data.map(obj => {
                    const { _id, userId, __v, ...rest } = obj;
                    return rest;
                });

                const transformedData = modifiedData.map(obj => {
                    return {
                        id: "chart1", // Set your desired id
                        color: "hsl(211, 70%, 50%)", // Set your desired color
                        data: Object.keys(obj).map(key => ({
                            "x": _.capitalize(key),
                            "y": obj[key]
                        }))
                    };
                });
                setChartData(transformedData);
            })
            .catch(error => console.error('Error fetching data:', error));
    }, [token]); // Ensure useEffect runs when token changes (if needed)

    return (
        <div>
        <div style={{ width: '1200px', height: '56vh', marginTop: '-54px'}}>
            <ResponsiveLine
                data={chartData}
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
                    legend: 'Count',
                    legendOffset: -40,
                    legendPosition: 'middle'
                }}
                pointSize={10}
                pointBorderWidth={2}
                pointLabelYOffset={-12}
                useMesh={true}
            />
        </div>
        </div>
    );
};

export default ChartComponent;
