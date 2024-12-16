import { cardData, CardType } from "@/constants/data";
import Img from "../../assets/images/english.png";
import { motion } from "framer-motion";
import { fadeIn, staggerChild, staggerParent } from "@/utils/variant";

export default function HomeDifferent() {
  return (
    <div className=" bg-[rgba(31,31,31,255)] text-white py-10 px-4 overflow-hidden">
      <div className="flex flex-col md:flex-row items-center gap-6 justify-between py-12 px-8">
        <motion.h1
          className="text-[clamp(1.5rem,2.7vw,5rem)]"
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          Why we are different <br />
          from other
        </motion.h1>
        <motion.p
          className="w-[min(60ch,90vw)] text-pretty"
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime
          consequuntur animi optio fugit officiis dolorum tempore ea delectus
        </motion.p>
      </div>

      <div className="flex flex-col-reverse md:flex-row gap-4 items-center  md:justify-around">
        <motion.div
          className="md:grid grid-cols-2 gap-2"
          variants={staggerParent()}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {cardData.map((item) => (
            <Card key={item.title} item={item} />
          ))}
        </motion.div>
        <motion.img
          variants={fadeIn("right", 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          src={Img}
          alt=""
          className="w-[420px] aspect-[1] rounded-lg"
          loading="lazy"
        />
      </div>
    </div>
  );
}

function Card({ item }: { item: CardType }) {
  return (
    <motion.div className=" p-4 mt-4" variants={staggerChild()}>
      <h4 className="text-xl font-semibold">{item.title}</h4>
      <p>{item.content}</p>
    </motion.div>
  );
}
