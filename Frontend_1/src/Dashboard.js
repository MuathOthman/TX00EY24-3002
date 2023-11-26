import './dashboard.css';
import Sidenav from "./Dashboard/Panels/Sidenav";
import Menubars from "./Dashboard/Panels/Menubars";
import Area from "./Dashboard/Notification/Area";
import Chart from "./Dashboard/LineChart/Chart";
import MiniCard from "./Dashboard/MiniCards/Card";
import Card from "./Dashboard/CardDashboard/Card";


function Dashboard() {
    return (
        <div className="App">
            <div className="parent">
                <div className="wrappers">
                    <div className="areacontainer">areacontainer</div>
                    <div className="chartcontainer">chartcontainer</div>
                    <div className="minicardcontainer">minicardcontainer</div>
                    <div className="cardcontainer">cardcontainer</div>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
