import "./MainDashboard.css";
import Sidenav from "../Dashboard/Panels/Sidenav";
import Menubars from "../Dashboard/Panels/Menubars";
import LineGraph from "../Dashboard/Charts/LineGraph";
import DoughnutChart from "../Dashboard/Charts/DoughnutChart";
import ActivePercentageBar from "../Dashboard/Charts/ActivePercentageBar";
import Notification from "../Dashboard/Notification/Notification";

function DashboardPanels() {
  return (
    <div className="DashboardPanels">
      <Sidenav />
      <Menubars />
      <div className="parent">
        <div className="wrapper">
          <div className="graphSection">
            <LineGraph width={"100%"} height={"100%"} />
          </div>
          <div className="lower-box">
            <DoughnutChart />
            <ActivePercentageBar totalApartments={50} occupiedApartments={10} />
          </div>
          <div className="notification-area">
            <h2>Notifications</h2>
            <Notification title="Title" message="Notification content" />
            <Notification title="Title" message="Notification content" />
            <Notification title="Title" message="Notification content" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashboardPanels;
