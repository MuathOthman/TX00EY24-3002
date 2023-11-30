import './dashboard.css';
import MyResponsiveLine from "./Dashboard/Charts/Chartcomponent";
import PieChart from "./Dashboard/Charts/DoughnutChart";
import {useEffect, useState} from "react";

const data = [
    {
        "id": "Reserved",
        "label": "Reserved",
        "value": 212,
        "color": "hsl(118, 70%, 50%)"
    }
    ,
    {
        "id": "Free",
        "label": "Free",
        "value": 372,
        "color": "hsl(118, 70%, 50%)"
    }

]
function Dashboard() {
    return (
        <div className="App">
            <div className="parent">
                <div className="wrappers">
                    <div className="areacontainer"><MyResponsiveLine/> </div>
                    <div className="chartcontainer"></div>
                    <div className="minicardcontainer"><PieChart data={data}/></div>
                    <div className="cardcontainer"></div>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;