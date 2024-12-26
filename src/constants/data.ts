// types

export type CardType = {
  title: string;
  content: string;
};

export type AccordionProps = {
  title: string;
  content: string;
};


export type ValueCardType = {
  icon: React.FC<LucideProps>;
  title: string;
  content: string;
};
export type imageCardType = {

  image: string;
  head:string;
  content:string;
}

export const navlist = [
  { name: "Home", link: "/" },
  { name: "Courses", link: "course" },
  { name: "About", link: "about" },
  { name: "Contact", link: "contact" },
];


export const accordionContents: AccordionProps[] = [
  { title: "Expert Guidance", content: "Learn from experienced and certified instructors who understand your needs.Personalized attention to address individual learning challenges." },
  { title: "Tailored Curriculum", content: "Courses designed to match your learning pace and goals.Customized study plans for every learner." },
  { title: " Engaging Lessons", content: "Interactive classes with real-life examples, role-playing, and storytelling.Fun activities like games, quizzes, and group discussions to keep you motivated." },
  
];
export const accordionContents2:AccordionProps[]=[

  { title: "Master Time Management for Effective Learning",content: " Learn how to prioritize tasks and allocate time for each subject to avoid cramming and reduce stress."},
  {title: "Use Visual Aids to Boost Memory Retention", content: " Discover how diagrams, charts, and mind maps can help you visualize concepts and make learning more memorable."},
  {title: "Create a Learning Environment That Inspires Focus",content:" Explore how the right study space can enhance concentration and improve your overall learning experience."}
]

export const cardData: CardType[] = [
  { title: "Best Teachers", content: "highly effectively experienced teacher" },
  {
    title: "1 to 1 Support ",
    content: "highly effectively experienced teacher",
  },
  {
    title: "Best Curriculum",
    content: "highly effectively experienced teacher",
  },
  {
    title: "2k+ Courses",
    content: "highly effectively experienced teacher",
  },
];
import {
  AppWindow,
  ChartCandlestick,
  Contact,
  HandHeart,
  LucideProps,
  Ribbon,
  Vote,
} from "lucide-react";
import React from "react";
export const values: ValueCardType[] = [
  {
    icon: ChartCandlestick,
    title: "Customer Experience Matters",
    content:
      "We believe that every interaction with our customers is an opportunity to transcend expectations, deliver exceptional solutions, and forge enduring partnerships. ",
  },
  {
    icon: HandHeart,
    title: "Work-Life Balance ",
    content:
      "Encourage a healthy balance between work and personal life, recognizing that employee well-being is essential for sustained creativity and productivity. ",
  },
  {
    icon: Ribbon,
    title: "Value Time as Currency",
    content:
      "Acknowledge the importance of time as a precious resource, optimizing efficiency and effectiveness in all endeavors. ",
  },
  {
    icon: Contact,
    title: "Celebrate Success",
    content:
      "Acknowledge and celebrate individual and team achievements, creating a positive and motivating atmosphere. ",
  },
  {
    icon: AppWindow,
    title: "Unity in Every Endeavor",
    content:
      "In every project and initiative, we strive for unity, recognizing that our collective strength propels us towards success . ",
  },
  {
    icon: Vote,
    title: "Social Responsibility",
    content:
      "Beyond our daily operations, we dedicate ourselves to creating meaningful change in society through philanthropy, environmental initiatives, educational programs, and community engagement.",
  },
];


import photo from '../assets/images/eng.png';

export const cardData2: imageCardType[] = [

{image:photo,content:"dvvdvdvdv",head:"dvvdvdvdv"},

]