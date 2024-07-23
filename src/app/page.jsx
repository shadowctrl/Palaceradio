import Hero from "@/components/hero/hero";

const sfPara = `Saturday 14th March 2015. Barclays Premier League: Crystal Palace vs QPR. Kick off is 12:45pm, shows start at 11am. AVAILABLE VIA THIS WEBSITE, PALACE PLAYER & EAGLES RBS APP.`;
const sfH3 = "2024/2025:";
const btmPara = `John Burgess, James Daly and Ian King bring you the Palace Radio news each matchday.`;
const Page = ({}) => {
  return (
    <Hero btmImg={"/1.jpg"} btmPara={btmPara} sfPara={sfPara} sfH3={sfH3} />
  );
};

export default Page;
