import Hero from "@/components/hero/hero";
import "./sponsors.scss";
import Link from "next/link";
import Image from "next/image";

const Center = () => {
  return (
    <div className="sponsors-parent">
      <h1>Palace Radio Sponsors</h1>
      <p> Please support our sponsors. Start by visiting their websites.</p>

      <p>
        We are interested in hearing from prospective sponsors. Please download
        our Information Pack or contact us to discuss your requirements and
        ideas.
      </p>

      <p>
        Listen on 1278AM in the local area or listen on-line. Palace Radio's web
        broadcast is part of the Palace Player service from the CPFC Official
        Site
      </p>
      <div className="sponsors-item">
        <Image src="/s1.gif" width="235" height="64" />
        <div>
          <h1>St Francis Xavier College</h1>
          <p>
            St Francis Xavier College is a sixth form college based in Balham
            offering an extensive range of courses to students from across South
            London.
          </p>
        </div>
      </div>

      <div className="sponsors-item">
        <Image src="/s2.gif" width="300" height="35" />
        <div>
          <h1>Essential Entertainments</h1>
          <p>
            Palace Radio presenter James O'Reilly runs Essential Entertainments
            and can provide you with DJ's, tribute artistes, a fun casino,
            inflatables and much more for all your social occasions.
          </p>
        </div>
      </div>
      <div className="sponsors-item">
        <Image src="/s3.png" width="260" height="41" />
        <div>
          <h1>J W Cannon & Co Ltd</h1>
          <p>
            A warm welcome to our newest sponsor JW Cannon & Co Ltd of 33
            William Street, Carshalton, Surrey.
            <br />
            <br />
            e-mail: info@jwcannon.com tel: (020) 8647 5584/5 <br />
            <br />
            JW Cannon are a construction company offering services spanning all
            the trades and specialising in purpose made joinery, concrete and
            brickwork repair and reinforcement.{" "}
          </p>
        </div>
      </div>
      <p>
        JWC are a family run business now onto their third generation who offer
        old fashioned courteous service combined with competitive prices for all
        your building work. JWC also offer plumbing and central heating services
        (Gas Safe Registered).
      </p>
    </div>
  );
};
const Page = ({}) => {
  const btmPara = `Former Palace Radio Presenter Peter Carter in the Studio`;
  const sfPara = `Call 020 8653 5796, text 079 100 60 919, Tweet @palaceradio or e-mail studio@palaceradio.net throughout the day with your views.`;
  const sfH3 = `Reaction to the Action:`;
  const sfTitle = `Get On-Air`;
  return (
    <Hero
      btmImg={"/7.jpg"}
      btmPara={btmPara}
      sfPara={sfPara}
      sfH3={sfH3}
      center={<Center />}
      sfTitle={sfTitle}
    />
  );
};

export default Page;
