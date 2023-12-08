import { useEffect, useState } from "react";
import { Parallax } from "react-parallax";
import "./Styles/BenefitsSection.css";
import pricingTable from "./Assets/pricing-table.png";

export const BenefitsSection = ({ start, end }) => {
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

  const benefitsSlideVisibility = (boolean) => {
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

  const benefitsSectionStart = start;
  const benefitsSectionEnd = end;

  const benefitsSlideSettings =
    scrollPosition >= benefitsSectionStart &&
    scrollPosition < benefitsSectionEnd
      ? benefitsSlideVisibility(true)
      : benefitsSlideVisibility(false);

  return (
    <Parallax strength={300} className="parallex-image">
      <div className="benefit-section">
        <span className="benefit-blur">
          <div
            className="benefit-text"
            style={{
              filter: `blur(${benefitsSlideSettings.blurAmount}px) opacity(${benefitsSlideSettings.opacity})`,
              transform: `scale(${benefitsSlideSettings.textZoom})`,
            }}
          >
            <div className="benefit-box">
              <div className="benefit-box-content-left">
                <h3 className="title">Why EstateBrew?</h3>
                <p>
                  We offer an easy-to-use, but effective platform <br />
                  to track all your real estate investments.
                </p>
                <p>
                  Whether you are an individual investor <br />
                  or a larger company, we got you covered.
                </p>
              </div>
              <div className="benefit-box-content-right">
                <img src={pricingTable} alt="" />
              </div>
            </div>
          </div>
        </span>
      </div>
    </Parallax>
  );
};
