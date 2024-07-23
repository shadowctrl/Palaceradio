import Hero from "@/components/hero/hero";
import "./news.scss";
import Link from "next/link";
import Image from "next/image";

const Center = () => {
  return (
    <div className="news-parent">
      <h1>The News Hour</h1>
      <p>On-air: Saturdays - 12noon // Midweek - 6pm</p>

      <p>
        {" "}
        It does exactly what it says on the tin - bringing you one hour of news,
        views and interviews with Jerry Clark, John Burgess & Ian King.
      </p>

      <p>
        Your first opportunity to hear this week's exclusive match preview from
        the manager in full, plus player interviews and everything you need to
        know about the day's game.
      </p>

      <p>
        You will hear the early team news and updates on any injuries along with
        an in-depth preview of the match, and a close look at the day's visitors
        to Selhurst Park.
      </p>

      <p>
        Tune in to hear details of match ticket availability and news of
        transport problems to look out for as you make your way to the ground.
      </p>

      <p>
        The News Hour team will review previous fixtures with goal highlights &
        expert analysis, and look ahead to the upcoming games with all the
        details for supporters travelling to away fixtures.
      </p>

      <p>
        Keep up with the burning issues being discussed by the fans on the
        internet message-boards, and join us live on-air to have your say ahead
        of the game.
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
