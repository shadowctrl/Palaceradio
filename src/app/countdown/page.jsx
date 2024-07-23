import Hero from "@/components/hero/hero";
import "./ct.scss";
import Link from "next/link";
import Image from "next/image";

const Center = () => {
  return (
    <div className="ct-parent">
      <h1>The Big Match Countdown</h1>
      Stop Press: we bring you the team news before the ink has dried on the
      manager's list!
      <p>
        The Big Match countdown is a fast moving, occasionally tongue in cheek
        show taking a cock eyed look at the week's events, pulls apart the
        latest news and casts a critical eye over the day's team selection.
      </p>
      <p>
        Brought to you by three very old and tiring life long Palace fans Trevor
        Hayes, Nick Macdonald and Clive Bowden, the show takes all the latest
        news and adds its own unique twist to bring a touch of humour, pathos,
        and (sometimes) intelligent comment to events for palace fans the world
        over.
      </p>
      <p>
        Sometimes controversial, always honest and usually sober the team
        compete to air views on their favourite subject: Crystal Palace Football
        Club. The show includes the famous PREDICTOR: the presenters attempt to
        predict the results of the day's Championship fixtures, at stake a cash
        prize for a charity of the winner's choice (kindly donated by J W Cannon
        & co Ltd). [Ed: Clive wishes to point out that he has won 3 out of 3
        years.]
      </p>
      <p>
        Nick considers himself the expert when it comes to analysing formations,
        suggesting improvements to the manager's tactics and rambling on about
        the good old days; meanwhile Trevor (the only one with proper playing
        experience having lead the line for Charlton's 9th XI in the 1950's)
        attempts to correct Nick and talk sense, while Clive just tries to stay
        awake!
      </p>
      <p>
        This year the team have started to cast their eye over events in other
        leagues and competitions played across the world. Throw in some
        thrilling commentary highlights from recent matches, interviews with the
        manager, Palace players, and guest appearances by people that none of us
        have heard of, and a few we have, and you have the perfect way to pass
        the final 60 minutes before the match kicks off.{" "}
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
