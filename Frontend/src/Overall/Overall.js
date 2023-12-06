import React from 'react';
import { BarChart, Bar, XAxis, CartesianGrid,YAxis, ResponsiveContainer, PieChart, Pie } from 'recharts';
import SiteName from "../Sitename/SiteName";
import ('./CSS/statCard.css');

const data = [
    { name: "Amount", value: 300 },
];

const data2 = [
    { name: "Amount", value: 800 },
];

const data3 = [data, data2];




const Overall = () => {
    return (
        <div>
            <SiteName name="Overall"/>
            <div className="overall">
            <div className = "statcard">
                <div class ="statcard_header">
                    <h2>Profits</h2>
                </div>
                <div className = "statcard__content">
                    <div className = "statChart">

                    </div>
                </div>
            </div>
            <div className = "statcard">
                <div class ="statcard_header">
                    <h2>DATA HERE</h2>
                </div>
                <div className = "statcard__content">
                    <h3 className = "statcard__title">statsi</h3>
                    <span className = "statcard__number">1</span>
                </div>
            </div>
            <div className = "statcard">
                <div class ="statcard_header">
                    <h2>DATA HERE</h2>
                </div>
                <div className = "statcard__content">
                    <div className='statChart'>

                    </div>
                </div>
            </div>
            <div className = "statcard">
                <div class ="statcard_header">
                    <h2>DATA HERE</h2>
                </div>
                <div className = "statcard__content">
                    <span className = "statcard__number">1</span>
                    <p></p>
                </div>
            </div>
            <div className = "statcard">
                <div class ="statcard_header">
                    <h2>DATA HERE</h2>
                </div>
                <div className = "statcard__content">
                    <h3 className = "statcard__title">statsi</h3>
                    <span className = "statcard__number">1</span>
                    <p></p>
                </div>
            </div>
            <div className = "statcard">
                <div class ="statcard_header">
                    <h2>DATA HERE</h2>
                </div>
                <div className = "statcard__content">
                    <div className='statChart'>

                    </div>
                </div>
            </div>
            <div className = "statcard">
                <div class ="statcard_header">
                    <h2>DATA HERE</h2>
                </div>
                <div className = "statcard__content">
                    <h3 className = "statcard__title">statsi</h3>
                    <span className = "statcard__number">1</span>
                    <p></p>
                </div>
            </div>
            {/* <BarChart width={600} height={100} data={data} layout="vertical" >
            <Bar dataKey="value" fill="green" />
            <CartesianGrid stroke="#ccc" />
            <XAxis type="number" domain={[0,1000]} dataKey="value"/>
            <YAxis type="category" dataKey="name"/>
        </BarChart> */}

        </div>
        </div>

    );
};

export default Overall;