import Navbar from "@/components/Navbar";
import "../../index.css";
import { Button } from "@/components/ui/Button";
import heroImg from "@/assets/images/colord.png";
import { motion } from "framer-motion";
import { staggerChild, staggerParent } from "@/utils/variant";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden">
      <img
        src={heroImg}
        alt="Hero Background"
        className="w-full h-screen object-cover"
        loading="lazy"
      />

      <motion.div
        className="absolute inset-0 m-auto px-4 sm:px-8 md:px-12 lg:px-20 flex flex-col justify-center items-start text-white"
        variants={staggerParent()}
        initial="initial"
        animate="animate"
      >
        <motion.h2
          className="text-black font-sans md:font-serif text-3xl md:text-5xl py-4 font-bold"
          variants={staggerChild()}
        >
          UNLOCK YOUR POTENTIAL <br />
          <span className="py-2 block">WITH FLUENT ENGLISH!</span>
        </motion.h2>

        <p className="text-black text-sm  sm:text-base w-[36ch] md:text-lg lg:text-xl max-w-[600px] mb-6">
          Unlock your potential with DREAM LANGUAGE ACADEMY! Whether you're
          starting fresh or refining your skills, we provide tailored courses
          for all levels. Master grammar, communication, and public speaking
          with expert instructors.
        </p>

        <div className="flex flex-wrap gap-6 mb-8">
          <motion.div
            className="grid text-center"
            variants={staggerChild()}
            viewport={{ once: true }}
          >
            <span className="text-black text-xl font-bold">20 +</span>
            <p className="text-black text-sm font-light">Total courses</p>
          </motion.div>
          <motion.div
            className="grid text-center"
            variants={staggerChild()}
            viewport={{ once: true }}
          >
            <span className="text-black text-xl font-bold">11k +</span>
            <p className="text-black text-sm font-light">Happy Students</p>
          </motion.div>
          <motion.div
            className="grid text-center"
            variants={staggerChild()}
            viewport={{ once: true }}
          >
            <span className="text-black text-xl font-bold">45 +</span>
            <p className="text-black text-sm font-light">Expert Teachers</p>
          </motion.div>
        </div>

        <motion.div
          className="mt-4"
          variants={staggerChild()}
        >
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
