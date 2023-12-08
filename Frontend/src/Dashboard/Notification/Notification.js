import "./NotificationCSS.css";
import { FiX } from "react-icons/fi";

const Notification = ({ title, message, closeNotification, id }) => {
  const handleDelete = () => {
    closeNotification(id);
  };
  return (
    <div className="notification-box">
      <div className="nofication-header">
        <h2>{title}</h2>
        <FiX className="notification-close" onClick={handleDelete} />
      </div>
      <p>{message}</p>
    </div>
  );
};

export default Notification;
