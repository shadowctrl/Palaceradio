import Hero from "@/components/hero/hero";
import "./aboutus.scss";
import Link from "next/link";
import Image from "next/image";

const Center = () => {
  return (
    <div className="aboutus-parent">
      <h1>Our Story</h1>
      <p>
        Palace Radio is entering its 16th year of match day broadcasting for
        Crystal Palace FC.
      </p>
      <p>
        Many people have been involved or supported the station over the years,
        making it what it is today. Come back to this page to find out more
        about them.
      </p>

      <h1>Our Sponsors</h1>

      <p>
        Love alone won't keep Palace Radio on-air and we are indebted to our
        sponsors, both present, and past who have supported us over the years,
        special mentions must go to Dave & Jackie Pinto at Tudor Park Estates{" "}
        whose support enabled us most significantly to refurbish the studio and
        get the station back on-line.
      </p>

      <p>
        Thanks also to{" "}
        <Link target="_blank" href="http://www.wrappz.com/">
          {" "}
          wrappz.com{" "}
        </Link>{" "}
        and{" "}
        <Link target="_blank" href="https://aiforeveryone.org/">
          {" "}
          aiforeveryone{" "}
        </Link>{" "}
        not least for providing some great prizes for you.
      </p>
    </div>
  );
};
const Page = ({}) => {
  const btmPara = `Chris Dixon live in the studio.`;
  const sfPara = `Call 020 8653 5796, text 079 100 60 919, Tweet @palaceradio or e-mail studio@palaceradio.net throughout the day with your views.`;
  const sfH3 = `Reaction to the Action:`;
  const sfTitle = `Get On-Air`;
  return (
    <Hero
      btmImg={"/6.jpg"}
      btmPara={btmPara}
      sfPara={sfPara}
      sfH3={sfH3}
      center={<Center />}
      sfTitle={sfTitle}
    />
  );
};

export default Page;
