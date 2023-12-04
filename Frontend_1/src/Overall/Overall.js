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
                        <ResponsiveContainer aspect={3.5}>
                            <BarChart data={data3[0]} layout="vertical" >
                                <Bar dataKey={"value"} fill="green" radius={8} />
                                <XAxis type="number" domain={[0,1000]} dataKey="value"/>
                                <YAxis type="category" dataKey="name"/>
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            </div>
            <div className = "statcard">
                <div class ="statcard_header">
                    <h2>Filu</h2>
                </div>
                <div className = "statcard__content">
                    <h3 className = "statcard__title">statsi</h3>
                    <span className = "statcard__number">1</span>
                </div>
            </div>
            <div className = "statcard">
                <div class ="statcard_header">
                    <h2>Estates</h2>
                </div>
                <div className = "statcard__content">
                    <div className='statChart'>
                        <ResponsiveContainer aspect={3.5}>
                            <PieChart>
                                <Pie data={data3[0]} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={30} fill="#8884d8" />
                                <Pie data={data3[1]} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={20} outerRadius={40} fill="#82ca9d" label />
                            </PieChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            </div>
            <div className = "statcard">
                <div class ="statcard_header">
                    <h2>Filu</h2>
                </div>
                <div className = "statcard__content">
                    <span className = "statcard__number">1</span>
                    <p>Tänne jotaki dataa</p>
                </div>
            </div>
            <div className = "statcard">
                <div class ="statcard_header">
                    <h2>Filu</h2>
                </div>
                <div className = "statcard__content">
                    <h3 className = "statcard__title">statsi</h3>
                    <span className = "statcard__number">1</span>
                    <p>Tänne jotaki dataa</p>
                </div>
            </div>
            <div className = "statcard">
                <div class ="statcard_header">
                    <h2>Joku hieno</h2>
                </div>
                <div className = "statcard__content">
                    <div className='statChart'>
                        <ResponsiveContainer aspect={3.5}>
                            <BarChart data={data2} layout="vertical" >
                                <Bar dataKey="value" fill="green" radius={8} />
                                <XAxis type="number" domain={[0,1000]} dataKey="value"/>
                                <YAxis type="category" dataKey="name"/>
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            </div>
            <div className = "statcard">
                <div class ="statcard_header">
                    <h2>Filu</h2>
                </div>
                <div className = "statcard__content">
                    <h3 className = "statcard__title">statsi</h3>
                    <span className = "statcard__number">1</span>
                    <p>Tänne jotaki dataa</p>
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