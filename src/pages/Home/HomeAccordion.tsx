import ManualAccordion from "@/components/ManualAccordion";
import teachingImg from "../../assets/images/teaching.jpg";
import { Accordion } from "@/components/ui/Accordion";
import { accordionContents,accordionContents2, AccordionProps } from "@/constants/data";
import { motion } from "framer-motion";
import { fadeIn } from "@/utils/variant";
import clsx from "clsx";


export default function HomeAccordion() {
  return (

<>



<section className=" grid place-content-center gap-12 md:gap-16mt-[10rem] my-8 px-6 overflow-hidden">

      <AccordionSection data={accordionContents} title="How We Make Learning Easy" />
      <AccordionSection data={accordionContents2} reverse={true} title="Simple Ways to Make Learning Effortless"/>
    </section>
</>

   
  );
}

type Props = {
  data: AccordionProps[];
  reverse?: boolean;
  title:string
};


function AccordionSection({ data, reverse = false ,title}: Props) {
  const rowReverse = reverse ? "flex-row-reverse" : "flex-row";

  console.log(rowReverse);

  const fadeImg = reverse ? "right" : "left";
  const fadeContent = reverse ? "left" : "right";

  return (

<div
      className={clsx(
        "flex flex-col md:justify-around md:items-center py-5 gap-8",
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
        className="rounded-lg w-[370px] aspect-[1] mt-16 object-cover"
        loading="lazy"
      />

      
      <motion.article
        className="w-[min(450px,90vw)] "
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
