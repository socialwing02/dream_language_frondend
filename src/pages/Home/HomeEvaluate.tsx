import { Button } from "@/components/ui/Button";
import evaluateImg from "../../assets/images/home/evaluate.jpg";
import { motion } from "framer-motion";
import { fadeIn, staggerChild, staggerParent } from "@/utils/variant";
import { Link } from "react-router-dom";

export default function HomeEvaluate() {
  return (
    <div className="bg-gradient-to-r from-white to-purple-100 w-full py-16 ">
      <h1 className="py-[2rem] text-[clamp(2.5rem,2vw,5rem)] text-pretty pl-16">
        Why Choose DREAM LANGUAGE ACADEMY?
      </h1>
      <section className="flex flex-col-reverse lg:flex-row justify-center items-center gap-16  ">
        {/* content */}
        <motion.article
          className=" grid gap-6 "
          variants={staggerParent()}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <motion.ul
            className="w-[min(50ch,90vw)] grid gap-2  text-lg leading-8  justify-self-center"
            viewport={{ once: true }}
            variants={fadeIn("left", 0.2)}
            initial="hidden"
            whileInView="show"
          >
            <li className="list-disc">
              <span className="font-semibold">Expert Instructors : </span> Learn
              from certified professionals..
            </li>
            <li className="list-disc">
              <span className="font-semibold"> Tailored Courses : </span>
              Programs designed to match your learning pace and goals.
            </li>
            <li className="list-disc">
              <span className="font-semibold">Interactive Learning : </span>
              Engaging lessons with practical exercises and activities.
            </li>
            <li className="list-disc">
              <span className="font-semibold">Flexible Scheduling : </span>
              Study at your convenience with customizable timings.
            </li>
            <li className="list-disc">
              <span className="font-semibold"> Proven Results : </span>
              Trusted by thousands of students worldwide for success.
            </li>
          </motion.ul>

          <motion.div
            className="flex gap-5 items-center justify-center lg:justify-start"
            variants={staggerChild()}
            viewport={{ once: true }}
          >
            <Button className="bg-violet-900  text-white hover:bg-violet-600 hover:text-black">
              <Link to={"contact"}>Get Started</Link>
            </Button>
            <Button
              className="bg-violet-900  text-white hover:bg-violet-600 hover:text-black"
              variant="ghost"
            >
              <a
                href={`https://wa.me/7845777082`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                Evaluate Us
              </a>
            </Button>
          </motion.div>
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
