import Navbar from "@/components/Navbar";
import "../../index.css";
import { Button } from "@/components/ui/Button";
import heroImg from "@/assets/images/bg-img.jpg";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { staggerChild, staggerParent } from "@/utils/variant";

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollY } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollY, [0, 100, 200, 300], [0, 100, 150, 200]);
  const opacity = useTransform(scrollY, [0, 100, 180, 300], [1, 0.4, 0.6, 0]);
  const scale = useTransform(scrollY, [0, 50, 100, 180], [1, 1.2, 1.3, 1.3]);

  return (
    <section className="relative min-h-screen overflow-hidden" ref={ref}>
      <img
        src={heroImg}
        alt=""
        className="w-full h-full absolute object-cover"
      />

      <motion.div
        style={{ y, opacity, scale }}
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
