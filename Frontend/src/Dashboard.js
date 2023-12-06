import './dashboard.css';
import MyResponsiveLine from "./Dashboard/Charts/Chartcomponent";
import PieChart from "./Dashboard/Charts/DoughnutChart";
import {useEffect, useState} from "react";
import SiteName from "./Sitename/SiteName";
import Notification from "./Dashboard/Notification/Notification";
import MyResponsiveRadar from "./Dashboard/Charts/ActivePercentageBar";


function Dashboard() {
    return (
        <div className="App">
            <div className="parent">
                <div className="wrappers">
                    <div className="areacontainer"><SiteName name="Total Revenue"/><MyResponsiveLine/> </div>
                    <div className="chartcontainer"><SiteName name="Notifications"/>
                    <Notification/><Notification/></div>
                    <div className="minicardcontainer"><SiteName name="Chart2"/><PieChart/></div>
                    <div className="cardcontainer"><SiteName name="Chart3"/><MyResponsiveRadar/></div>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;