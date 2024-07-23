import Image from "next/image";
import Link from "next/link";

const SidePanel = ({ btmImg, btmPara }) => {
  return (
    <div className="side-panel-parent">
      <div className="side-panel-container1">
        <h1>Features</h1>
        <ul className="side-panel-list">
          <li>
            <Link href="/" className="side-panel-item">
              podcasts
            </Link>
          </li>
          <li>
            <Link href="/">sponsors</Link>
          </li>
          <li>
            <Link href="/">music</Link>
          </li>
          <li>
            <Link href="/">shows</Link>
          </li>
          <li>
            <Link href="/">about palace radio</Link>
          </li>
        </ul>
      </div>
      <div className="side-panel-container2">
        <h2>behind the mic</h2>
        <Image src={btmImg} width={150} height={150} className="btmImage" />
        <p>{btmPara}</p>
      </div>
    </div>
  );
};

export default SidePanel;
