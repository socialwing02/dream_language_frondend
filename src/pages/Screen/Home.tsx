import Hero from "../Home/Hero";
import HomeAccordion from "../Home/HomeAccordion";
import HomeDifferent from "../Home/HomeDifferent";
import HomeEvaluate from "../Home/HomeEvaluate";

export default function Home() {
  return (
    <div className="overflow-hidden">
      <Hero />
      <HomeEvaluate />
      <HomeAccordion />
      <HomeDifferent />
    </div>
  );
}
