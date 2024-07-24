import Hero from "@/components/hero/hero";
import "./breakfast.scss";
import Link from "next/link";
import Image from "next/image";

const Center = () => {
  return (
    <div className="breakfast-parent">
      <h1>Late & Lazy Breakfast Show</h1>
      <p>On-air: Saturdays - 10am to 12noon</p>
      <p>
        {" "}
        Nigel Wearing and his harem wake you up with an original blend of new
        and classic tunes, special guests and the latest news, sport and gossip
        from around the globe.
      </p>

      <p>
        Before the 2011/2012 game against Ipswich Town (ir)regular presenters
        Keeley and Katie (from Kemsing), were joined by token northeners Kat
        from Doncaster and "Big" Linda from Peterborough (pictured).
      </p>

      <p>
        The Breakfast Show is the perfect place to have a song dedicated to you
        or a friend; we are experts at birthday requests too.
      </p>

      <p>
        Following listener feedback we have now stopped the Animal Obituaries
        feature.
      </p>
      <h1>Palace Fans Walk to Reading</h1>
      <p>
        The Palace Fans Walkers reached Reading in time for kick off on Saturday
        21st April after setting off from Selhurst Park early the day before.
        Palace Radio DJ Nigel Wearing joined in the 45 mile walk which raised
        money for The Geoff Thomas Foundation for Leukaemia & Lymphoma Research.
      </p>
      <p>
        DONATE via the
        <Link
          target="_blank"
          href="http://www.justgiving.com/CPFCFansWalk2Reading"
        >
          {" "}
          Just Giving
        </Link>{" "}
        page and help the team smash the �5,000 target.{" "}
      </p>
      <p>
        A massive thank you to those people who have donated, and for the
        fantastic support received en route and at the Madejski Stadium.
      </p>
      <p>
        And if you are planning on raising money for good causes please get in
        touch, we would love to hear from you and spread the word on Palace
        Radio.
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
