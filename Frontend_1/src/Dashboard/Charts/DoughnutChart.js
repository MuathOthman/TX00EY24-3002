import React from 'react';
import { ResponsivePie } from '@nivo/pie';

const data = [
    {
        "id": "Reserved",
        "label": "Reserved",
        "value": 212,
    },
    {
        "id": "Free",
        "label": "Free",
        "value": 372,
    }
];

const PieChart = () => {
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
