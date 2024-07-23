import Hero from "@/components/hero/hero";
import "./music.scss";
import Link from "next/link";
import Image from "next/image";

const Center = () => {
  return (
    <div className="music-main">
      <div className="music-parent">
        <h1>Music on Palace Radio</h1>
        <div className="music-container">
          <Image src="/music.jpg" width={190} height={200} />
          <div>
            <p>
              Tune into the Late & Lazy Breakfast Show to hear brand new music
              alongside some all time favourites, plus live acoustic tracks and
              artist interviews.
            </p>
            <p>
              <Link href="/contactus">Contact Us</Link> to get your music
              played, or to feature on the Morning Sessions.
            </p>
            <p>
              Below are short profiles of recently featured artists on Palace
              Radio.
            </p>
            <h1>Lucy Hopes</h1>
            <p>
              Singer-songwriter Lucy Hopes popped into the Breakfast Show to
              talk about her musical inspiration, song-writing and story
              telling, and how she was brought up in the shadow of Old Trafford.
            </p>
            <p>
              Follow Lucy Hopes on
              <Link
                href="https://web.archive.org/web/20131030102057/http://www.facebook.com/pages/Lucy-Hopes/161909110533770"
                target="_blank"
              >
                Facebook.{" "}
              </Link>
            </p>
          </div>
        </div>
      </div>
      <div className="yt-music">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/QV1EeeknkSE?si=O6KrM4rIphguYKgJ"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
      <p>
        Shining Star (Video) by Lucy Hopes on{" "}
        <Link href="https://www.youtube.com/watch?v=QV1EeeknkSE" target="blank">
          {" "}
          YouTube.{" "}
        </Link>
      </p>
    </div>
  );
};
const Page = ({}) => {
  const btmPara = `The Rascos live in session on the Breakfast Show.`;
  const sfPara = `Call 020 8653 5796, text 079 100 60 919, Tweet @palaceradio or e-mail studio@palaceradio.net throughout the day with your views.`;
  const sfH3 = `Reaction to the Action:`;
  const sfTitle = `Get On-Air`;
  return (
    <Hero
      btmImg={"/8.jpg"}
      btmPara={btmPara}
      sfPara={sfPara}
      sfH3={sfH3}
      center={<Center />}
      sfTitle={sfTitle}
    />
  );
};

export default Page;
