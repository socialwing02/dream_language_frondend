import { Button } from "@/components/ui/Button";
import evaluateImg from "../../assets/images/evaluate.jpg";
import { motion } from "framer-motion";
import { fadeIn, staggerChild, staggerParent } from "@/utils/variant";

export default function HomeEvaluate() {
  return (
    <div className="container my-10 mx-auto  ">
      <h1 className="py-[2rem] text-[clamp(2.5rem,2vw,5rem)] text-pretty pl-16">
        Grow Up You learn Skill
      </h1>
      <section className="flex flex-col-reverse lg:flex-row justify-center items-center gap-8  ">
        {/* content */}
        <motion.article
          className=" grid gap-6 "
          variants={staggerParent()}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <motion.p
            className="w-[min(50ch,90vw)]  text-lg leading-8 justify-self-center"
            viewport={{ once: true }}
            variants={fadeIn("left", 0.2)}
            initial="hidden"
            whileInView="show"
          >
            Step into an English academy and unlock your potential, Mastering
            language skills essential and instrumental. Build confidence to
            speak, write, and thrive, Achieve your dreams and see your goals
            come alive!
          </motion.p>

          <motion.div
            className="flex gap-5 items-center justify-center lg:justify-start"
            variants={staggerChild()}
            viewport={{ once: true }}
          >
            <Button>Get Started</Button>
            <Button variant="ghost">Evaluate Us</Button>
          </motion.div>

          <div className="flex justify-around flex-wrap gap-4 mt-[1.5rem]">
            <motion.div
              className="grid"
              variants={staggerChild()}
              viewport={{ once: true }}
            >
              <span className="justify-self-center font-bold">20k +</span>
              <p>Total courses</p>
            </motion.div>
            <motion.div
              className="grid"
              variants={staggerChild()}
              viewport={{ once: true }}
            >
              <span className="justify-self-center font-bold">200k +</span>
              <p>Happy Students</p>
            </motion.div>
            <motion.div
              className="grid"
              variants={staggerChild()}
              viewport={{ once: true }}
            >
              <span className="justify-self-center font-bold">500 +</span>
              <p>Expert Teachers</p>
            </motion.div>
          </div>
        </motion.article>
        {/* image */}
        <div className="w-[min(450px,90vw)] relative">
          <motion.img
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            src={evaluateImg}
            alt=""
            className=" object-cover aspect-[1] rounded-lg"
            loading="lazy"
          />
          <motion.span
            className="shadow-custom bg-white px-3 lg:px-6 py-2 rounded-md  absolute top-8 ml-[-1rem] lg:ml-[-4rem] font-medium"
            variants={fadeIn("left", 0.3)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            New course <br />
            available
          </motion.span>
          <motion.span
            className="shadow-custom bg-white px-2 py-[0.6rem] rounded-md absolute bottom-8 right-0 mr-[-1rem] lg:mr-[-4rem] text-center font-medium"
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            100% <br />
            Student success
          </motion.span>
        </div>
      </section>
    </div>
  );
}
