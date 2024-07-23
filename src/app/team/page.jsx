import Hero from "@/components/hero/hero";
import "./team.scss";
import Link from "next/link";
import Image from "next/image";

const data = [
  {
    img: "/team1.jpg",
    title: "Meet The Palace Radio Team",
    para: "Ever wondered what the Palace Radio team looked like? Well here to feed your curiosity is some information and mugshots of our show teams and backroom staff! <br/> <br/> Those of a nervous disposition should click away now.",
  },

  {
    title: "The Commentary Team",
    para: "Darryl Murdoch and Eamonn Marren, commentators extraordinaire - like the greatest poets they paint you a verbal picture of the match action.",
  },

  {
    img: "/team2.jpg",
    title: "Big Match Countdown",
    para: "Does exactly what it says on the tin - a whole hour of post match reaction dedicated to Crystal Palace FC. <br/> <br/> It is your views that make this show so call, text, e-mail & Tweet and join in the ever lively debate with Bill Relyea & Chris Green.<br/> <br/>Plus hear exclusive live coverage of the post match managers' press conference and player reaction to the day's result. ",
  },
  {
    img: "/team3.jpg",
    title: "The Old One-Two",
    para: "James O'Reilly, Ian Hart and Keith Jeffcoat lead the discussion on all things Palace. Featuring the return of Milky's away day diaries, Gary Jones youth report and taking your calls throughout the show.",
  },
  {
    img: "/team4.jpg",
    title: "Back Stage Area",
    para: "Palace Radio couldn't broadcast without a few extra special people working incredibly hard behind the scenes. <br/> <br/>Station Engineer, Trevor Smith makes everything work using just coat hangers, sticky backed plastic and the odd empty toilet roll tube.<br/><br/>Station Manager, Jerry Clark begs, steals and borrows to get Trevor his bits and bobs, says nice things to our sponsors, and tries to make sure everybody arrives on time for their shows.",
  },
];

const Center = () => {
  return (
    <div className="team-parent">
      {data.map((value, index) => (
        <div className="team-container" key={index}>
          <h1>{value.title}</h1>
          <div className="team-item-sub">
            {!value.img ? (
              ""
            ) : (
              <Image
                src={value.img}
                width={150}
                height={110}
                alt={value.title}
              />
            )}
            <p dangerouslySetInnerHTML={{ __html: value.para }}></p>
          </div>
        </div>
      ))}
    </div>
  );
};
const Page = ({}) => {
  const btmPara = `Chris Dixon gets excited during the match build-up at Selhurst Park.`;
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
