import Hero from "@/components/hero/hero";
import Image from "next/image";
import Link from "next/link";
const sfPara = `Saturday 14th March 2015. Barclays Premier League: Crystal Palace vs QPR. Kick off is 12:45pm, shows start at 11am. AVAILABLE VIA THIS WEBSITE, PALACE PLAYER & EAGLES RBS APP.`;
const sfH3 = "2024/2025:";
const btmPara = `John Burgess, James Daly and Ian King bring you the Palace Radio news each matchday.`;

const Center = () => {
  return (
    <div className="home-parent">
      <div className="home-head">
        <h1>Palace Radio</h1>
        <Image src="/newsimage.png" width="300" height="50" />
        <h2>The match day radio station of Crystal Palace FC</h2>
        <p>
          Palace Radio is currently only available via Palace Player & The
          Eagles RBS app. Listen to our next game on{" "}
          <span> Palace Player </span>
        </p>
      </div>
      <div className="home-section2">
        <div className="home-section2-container">
          <Image src="/sf1.gif" width="135" height="160"></Image>

          <div className="home-section2-sub">
            <p>
              As Crystal Palace begin a second successive season in the
              Barclay's Premier League, Palace Radio will bring the Selhurst
              Park match day atmosphere direct to you, wherever you are around
              the world.
            </p>
            <p>
              Palace Radio is now available via the Eagles RBS app for both
              iPhone and Andriod.
            </p>
            <h3>
              <Link
                href="https://play.google.com/store/apps/details?id=com.conduit.app_7954f32a45584af9ad93af3e7b321900.app"
                target="_blank"
              >
                {" "}
                CLICK HERE TO DOWNLOAD EAGLES RBS ON ANDRIOD.{" "}
              </Link>
            </h3>
            <h3>
              <Link
                href="https://itunes.apple.com/gb/app/eaglesrbs-cpfc/id815026921"
                target="_blank"
              >
                CLICK HERE TO DOWNLOAD EAGLES RBS ON ANDRIOD.
              </Link>
            </h3>
            <p>
              In addition to our matchday coverage, each week Palace Radio will
              bring you exclusive interviews with the men that matter at
              Selhurst Park. Check the Palace Radio website regularly for new
              posts from the training ground and reaction from Palace's most
              recent match.
            </p>
            <p>
              If there is any content you would like to see on the Palace Radio
              website, follow us and tweet @palaceradio.
            </p>
          </div>
        </div>
      </div>

      <div className="home-section3">
        <h2>Join The Palace Radio Mailing List</h2>
        <p>
          To stay right up to date with Palace Radio news, broadcast
          information, exclusive audio downloads and much more join the all new
          Palace Radio Mailing List.
        </p>

        <h3>enter your address & hit the button</h3>
        <form action="none">
          <label>Email: </label>
          <input type="text" name="email" />
          <button>subscribe</button>
        </form>
        <p className="home-google-groups">
          <Link
            href="https://groups.google.com/forum/?hl=en#!forum/palaceradio"
            target="_blank"
          >
            list hosted by google
          </Link>
        </p>
      </div>

      <div className="home-section4">
        <h2>Listen live: new iPhone & Android phone Apps</h2>
        <p>
          An update to the Football League Interactive/Palace Player mobile app
          now means you will be able to stream the live commentary on your Apple
          and Android devices.
        </p>
        <p>
          This exciting development for Palace Player subscribers was announced
          on the{" "}
          <span>
            <Link
              href="http://www.cpfc.co.uk/news/article/player-across-iphone-and-android-714185.aspx"
              target="_blank"
            >
              club's website.
            </Link>
          </span>
        </p>
        <p>
          On home match days Palace Radio's pre and post match live shows are
          streamed on Palace Player as well, so subscribers can listen online to
          all of our shows, we are exploring the possiblity that these shows can
          also be made available on the mobile app's so keep checking back for
          more information.
        </p>
        <p>
          <span> Feedback & enquiries: </span> We welcome your feedback on the
          shows we produce, but we cannot assist you with the technical aspects
          of the Palace Player service & mobile applications. If you have
          feedback or problems please send them to the developer, their details
          are shown on the App Store and Google Play, alternatively use the
          Palace Player{" "}
          <span>
            <Link
              target="_blank"
              href="http://www.player.cpfc.co.uk/contact-us"
            >
              Contact Page
            </Link>
          </span>
          .
        </p>
      </div>
    </div>
  );
};
const Page = ({}) => {
  return (
    <Hero
      btmImg={"/1.jpg"}
      btmPara={btmPara}
      sfPara={sfPara}
      sfH3={sfH3}
      center={<Center />}
    />
  );
};

export default Page;
