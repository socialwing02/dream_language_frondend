import Navbar from "@/components/Navbar";
import "../../index.css";
import { Button } from "@/components/ui/Button";
import heroImg from "@/assets/images/bg-img.jpg";
import { motion } from "framer-motion";
import { staggerChild, staggerParent } from "@/utils/variant";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden">
      <img
        src={heroImg}
        alt=""
        className="w-full h-full absolute object-cover"
        loading="lazy"
      />

      <motion.div
        className="absolute inset-0 m-auto text-white grid justify-items-center gap-4 h-[14rem]"
        variants={staggerParent()}
        initial="initial"
        animate="animate"
      >
        <motion.h2
          className="text-[clamp(2rem,2.3vw,5rem)]"
          variants={staggerChild()}
        >
          Learn English Academy
        </motion.h2>
        <motion.p
          className="text-center text-xl w-[min(60ch,90vw)]"
          variants={staggerChild()}
        >
          Enhance your communication skills with our expert-led English courses.
          Whether you're a beginner or looking to perfect your fluency, we
          provide the tools to help you succeed
        </motion.p>
        <motion.div variants={staggerChild()}>
          <Button className="bg-white text-black hover:bg-gray-950 hover:text-white">
            Start with us
          </Button>
        </motion.div>
      </motion.div>

      <div className="absolute top-0 w-full">
        <Navbar className="bg-transparent text-white" />
      </div>
    </section>
  );
}
