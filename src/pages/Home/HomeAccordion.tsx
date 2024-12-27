import ManualAccordion from "@/components/ManualAccordion";
import teachingImg from "../../assets/images/home/evaluate.jpg";
import { Accordion } from "@/components/ui/Accordion";
import {
  accordionContents,
  accordionContents2,
  AccordionProps,
} from "@/constants/data";
import { motion } from "framer-motion";
import { fadeIn } from "@/utils/variant";
import clsx from "clsx";

export default function HomeAccordion() {
  return (
    <>
      <section className="flex flex-col  overflow-hidden">
        <AccordionSection
          data={accordionContents}
          title="How We Make Learning Easy"
        />
        <AccordionSection
          data={accordionContents2}
          reverse={true}
          title="Simple Ways to Make Learning Effortless"
        />
      </section>
    </>
  );
}

type Props = {
  data: AccordionProps[];
  reverse?: boolean;
  title: string;
};

function AccordionSection({ data, reverse = false, title }: Props) {
  const rowReverse = reverse ? "flex-row-reverse" : "flex-row";

  console.log(rowReverse);

  const fadeImg = reverse ? "right" : "left";
  const fadeContent = reverse ? "left" : "right";

  return (
    <div
      className={clsx(
        "flex flex-col md:justify-center gap-16 py-[3rem] ",
        reverse ? "md:flex-row-reverse" : "md:flex-row"
      )}
    >
      <motion.img
        src={teachingImg}
        variants={fadeIn(fadeImg, 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        alt=""
        className="rounded-lg w-[500px] aspect-[1]  object-cover"
        loading="lazy"
      />

      <motion.article
        className="w-[min(600px,90vw)] "
        variants={fadeIn(fadeContent, 0.2)}
        viewport={{ once: true }}
        initial="hidden"
        whileInView="show"
      >
        <h1 className="text-4xl py-7">{title}</h1>

        <Accordion type="single" collapsible>
          {data.map((item) => (
            <ManualAccordion
              key={item.title}
              title={item.title}
              content={item.content}
            />
          ))}
        </Accordion>
      </motion.article>
    </div>
  );
}
