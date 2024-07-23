import Hero from "@/components/hero/hero";
import "./reaction.scss";
import Link from "next/link";
import Image from "next/image";

const Center = () => {
  return (
    <div className="reaction-parent">
      <h1>Reaction to the Action</h1>
      <p>
        Join in with your post match Reaction to the Action. Bill & Chris take
        over the reins of the ever popular post match phone in straight after
        the final whistle has blown. We bring you the final scores from around
        the grounds and the manager's post match press conference in full
        exclusively live.
      </p>

      <p>
        You can now Tweet @palaceradio as well as TEXT 079 100 60 919 and CALL
        020 8653 5796 and E-MAIL studio@palaceradio.net
      </p>

      <p>
        You can listen back to Reaction to the Action including the manager's
        press conference by visiting Palace Radio on Mixcloud
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
