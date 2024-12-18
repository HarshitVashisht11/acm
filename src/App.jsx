
import ButtonGradient from "./jsm-assets/svg/ButtonGradient";
import Button from "./components/Button";
import Header from "./components/Header";
import Hero from "./components/Hero";
import AcmwDesc from "./components/AcmwDesc";
import CompetitionsSlider from "./components/CompetitionsSlider";
import Mentors from "./components/Mentors";
import Membership from "./components/Membership";
import Footer from "./components/Footer";
import Team from "./components/Team";
import Initiatives from "./components/Initiatives";
import Flipbook from "./components/Flipbook";

const App = () => {
  return (
  <>
  <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
    <Hero/>
    <AcmwDesc/>
    <Initiatives/>
    <CompetitionsSlider/>
    <Mentors/>
    <Team/>
    <Flipbook/>
    <Membership/>
  </div>
  <ButtonGradient/>
  </>
  )
}

export default App;