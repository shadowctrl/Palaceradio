import "../../styles/hero.scss";
import SideFooter from "../components/sideFooter/sideFooter";
import SidePanel from "../components/sidePanel/sidePanel";
const Hero = ({}) => {
  return (
    <main>
      <div className="Hero-container">
        <div className="hero-side-panel">
          <SidePanel
            btmImg={"/1.jpg"}
            btmPara={
              "John Burgess, James Daly and Ian King bring you the Palace Radio news each matchday."
            }
          />
        </div>
        <div className="hero-center"></div>
        <div className="hero-side-footer">
          <SideFooter />
        </div>
      </div>
    </main>
  );
};

export default Hero;
