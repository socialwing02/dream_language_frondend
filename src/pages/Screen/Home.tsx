import Hero from "../Home/Hero";
import HomeAccordion from "../Home/HomeAccordion";
import HomeDifferent from "../Home/HomeDifferent";
import HomeEvaluate from "../Home/HomeEvaluate";
import Testimonial from "../Home/Testimonial";
import Vision from "../Home/Vision";

export default function Home() {
  return (
    <div className="overflow-hidden">
      <Hero />
      <Vision />
      <HomeEvaluate />
      <HomeAccordion />
      <HomeDifferent />
      <Testimonial />
    </div>
  );
}
