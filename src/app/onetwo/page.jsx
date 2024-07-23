import Hero from "@/components/hero/hero";
import "./onetwo.scss";
import Link from "next/link";
import Image from "next/image";

const Center = () => {
  return (
    <div className="onetwo-parent">
      <h1>The Old One-Two</h1>
      <p>On-air: Saturdays - 1pm</p>
      <p>
        Brand new to the Palace Radio schedule we bring you The Old One-Two with
        James O'Reilly, Ian Hart & Keith Jeffcoat.
      </p>
      <p>
        Tune in and join in as the team look at the big talking points and
        latest news and views from Selhurst Park and beyond.
      </p>
      <p>
        Ian and the team will be joined by Milky with his away day diaries, Gary
        Jones with his youth reports, an away team journalist, as well as
        testing your grey matter with the Hart Beat quiz in the build-up to
        kick-off.
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
      btmImg={""}
      btmPara={btmPara}
      sfPara={sfPara}
      sfH3={sfH3}
      center={<Center />}
      sfTitle={sfTitle}
      shows={true}
    />
  );
};

export default Page;
