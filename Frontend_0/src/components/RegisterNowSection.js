import { useEffect, useState } from "react";
import { Parallax } from "react-parallax";
import "./styles/RegisterNowSection.css";

export const RegisterNowSection = ({ start, end }) => {
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

  const demoSlideVisibility = (boolean) => {
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
        textZoom: 1,
      };
    }
  };

  const RegisterNowSectionStart = start;
  const RegisterNowSectionEnd = end;

  const registerNowSlideSettings =
    scrollPosition >= RegisterNowSectionStart &&
    scrollPosition < RegisterNowSectionEnd
      ? demoSlideVisibility(true)
      : demoSlideVisibility(false);

  return (
    <Parallax strength={300}>
      <div className="RegisterNow-section">
        <span className="RegisterNow-blur">
          <p
            className="RegisterNow-text"
            style={{
              filter: `blur(${registerNowSlideSettings.blurAmount}px) opacity(${registerNowSlideSettings.opacity})`,
              transform: `scale(${registerNowSlideSettings.textZoom})`,
            }}
          >
            Register Now
          </p>
        </span>
      </div>
    </Parallax>
  );
};
