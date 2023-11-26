import './dashboard.css';
// import Sidenav from "../Dashboard/Panels/Sidenav";
// import Menubars from "../Dashboard/Panels/Menubars";
// import Area from "../Dashboard/Notification/Area";
// import Chart from "../Dashboard/LineChart/Chart";
// import Card from "./Dashboard/Card/Card";


function Dashboard() {
    return (
        <div className="App">
            <div className="parent">
                <div className="wrappers">
                    <div className="areacontainer"></div>
                    <div className="chartcontainer"></div>
                    <div className="fivecontainer"></div>
                    <div className="sixcontainer"></div>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
