import Image from "next/image";
import Link from "next/link";

const SidePanel = ({ btmImg, btmPara, shows }) => {
  return (
    <div className="side-panel-parent">
      <div className="side-panel-container1">
        <h1>Features</h1>
        <ul className="side-panel-list">
          <li>
            <Link href="/podcasts" className="side-panel-item">
              podcasts
            </Link>
          </li>
          <li>
            <Link href="/sponsors">sponsors</Link>
          </li>
          <li>
            <Link href="/music">music</Link>
          </li>
          <li>
            <Link href="/shows">shows</Link>
          </li>
          {shows ? (
            <div className="shows-true">
              <li>
                <Link href="/breakfast">breakfast</Link>
              </li>{" "}
              <li>
                <Link href="/news">news hour</Link>
              </li>{" "}
              <li>
                <Link href="/onetwo">The old one-Two</Link>
              </li>{" "}
              <li>
                <Link href="/countdown">countdown</Link>
              </li>{" "}
              <li>
                <Link href="/commentary">commentary</Link>
              </li>{" "}
              <li>
                <Link href="/reaction">Reaction to the action</Link>
              </li>
              <li>
                <Link href="/drive">Drivetime</Link>
              </li>
            </div>
          ) : (
            ""
          )}
          <li>
            <Link href="/aboutus">about palace radio</Link>
          </li>
        </ul>
      </div>
      {shows ? (
        ""
      ) : (
        <div className="side-panel-container2">
          <h2>behind the mic</h2>
          <Image src={btmImg} width={150} height={150} className="btmImage" />
          <p>{btmPara}</p>
        </div>
      )}
    </div>
  );
};

export default SidePanel;
