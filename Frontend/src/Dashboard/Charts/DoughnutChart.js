import React, {useEffect, useState} from 'react';
import { ResponsivePie } from '@nivo/pie';
import {useParams} from "react-router-dom";



const PieChart = () => {
    const token = localStorage.getItem("token");
    const [property, setProperty] = useState(null);
    const [available, setAvailable] = useState(0);
    const [reserved, setReserved] = useState(0);
    const { id } = useParams();
    useEffect(() => {
        fetch(`/api/property/`, {
            method: "GET",
            headers: {
                "Authorization": `Bearer ${token}`,
                "Content-Type": "application/json",
            },
        })
            .then((response) => response.json())
            .then((data) => {
                setProperty(data);
                setAvailable(data.filter((property) => property.available === true).length);
                setReserved(data.filter((property) => property.available === false).length);
                console.log("Available " + available)
                console.log("Reserved " + reserved)
            })
            .catch((error) => console.error("Error fetching data:", error));
    }, []);
    const data = [
        {
            "id": "Reserved",
            "label": "Reserved",
            "value": available,
        },
        {
            "id": "Free",
            "label": "Free",
            "value": reserved
        }
    ];
    const customColorScheme = ['#00507A', '#009EA3', '#43C59E'];
    return (
        <div style={{ width: '600px', height: '42vh', marginTop: '-30px', marginLeft: "-30px" }}>
            <ResponsivePie
                data={data}
                margin={{ top: 20, bottom: 80, right: 290 }}
                innerRadius={0.5}
                padAngle={0.7}
                cornerRadius={3}
                colors={customColorScheme}
                borderWidth={1}
                borderColor={{ from: 'color', modifiers: [['darker', 0.2]] }}
                animate={true}
                motionStiffness={90}
                motionDamping={15}
                enableArcLabels={false}
                enableArcLinkLabels={false}
                enableRadialLabels={false}
                legends={[
                    {
                        anchor: 'top-right',
                        direction: 'column',
                        justify: false,
                        translateX: 100,
                        translateY: 100,
                        itemsSpacing: 0,
                        itemDirection: 'left-to-right',
                        itemWidth: 80,
                        itemHeight: 20,
                        itemOpacity: 0.75,
                        symbolSize: 16,
                        symbolShape: 'circle',
                        symbolBorderColor: '#D0D1D2',
                        fontSize: 34,
                        text: {
                            fontSize: 82,
                        },
                    }
                ]}
            />
        </div>
    );
};

export default PieChart;
