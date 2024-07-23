import Hero from "@/components/hero/hero";
import "./drive.scss";
import Link from "next/link";
import Image from "next/image";

const Center = () => {
  return (
    <div className="drive-parent">
      <h1>Drive Time: Midweek Matches</h1>
      <p>
        {" "}
        On-air between 4pm and 6pm for midweek evening kick-offs, join Nigel
        Wearing and a host of special guests for two hours of topical chat, top
        music and a splash of irreverence.
      </p>

      <p>
        Before the match against Doncaster Rovers in 2012 we were joined by
        Shannon & Lorna, aka "The Posh Birds", who shared their tales of
        blagging entry to top showbiz gigs, ideas for how to decorate your
        toilet with a Titanic theme, and their views on why the entire British
        population should wear Lycra throughout the summer. If that sounds like
        your cup of tea then tune in to the Drivetime Show!{" "}
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
