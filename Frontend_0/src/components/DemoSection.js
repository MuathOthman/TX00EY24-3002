import { useEffect, useState } from "react";
import { Parallax } from "react-parallax";
import "./styles/DemoSection.css";

export const DemoSection = ({ start, end }) => {
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

  const demoSectionStart = start;
  const demoSectionEnd = end;

  const demoSlideSettings =
    scrollPosition >= demoSectionStart && scrollPosition < demoSectionEnd
      ? demoSlideVisibility(true)
      : demoSlideVisibility(false);

  return (
    <Parallax strength={300} className="parallex-image">
      <div className="demo-section">
        <span className="demo-blur">
          <p
            className="demo-text"
            style={{
              filter: `blur(${demoSlideSettings.blurAmount}px) opacity(${demoSlideSettings.opacity})`,
              transform: `scale(${demoSlideSettings.textZoom})`,
            }}
          >
            <p>
              How to use <br /> oma .mp4 mielummin kuin youtube video
            </p>
            <iframe
              title="YouTube Video"
              src="https://www.youtube.com/embed/VbdekcQPaB0"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              width="560"
              height="315"
              allowFullScreen
            ></iframe>
          </p>
        </span>
      </div>
    </Parallax>
  );
};
