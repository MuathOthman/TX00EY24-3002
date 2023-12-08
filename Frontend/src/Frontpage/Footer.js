import "./Styles/Footer.css";
import { IoIosArrowDown } from "react-icons/io";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-scroll">
        <p>Scroll</p>
        <div className="footer-arrow">
          <IoIosArrowDown />
        </div>
      </div>
    </footer>
  );
};
