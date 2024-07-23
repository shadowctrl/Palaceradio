import Hero from "@/components/hero/hero";
import "./shows.scss";
import Link from "next/link";
import Image from "next/image";

const shows = [
  {
    img: "/shows1.jpg",
    title: "Saturday Show Schedule",
    desc: `When Crystal Palace FC play a home fixture kicking off at 3pm the following shows will be broadcast. <br/> <br/>
    <span>Midnight-9am:</span> Non-stop Music Mix
    `,
    para: `<span>9am-10am:  </span>The Golden Hour <br/><br/>
    <span>11am-12noon: </span> Palace Radio Brunch with Chris Humphris, Rebecca Prout and Andreas G. Wood <br/><br/>
    <span> 12noon-1pm:</span> The Palace Radio News Hour with John Burgess, James Daly & Ian King <br/><br/>
    <span>1pm-2pm:</span> The Old One Two with James O'Reilly, Ian Hart & Keith Jeffcoat <br/><br/>
    <span>2pm-3pm:</span> Big Match Countdown: Team News with Clive Bowden, Nick Macdonald, & Trevor Hayes <br/><br/>
    <span> 3pm-5pm: </span> The Big Match Live Full Commentary from Eamonn Marren & Darryl Murdoch <br/><br/>
    <span> 5pm-6pm:</span>  Reaction to the Action with Bill Relyea & Chris Green<br/><br/>
    <span>6pm-7pm:</span> The Golden Hour <br/><br/>

<span>7pm-Midnight:</span> Non-Stop Music Mix
    `,
  },
  {
    img: "/shows2.jpg",
    title: "Midweek Show Schedule",
    desc: "When Crystal Palace FC play a home fixture kicking off at 7:45pm/8pm the following shows will be broadcast. <br/> <br/>",
    para: `
    <span> Midnight - 3pm:</span> Non-Stop Music Mix<br/><br/>

<span> 3pm-4pm:</span> The Golden Hour<br/><br/>

<span> 4pm-6pm:</span> The Eagles Drive-Time<br/><br/>

<span> 6pm-7pm:</span> The Palace Radio News Hour with John Burgess, James Daly & Ian King<br/><br/>

<span> 7pm-8pm:</span> Big Match Countdown: Team News with Clive Bowden, Nick Macdonald, & Trevor Hayes<br/><br/>

<span> 8pm-10pm:</span> The Big Match Live Full Commentary from Eamonn Marren & Darryl Murdoch<br/><br/>

<span> 10pm-11pm:</span> Reaction to the Action with Bill Relyea & Chris Green<br/><br/>

<span>11pm-Midnight: </span>Non-Stop Music Mix<br/><br/>
    `,
  },
];
const Center = () => {
  return (
    <div className="shows-parent">
      {shows.map((value, index) => (
        <div className="shows-container" key={index}>
          <div className="shows-item-head">
            <h1>{value.title}</h1>
            <p dangerouslySetInnerHTML={{ __html: value.desc }}></p>
          </div>
          <div className="shows-item-container">
            <Image src={value.img} width={110} height={150} />
            <div>
              <p dangerouslySetInnerHTML={{ __html: value.para }}></p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

const Page = ({}) => {
  const btmPara = `Rebecca Prout on the Late and Lazy Breakfast Show on Palace Radio.`;
  const sfPara = `Call 020 8653 5796, text 079 100 60 919, Tweet @palaceradio or e-mail studio@palaceradio.net throughout the day with your views.`;
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
      shows={true}
    />
  );
};

export default Page;
