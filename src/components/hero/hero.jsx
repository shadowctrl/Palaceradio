import "../../../styles/hero.scss";
import SideFooter from "../sideFooter/sideFooter";
import SidePanel from "../sidePanel/sidePanel";
const Hero = ({ btmImg, btmPara, sfPara, sfH3, center, sfTitle }) => {
  return (
    <main>
      <div className="Hero-container">
        <div className="hero-side-panel">
          <SidePanel btmImg={btmImg} btmPara={btmPara} />
        </div>
        <div className="hero-center">{center}</div>
        <div className="hero-side-footer">
          <SideFooter sfPara={sfPara} sfH3={sfH3} sfTitle={sfTitle} />
        </div>
      </div>
    </main>
  );
};

export default Hero;
