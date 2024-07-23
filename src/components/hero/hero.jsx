import "../../../styles/hero.scss";
import SideFooter from "../sideFooter/sideFooter";
import SidePanel from "../sidePanel/sidePanel";
const Hero = ({ btmImg, btmPara, sfPara, sfH3 }) => {
  return (
    <main>
      <div className="Hero-container">
        <div className="hero-side-panel">
          <SidePanel btmImg={btmImg} btmPara={btmPara} />
        </div>
        <div className="hero-center">center item</div>
        <div className="hero-side-footer">
          <SideFooter sfPara={sfPara} sfH3={sfH3} />
        </div>
      </div>
    </main>
  );
};

export default Hero;
