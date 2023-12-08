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
      <FiX className="close-button" onClick={handleDelete} />
    </div>
  );
};

export default Notification;
