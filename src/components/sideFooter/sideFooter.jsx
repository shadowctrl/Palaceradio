import Image from "next/image";
import Link from "next/link";
import { SocialIcon } from "react-social-icons";

const SideFooter = ({ sfPara, sfH3 }) => {
  return (
    <div className="sf-parent">
      <div className="sf-head">
        <div className="sf-head-img">
          <Image src={"/sf1.gif"} width={120} height={140}></Image>
        </div>
        <h2>next broadcast</h2>
        <div>
          <h3>{sfH3}</h3>
          <p>{sfPara}</p>
        </div>
      </div>
      <div className="sf-sm">
        <h2>social media</h2>
        <div>
          <SocialIcon url="https://x.com/palaceradio" />
          <SocialIcon url="https://www.facebook.com/palaceradio" />
        </div>
        <Link href="https://mypalacenews.com" target="_blank">
          {" "}
          <Image src="/newsbadge.png" width="150" height="25" />
        </Link>
      </div>
      <div className="sf-links">
        <h2>Links</h2>
        <div>
          <Link href="/">CPFC Site</Link>
          <Link href="/">Palace Echo</Link>
          <Link href="/">CPFC.org</Link>
          <Link href="/">Soccerbase</Link>
          <Link href="/">Other Links</Link>
        </div>
      </div>
    </div>
  );
};

export default SideFooter;
