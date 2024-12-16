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

export const navlist = [
  { name: "Home", link: "/" },
  { name: "Courses", link: "course" },
  { name: "About", link: "about" },
  { name: "Contact", link: "contact" },
];

export const accordionContents: AccordionProps[] = [
  { title: "some title1", content: "some description" },
  { title: "some title2", content: "some description" },
  { title: "some title3", content: "some description" },
];

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
      "Acknowledge the importance of time as a precious resource, optimizing efficiency and effectiveness in all endeavours. ",
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
      "In every project and initiative, we strive for unity, recognizing that our collective strength propels us towards success. ",
  },
  {
    icon: Vote,
    title: "Social Responsibility",
    content:
      "Beyond our daily operations, we dedicate ourselves to creating meaningful change in society through philanthropy, environmental initiatives, educational programs, and community engagement.",
  },
];
