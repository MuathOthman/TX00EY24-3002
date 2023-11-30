import "./NotificationCSS.css";
import { FaRegSquareCheck } from "react-icons/fa6";
const Notification = ({ title, message, onClose }) => {
  return (
    <div className="notification-box">
      <h2>{title}</h2>
      <p>{message}</p>
      <FaRegSquareCheck className="notification-read"/>
    </div>
  );
};

export default Notification;
