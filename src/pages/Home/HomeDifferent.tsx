import { cardData, CardType } from "@/constants/data";
import Img from "../../assets/images/home/english.png";
import { motion } from "framer-motion";

export default function HomeDifferent() {
  return (
    <div className=" bg-[rgba(31,31,31,255)] text-white py-10 px-4 overflow-hidden">
      <div className="flex flex-col md:flex-row items-center gap-6 justify-between py-12 px-8">
        <motion.h1 className="text-[clamp(1.5rem,2.7vw,5rem)]">
          Why we are different <br />
          from other
        </motion.h1>
        <motion.p className="w-[min(60ch,90vw)] text-pretty">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime
          consequuntur animi optio fugit officiis dolorum tempore ea delectus
        </motion.p>
      </div>

      <div className="flex flex-col-reverse md:flex-row gap-4 items-center  md:justify-around">
        <motion.div className="md:grid grid-cols-2 gap-2">
          {cardData.map((item) => (
            <Card key={item.title} item={item} />
          ))}
        </motion.div>
        <motion.img
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
    <motion.div className=" p-4 mt-4">
      <h4 className="text-xl font-semibold">{item.title}</h4>
      <p>{item.content}</p>
    </motion.div>
  );
}
