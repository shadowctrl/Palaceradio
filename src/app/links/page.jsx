import Hero from "@/components/hero/hero";
import "./links.scss";
import Link from "next/link";
import Image from "next/image";

const Center = () => {
  return (
    <div className="links-parent">
      <div className="links-head">
        <Image src="/links_title.jpg" width="175" height="190" />
        <div className="links-container">
          <p>
            {" "}
            <Link href="http://www.cpfc.co.uk/" target="_blank">
              Official Crystal Palace FC Website{" "}
            </Link>
            for latest club news and the Palace Player service.{" "}
          </p>
          <p>
            {" "}
            <Link target="_blank" href="http://www.studycentrecpfc.org.uk/">
              The CPFC Study Centre{" "}
            </Link>
            club, community & education.
          </p>
          <p>
            {" "}
            <Link target="_blank" href="http://www.cpfc.org/">
              cpfc.org "The BBS"{" "}
            </Link>{" "}
            the biggest on-line fans' forum.
          </p>
          <p>
            {" "}
            <Link target="_blank" href="http://www.holmesdale.net/">
              {" "}
              The Holmesdale On-line
            </Link>
            comprehensive site with news, views and forum.
          </p>
          <p>
            {" "}
            <Link target="_blank" href="http://palace-echo.net/">
              {" "}
              The Palace Echo
            </Link>
            formerly CPFC's longest running fanzine now online.
          </p>
          <p>
            {" "}
            <Link target="_blank" href="http://www.fiveyearplanfanzine.co.uk/">
              Five Year Plan Fanzine{" "}
            </Link>
            alternative fanzine available throughout the season. Writers include
            Palace Radio commentator Darryl Murdoch.
          </p>
          <p>
            {" "}
            <Link href="http://www.cpstrust.org.uk/">
              Crystal Palace Supporters Trust{" "}
            </Link>
            supporters' group promoting the interests of fans and the club.
          </p>
        </div>
      </div>

      <div className="links-section2">
        <div className="links-section2-container">
          <h2>Palace Radio Charity Links</h2>
          <p>
            <span>
              <Link href="http://www.tapitlocal.com/cpscc/" target="_blank">
                Crystal Palace Supporters Children's Charity
              </Link>
            </span>{" "}
            Raising money for the annual Christmas party and match day box at
            Selhurst Park.
          </p>
          <p>
            If you are planning on raising money for good causes please get in
            touch, we would love to hear from you and spread the word on Palace
            Radio.
          </p>
        </div>
        <div className="links-section2-container">
          <h2>Travel Groups, UK & Worldwide Fan Clubs</h2>
          <p>
            <span>
              <Link href="http://westcountryeagles.co.uk/" target="_blank">
                West Country Eagles
              </Link>{" "}
            </span>{" "}
            for those exiled in Cornwall, Devon, Dorset, Gloucestershire,
            Somerset, and Wiltshire.
          </p>
          <p>
            <span>
              <Link href="http://www.blightys.com/" target="_blank">
                Blightys{" "}
              </Link>
            </span>
            supplying a taste of home to those exiled in Canada.
          </p>
        </div>
        <div className="links-section2-container">
          <h2>Links To Radio Sites</h2>
          <p>
            <span>
              <Link
                href="http://www.bbc.co.uk/news/england/london/"
                target="_blank"
              >
                BBC Radio 94.9FM in London{" "}
              </Link>
            </span>{" "}
            provider of top football coverage and away match commentary for
            Palace Player.
          </p>
          <p>
            <span>
              <Link href="http://www.mediauk.com/" target="_blank">
                Media UK
              </Link>
            </span>
            comprehensive directory of all the UK's media.
          </p>
          <p>
            <span>
              <Link href="http://www.xfm.co.uk/" targey="_blank">
                XFM
              </Link>
            </span>
            new music station in London, Manchester & Scotland.
          </p>
        </div>
        <div className="links-section2-container">
          <h2>Special Links</h2>
          <p>
            Palace Radio presenter{" "}
            <span>
              {" "}
              <Link href="http://www.billrelyea.co.uk/" target="_blank">
                {" "}
                Bill Relyea{" "}
              </Link>{" "}
            </span>{" "}
            is a professional after-dinner speaker and stand-up comedian.
          </p>
        </div>
      </div>
    </div>
  );
};
const Page = ({}) => {
  const btmPara = `Ian Hart holding court in the studio.`;
  const sfPara = `Call 020 8653 5796, text 079 100 60 919, or e-mail studio@palaceradio.net throughout the day with your views`;
  const sfH3 = `Reaction to the Action:`;
  const sfTitle = `Get On-Air`;
  return (
    <Hero
      btmImg={"/4.jpg"}
      btmPara={btmPara}
      sfPara={sfPara}
      sfH3={sfH3}
      center={<Center />}
      sfTitle={sfTitle}
    />
  );
};
export default Page;
