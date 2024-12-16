import ManualAccordion from "@/components/ManualAccordion";
import teachingImg from "../../assets/images/teaching.jpg";
import { Accordion } from "@/components/ui/Accordion";
import { accordionContents, AccordionProps } from "@/constants/data";
import { motion } from "framer-motion";
import { fadeIn } from "@/utils/variant";
import clsx from "clsx";

export default function HomeAccordion() {
  return (
    <section className=" grid place-content-center gap-12 md:gap-16 mt-[10rem] my-8 px-6 overflow-hidden">
      <AccordionSection data={accordionContents} />
      <AccordionSection data={accordionContents} reverse={true} />
    </section>
  );
}

type Props = {
  data: AccordionProps[];
  reverse?: boolean;
};

function AccordionSection({ data, reverse = false }: Props) {
  const rowReverse = reverse ? "flex-row-reverse" : "flex-row";

  console.log(rowReverse);

  const fadeImg = reverse ? "right" : "left";
  const fadeContent = reverse ? "left" : "right";

  return (
    <div
      className={clsx(
        "flex flex-col md:justify-around gap-8",
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
        className="rounded-lg w-[370px] aspect-[1] object-cover"
        loading="lazy"
      />
      <motion.article
        className="w-[min(450px,90vw)] md:pt-[5rem]"
        variants={fadeIn(fadeContent, 0.2)}
        viewport={{ once: true }}
        initial="hidden"
        whileInView="show"
      >
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
