import "./NotificationCSS.css";
import { FiX } from "react-icons/fi";

const Notification = ({ title, message, closeNotification, id }) => {
  const handleDelete = () => {
    closeNotification(id);
  };

  return (
    <div className="notification-box">
      <h2>{title}</h2>
      <p>{message}</p>
      <button className="close-button" onClick={handleDelete}>
        Close
      </button>
    </div>
  );
};

export default Notification;
