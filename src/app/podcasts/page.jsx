import Hero from "@/components/hero/hero";
import "./podcasts.scss";
import Link from "next/link";
import Image from "next/image";

const Center = () => {
  return (
    <div className="podcasts-parent">
      <h1>Listen Again: Reaction to the Action</h1>
      <p>
        You can listen to Chris Green and Bill Relyea's show - Reaction to the
        Action which followed the Swansea game (Reaction to the action starts at
        53:00 following 2nd half commentary) Plus you can download exclusive
        interviews with Co-Chairman Steve Browett and former Palace midfielder
        Ray Houghton by visiting our podcast feed - details below, or following
        the link in the Featured Interviews section below.
      </p>
      <h1>Podcast & Download Information</h1>
      <p>
        Here at Palace Radio we are working hard to bring you more downloads
        including match reviews, previews, and interviews as well as match day
        highlights.
        <br /> <br />
        The easiest way to stay up to date with the latest available podcasts
        and downloads is to subscribe using software such as iTunes, My Yahoo or
        Google Reader. Your e-mail program or web browser may also enable you to
        use the feeds below and keep you up to date with the latest downloads.
      </p>
      <Link
        href="https://itunes.apple.com/gb/podcast/palace-radio-downloads/id280769080"
        target="_blank"
      >
        iTunes Series Link
      </Link>
      <Link
        href="http://cheerfulworld.jellycast.com/podcast/feed/2"
        target="_blank"
      >
        Link for your chosen Feed Reader{" "}
      </Link>
      <h1>Featured interviews: listen again</h1>
      <p>
        Swansea Reaction to the action
        <br /> <br />
        Reaction to the action starts after the 2nd half commentary at 53:00
      </p>
      <Link
        href="http://www.palaceradio.net/audio/swanseareaction.mp3"
        target="_blank"
      >
        CLICK HERE: Reaction to the Action Crystal Palace vs Swansea City
      </Link>
      <p>
        Jerry Clark spoke to Crystal Palace Co-Chairman Steve Browett an hour
        before the Eagles took on Swansea City.
      </p>
      <Link
        href="http://www.palaceradio.net/audio/SBSwansea.mp3"
        target="_blank"
      >
        CLICK HERE: Palace Radio with Steve Browett
      </Link>
      <p>
        We spoke to Sky Sports Commentators Gary Taphouse and former Palace
        midfielder & Assistant Manager Ray Houghton before the Eagles took on
        Swansea City.
      </p>
      <Link
        href="https://web.archive.org/web/20131030095902/http://www.palaceradio.net/audio/SkySwansea.mp3"
        target="_blank"
      >
        CLICK HERE: Ray Houghton and Gary Taphouse Interview
      </Link>
    </div>
  );
};
const Page = ({}) => {
  const btmPara = `Chris Dixon live on Palace Radio.`;
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
