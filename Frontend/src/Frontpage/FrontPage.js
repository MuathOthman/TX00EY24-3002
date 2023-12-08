import "./Styles/FrontPage.css";
import { Header } from "./Header";
import { FirstSlide } from "./FirstSlide";
import { DemoSection } from "./DemoSection";
import { BenefitsSection } from "./BenefitsSection";
import { RegisterNowSection } from "./RegisterNowSection";
import { WelcomeSection } from "./WelcomeSection";
import { Footer } from "./Footer";
import { ParallaxProvider } from "react-scroll-parallax";

const sectionLength = 400;

const welcomeStart = 0;
const welcomeEnd = welcomeStart + 200;
const FirstSlideStart = welcomeEnd;
const FirstSlideEnd = FirstSlideStart + sectionLength;
const demoStart = FirstSlideEnd;
const demoEnd = demoStart + sectionLength;
const benefitsStart = demoEnd;
const benefitsEnd = benefitsStart + sectionLength;
const registerNowStart = benefitsEnd;
const registerNowEnd = registerNowStart + sectionLength * 3;

export const FrontPage = () => {
  return (
    <ParallaxProvider>
      <Header />
      <div className="page-container">
        <WelcomeSection start={welcomeStart} end={welcomeEnd} />
        <FirstSlide start={FirstSlideStart} end={FirstSlideEnd} />
        <DemoSection start={demoStart} end={demoEnd} />
        <BenefitsSection start={benefitsStart} end={benefitsEnd} />
        <RegisterNowSection start={benefitsEnd} end={registerNowEnd} />
        <Footer />
      </div>
    </ParallaxProvider>
  );
};
