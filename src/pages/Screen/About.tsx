import { motion } from "framer-motion";
import OurValues from "../About/OurValues";
import whyus from "@/assets/images/home/visionImg2.webp";
import { fadeIn } from "@/utils/variant";

function About() {
  return (
    <>
      <motion.div
        className="grid gap-4 place-content-center text-center py-10"
        variants={fadeIn("up", 0.2)}
        viewport={{ once: true }}
        initial="hidden"
        whileInView="show"
      >
        <h1 className="text-5xl text-[#ac8dca] ">Our Story</h1>
        <h5 className="text-2xl">A tale of tech brilliance and growth</h5>
      </motion.div>
      <div className="container  px-4 py-4 mx-auto gap-6 md:gap-10 flex flex-col lg:flex-row justify-center items-center ">
        <motion.div
          variants={fadeIn("left", 0.2)}
          viewport={{ once: true }}
          initial="hidden"
          whileInView="show"
        >
          <img
            className="h-auto w-100 rounded-lg lg:w-[500px]	"
            src={whyus}
            loading="lazy"
          />
        </motion.div>
        <motion.div
          className=" py-9 lg:w-[600px]"
          variants={fadeIn("right", 0.2)}
          viewport={{ once: true }}
          initial="hidden"
          whileInView="show"
        >
          <h1 className="text-3xl font-bold text-left text-[#853cc9]">
            We believe in
          </h1>
          <p className="m-2">
            About us. Established in 1947, our language school has continuously
            enhanced its methodology and efficiency, and has become a renowned
            partner for those who want to improve their English language skills
            in a fast and reliable way. <br />
            <br />
            br About us. Established in 1947, our language school has
            continuously enhanced improve their English language skills in a
            fast and reliable way. br About us. Established in 1947, our
            language school has continuously enhanced improve their English
            language skills in a fast and reliable way.
          </p>
        </motion.div>
      </div>

      <OurValues />

      <div className="container px-4  mx-auto md:gap-12 gap-6 flex flex-col-reverse lg:flex-row justify-center items-center py-[3rem]">
        <motion.div
          className="py-9 lg:w-[600px]"
          variants={fadeIn("left", 0.2)}
          viewport={{ once: true }}
          initial="hidden"
          whileInView="show"
        >
          <h1 className="text-[clamp(2rem,2.8vw,7rem)] text-pretty">
            Why choose us ?
          </h1>
          <p className="m-2">
            About us. Established in 1947, our language school has continuously
            enhanced its methodology and efficiency, and has become a renowned
            partner for those who want to improve their English language skills
            in a fast and reliable way.
            <br />
            <br />
            About us. Established in 1947, our language school has continuously
            enhanced its methodology and efficiency, and has become a renowned
            partner for those who want to improve their English language skills
            in a fast and reliable way.
          </p>
        </motion.div>
        <motion.div
          variants={fadeIn("right", 0.2)}
          viewport={{ once: true }}
          initial="hidden"
          whileInView="show"
        >
          <img
            className=" aspect-[1] object-cover w-[500px]  rounded-lg"
            src={whyus}
          />
        </motion.div>
      </div>
    </>
  );
}
export default About;
