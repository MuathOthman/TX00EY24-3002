import "./dashboard.css";
import MyResponsiveLine from "./Dashboard/Charts/Chartcomponent";
import PieChart from "./Dashboard/Charts/DoughnutChart";
import { useEffect, useState } from "react";
import SiteName from "./Sitename/SiteName";
import Notification from "./Dashboard/Notification/Notification";
import MyResponsiveRadar from "./Dashboard/Charts/ActivePercentageBar";

function Dashboard() {
  const [notifications, setNotifications] = useState([]);
  const [loading, setLoading] = useState(true);
  const token = localStorage.getItem("token");

  useEffect(() => {
    try {
      fetch("/api/notifications", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
        .then((response) => response.json())
        .then((data) => {
          if (Array.isArray(data)) {
            setNotifications(data);
          } else {
            console.error("Invalid data format:", data);
          }
          setLoading(false);
        })
        .catch((error) => console.error("Error fetching data:", error));
    } catch (error) {
      console.log(error);
    }
  }, [token]);

  const closeNotification = (notificationId) => {
    fetch(`/api/notifications/${notificationId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const updatedNotifications = notifications.filter(
      (notification) => notification.id !== notificationId
    );
    setNotifications(updatedNotifications);
  };

  return (
    <div className="App">
      <div className="parent">
        <div className="wrappers">
          <div className="areacontainer">
            <SiteName name="Total Revenue" />
            <MyResponsiveLine />{" "}
          </div>
          <div className="chartcontainer">
            <SiteName name="Notifications" />
            {loading ? (
              <p>Loading notifications...</p>
            ) : notifications.length === 0 ? (
              <p>No notifications to display.</p>
            ) : (
              notifications.map((notification) => (
                <Notification
                  key={notification.id}
                  {...notification}
                  closeNotification={closeNotification}
                />
              ))
            )}
          </div>
          <div className="minicardcontainer">
            <SiteName name="Occupied" />
            <PieChart />
          </div>
          <div className="cardcontainer">
            <SiteName name="Type" />
            <MyResponsiveRadar />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
