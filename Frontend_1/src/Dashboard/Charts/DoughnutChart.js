import React from 'react';
import { ResponsivePie } from '@nivo/pie';

const PieChart = ({ data }) => {
    const customColorScheme = ['#00507A', '#009EA3', '#43C59E'];
    return (
    <div style={{ width: '600px', height: '46vh' }}>
            <ResponsivePie
                data={data}
                margin={{ top: 20, bottom: 80, right: 290 }}
                innerRadius={0.5}
                padAngle={0.7}
                cornerRadius={3}
                colors={customColorScheme} // Change colors here
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
                        symbolSize: 12,
                        symbolShape: 'circle',
                        symbolBorderColor: '#D0D1D2'
                    }
                ]}
            />
    </div>
    );
};

export default PieChart;
