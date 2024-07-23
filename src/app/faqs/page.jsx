import Hero from "@/components/hero/hero";
import "./faqs.scss";
import Link from "next/link";
import Image from "next/image";

const faqsAnswerd = [
  {
    img: "/faq1.png",
    Q: "1) Why can't I find Palace Radio when I tune to 1278am?",
    A: `a) Is there a Crystal Palace FC home fixture at Selhurst Park? Check our <a href="/onair">Broadcast Dates</a> <br/><br/>

b) Are you within our broadcast area? Check our <a href="http://www.bing.com/maps/?lvl=12&where1=SE256PU,%20UK&FORM=MMREDR" target="_blank"> Broadcast Map</a> <br/><br/>

c) Double check your radio is switched to AM/MW and tuned to 1278am.<br/><br/>

d) The broadcast signal maybe effected by local weather conditions, or be sporadic in out-lying or hilly areas. Please <a href="/contactus">contact</a> us as we always strive to improve our signal.`,
  },

  {
    img: "/faq2.gif",
    Q: "2) How do I listen to Palace Radio on-line?",
    A: `a) Palace Radio is broadcast on-line as part of the Palace Player service provided by Crystal Palace FC. For full details, subscription rates, and help to use the service visit the <a href="http://www.player.cpfc.co.uk/home/" target="_blank"> Official Palace Player website.</a> <br/> <br/> 
    b) Palace Radio broadcasts on-line from 10am for a weekend fixture and 3pm for midweek fixtures. On-line broadcasting includes all our live shows including full match commentary and post match phone-in Reaction To The Action.
    `,
  },

  {
    Q: "3) Can I do work experience at Palace Radio? Does Palace Radio have vacancies for staff?",
    A: `a) We are able to provide work experience opportunities. For the right candidates we can offer the chance to spend a match day with us, we will expect you to get involved in our live broadcast from the word go. To be considered for work experience please e-mail us in the first instance telling us about yourself - ideally you will already have some technical and presenting skills or a related academic/vocational qualification. Please note places are limited.<br/> <br/>
b) Palace Radio is run by love rather than money, by unpaid staff, so this is not the place to come for a paid job! Most people who become permanent members of our team are discovered after having spent a day with us - you could be a student, working age, or even a pensioner, so long as you combine technical and presenting skills, with knowledge and a passion for radio, football, and can commit to the 23+ days broadcasting we carry out during the season. If you are interested then send us an e-mail and tell us all about yourself.`,
  },

  {
    Q: "4) How is Palace Radio funded?",
    A: `a) Crystal Palace Football Club pays for the broadcasting licence and provides studio space and utilities. The studio refurbishment, new equipment, on-going maintenance, consumables, publicity and this website is provided thanks to our <a href="/sponsors"> sponsors </a>or donated by the Palace Radio  <a href="/team"> team.</a>`,
  },
  {
    Q: "5) Can I sponsor the station?",
    A: `a) We are interested in hearing from prospective sponsors. Please download our <a href={" /
      informationPack.pdf"}> Information Pack</a> or <a href=" /
      contactus">  contact us </a> to discuss your requirements and ideas.`,
  },
  {
    Q: "6) Can I air my views on the Palace Radio website?",
    A: "a) Simply,no! This site is to inform you about Palace Radio, which in itself is a medium for uncensored debate. On-line locations for this are ably hosted elsewhere and these are listed on the <a href=`/links`> Links Page. </a> <br/> <br/> b) Feedback on Palace Radio is always welcome - <a href=`/contactus`>  contact us </a>",
  },
  {
    Q: "7) Why do the presenters sometimes sound so negative?",
    A: "a) Two reasons: 1) Have you ever felt down after a poor game? Yes! Well like you the presenters are all Palace fans and may feel the same way. 2) Equally important, it is only the presenter's opinion, and if yours is different then call the studio and share it!!!",
  },
  {
    Q: "8) Can you read a dedication or play a song for me?",
    A: `a) Send your dedications for birthdays, anniversaries, shouts to friends and relatives by e-mail, text, or telephone on the day. See our <a href="/contactus">contacts page </a> for full details. <br /> <br/>Note: For enquiries regarding entries in the Match Day Programme and on the Selhurst Park Jumbotron please contact Crystal Palace Football Club directly. Palace Radio is unable to pass on enquiries intended for CPFC. `,
  },
];
const Center = () => {
  return (
    <div className="faqs-parent">
      <div className="faqs-section1">
        <h1>Frequently Asked Questions...</h1>
        <div className="faqs-questions">
          <p>1) Why can't I find Palace Radio when I tune to 1278am? </p>

          <p>2) How do I listen to Palace Radio on-line? </p>

          <p>
            3) Does Palace Radio have vacancies for staff? Can I do work
            experience at Palace Radio?{" "}
          </p>

          <p>4) How is Palace Radio funded? </p>

          <p>5) Can I sponsor the station? </p>

          <p>6) Can I air my views on the Palace Radio website? </p>

          <p>7) Why do the presenters sometimes sound so negative? </p>

          <p>8) Can you read a dedication or play a song for me?</p>
        </div>

        <div className="faqs-section2">
          <h1>...And The Answers</h1>
          {faqsAnswerd.map((value, index) => (
            <div className="faqs-answers" key={index}>
              <h3> {value.Q}</h3>
              <div className="faqs-item-sub">
                {!value.img ? (
                  ""
                ) : (
                  <Image
                    src={value.img}
                    width={150}
                    height={110}
                    alt={value.Q}
                  />
                )}
                <p dangerouslySetInnerHTML={{ __html: value.A }}></p>
              </div>
            </div>
          ))}
          <h1>Got Another Question?</h1>
          <p>
            a) Please do get in touch with us if you have more questions about
            Palace Radio. We aim to reply personally to all enquiries received.
            See our <Link href="/contactus"> contacts page </Link> for full
            details.
          </p>
        </div>
      </div>{" "}
    </div>
  );
};
const Page = ({}) => {
  const btmPara = `Keeley tells another story on the Breakfast Show.`;
  const sfPara = `Call 020 8653 5796, text 079 100 60 919, or e-mail studio@palaceradio.net throughout the day with your views`;
  const sfH3 = `Reaction to the Action:`;
  const sfTitle = `Get On-Air`;
  return (
    <Hero
      btmImg={"/5.jpg"}
      btmPara={btmPara}
      sfPara={sfPara}
      sfH3={sfH3}
      center={<Center />}
      sfTitle={sfTitle}
    />
  );
};

export default Page;
