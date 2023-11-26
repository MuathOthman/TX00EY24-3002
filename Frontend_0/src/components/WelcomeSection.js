import "./styles/WelcomeSection.css";
import { useEffect, useState } from "react";
import logo from "../assets/images/estatebrew-logo-small.png";

export const WelcomeSection = ({ start, end }) => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const welcomeSlideVisibility = (boolean) => {
    if (boolean) {
      return {
        opacity: 1,
        blurAmount: 0,
        imagePos: 50,
        textZoom: 1.1,
      };
    } else {
      return {
        opacity: 0,
        blurAmount: 20,
        imagePos: 50,
        textZoom: 0.5,
      };
    }
  };
  const welcomeSlideStart = start;
  const welcomeSlideEnd = end;

  const welcomeSlideSettings =
    scrollPosition >= welcomeSlideStart && scrollPosition < welcomeSlideEnd
      ? welcomeSlideVisibility(true)
      : welcomeSlideVisibility(false);
  const textY = scrollPosition >= start && scrollPosition < end ? 40 : -5;

  return (
    <div
      className="welcome-section"
      style={{
        top: `${textY}%`,
        filter: `blur(${welcomeSlideSettings.blurAmount}px) opacity(${welcomeSlideSettings.opacity})`,
        transform: `scale(${welcomeSlideSettings.textZoom})`,
      }}
    >
      <div className="welcome-content">
        <img src={logo} alt="logo" className="welcome-page-logo" />
        <p className="welcome-text"></p>
      </div>
    </div>
  );
};
