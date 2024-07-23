import Hero from "@/components/hero/hero";
import "./commentary.scss";
import Link from "next/link";
import Image from "next/image";

const Center = () => {
  return (
    <div className="comm-parent">
      <h1>Live Match Commentary</h1>
      <p>
        Darryl Murdoch and Eamonn Marren, commentators extraordinaire - like the
        greatest poets they paint you a verbal picture of the match action.
      </p>
      <p>
        Like any successful relationship a lot of time and energy has to go into
        making it work. Darryl and Eamonn spend their days researching both
        teams, match officials, and keep an eye on the goings on from Selhurst
        Park and beyond.
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
