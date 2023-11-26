import { useEffect, useState } from "react";
import "./styles/Slides.css";
import { Parallax } from "react-parallax";
import firstSlideImage from "../assets/images/Dashboard-1.png";

export const FirstSlide = ({ start, end }) => {
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

  const firstSlideVisibility = (boolean) => {
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

  const firstSlideStart = start;
  const firstSlideEnd = end;

  const firstSlideSettings =
    scrollPosition >= firstSlideStart && scrollPosition < firstSlideEnd
      ? firstSlideVisibility(true)
      : firstSlideVisibility(false);

  console.log(scrollPosition);

  return (
    <Parallax strength={300} className="parallex-image">
      <div className="firstpage-content">
        <span
          className="blur-to-clear"
          style={{
            filter: `blur(${firstSlideSettings.blurAmount}px) opacity(${firstSlideSettings.opacity})`,
          }}
        >
          <p
            className="blurry-text"
            style={{
              transform: `scale(${firstSlideSettings.textZoom})`,
            }}
          >
            Track your real estate investments in real time <br />
            with visually represented data.
            <br />
            All in one place.
          </p>
        </span>
        <img
          className="firstSlideImage"
          src={firstSlideImage}
          style={{
            filter: `blur(${firstSlideSettings.blurAmount}px) opacity(${firstSlideSettings.opacity})`,
            transform: `scale(${firstSlideSettings.textZoom})`,
            //left: `${firstSlideSettings.imagePos}%`,
          }}
        />
      </div>
    </Parallax>
  );
};
