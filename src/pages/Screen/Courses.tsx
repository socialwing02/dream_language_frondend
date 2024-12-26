
import React from "react";
import stttst from "../../assets/images/evaluate.jpg";
import { Button } from "@/components/ui/Button";

// Define the type for the card data
type CardData = {
  id: number;
  name: string;
  description: string;
  image: string;
};

export default function Courses() {
  // Sample data for the cards
  const cardData: CardData[] = [
    {
      id: 1,
      name: "Jane Doe",
      description:
        " Interior Designer It seems you're using a custom InputFieldcomponent with React. Make your business shine online with a customcourse website designed just for you by a professional designer.Need ideas? We’ve collected some amazing examples of course websitesfrom our global community of designers. Get inspired and startplanning the perfect course web design today. While the code looksmostly correct, there are a few observations and improvements thatyou can consider:",
      image: stttst,
    },
    {
      id: 2,
      name: "John Smith",
      description:
        "Web Developer. Get inspired and start planning the perfect course web design today with our curated templates.",
      image: stttst,
    },
    {
      id: 3,
      name: "Alice Johnson",
      description:
        "Graphic Designer. Explore unique design strategies to bring your ideas to life with expert guidance.",
      image: stttst,
    },
  ];

  return (
    <div className="md:flex-col md:max-w-full flex-wrap justify-center">
      {cardData.map((card) => (
        <Card key={card.id} card={card} />
      ))}
    </div>
  );
}

type CardProps = {
  card: CardData;
};

export function Card({ card }: CardProps) {
  return (
    <div className="m-4 md:flex max-h-full max-w-[1700px] rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
      <img
        src={card.image}
        alt={card.name}
        className=" h-[200px] object-cover rounded-t-lg"
      />
      <div className="p-4">
        <h4 className="font-bold text-lg mb-2">{card.name}</h4>
        <p className="text-gray-700 md:max-w-full">{card.description}</p>
        <Button className="mt-4 bg-blue-500 text-white hover:bg-blue-700">
          Get Started for Free
        </Button>
      </div>
    </div>
  );
}
