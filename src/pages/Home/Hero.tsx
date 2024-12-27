import Navbar from "@/components/Navbar";
import "../../index.css";
import { Button } from "@/components/ui/Button";
import heroImgLarge from "@/assets/images/home/bg-large.webp";
import heroImgMedium from "@/assets/images/home/bg-medium.webp";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { fadeIn } from "@/utils/variant";

export default function Hero() {
  return (
    <section className="relative min-h-[120vh] overflow-hidden">
      <img
        src={heroImgMedium} // Fallback image for browsers that don't support srcSet
        alt="Hero Background"
        className="w-full h-[120vh] object-cover"
        loading="lazy"
        srcSet={`${heroImgMedium} 640w, ${heroImgLarge} 1024w`}
        sizes="(max-width: 640px) 50vw, (min-width: 641px) 100vw"
      />

      <motion.div
        variants={fadeIn("left", 0.3)}
        initial="hidden"
        whileInView="show"
        className="absolute inset-0 sm:pl-[7rem] w-[min(900px,90vw)] mx-4 flex flex-col justify-center text-white"
      >
        <motion.h2 className="text-black font-sans md:font-serif text-[clamp(2rem,2.4vw,4rem)] font-bold">
          UNLOCK YOUR POTENTIAL <br />
          <span className="py-2 block">WITH FLUENT ENGLISH!</span>
        </motion.h2>

        <p className="text-black w-[min(60ch,90vw)] text-pretty mb-6">
          Unlock your potential with DREAM LANGUAGE ACADEMY! Whether you're
          starting fresh or refining your skills, we provide tailored courses
          for all levels. Master grammar, communication, and public speaking
          with expert instructors.
        </p>

        <div className="flex flex-wrap gap-6 mb-2">
          <motion.div className="grid text-center">
            <span className="text-black text-xl font-bold">20 +</span>
            <p className="text-black text-sm font-light">Total courses</p>
          </motion.div>
          <motion.div className="grid text-center">
            <span className="text-black text-xl font-bold">11k +</span>
            <p className="text-black text-sm font-light">Happy Students</p>
          </motion.div>
          <motion.div className="grid text-center">
            <span className="text-black text-xl font-bold">45 +</span>
            <p className="text-black text-sm font-light">Expert Teachers</p>
          </motion.div>
        </div>

        <motion.div className="mt-4">
          <Button className="bg-[#67309c] text-white hover:bg-[#bc87ee] hover:text-white px-6 py-3 rounded-lg">
            <Link to={"contact"}>Start Learning Today</Link>
          </Button>
        </motion.div>
      </motion.div>

      <div className="absolute top-0 w-full">
        <Navbar className="bg-transparent text-white" />
      </div>
    </section>
  );
}
