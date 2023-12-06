import "./NotificationCSS.css";
import { FiX } from "react-icons/fi";

const Notification = ({ title, message, onClose }) => {
    const buttonClose = () => {
        console.log("Button clicked");

    }
  return (
    <div className="notification-box" onClick={buttonClose}>
      <h2>Lorem Impsum</h2>
        <p>Lorem imposum</p>
    </div>
  );
};

export default Notification;
