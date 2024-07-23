import Hero from "@/components/hero/hero";
import "./contactus.scss";
import Link from "next/link";
import Image from "next/image";

const Center = () => {
  return (
    <div className="contact-parent">
      <div className="contact-container">
        <h1>Contact The Studio </h1>
        <p>
          Get in touch with Palace Radio during our live broadcasts and share
          your pre and post match thoughts live on-air.
        </p>
      </div>
      <h1>Telephone: 020 8653 5796</h1>
      <h1>e-mail: studio@palaceradio.net</h1>
      <p>Please copy and paste our e-mail address into your e-mail program.</p>
      <h1>Tweet: @palaceradio</h1>
      <h1>Text Line: 079 100 60 919</h1>
      <p>
        Palace Radio uses Virgin Mobile. Calls and texts are charged at your
        standard network rates.
      </p>
      <h1>Join The Palace Radio Mailing List</h1>
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
      <p>
        To stay right up to date with Palace Radio news, broadcast information,
        exclusive audio downloads and much more join the all new Palace Radio
        Mailing List. Our list is hosted by Google Groups and you have complete
        control over your subscription. It is expected that we will only send 1
        or 2 messages each month.
      </p>
      <h1>Contact Palace Radio Off-Air</h1>
      <p>
        The Palace Radio studio is open during live broadcasts on home match
        days only. For enquiries at all other times please use the following
        means of contacting the station:
      </p>
      <p>e-mail: info@palaceradio.net</p>
      <p>tel: 020 8768 6020 (CPFC Communications Dept)</p>
      <p>
        write: Palace Radio, Crystal Palace Football Club, Selhurst Park
        Stadium, London SE25 6PU
      </p>
    </div>
  );
};
const Page = ({}) => {
  const btmPara = `Rebecca Prout on the Late and Lazy Breakfast Show on Palace Radio.`;
  const sfPara = `Call 020 8653 5796, text 079 100 60 919, or e-mail studio@palaceradio.net throughout the day with your views`;
  const sfH3 = `Reaction to the Action:`;
  const sfTitle = `Get On-Air`;
  return (
    <Hero
      btmImg={"/2.jpg"}
      btmPara={btmPara}
      sfPara={sfPara}
      sfH3={sfH3}
      center={<Center />}
      sfTitle={sfTitle}
    />
  );
};

export default Page;
