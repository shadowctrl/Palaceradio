import Hero from "@/components/hero/hero";
import "./onair.scss";
import Link from "next/link";
import Image from "next/image";

const Center = () => {
  return (
    <div>
      <div className="onair-section1">
        <h1>Broadcast Dates</h1>
        <p>
          Palace Radio is on-air every time Crystal Palace Football Club play a
          home fixture at Selhurst Park. Tune in for full coverage of league,
          cup and play-off matches.
        </p>
        <p>
          Fixtures are subject to change. Check with the
          <span>
            <Link href="http://www.cpfc.co.uk/" target="_blank">
              CPFC Official Site
            </Link>
          </span>
          before travelling.
        </p>
        <p>
          Download the Eagles RBS smartphone app or log-in to Download the
          Eagles RBS smartphone app or log-in to
          <span>
            <Link href="http://www.cpfc.co.uk/" target="_blank">
              Palace Player
            </Link>
          </span>
          to follow the match action. to follow the match action.
        </p>
        <p>
          Palace Radio is available on MixLR. Click play below to listen LIVE!
        </p>
      </div>

      <div className="onair-section2">
        <Image src="/onair-mixin.svg" width="120" height="40" />
        <h3>Professional live audio made simple.</h3>
        <button>Are you an audio creator?</button>
      </div>
      <p className="oneair-mixin-p">
        <Link target="_blank" href="http://mixlr.com/palaceradio">
          PalaceRadio is on Mixlr
        </Link>
      </p>

      <div className="onair-section3">
        <h2>2024/2025</h2>
        <p>
          Palace Radio will be on air from 11am on Saturday 14th March in the
          Barclay's Premier League for Crystal Palace vs QPR. Live commentary
          with Eamonn and Darryl starts at 12:45pm.
        </p>
      </div>
    </div>
  );
};
const Page = ({}) => {
  const btmPara = `Rebecca Prout on the Late and Lazy Breakfast Show on Palace Radio.`;
  const sfPara = `Call 020 8653 5796, text 079 100 60 919, Tweet @palaceradio or e-mail studio@palaceradio.net throughout the day with your views.`;
  const sfH3 = `Reaction to the Action:`;
  const sfTitle = `Get On-Air`;
  return (
    <Hero
      btmImg={"/2.jpg"}
      btmPara={btmPara}
      sfPara={sfPara}
      sfH3={sfH3}
      center={<Center />}
      sfTitle={sfTitle}
    />
  );
};

export default Page;
